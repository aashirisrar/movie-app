"use client";

import { Movie } from "@prisma/client";
import MovieCard from "./MovieCard";
import { SafeUser } from "@/types";

interface MovieListProps {
  movies: Movie[] | [];
  currentUser: SafeUser | null;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({
  title,
  movies,
  currentUser,
}) => {
  if (movies.length === 0) return null;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
