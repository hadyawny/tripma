import Image from "next/image";
import Link from "next/link";
import React from "react";
import PlacesToStaySearchCard from "./placesToStaySearchCard";

export default function PlacesToStaySearch({city}) {
  return (
    <div className="mx-16 my-10">
      <div className="flex justify-between">
        <div>
          <span className="text-h3 text-grey-400">
          Find{" "}
          </span>
          <span className="text-h3 text-purpleBlue">places to stay{" "}</span>
          {city && <span className="text-h3 text-grey-400">
          in {city}
          </span>}
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
      <div className="mt-6 flex gap-10 content-center justify-center">
        <PlacesToStaySearchCard
          description={"Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner."}
          title={"Hotel Kaneyamaen and Bessho SASA"}
          imageSrc={"/placestostay4.png"}
        />
        <PlacesToStaySearchCard
          description={"Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street."}
          title={"HOTEL THE FLAG 大阪市"}
          imageSrc={"/placestostay5.png"}
        />
        <PlacesToStaySearchCard
          description={"Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!"}
          title={"9 Hours Shinjuku"}
          imageSrc={"/placestostay6.png"}
        />
      </div>
    </div>
  );
}
