"use client";

import { SafeUser } from "@/types";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

import useFavorite from "@/app/hooks/useFavorites";

interface FavoriteButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  const Icon = hasFavorited ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorite}
      className="cursor-pointer gropu/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon size={25} className="fill-white" />
    </div>
  );
};

export default FavoriteButton;
