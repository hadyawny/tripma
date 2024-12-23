"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import FlightDealsSearch from "../components/flightDeals/flightDealsSearch";
import PlacesToStaySearch from "../components/placesToStay/placesToStaySearch";
import SearchResults from "../components/search/searchResults";

export default function SearchPage({}) {
  const searchParams = useSearchParams();
  const fromAirport = searchParams.get("from");
  const toAirport = searchParams.get("to");
  const depatDate = searchParams.get("startDate");
  const arriveDate = searchParams.get("endDate") || null;
  const adults = searchParams.get("adults") || 1;
  const minors = searchParams.get("minors") || 0;
  const isRoundTrip = searchParams.get("isRoundTrip") === "true" ? true : false;
  return (
    <div>

      <SearchResults
        fromValue={fromAirport}
        toValue={toAirport}
        startDateValue={depatDate}
        endDateValue={arriveDate}
        adultsValue={adults}
        minorsValue={minors}
        isRoundTripValue={isRoundTrip}
      />
      <PlacesToStaySearch city={toAirport} />
      <FlightDealsSearch city={fromAirport} />
    </div>
  );
}
