import { Separator } from '@radix-ui/react-select'
import React, { SyntheticEvent, useState } from 'react'
import { Textarea } from './ui/textarea'
import { signIn, useSession } from 'next-auth/react'
import { useMutation } from 'react-query'
import axios from 'axios'
import { Button } from './ui/button'
import { Comment } from '@prisma/client'
import { Github, Mail } from 'lucide-react'
export default function Comments({postSlug} : {postSlug: string}) {
    const [content, setContent] = useState("")
    const { data: session } = useSession()

    const createComment = (newComment: Partial<Comment>) => {
        return axios.post("/api/comments", newComment).then((res) => res.data)
    } 

    const {mutate, isLoading } = useMutation(createComment, {
        onSuccess: (data: Comment) => {
            console.log("Comment has been created", data)
        }
    })

    const onLogin = (provider: string)  => () =>{
        signIn(provider)
      }

    
    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        mutate({content,postSlug})
        
    }
    return (
        <div className='mt-10'>
            <Separator />
            <h2 className='text-2xl text-slate-500 font-semibold mt-4'> Comments </h2>
        
            <div className=' mt-2 mb-6'>
                {session ? 
                (
                <div>
                    <Textarea 
                    placeholder="Any comment ?" 
                    onChange={(e) => setContent(e.target.value)}
                    />
                    <Button disabled={content == ""}
                    onClick={onSubmit}
                    className='mt-4'>
                        Add your comment
                    </Button>
                </div>
                ) : (
                    <div className='flex flex-col gap-4 max-w-sm mx-auto '>
                        <h3>You need to login to write a comment</h3>
                        <Button onClick={onLogin("github")}>
                            <Github className='mr-3'/>
                            Signin with Github
                        </Button>
                        <Button onClick={onLogin("google")}>
                            <Mail className='mr-3'/>
                            Signin with Google
                        </Button>
                    </div> 
                )
                }
                

            </div>
        </div>
    )
}
