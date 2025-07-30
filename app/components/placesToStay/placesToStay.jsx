import Image from "next/image";
import Link from "next/link";
import React from "react";
import PlacesToStayCard from "./placesToStayCard";

export default function PlacesToStay() {
  return (
    <div className="mx-4 md:mx-16 my-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-h3 text-grey-400">Explore unique </span>
          <span className="text-h3 text-turquoise">places to stay</span>
        </div>
        <Link href="/">
          <div className="flex">
            <span className="text-h3 text-grey-300">All</span>
            <Image
              src="/arrowRight.png"
              alt="arrow right"
              width={32}
              height={32}
              className="object-contain mr-4"
            />
          </div>
        </Link>
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-10 content-center justify-center">
        <PlacesToStayCard
          description={
            "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
          }
          title={"Stay among the atolls in "}
          country={"Maldives"}
          imageSrc={"/placestostay1.png"}
        />
        <PlacesToStayCard
          description={
            "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
          }
          title={"Experience the Ourika Valley in"}
          country={"Morocco"}
          imageSrc={"/placestostay2.png"}
        />
        <PlacesToStayCard
          description={
            "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
          }
          title={"Live traditionally in "}
          country={"Mongolia"}
          imageSrc={"/placestostay3.png"}
        />
      </div>
    </div>
  );
}
