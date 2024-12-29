"use client";
import React, { useState } from "react";
import SearchItem from "./searchItem";

export default function SearchedFlights({ searchResults, onFlightSelect }) {
  const [selectedFlightId, setSelectedFlightId] = useState(null);

  const handleFlightSelect = (flight) => {
    setSelectedFlightId(flight._id);
    onFlightSelect(flight);
  };
  console.log(searchResults);
  

  return (
    <div className="w-full border border-grey-400 rounded-xl h-[33rem] mt-4 p-4 overflow-hidden">
      {searchResults === null ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg text-purpleBlue text-center">
          Loading . . .
        </p> 
        </div>
      ) : searchResults && searchResults.length > 0 ? (
        searchResults.map((item) => (
          <SearchItem
            key={item._id}
            flightInfo={item}
            onClick={() => {
              handleFlightSelect(item);
            }}
            isSelected={selectedFlightId === item._id}
          />
        ))
      ) : (
        <div className="flex justify-center items-center h-full">

        <p className="text-lg text-purpleBlue text-center">
          There are no flights on these dates, please search again.
        </p>
        </div>

      )}
    </div>
  );
}
