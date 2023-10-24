"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

const SignInButton = (props: Props) => {
  return (
    <Button className='text-md' variant="ghost" onClick={()=>{
        signIn("google");
    }}>Sign In</Button>
  )
}

export default SignInButton