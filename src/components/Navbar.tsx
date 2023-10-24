import React from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'
import { getAuthSession } from '@/lib/auth'
import UserAccoutNav from './UserAccoutNav'
import { ThemeToggle } from './ThemeToggle'
import Menu from './Menu'

type Props = {}

const Navbar = async (props: Props) => {
    const session =await getAuthSession();
  return (
    <nav className='inset-x-0 top-0 bg-white dark:bg-gray-950 h-fit border-b border-zinc-300 py-2'>
        <div className='flex sm:justify-between items-center justify-center h-full gap-2 px-8 mx-auto max-w-7xl'>
            <Link href='/gallery' className='items-center gap-2 sm:flex'>
            <p className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
                FDemy Learning
            </p>
            </Link>
            {/* CENTER LINKS */}
            <div className='hidden md:flex ml-20'>
                <Link href="/" className='mr-6 text-lg'>Home</Link>
                <Link href="/about" className='mr-6 text-lg'>About</Link>
                <Link href="/contact" className='mr-6 text-lg'>Contact</Link>
            </div>
            {/* MOBILE MENU */}
            <div className='ml-auto flex md:hidden'>
                <Menu session={session} />
            </div>
            <div className='hidden md:flex items-center'>
                <Link href="/gallery" className='mr-3'>Gallery</Link>
                {session?.user && (
                    <>
                    <Link href="/create" className='mr-3'>
                        Create Course
                    </Link>
                    <Link href="/settings" className='mr-3'>
                        Settings
                    </Link>
                    </>
                )}
                <ThemeToggle className='mr-3'/>
                <div className='flex items-center'>
                    {session?.user ? <UserAccoutNav user={session.user} /> : <SignInButton/>}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar