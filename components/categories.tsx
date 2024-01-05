import React from 'react'
import PageContainer from './page-container'
import { CATEGORIES } from '@/utils/categorie'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Categories() {
  return (
    <PageContainer>
        <section className='w-full flex justify-center gap-4 my-2'>
            {CATEGORIES.map((category)=>(
                <Button variant="outline" key={category.id}>
                    <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                </Button>
                ))}
        </section>
    </PageContainer>
  )
}
