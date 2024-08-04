import prisma from '@/libs/prisma'

interface IParams {
    movieId?: string
}

export async function getMovie(params: IParams) {
    try {
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