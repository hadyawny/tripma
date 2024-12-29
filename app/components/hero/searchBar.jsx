"use client";

import DropDownMenu from "../dropDownMenu";
import TripDatePicker from "./tripDatePicker";
import Passengers from "./passengers";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar({
  fromValue,
  toValue,
  startDateValue,
  endDateValue,
  adultsValue,
  minorsValue,
  isRoundTripValue,
  fromCityValue,
  toCityValue
}) {


  const [airports, setAirports] = useState([]);

  useEffect(() => {
      async function fetchAirports() {
          const res = await fetch('/api/airport');
          const data = await res.json();
          setAirports(data);
      }
      fetchAirports();
  }, []);

  
  const [from, setFrom] = useState(fromValue || null);
  const [to, setTo] = useState(toValue || null);
  const [fromCity, setFromCity] = useState(fromCityValue || null);
  const [toCity, setToCity] = useState(toCityValue || null);
  const [isRoundTrip, setIsRoundTrip] = useState(isRoundTripValue === undefined ? true : isRoundTripValue);
  const [startDate, setStartDate] = useState(startDateValue || null);
  const [endDate, setEndDate] = useState(endDateValue || null);
  const [adults, setAdults] = useState(adultsValue || 1);
  const [minors, setMinors] = useState(minorsValue || 0);
  const [error, setError] = useState("");

  const router = useRouter();


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
    
    setFromCity(item.item.city)    
    setFrom(item.item.code);
  }
  function handleToChange(item) {
    setToCity(item.item.city)
    setTo(item.item.code);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    if (!from || !to || !startDate) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");

    const queryParams = new URLSearchParams({
      from: from,
      to: to,
      startDate: startDate || "",
      endDate: endDate ||"",
      adults: adults,
      minors: minors,
      isRoundTrip: isRoundTrip? "true": "false",
      fromCity: fromCity,
      toCity: toCity,
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
            data={airports}
            onItemsChange={handleFromChange}
          />
          <DropDownMenu
            title={to || "Where to?"}
            value={to}
            icon={"/arrival.png"}
            data={airports}
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
            className=" text-white px-4 py-2 rounded-r-lg bg-purpleBlue "
          >
            Search
          </button>
        </div>
        {error && <div className="text-red">{error}</div>}
      </form>
    </div>
  );
}
