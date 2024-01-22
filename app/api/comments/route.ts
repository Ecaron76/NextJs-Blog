import { getAuthSession } from "@/lib/auth-options"
import { NextResponse } from "next/server"
import prisma from "@/lib/connect"
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
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email}
        })
        console.log(comment)
        return NextResponse.json(comment, {status: 200})
        
    } catch (error) {
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status : 500 }
        )
    }

}