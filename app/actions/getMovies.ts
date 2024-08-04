
import prisma from '@/libs/prisma'
import { getCurrentUser } from "./getCurrentUser"

export async function getMovies() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return []

        const movies = await prisma.movie.findMany()

        return movies
    } catch (error: any) {
        throw new Error(error)
    }
}