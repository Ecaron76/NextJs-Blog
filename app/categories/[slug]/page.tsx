'use client'
import { usePostsCategory } from '@/app/hooks/usePostsCategory';
import Categories from '@/components/categories';
import PageContainer from '@/components/page-container';
import PostsList from '@/components/posts-list';
import { Category } from '@/type';
import { CATEGORIES } from '@/utils/categorie';
import { POSTS } from '@/utils/posts';
import React from 'react'


type Props = {
    params:{
        slug: string
    }
}
export default function CategoriesPage({ params }: Props ) {
    const { slug } = params;
    const {data: posts, isFetching} = usePostsCategory(slug) 
    console.log(posts)
    return (
        <PageContainer>
            <div className='py-10 px-4'>
                <h1 className='text-4xl font-bold text-center mb-10'>
                    {slug.replace("-"," ")}
                </h1>
                {!isFetching && <PostsList posts={posts}/>}
            </div>
        </PageContainer>
    )
}
