"use client";
import React from "react";
import { useGlobalContext } from "../context/store";
import Image from "next/image";

export default function Seatspage() {
  const { passengerInfo, selectedDepartingFlight, selectedReturningFlight } =
    useGlobalContext();
  console.log({
    passengerInfo,
    selectedDepartingFlight,
    selectedReturningFlight,
  });

  return (
    <div className="flex relative h-[150rem]">
      <Image
        src="/airplane1.svg"
        alt="seats location in the airplane"
        width={2426}
        height={2965}
        className="absolute top-16 -left-[30rem] scale-125 "
      />

      <div className="fixed top-0 right-0 w-2/4 bg-trueWhite bg-opacity-60 backdrop-blur-md h-screen flex flex-col border-l-2">
        <div className="bg-grey-800 w-full h-32 flex">
          <div className="px-7 py-5 mx-6 flex flex-col justify-center">
            <p className="text-2xl font-extrabold text-grey-100">SFO</p>
            <p className="text-xs text-purpleExtraLight">California, US</p>
          </div>
          <Image
            src="/arrownext.svg"
            alt="arrow right"
            width={20}
            height={15}
          />
          <div className="px-7 py-5 mx-6 flex flex-col justify-center">
            <p className="text-2xl font-extrabold text-grey-100">SFO</p>
            <p className="text-xs text-purpleExtraLight">California, US</p>
          </div>
          <div className="h-full pl-8 pr-28  bg-purpleBlue flex flex-col justify-center text-grey-100">
            <p className="text-lg">
              <span>Feb 25 |</span> <span> 7:00AM</span>
            </p>
            <p>Departing</p>
          </div>
          <div className="h-full pl-8   flex flex-col justify-center text-grey-100">
            <p className="text-lg">
              <span>Mar 21 |</span> <span> 12:15PM</span>
            </p>
            <p>Arriving</p>
          </div>
        </div>
        <div className="flex flex-auto justify-center p-4">
          <div className="w-2/5">
            <Image
              src="/economyseats.svg"
              alt=" economy seats "
              width={320}
              height={180}
              className="mt-2 mb-4"
            />
            <p className="text-h4 mt-2 text-grey-600">
              Economy{" "}
              <span className="bg-purpleBlue text-base text-trueWhite px-2 py-px rounded-md ml-2 ">
                Selected
              </span>
            </p>
            <p className="mt-4 text-grey-400">
              Rest and recharge during your flight with extended leg room,
              personalized service, and a multi-course meal service
            </p>
            <Image
              src="/dividerpurple.svg"
              alt=" economy seats "
              width={32}
              height={4}
              className="my-4"
            />
            <div className="flex items-center text-grey-600">
              <Image
                src="/pointpurple.svg"
                alt=" economy seats "
                width={10}
                height={10}
                className="ml-3 mr-4"
              />

              <p>Built-in entertainment system</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/pointpurple.svg"
                alt=" economy seats "
                width={10}
                height={10}
                className="ml-3 mr-4"
              />

              <p>Complimentary snacks and drinks</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/pointpurple.svg"
                alt=" economy seats "
                width={10}
                height={10}
                className="ml-3 mr-4"
              />

              <p>One free carry-on and personal item</p>
            </div>
          </div>
          <div className="ml-20 w-2/5">
            <Image
              src="/businessseats.svg"
              alt=" economy seats "
              width={320}
              height={180}
              className="mt-2 mb-4"
            />
            <p className="text-h4 mt-2 text-grey-600">
            Business class{" "}
              <span className="bg-turquoise text-base text-trueWhite px-2 py-px rounded-md ml-2 ">
                Selected
              </span>
            </p>
            <p className="mt-4 text-grey-400">
              Rest and recharge during your flight with extended leg room,
              personalized service, and a multi-course meal service
            </p>
            <Image
              src="/dividergreen.svg"
              alt=" economy seats "
              width={32}
              height={4}
              className="my-4"
            />
            <div className="flex items-center text-grey-600">
              <Image
                src="/checkgreen.svg"
                alt=" green check "
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>Extended leg room</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/checkgreen.svg"
                alt=" green check"
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>First two checked bags free</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/checkgreen.svg"
                alt=" green check "
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>Priority boarding</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/checkgreen.svg"
                alt=" green check "
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>Personalized service</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/checkgreen.svg"
                alt=" green check "
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>Enhanced food and drink service</p>
            </div>
            <div className="flex items-center text-grey-600 mt-4">
              <Image
                src="/checkgreen.svg"
                alt=" green check "
                width={24}
                height={24}
                className="ml-1 mr-4"
              />

              <p>Seats that recline 40% more than economy</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-grey-100 w-full h-36 border-t-2"></div>
      </div>
    </div>
  );
}
