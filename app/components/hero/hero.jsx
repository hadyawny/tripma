import Image from "next/image";
import React from "react";
import DropDownmenu from "../dropDownMenu";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className=" flex flex-col items-center justify-start h-full pt-32">
        <Image
          src="/heroTextGradient.png"
          alt="It's more than just a trip"
          width={756}
          height={265}
          className="object-contain"
        />
        {/* Search Bar */}
        <div className="flex ">
            {/* <div className="p-6 ">
            <DropDownmenu title={"From where?"} />
            </div>
            <div className="p-6 ">
            <DropDownmenu title={"Where to?"} />
            </div> */}


          <button className=" text-white px-4 py-3 rounded-lg bg-purpleBlue">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
