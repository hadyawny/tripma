import Image from "next/image";
import React from "react";

export default function WideFlightDealCard() {

  const location= "Tsavo East National Park,";
  const price= "1,248";
  const description = "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.";
  const country = "Kenya"; 
  const imageSrc = "/kenya.png";

  return (
    <div className="mx-16 mt-10 mb-20 flex content-center justify-center">
    <div className="border-2 shadow-md rounded-xl  max-w-[1705px]">
      <Image
        src={imageSrc}
        alt="flight deal destination"
        width={1680}
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
    </div>
  );
}
