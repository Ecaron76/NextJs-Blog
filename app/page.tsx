'use client'
import Categories from '@/components/categories'
import Hero from '@/components/hero'
import PostsList from '@/components/posts-list'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router= useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Hero />
      <Categories />
      <PostsList />
    </main>
  )
}
