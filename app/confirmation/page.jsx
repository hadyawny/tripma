"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";

export default function ConfirmationPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    selectedSeatsDeparting,
    selectedSeatsReturning,

  } = useGlobalContext();
  

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 flex flex-col items-start ">
        <div className="bg-lightGreen text-deepGreen border p-5 border-deepGreen rounded-lg w-[44rem] ">
        Your flight has been booked successfully! Your confirmation number is #381029404387
        </div>
      </div>

      <div className="w-2/5">
      </div>
    </div>
  );
}
