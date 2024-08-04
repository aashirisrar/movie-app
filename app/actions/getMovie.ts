
import prisma from '@/libs/prisma'
import { getCurrentUser } from "./getCurrentUser"

interface IParams {
    movieId?: string
}

export async function getMovie(params: IParams) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) return null

        const { movieId } = params

        if (!movieId) return null

        const movies = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!movies) return null

        return movies
    } catch (error: any) {
        throw new Error(error)
    }
}