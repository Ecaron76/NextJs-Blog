'use client'
import Categories from '@/components/categories'
import Hero from '@/components/hero'
import PostsList from '@/components/posts-list'
import { useRouter } from 'next/navigation'
import { usePosts } from './hooks/usePosts'
import { useCategories } from './hooks/useCategories'

export default function Home() {
  const {data: posts, isFetching} = usePosts() 
  const {data: categories} = useCategories() 
  const router= useRouter()
  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Hero />
      <Categories categories={categories}/>
      {!isFetching && <PostsList posts={posts}/>}
    </main>
  )
}
