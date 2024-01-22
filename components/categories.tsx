import React from 'react'
import PageContainer from './page-container'
import { Button } from './ui/button'
import Link from 'next/link'
import { Category } from '@prisma/client'
type CategoriesListProps = {
  categories: Category[];
};
export default function Categories({categories}:CategoriesListProps) {
  return (
    <PageContainer>
        <section className='w-full flex justify-center gap-4 my-2'>
            {categories?.map((category)=>(
                <Button variant="outline" key={category.id}>
                    <Link href={`/categories/${category.slug}`}>{category.title}</Link>
                </Button>
                ))}
        </section>
    </PageContainer>
  )
}
