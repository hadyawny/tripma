import Image from "next/image";
import React from "react";

export default function TripMap({ fromCity, toCity }) {
  return (
    <div className="mt-12 relative w-full max-w-[1070px] mx-auto">
      <Image
        src="/map.png"
        alt="trip map"
        width={1070}
        height={206}
        className="object-contain"
      />
      <span
        className="absolute  text-purpleDark text-sm font-bold"
        style={{
          top: "60%", // Adjust percentage to match the "fromCity" position on the map
          left: "35%", // Adjust percentage to match the "fromCity" position on the map
        }}
      >
        {toCity}
      </span>
      <span
        className="absolute  text-purpleDark text-sm font-bold"
        style={{
          top: "58%", // Adjust percentage to match the "fromCity" position on the map
          left: "57%", // Adjust percentage to match the "fromCity" position on the map
        }}
      >
        {fromCity}
      </span>
    </div>
  );
}
