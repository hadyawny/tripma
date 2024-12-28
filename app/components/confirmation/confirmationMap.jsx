import Image from "next/image";
import React from "react";

export default function ConfirmationMap({ fromCity="", toCity="" }) {
  return (
    <div className="relative w-full max-w-[756px] ">
      <Image
        src="/confirmationmap.png"
        alt="map of trip"
        width={756}
        height={400}
        
      />
      <span
        className="absolute  text-purpleDark text-sm font-bold"
        style={{
          top: "45%",
          left: "39%",
        }}
      >
        {toCity}
      </span>
      <span
        className="absolute  text-purpleDark text-sm font-bold"
        style={{
          top: "45%",
          left: "67%",
        }}
      >
        {fromCity}
      </span>
    </div>
  );
}
