import Image from "next/image";
import React from "react";

export default function FlightDealsCard({
  location,
  price,
  description,
  country,
  imageSrc,
}) {
  return (
    <div className="border-2 shadow-md rounded-xl max-w-[533px]">
      <Image
        src={imageSrc}
        alt="flight deal destination"
        width={533}
        height={516}
        className="rounded-t-xl"
      ></Image>
      <div className="mx-6 my-4">
      <div className="mb-1 flex justify-between ">
        <div className="">
          <span className="text-grey-600 text-h4 mr-1">{location}</span>
          <span className="text-purpleBlue text-h4">{country}</span>
        </div>
        <span className="text-grey-600 text-h4">${price}</span>
        </div>
        <span className="text-grey-400">{description}</span>
      </div>

    </div>
  );
}
