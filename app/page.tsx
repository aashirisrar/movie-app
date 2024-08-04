import { getRandomMovie } from "@/app/actions/getRandomMovie";
import { getMovies } from "@/app/actions/getMovies";

import Billboard from "@/components/Billboard";
import Navbar from "@/components/navbar/Navbar";
import MovieList from "@/components/MovieList";

export default async function Home() {
  const randomMovie = await getRandomMovie();
  const movies = await getMovies();

  return (
    <>
      <Navbar />
      <Billboard movie={randomMovie} />
      <div className="pb-40">
        <MovieList title="Trending Now" movies={movies} />
      </div>
    </>
  );
}
