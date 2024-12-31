"use client";
import React, { Suspense, useEffect, useState } from "react";
import SearchBar from "../hero/searchBar";
import SearchedFlights from "./searchedFlights";
import TripMap from "./TripMap";
import PriceStatistics from "./priceStatistics";
import Image from "next/image";
import TotalPrice from "./totalPrice";
import FilterDropDownMenu from "./filterDropDownMenu";
import { useSession } from "next-auth/react"

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
  const [filteredReturningResults, setFilteredReturningResults] = useState(null);
  const [filteredDepartingResults, setFilteredDepartingResults] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [airLine, setAirline] = useState(null);

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

  function onMaxPriceFilter(price) {
    if (price.item == "All") {
      setMaxPrice(null);
      return;
    }

    const maxPrice = parseInt(price.item, 10);

    setMaxPrice(maxPrice);
  }
  function onAirlineFilter(airlineChoosen) {
    if (airlineChoosen.item == "All") {
      setAirline(null);
      return;
    }
    setAirline(airlineChoosen.item);
  }

  useEffect(() => {
    if (formattedStartDate) {
      async function fetchDepartingFlights() {
        let url = `/api/flight?from=${fromValue}&to=${toValue}&departDate=${formattedStartDate}`;
        if (maxPrice && !airLine) {
          url += `&maxPrice=${maxPrice}`;
        } else if (airLine && !maxPrice) {
          url += `&airline=${airLine}`;
        } else if (airLine && maxPrice) {
          url += `&airline=${airLine}` + `&maxPrice=${maxPrice}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setFilteredDepartingResults(data);
      }
      fetchDepartingFlights();
    }
    if (formattedEndDate) {
      async function fetchDepartingFlights() {
        let url = `/api/flight?from=${toValue}&to=${fromValue}&departDate=${formattedEndDate}`;
        if (maxPrice) {
          url += `&maxPrice=${maxPrice}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setFilteredReturningResults(data);
      }
      fetchDepartingFlights();
    }
  }, [
    formattedStartDate,
    formattedEndDate,
    toValue,
    fromValue,
    maxPrice,
    airLine,
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <FilterDropDownMenu
            title={"Max Price"}
            onItemsChange={onMaxPriceFilter}
            data={["All", "100", "200", "300", "400"]}
          />
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
          <FilterDropDownMenu
            title={"AirLine"}
            onItemsChange={onAirlineFilter}
            data={[
              "All",
              "Delta Airlines",
              "American Airlines",
              "Spirit Airlines",
              "United Airlines",
            ]}
          />

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

        <div className="mt-5 flex ">
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
                  : filteredDepartingResults
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
                selectedDepartingFlight && isRoundTripValue
                  ? toValue
                  : fromValue
              }
              toCity={
                selectedDepartingFlight && isRoundTripValue
                  ? fromValue
                  : toValue
              }
            />
          </div>

          {!selectedDepartingFlight && <PriceStatistics />}
          {selectedDepartingFlight && (
            <TotalPrice
              selectedDepartingFlight={selectedDepartingFlight}
              selectedReturningFlight={selectedReturningFlight}
              isRoundTrip={isRoundTripValue}
              adults={adultsValue}
              minors={minorsValue}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
