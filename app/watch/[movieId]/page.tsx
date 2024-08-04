import { getMovie } from "@/app/actions/getMovie";
import WatchClient from "./WatchClient";

interface IParams {
  movieId?: string;
}

const WatchPage = async ({ params }: { params: IParams }) => {
  const movie = await getMovie(params);

  return <WatchClient movie={movie} />;
};

export default WatchPage;
