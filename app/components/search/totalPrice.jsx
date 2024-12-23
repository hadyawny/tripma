import React from "react";
import SelectedFlights from "./selectedFlights";
import NavigationButton from "../navigationButton";
import { useGlobalContext } from "@/app/context/store";

export default function TotalPrice({
  selectedDepartingFlight,
  selectedReturningFlight,
  isRoundTrip,
}) {

  const { setSelectedDepartingFlight, setSelectedReturningFlight } = useGlobalContext();
  const handleNavigation = () => {
    setSelectedDepartingFlight(selectedDepartingFlight);
    setSelectedReturningFlight(selectedReturningFlight);
  };


  return (
    <div className="flex flex-col items-end">
      <SelectedFlights
        departingFlightInfo={selectedDepartingFlight}
        returningFlightInfo={selectedReturningFlight}
      />

      {isRoundTrip && !selectedReturningFlight ? (
        <NavigationButton text={"Save and close"} color={"text-purpleBlue"} bgColor={""} borderColor={"border-purpleBlue"} destination={"/"} onClick={handleNavigation}/>
      ) : (
        <NavigationButton text={"Passenger Information"} color={"text-grey-100"} bgColor={"bg-purpleBlue"} borderColor={"border-purpleBlue"} destination={"/passenger"} func={handleNavigation} />
      )}
    </div>
  );
}

