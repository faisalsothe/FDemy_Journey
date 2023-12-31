import CreateCourseForm from '@/components/CreateCourseForm';
import { getAuthSession } from '@/lib/auth'
import { checkSubscription } from '@/lib/subscription';
import { Info, InfoIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const CreatePage = async (props: Props) => {
  const session=await getAuthSession();
  if(!session?.user){
    return redirect("/gallery");
  }

  const isPro=await checkSubscription()

  return (
    <div className='flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0'>
      <h1 className='self-center text-3xl font-bold text-center sm:text-6xl'>
        FDemy Learning:
        </h1>
        <div className='flex p-4 mt-5 border-none bg-secondary'>
          <InfoIcon className='w-12 h-12 mr-3 text-blue-400'/>
          <div>
          Enter a course title and units (which you intend to learn). Our AI will generate a course for you.
          </div>
        </div>
        <CreateCourseForm isPro={isPro}/>

    </div>
  )
}

export default CreatePage