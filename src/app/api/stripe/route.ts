import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

const settingUrl=process.env.NEXTAUTH_URL+"/settings"

export async function GET(){
    try{
        const session=await getAuthSession();
        if(!session?.user){
            return new NextResponse("unauthorized",{status:401})
        }
        //cancel at billing portal
        const userSubscription = await prisma.userSubscription.findUnique({
            where: {
              userId: session.user.id,
            },
          });
          
        if(userSubscription && userSubscription.stripeCustomerId){
            const stripeSession=await stripe.billingPortal.sessions.create({
                customer:userSubscription.stripeCustomerId,
                return_url:settingUrl
            })
            return NextResponse.json({url:stripeSession.url})
        }
        //first time subscribing
        const stripeSession=await stripe.checkout.sessions.create({
            success_url:settingUrl,
            cancel_url:settingUrl,
            payment_method_types:['card'],
            mode:"subscription",
            billing_address_collection:"auto",
            customer_email:session?.user.email ?? '',
            line_items:[
                {
                    price_data:{
                        currency:"INR",
                        product_data:{
                            name:"FDemy-Journey-Pro",
                            description:"Unlimited Course Generation"
                        },
                        unit_amount:100000,
                        recurring:{
                            interval:"month",
                        }
                    },
                    quantity:1,
                }
            ],
            metadata:{
                userId:session.user.id,
            },
        })
        return NextResponse.json({url:stripeSession.url})
    }
    catch(error){
        console.log("STRIPE_ERROR= ",error);
        return NextResponse.json("internal server error",{status:500})
    }
}