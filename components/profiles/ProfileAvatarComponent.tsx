"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { SafeUser } from "@/types";

interface ProfileAvatarComponentProps {
  currentUser: SafeUser | null;
}

const ProfileAvatarComponent: React.FC<ProfileAvatarComponentProps> = ({
  currentUser,
}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <Image
            width={300}
            height={300}
            alt="profile"
            src="/images/placeholder.png"
          />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
          {currentUser?.name}
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarComponent;
