'use client'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { useCategories } from '@/app/hooks/useCategories'
import { Category } from '@prisma/client'

export default function ResponsiveMenu() {
  const {data: categories, isFetching} = useCategories() 
  return (
    
      <Sheet>
        <SheetTrigger>
            <Menu className='h-6 w-6 md:hidden'/>
        </SheetTrigger>
        <SheetContent side='left'>
            <div className='flex flex-col gap-4'>
                <Link href='/write'><Button variant='ghost'>Write A Post</Button></Link>
                <p>Catégories</p>
                {!isFetching && categories.map((category: Category ) => (
                    <Link key={category.id} href={`categories/${category.slug}`} className='block px-2 py-1 text-lg'> {category.title} </Link>
                    
                    ))}
            </div>
        </SheetContent>
      </Sheet>
    
  )
}
