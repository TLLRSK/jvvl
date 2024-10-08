import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

function SignOutLink() {
    const { toast } = useToast();
    const handleLogout = () => {
        toast({ description: "Logout successful"})
    }
  return (
    <SignOutButton>
        <Link href="/" onClick={handleLogout}>Logout</Link>
    </SignOutButton>
  )
}

export default SignOutLink