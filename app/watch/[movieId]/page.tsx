import { getMovie } from "@/app/actions/getMovie";
import WatchClient from "./WatchClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

interface IParams {
  movieId?: string;
}

const WatchPage = async ({ params }: { params: IParams }) => {
  const movie = await getMovie(params);
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <div className="text-white flex justify-center items-center h-full">
        Not logged In
      </div>
    );

  return <WatchClient movie={movie} />;
};

export default WatchPage;
