import { NextResponse } from "next/server"
import prisma from "@/lib/connect"


// Get Posts by Category
export const GET = async (
    req: Request, 
     {params}: { params: {slug: string} } 
) => {
    const { slug } = params
    try {
        const posts = await prisma.post.findMany({
            where: {catSlug: slug},

        })
        return NextResponse.json(posts, {status: 200})
        
    } catch (error) {
        return NextResponse.json({error:'Something went wrong'}, {status: 500})
    }
}



