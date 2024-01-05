import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function ProfileButton() {
  return (
    <Link href='/login'><Button>Login/Signup</Button></Link>
  )
}
