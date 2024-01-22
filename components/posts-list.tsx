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
import bg from '/assets/images/bg/dev-bg.jpg'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { Eye, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Post } from '@prisma/client'


type PostsListProps = {
    posts: Post[];
  };
export default function PostsList({posts}:PostsListProps) {
    console.log(posts)
    return (
        <PageContainer>
            <section className='w-full flex flex-row justify-between flex-wrap my-2'>
                {posts.map((post) => (
                    
                    <Card key={post?.id} className='w-4/12'>
                        <Link href={`/posts/${post.slug}`}>
                    <CardHeader>
                        <Image src={post.image || bg} alt='test' className=' w-full aspect-square object-cover transition-all' width={200} height={200}/>
                        <CardTitle className='text-lg font-semibold mt-3'>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Badge variant={'outline'}>{post.catSlug}</Badge>
                    </CardContent>
                    <CardFooter className=''>
                        <div className='flex gap-2'>
                            <div className='flex items-center gap-1'>
                                <MessageCircle size={20} className='text-slate-500'/>
                                <p className='text-slate-500'>{post.nbComments}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <Eye size={20} className='text-slate-500'/>
                                <p className='text-slate-500'>{post.view}</p>
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
