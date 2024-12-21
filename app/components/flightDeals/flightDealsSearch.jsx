import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlightDealsCard from "./flightDealsCard";

export default function FlightDealsSearch({city}) {
  return (
    <div className="mx-16 my-10">
      <div className="flex justify-between">
        <div>
          <span className="text-h3 text-grey-400">
            People {city &&"in"} {" "}
          </span>
          <span className="text-h3 text-purpleBlue">{city}</span>
          <span className="text-h3 text-grey-400">
          {" "}also searched for{" "}
          </span>
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
        <FlightDealsCard
          description={"An international city rich in culture"}
          location={"Shanghai,"}
          country={"China"}
          price={598}
          imageSrc={"/flightdeal1.png"}
        />
        <FlightDealsCard
          description={"Dubbed the Safari Capital of the World"}
          location={"Nairobi,"}
          country={"Sydney"}
          price={1248}
          imageSrc={"/flightdeal4.png"}
        />
        <FlightDealsCard
          description={"This modern city is a traveler's dream"}
          location={"Seoul,"}
          country={"South Korea"}
          price={589}
          imageSrc={"/flightdeal5.png"}
        />
      </div>
    </div>
  );
}
