import Image from 'next/image'
import React from 'react'
import bg from '../assets/images/bg/dev-bg.jpg'
import PageContainer from './page-container'
import { Input } from './ui/input'
import { Button } from './ui/button'
export default function Hero() {
  return (
    <PageContainer>
        <section className='flex w-full h-50 relative justify-center items-center '>
            <Image src={bg} alt={'test'} className=' w-full h-96' /> 
            <div className='flex-col items-center max-w-full w-3/5 p-6 gap-6 bg-stone-800/50 absolute'>
                <h2 className='text-3xl text-center my-2'>Become A Better React Developper</h2>
                <Input type="email" placeholder="Email" className='bg-white my-2 text-black'/>
                <Button variant={'default'} className='w-full my-2'> Subscribe to our Newsletter</Button>
            </div>
        </section>
    </PageContainer>
  )
}
