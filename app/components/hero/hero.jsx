import Image from "next/image";
import React from "react";
import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className=" flex flex-col items-center justify-start h-full pt-36 ">
        {/* import Image from "next/image";
import React from "react";
import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className="flex flex-col items-center justify-start h-full pt-16 md:pt-36 px-4">
        <Image
          src="/herotextgradient.svg"
          alt="It's more than just a trip"
          width={756}
          height={265}
          className="object-contain w-full max-w-xs md:max-w-none md:w-[756px] mb-8 md:mb-0"
        />
        <SearchBar />
      </div>
    </div>
  );
} */}

        <Image
          src="/herotextgradient.svg"
          alt="It's more than just a trip"
          width={756}
          height={265}
          className="object-contain"
        />
        <SearchBar />
      </div>
    </div>
  );
}
