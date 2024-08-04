import Billboard from "@/components/Billboard";
import Navbar from "@/components/navbar/Navbar";
import { getRandomMovie } from "./actions/getRandomMovie";

export default async function Home() {
  const movie = await getRandomMovie();

  return (
    <>
      <Navbar />
      <Billboard movie={movie} />
    </>
  );
}
