"use client";
import Form from "next/form";

import DropDownMenu from "../dropDownMenu";
import TripDatePicker from "./tripDatePicker";
import Passengers from "./passengers";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({
  fromValue,
  toValue,
  startDateValue,
  endDateValue,
  adultsValue,
  minorsValue,
  isRoundTripValue,
}) {
  const [from, setFrom] = useState(fromValue || null);
  const [to, setTo] = useState(toValue || null);
  const [isRoundTrip, setIsRoundTrip] = useState(isRoundTripValue || true);
  const [startDate, setStartDate] = useState(startDateValue || null);
  const [endDate, setEndDate] = useState(endDateValue || null);
  const [adults, setAdults] = useState(adultsValue || 1);
  const [minors, setMinors] = useState(minorsValue || 0);
  const [error, setError] = useState("");
  console.log(isRoundTrip)
  console.log(isRoundTripValue)
  const router = useRouter();

  const options = [
    { id: 1, value: "SFO" },
    { id: 2, value: "ATL" },
    { id: 3, value: "LAX" },
    { id: 4, value: "PVG" },
    { id: 5, value: "MSP" },
    { id: 6, value: "SFO" },
    { id: 7, value: "ATL" },
    { id: 8, value: "LAX" },
    { id: 9, value: "PVG" },
    { id: 10, value: "MSP" },
    { id: 11, value: "SFO" },
    { id: 12, value: "ATL" },
    { id: 13, value: "LAX" },
    { id: 14, value: "PVG" },
    { id: 15, value: "MSP" },
  ];
  function handleDateChange({ startDate, endDate, isRoundTrip }) {
    setStartDate(startDate);
    setEndDate(endDate);
    setIsRoundTrip(isRoundTrip);
  }
  function handlePassengersChange({ adults, minors }) {
    setAdults(adults);
    setMinors(minors);
  }
  function handleFromChange(item) {
    setFrom(item.item);
  }
  function handleToChange(item) {
    setTo(item.item);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    // Check if required fields are filled
    if (!from || !to || !startDate) {
      setError("Please fill out all required fields.");
      return;
    }

    // Clear error message if validation passes
    setError("");

    // Prepare the query parameters
    const queryParams = new URLSearchParams({
      from: from,
      to: to,
      startDate: startDate ? startDate.toISOString() : "",
      endDate: endDate ? endDate.toISOString() : "",
      adults: adults,
      minors: minors,
      isRoundTrip: isRoundTrip? "true": "false",
    }).toString();
    console.log(queryParams);
    // Navigate to the search page with the query parameters
    router.push(`/search?${queryParams}`);
  }

  return (
    <div className=" text-grey-400">
      <form className="" onSubmit={handleSearchSubmit}>
        <div className="flex">
          <DropDownMenu
            title={from || "From where?"}
            value={from}
            icon={"/departure.png"}
            data={options}
            onItemsChange={handleFromChange}
          />
          <DropDownMenu
            title={to || "Where to?"}
            value={to}
            icon={"/arrival.png"}
            data={options}
            onItemsChange={handleToChange}
          />
          <TripDatePicker startDateValue={startDate} endDateValue={endDate} isRoundTripValue={isRoundTrip} onDateChange={handleDateChange} />
          <Passengers
            
            adultsValue={adults}
            minorsValue={minors}
            onPassengersChange={handlePassengersChange}
          />
          <button
            type="submit"
            className=" text-white px-4 py-2 rounded-lg bg-purpleBlue"
          >
            Search
          </button>
        </div>
        {error && <div className="text-red">{error}</div>}
      </form>
    </div>
  );
}
