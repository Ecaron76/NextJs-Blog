import React from 'react'
import PageContainer from './page-container'
import { CATEGORIES } from '@/utils/categorie'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import bg from '../assets/images/bg/dev-bg.jpg'
import { Badge } from './ui/badge'
import { POSTS } from '@/utils/posts'
import Image from 'next/image'
import { Eye, MessageCircle } from 'lucide-react'
import Link from 'next/link'
export default function PostsList() {
  return (
    <PageContainer>
        <section className='w-full flex flex-row justify-between flex-wrap my-2'>
            {POSTS.map((post) => (
                
                <Card key={post.id} className='w-3/12'>
                    <Link href={`/posts/${post.slug}`}>
                <CardHeader>
                    <Image src={bg} alt='test' className=' w-full aspect-square'/>
                    <CardTitle className='text-lg font-semibold mt-3'>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Badge variant={'outline'}>{post.category}</Badge>
                </CardContent>
                <CardFooter className=''>
                    <div className='flex gap-2'>
                        <div className='flex items-center gap-1'>
                            <MessageCircle size={20} className='text-slate-500'/>
                            <p className='text-slate-500'>{post.nbComments}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Eye size={20} className='text-slate-500'/>
                            <p className='text-slate-500'>{post.nbViews}</p>
                        </div>
                    </div>
                </CardFooter>
                </Link>
              </Card>
              
                ))}
        </section>
    </PageContainer>
  )
}
