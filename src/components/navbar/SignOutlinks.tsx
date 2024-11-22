'use client';
import React from 'react'
import { useToast } from "@/hooks/use-toast"

import { SignOutButton } from '@clerk/nextjs' 
const SignOutlinks = () => {
    const { toast } = useToast();

    const handleLogout = () =>{
        toast ({ description: "Logout Successfully!!"})
    }
  return (
    <SignOutButton redirectUrl='/'>
        <button
        // className='w-full'
         onClick={handleLogout}
        >Logout</button>
    </SignOutButton>
  )
}

export default SignOutlinks
