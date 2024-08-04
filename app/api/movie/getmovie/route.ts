import useInfoModal from "@/app/hooks/useInfoModal"
import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = await request.json()

    const { movieId } = body

    const movies = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    })

    return NextResponse.json(movies)
}