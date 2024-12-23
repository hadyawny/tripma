"use client";
import React from "react";
import { useGlobalContext } from "../context/store";
import TotalPricePassenger from "../components/passenger/totalPricePassenger";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";

export default function PassengerPage() {
  const { selectedDepartingFlight, selectedReturningFlight } =
    useGlobalContext();

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 "></div>
      <div className="w-2/5">
        
        <div className="flex flex-col items-end">
          {selectedDepartingFlight && (
            <SelectedFlights
              departingFlightInfo={selectedDepartingFlight}
              returningFlightInfo={selectedReturningFlight}
            />
          )}
          {selectedDepartingFlight && (
            <NavigationButton
              text={"Select Seats"}
              color={"text-grey-100"}
              bgColor={"bg-purpleBlue"}
              borderColor={"border-purpleBlue"}
              destination={"/seats"}
            />
          )}
          <Image src="/passengersbags.svg" alt="picture of passenger bag" width={382} height={525} className="mt-44"/>
        </div>
      </div>
    </div>
  );
}
