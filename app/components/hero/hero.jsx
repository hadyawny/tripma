import Image from "next/image";
import React from "react";
import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className=" flex flex-col items-center justify-start h-full pt-12">
        <Image
          src="/heroTextGradient.png"
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
