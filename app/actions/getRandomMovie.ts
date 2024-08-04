
import prisma from '@/libs/prisma'
import { getCurrentUser } from "./getCurrentUser"

export async function getRandomMovie() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null

        const movieCount = await prisma.movie.count()
        const randomIndex = Math.floor(Math.random() * movieCount)

        const randomMovies = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex
        })

        return randomMovies[0]
    } catch (error: any) {
        throw new Error(error)
    }
}