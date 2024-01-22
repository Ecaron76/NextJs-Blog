"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback } from './ui/avatar'

export default function ProfileButton() {
  const { data: session, status } = useSession()
  console.log("session", session, status)
  const onLogout = () => {
    signOut()
  }
  if (!session) {
    return (
      <Link href='/login'>
        <Button>Login/Signup</Button>
      </Link>
    )
  }
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image || "/img/shadcn.jpg"} />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onLogout} className='cursor-pointer'>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
