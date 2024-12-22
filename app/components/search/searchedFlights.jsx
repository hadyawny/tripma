import React from "react";
import SearchItem from "./searchItem";

export default function SearchedFlights({ searchResults }) {

  return (
    <div className="w-full border border-grey-400 rounded-xl h-[31rem] mt-4 p-4 overflow-hidden">
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((item) => (
          <SearchItem key={item.id} flightInfo={item} />
        ))
      ) : (
        <p className="text-lg text-purpleBlue text-center">
          There are no flights on these dates, please search again.
        </p>
      )}
    </div>
  );
}
