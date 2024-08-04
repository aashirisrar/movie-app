import { getRandomMovie } from "@/app/actions/getRandomMovie";
import { getMovies } from "@/app/actions/getMovies";
import { getCurrentUser } from "@/app//actions/getCurrentUser";
import getFavoriteMovies from "@/app//actions/getFavoriteMovies";

import Billboard from "@/components/Billboard";
import Navbar from "@/components/navbar/Navbar";
import MovieList from "@/components/MovieList";
import InfoModalComponent from "@/components/InfoModalComponent";

export default async function Home() {
  const randomMovie = await getRandomMovie();
  const movies = await getMovies();
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteMovies();

  if (!currentUser)
    return (
      <div className="text-white flex justify-center items-center h-full">
        Not logged In
      </div>
    );

  return (
    <>
      <InfoModalComponent />
      <Navbar currentUser={currentUser} />
      <Billboard movie={randomMovie} />
      <div className="pb-40">
        <MovieList
          title="Trending Now"
          movies={movies}
          currentUser={currentUser}
        />
        <MovieList
          title="My List"
          movies={favorites}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}
