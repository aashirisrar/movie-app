import { Movie } from "@prisma/client";
import { create } from "zustand";
import axios from "axios";

export interface InfoModalStore {
  movieId?: string;
  isOpen: boolean;
  movie?: Movie;
  onOpen: (movieId: string) => void;
  onClose: () => void;
  fetchMovie: (movieId: string) => Promise<void>;
}

const useInfoModal = create<InfoModalStore>((set) => ({
  movieId: undefined,
  isOpen: false,
  movie: undefined,
  onOpen: (movieId: string) => {
    set({ isOpen: true, movieId });
    useInfoModal.getState().fetchMovie(movieId);
  },
  onClose: () => set({ isOpen: false, movieId: undefined, movie: undefined }),
  fetchMovie: async (movieId: string) => {
    try {
      const response = await axios.post("/api/movie/getmovie", { movieId });
      set({ movie: response.data });
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    }
  },
}));

export default useInfoModal;
