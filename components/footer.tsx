'use client'
import PageContainer from './page-container'
import Link from 'next/link'
import { Button } from './ui/button'
import { useCategories } from '@/app/hooks/useCategories'
import { Category } from '@prisma/client'


export default function Footer() {
  const {data: categories, isFetching} = useCategories() 
  return (
    <footer className='p-4 border-t'>
        <PageContainer>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">NextBlog</h1>
              <div className='flex flex-col md:flex-row gap-2'>
                {!isFetching && categories.map((category: Category)=>(
                  <div key={category.id}>
                    <Link href={`/categories/${category.slug}`}>
                      <Button variant='ghost'>
                        {category.title}
                      </Button>
                    </Link>
                  </div>
                  ))}
                  <Button variant='ghost'>
                    <Link href='/write'>Write A Post</Link>
                  </Button>
              </div>
            </div>
        </PageContainer>

    </footer>
  )
}
