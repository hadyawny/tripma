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
          top: "60%",
          left: "35%",
        }}
      >
        {toCity}
      </span>
      <span
        className="absolute  text-purpleDark text-sm font-bold"
        style={{
          top: "58%",
          left: "57%",
        }}
      >
        {fromCity}
      </span>
    </div>
  );
}
