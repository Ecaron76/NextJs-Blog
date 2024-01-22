"use client"
import PageContainer from '@/components/page-container'
import Image from 'next/image'
import React from 'react'
import bg from '../../../assets/images/bg/dev-bg.jpg'
import { Eye, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePost } from '@/app/hooks/usePost'
import Comments from '@/components/comments'
export default function SingePostPage({
    params
    }: {params: {slug: string}}){
    const {slug} = params
    const {data: post, isFetching, error} = usePost(slug)

    if (isFetching) return <p>Loading</p>
    if (error) return <p>error</p>
        
  return (
    <PageContainer>
        <article className='p-12'>
            <section className='flex w-full h-50 relative justify-center items-center '>
                <Image src={post?.image || bg} alt={post?.title as string} className=' w-full h-96' width={500} height={500}/> 
                <div className='flex-col items-center max-w-full w-3/5 p-6 gap-6 bg-stone-800/50 absolute'>
                    <h2 className='text-3xl text-center my-2'>{post?.title}</h2>
                </div>
            </section>
            <section className='flex justify-between items-center py-4'>
                <div className='flex flex-col'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        {/* <AvatarFallback>{post?.author}</AvatarFallback> */}
                    </Avatar>
                    {post?.createdAt && <div className='text-slate-500'>
                        Posted on {new Date(post?.createdAt).toLocaleDateString()}
                    </div>
                    }
                </div>
                
                <div className='flex gap-2'>
                    <div className='flex items-center gap-1'>
                        <MessageCircle size={20} className='text-slate-500'/>
                        <p className='text-slate-500'>{post?.nbComments}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Eye size={20} className='text-slate-500'/>
                        <p className='text-slate-500'>{post?.view}</p>
                    </div>
                </div>
                
                
            </section>
            <section className='border-b-2 border-t-2 border-slate-500 py-4'>
                <div dangerouslySetInnerHTML={{__html: post?.content as string}}>

                </div>
            </section>
            <section className='py-4'>
                <Comments  postSlug={slug}/>
            </section>
        </article>
    </PageContainer>
  )
}
