import PageContainer from '@/components/page-container'
import Image from 'next/image'
import React from 'react'
import bg from '../../../assets/images/bg/dev-bg.jpg'
import { Eye, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Post } from '@/type'
export default function SingePostPage() {
    const POST: Post ={
        id: 1,
        category: "React",
        title: "React State Management: Choosing the Right Solution",
        image: "/react-state-management.jpg",
        caption:
          "Explore different state management solutions in React and choose the one that fits your needs.",
        date: "2023-01-15",
        minutesToRead: 10,
        author: "John ReactDev",
        nbViews: 25,
        nbComments: 8,
        slug: "react-state-management-choosing-right-solution",
      }   
  return (
    <PageContainer>
        <article>
            <section className='flex w-full h-50 relative justify-center items-center '>
                <Image src={bg} alt={'test'} className=' w-full h-96' /> 
                <div className='flex-col items-center max-w-full w-3/5 p-6 gap-6 bg-stone-800/50 absolute'>
                    <h2 className='text-3xl text-center my-2'>Become A Better React Developper</h2>
                </div>
            </section>
            <section className='flex justify-between items-center py-4'>
                <div className='flex flex-col'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>{POST.author}</AvatarFallback>
                    </Avatar>
                    <div className='text-slate-500'>
                        Posted on {new Date(POST.date).toLocaleDateString()}
                    </div>
                </div>
                
                <div className='flex gap-2'>
                    <div className='flex items-center gap-1'>
                        <MessageCircle size={20} className='text-slate-500'/>
                        <p className='text-slate-500'>{POST.nbComments}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Eye size={20} className='text-slate-500'/>
                        <p className='text-slate-500'>{POST.nbViews}</p>
                    </div>
                </div>
                
                
            </section>
            <section className='border-b-2 border-t-2 border-slate-500 py-4'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sapien, pretium sit amet magna sed, suscipit convallis orci. Duis tellus est, rhoncus quis diam lobortis, hendrerit consectetur
                nibh. Aliquam erat volutpat. Morbi augue lectus, commodo eget nulla vitae, laoreet tempor lorem. Mauris in arcu vitae purus viverra dignissim. Vestibulum at sagittis sapien. Cras pretium diam eu odio 
                aliquam iaculis. Duis at hendrerit augue. Mauris volutpat, tortor in venenatis mattis, dolor neque varius arcu, nec tempus neque massa in tellus. Quisque sapien nibh, sagittis placerat porta sit amet, 
                viverra et tortor. Quisque iaculis quis lectus quis auctor. Curabitur eu massa vel nibh laoreet posuere. Donec iaculis pretium dignissim. Sed vitae eros dolor. Vivamus condimentum nibh viverra faucibus 
                fringilla.Nullam eu imperdiet lacus. Curabitur facilisis leo non nibh facilisis, vitae faucibus purus suscipit. Mauris dignissim velit eu magna iaculis, nec elementum odio finibus. In pretium risus eget 
                tincidunt feugiat. Duis nunc libero, efficitur in dapibus vel, laoreet eu nisi. Suspendisse condimentum felis nec justo dapibus hendrerit. Donec vehicula purus eu tellus pretium, a fringilla enim commodo.
                Sed purus ligula, hendrerit non tellus ac, blandit ultrices velit. Sed at interdum purus, id posuere libero. Donec aliquam fringilla posuere. Duis vel semper arcu. Sed non nulla maximus, rutrum purus et, 
                sodales mauris. Aenean convallis velit ut mi sollicitudin egestas. Duis eleifend tristique pulvinar. Phasellus auctor sapien a nisl sollicitudin, vel luctus lacus efficitur. Mauris pulvinar odio dolor, sed 
                tincidunt sem ullamcorper ac. Etiam accumsan ultrices tortor eu sollicitudin. Nulla facilisi. Phasellus gravida, felis id mollis gravida, sem felis faucibus justo, quis efficitur tellus neque a velit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sapien, pretium sit amet magna sed, suscipit convallis orci. Duis tellus est, rhoncus quis diam lobortis, hendrerit consectetur
                nibh. Aliquam erat volutpat. Morbi augue lectus, commodo eget nulla vitae, laoreet tempor lorem. Mauris in arcu vitae purus viverra dignissim. Vestibulum at sagittis sapien. Cras pretium diam eu odio 
                aliquam iaculis. Duis at hendrerit augue. Mauris volutpat, tortor in venenatis mattis, dolor neque varius arcu, nec tempus neque massa in tellus. Quisque sapien nibh, sagittis placerat porta sit amet, 
                viverra et tortor. Quisque iaculis quis lectus quis auctor. Curabitur eu massa vel nibh laoreet posuere. Donec iaculis pretium dignissim. Sed vitae eros dolor. Vivamus condimentum nibh viverra faucibus 
                fringilla.Nullam eu imperdiet lacus. Curabitur facilisis leo non nibh facilisis, vitae faucibus purus suscipit. Mauris dignissim velit eu magna iaculis, nec elementum odio finibus. In pretium risus eget 
                tincidunt feugiat. Duis nunc libero, efficitur in dapibus vel, laoreet eu nisi. Suspendisse condimentum felis nec justo dapibus hendrerit. Donec vehicula purus eu tellus pretium, a fringilla enim commodo.
                Sed purus ligula, hendrerit non tellus ac, blandit ultrices velit. Sed at interdum purus, id posuere libero. Donec aliquam fringilla posuere. Duis vel semper arcu. Sed non nulla maximus, rutrum purus et, 
                sodales mauris. Aenean convallis velit ut mi sollicitudin egestas. Duis eleifend tristique pulvinar. Phasellus auctor sapien a nisl sollicitudin, vel luctus lacus efficitur. Mauris pulvinar odio dolor, sed 
                tincidunt sem ullamcorper ac. Etiam accumsan ultrices tortor eu sollicitudin. Nulla facilisi. Phasellus gravida, felis id mollis gravida, sem felis faucibus justo, quis efficitur tellus neque a velit.
                </p>
            </section>
            <section className='py-4'>
                <h2 className='text-2xl text-slate-400 font-bold'>Comments</h2>
                <p>Login to write a comment</p>
            </section>
        </article>
    </PageContainer>
  )
}
