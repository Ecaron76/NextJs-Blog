'use client'

import PageContainer from '@/components/page-container'
import { Input } from '@/components/ui/input'
import PageTitle from '@/components/ui/page-title'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React, { SyntheticEvent, useState } from 'react'
import { useCategories } from '../hooks/useCategories'
import { Category, Post } from '@prisma/client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button'
import { useMutation } from 'react-query'
import axios from 'axios'
import { slugify } from '@/lib/slugify'
import Image from 'next/image'




export default function Write() {
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File>()
  const [imageObjectUrl, setImageObjectUrl] = useState<string | null>(null)

  const { data: categories, isFetching } = useCategories()

  const onChangeFile = (e: SyntheticEvent) => {
    const files = (event?.target as HTMLInputElement).files

    if (!files || !files[0]) return 

    setFile(files[0])
    setImageObjectUrl(URL.createObjectURL(files[0]))

  }

  const {mutate, isLoading} = useMutation((newPost: Partial<Post>) => axios.post("/api/posts", newPost), 
  {
    onSuccess: data => {
      console.log("data on success", data)
    }
  }
  )

  const { data: session } = useSession()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (title != "" && catSlug != "" && content!= "") {
      await mutate({
        title,
        content,
        catSlug,
        slug: slugify(title),
        image: "/assets/images/dev-bg-jpg"
      })
    }
    
  }

  if (!session) {
    return (
      redirect(`/login`) 
      )
  }
  return (
    <PageContainer>
      <div className='p-10'>
        <PageTitle title='Write a Post'/>

        <div className='mb-6'>
          {imageObjectUrl && 
          <div className='relative mb-2 w-40 h-40 mx-auto'>
            <Image
              src={imageObjectUrl} 
              fill
              alt={title}
            />
          </div>
          }
          <Input type='file' name='image' onChange={onChangeFile} />
        </div>
        <Input type="text" placeholder="Title" className="mb-6" onChange={(e) => setTitle(e.target.value)} />

        {isFetching ? ( <p>Loading categories</p> ) : (
        <Select onValueChange={(value) => setCatSlug(value)}>
          <SelectTrigger>
              <SelectValue placeholder='Select a category'></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {categories.map((category: Category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.title}
                </SelectItem>
              ))}
          </SelectContent>
        </Select> )}
        <ReactQuill 
          placeholder='Content..'
          value={content}
          onChange={setContent}
          className='mt-6'
        />
        <Button onClick={handleSubmit} className='mt-6'>
          Publish
        </Button>
      </div>
    </PageContainer>
  )
}
