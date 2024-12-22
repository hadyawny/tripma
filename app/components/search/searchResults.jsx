import React from "react";
import SearchBar from "../hero/searchBar";
import { flights } from "@/app/(data)/data";
import SearchedFlights from "./searchedFlights";
import TripMap from "./TripMap";
import PriceStatistics from "./priceStatistics";
import Image from "next/image";

export default function SearchResults({
  fromValue,
  toValue,
  startDateValue,
  endDateValue,
  adultsValue,
  minorsValue,
  isRoundTripValue,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Format dates
  const formattedStartDate = startDateValue ? formatDate(startDateValue) : null;

  // Filter flights
  const filteredResults = flights.filter((flight) => {
    const isFromMatch = flight.from === fromValue;
    const isToMatch = flight.to === toValue;
    const isStartDateMatch =
      formattedStartDate && flight.departDay === formattedStartDate;

    return isFromMatch && isToMatch && isStartDateMatch;
  });

  return (
    <div className="mx-16 my-10">
      <SearchBar
        fromValue={fromValue}
        toValue={toValue}
        startDateValue={startDateValue}
        endDateValue={endDateValue}
        adultsValue={adultsValue}
        minorsValue={minorsValue}
        isRoundTripValue={isRoundTripValue}
      />
      <div className="my-5 flex">
        <button className=" text-grey-900 px-5 py-2 mr-5  border rounded-lg border-grey-200 flex justify-center items-center">
          Max price
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
        <button className=" text-grey-900 px-5 py-2 mr-5 border rounded-lg border-grey-200 flex justify-center items-center">
          Shops
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
        <button className=" text-grey-900 px-5 py-2 mr-5  border rounded-lg border-grey-200 flex justify-center items-center">
          Times
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
        <button className=" text-grey-900 px-5 py-2 mr-5  border rounded-lg border-grey-200 flex justify-center items-center">
          Airlines
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
        <button className=" text-grey-900 px-5 py-2 mr-5  border rounded-lg border-grey-200 flex justify-center items-center">
          Seat class
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
        <button className=" text-grey-900 px-5 py-2 mr-5  border rounded-lg border-grey-200 flex justify-center items-center">
          More
          <Image
            src="/arrowdown.png"
            alt="airline logo"
            width={8}
            height={4}
            className="ml-2 object-contain"
          />
        </button>
      </div>
      
      <div className="mt-12 flex ">
        <div className="w-3/5 mr-20">
          <p className="text-h4 text-grey-600">
            Choose a <span className="text-purpleBlue">departing</span> flight
          </p>
          <SearchedFlights searchResults={filteredResults} />
          <div className="flex  mt-6 justify-end">
            <button className="text-lg text-purpleBlue px-5 py-3 border rounded-lg border-purpleBlue">
              Show all flights
            </button>
          </div>

          <TripMap fromCity={fromValue} toCity={toValue} />
        </div>

        <PriceStatistics />
      </div>
    </div>
  );
}
