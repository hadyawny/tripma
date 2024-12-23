import React from "react";
import SelectedFlights from "./selectedFlights";
import NavigationButton from "../navigationButton";

export default function TotalPrice({
  selectedDepartingFlight,
  selectedReturningFlight,
  isRoundTrip,
}) {
  return (
    <div className="flex flex-col items-end">
      <SelectedFlights
        departingFlightInfo={selectedDepartingFlight}
        returningFlightInfo={selectedReturningFlight}
      />

      {isRoundTrip && !selectedReturningFlight ? (
        <NavigationButton text={"Save and close"} color={"text-purpleBlue"} bgColor={""} borderColor={"border-purpleBlue"} destination={"/"} />
      ) : (
        <NavigationButton text={"Passenger Information"} color={"text-grey-100"} bgColor={"bg-purpleBlue"} borderColor={"border-purpleBlue"} destination={"/passenger"} data={{selectedDepartingFlight,selectedReturningFlight}} />
      )}
    </div>
  );
}

