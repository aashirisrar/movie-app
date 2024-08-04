"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="cursor-pointer h-4 lg:h-7"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;
