import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlightDealsCard from "./flightDealsCard";

export default function FlightDeals() {
  return (
    <div className="mx-4 md:mx-16 my-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-h3 text-grey-400">
            Find your next adventure with these{" "}
          </span>
          <span className="text-h3 text-purpleBlue">flight deals</span>
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
        <FlightDealsCard
          description={"China's most international city"}
          location={"The Bund,"}
          country={"Shanghai"}
          price={598}
          imageSrc={"/flightdeal1.png"}
        />
        <FlightDealsCard
          description={"Take a stroll along the famous harbor"}
          location={"Sydney Opera House,"}
          country={"Sydney"}
          price={981}
          imageSrc={"/flightdeal2.png"}
        />
        <FlightDealsCard
          description={"Step back in time in the Gion district"}
          location={"Kōdaiji Temple,"}
          country={"Kyoto"}
          price={633}
          imageSrc={"/flightdeal3.png"}
        />
      </div>
    </div>
  );
}
