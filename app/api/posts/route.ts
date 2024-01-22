import { NextResponse } from "next/server"
import prisma from "@/lib/connect"
import { getAuthSession } from "@/lib/auth-options"

export const GET = async (req: Request  ) => {
    
        
    
    try {
        // const session = await getAuthSession()
        // if (!session || !session.user) {
        //     return NextResponse.json(
        //         {message: "Not Authenticated"},
        //         {status: 403}
        //     ) 
        // }

        const posts = await prisma.post.findMany()
        return NextResponse.json(posts, {status: 200})
        
    } catch (error) {
        return NextResponse.json({error:'Something went wrong'}, {status: 500})
    }
}

export const POST = async(req: Request) => {
    try {
        const session = await getAuthSession()

        if (!session || !session.user) {
            return NextResponse.json(
                    { message: 'Not Auhenticated' },
                    { status : 403 }
                )
            
        }
        const body = await req.json()
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email}
        })
        console.log(post)
        return NextResponse.json(post, {status: 200})
        
    } catch (error) {
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status : 500 }
        )
    }

}