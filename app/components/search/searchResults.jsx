"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "../hero/searchBar";
import { flights } from "@/app/(data)/data";
import SearchedFlights from "./searchedFlights";
import TripMap from "./TripMap";
import PriceStatistics from "./priceStatistics";
import Image from "next/image";
import TotalPrice from "./totalPrice";

export default function SearchResults({
  fromValue,
  toValue,
  startDateValue,
  endDateValue,
  adultsValue,
  minorsValue,
  isRoundTripValue,
}) {
  const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(null);
  const [selectedReturningFlight, setSelectedReturningFlight] = useState(null);
  const [filteredReturningResults, setFilteredReturningResults] = useState([]);

  async function onFlightSelect(item) {
    if (!selectedDepartingFlight) {
      setSelectedDepartingFlight(item);
    } else if (selectedDepartingFlight && !isRoundTripValue) {
      setSelectedDepartingFlight(item);
    } else if (selectedDepartingFlight && isRoundTripValue) {
      setSelectedReturningFlight(item);
    }
  }

  const formattedStartDate = startDateValue ? formatDate(startDateValue) : null;
  const formattedEndDate = endDateValue ? formatDate(endDateValue) : null;

  const filteredDepatingResults = flights.filter((flight) => {
    const isFromMatch = flight.from === fromValue;
    const isToMatch = flight.to === toValue;
    const isStartDateMatch =
      formattedStartDate && flight.departDay === formattedStartDate;

    return isFromMatch && isToMatch && isStartDateMatch;
  });

  useEffect(() => {
    if (formattedEndDate) {
      const results = flights.filter((flight) => {
        const isFromMatch = flight.from === toValue;
        const isToMatch = flight.to === fromValue;
        const isStartDateMatch =
          formattedEndDate && flight.departDay == formattedEndDate;

        return isFromMatch && isToMatch && isStartDateMatch;
      });

      setFilteredReturningResults(results);
    }
  }, [formattedEndDate, toValue, fromValue]);

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
        <div className="w-3.9/5  mr-20">
          <p className="text-h4 text-grey-600">
            Choose a{" "}
            <span className="text-purpleBlue">
              {selectedDepartingFlight && isRoundTripValue
                ? "returning"
                : "departing"}
            </span>{" "}
            flight
          </p>
          <SearchedFlights
            searchResults={
              selectedDepartingFlight && isRoundTripValue
                ? filteredReturningResults
                : filteredDepatingResults
            }
            onFlightSelect={onFlightSelect}
          />
          <div className="flex  mt-6 justify-end">
            <button className="text-lg text-purpleBlue px-5 py-3 border rounded-lg border-purpleBlue">
              Show all flights
            </button>
          </div>

          <TripMap
            fromCity={
              selectedDepartingFlight && isRoundTripValue ? toValue : fromValue
            }
            toCity={
              selectedDepartingFlight && isRoundTripValue ? fromValue : toValue
            }
          />
        </div>

        {!selectedDepartingFlight && <PriceStatistics />}
        {selectedDepartingFlight && (
          <TotalPrice
            selectedDepartingFlight={selectedDepartingFlight}
            selectedReturningFlight={selectedReturningFlight}
            isRoundTrip={isRoundTripValue}
          />
        )}
      </div>
    </div>
  );
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
