'use client'
import React,{ useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from './ThemeToggle';
import UserAccoutNav from './UserAccoutNav';
import SignInButton from './SignInButton';
import { Session } from 'next-auth';


type Props = {
  session:Session | null
}

const Menu = (props: Props) => {

  const {session}=props;

    const [open, setOpen] = useState(false);

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" },
    {id: 4, title:"Gallery",url:"/gallery"}
  ];

    return (
        <div>
          <Image
            src={open ? "/close.png" : "/open.png"}
            alt=""
            priority
            width={30}
            height={30}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          />
           {open && (
            <div className=" bg-white dark:bg-gray-950 absolute left-0 top-20 w-full flex flex-col gap-8 items-center justify-center text-xl z-10">
              {links.map((item) => (
                <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              ))}
              {session?.user && (
                    <>
                    <Link href="/create" onClick={() => setOpen(false)}>
                        Create Course
                    </Link>
                    <Link href="/settings" onClick={() => setOpen(false)}>
                        Settings
                    </Link>
                    </>
                )}
              <ThemeToggle />
              <div className='flex items-center mb-28'>
                    {session?.user ? <UserAccoutNav user={session.user}/> : <SignInButton/>}
                </div>
            </div>
          )}
        </div>
      );
}

export default Menu;
