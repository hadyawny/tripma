"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";

export default function ConfirmationPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    selectedSeatsDeparting,
    selectedSeatsReturning,
  } = useGlobalContext();

  const [departingTripLength, setDepartingTripLength] = useState("");
  const [returningTripLength, setReturningTripLength] = useState("");
  const [bussinessClassSeatsCount, setbussinessClassSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedDepartingFlight) {
      const departingLength = calculateTripLength(
        selectedDepartingFlight.fromTime,
        selectedDepartingFlight.toTime
      );
      setDepartingTripLength(departingLength);
    }

    if (selectedReturningFlight) {
      const returningLength = calculateTripLength(
        selectedReturningFlight.fromTime,
        selectedReturningFlight.toTime
      );
      setReturningTripLength(returningLength);
    }
  }, [selectedDepartingFlight, selectedReturningFlight]);

  useEffect(() => {
    const countBusinessClassSeats = (seats) => {
      let count = 0;
      seats?.forEach((seat) => {
        const rowNumber = parseInt(seat, 10);
        if (rowNumber >= 1 && rowNumber <= 5) {
          count++;
        }
      });
      return count;
    };

    const departingCount = selectedSeatsDeparting
      ? countBusinessClassSeats(selectedSeatsDeparting)
      : 0;
    const returningCount = selectedSeatsReturning
      ? countBusinessClassSeats(selectedSeatsReturning)
      : 0;

    setbussinessClassSeatsCount(departingCount + returningCount);
  }, [selectedSeatsDeparting, selectedSeatsReturning]);

  useEffect(() => {
    if(selectedDepartingFlight){
      const price =
      selectedReturningFlight
        ? selectedDepartingFlight.price +
          selectedReturningFlight.price +
          bussinessClassSeatsCount * 199
        : selectedDepartingFlight.price + bussinessClassSeatsCount * 199;

    setTotalPrice(price);
    }

    
  }, [selectedDepartingFlight, selectedReturningFlight, bussinessClassSeatsCount]);

  const taxes = totalPrice * (24 / 100);
  const subtotal = totalPrice - taxes;

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 flex flex-col items-start ">
        <div className="bg-lightGreen text-deepGreen border p-5 border-deepGreen rounded-lg w-[44rem] ">
          Your flight has been booked successfully! Your confirmation number is
          #381029404387
        </div>
        <p className="text-h3 text-purpleBlue mt-10">Bon voyage, Sophia!</p>
        <p className="text-h4 text-grey-600 mt-4">
          Confirmation number: #381029404387
        </p>
        <p className="text-lg text-grey-400 mt-4">
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in <span className="text-purpleBlue">My trips</span>.
        </p>
        <p className="text-h3 text-grey-600 mt-14">Flight summary</p>

        {selectedDepartingFlight && (
          <div>
            <p className="text-h4 text-grey-600 mt-6">
              Departing February 25th, 2021
            </p>

            <div
              className={`px-4 flex mt-4  text-grey-900 cursor-pointer border border-grey-200 rounded-lg w-[50rem]`}
            >
              <Image
                src={selectedDepartingFlight.airlineLogo}
                alt="airline logo"
                width={40}
                height={40}
                className="my-4 mx-4 object-contain"
              />
              <div className="flex   flex-auto p-4 ">
                <div className="flex flex-col flex-1 items-start  ">
                  <p>{departingTripLength}</p>
                  <p className="text-grey-400">
                    {selectedDepartingFlight.airline}
                  </p>
                </div>
                <div className="flex flex-1 justify-start flex-col">
                  <div>
                    {`${selectedDepartingFlight.fromTime} - ${selectedDepartingFlight.toTime}`}
                  </div>
                  <p className="text-grey-400">value</p>
                </div>
                <div className="flex flex-1 flex-col items-end">
                  <p>
                    {selectedDepartingFlight.stops == 0
                      ? "Nonstop"
                      : `${selectedDepartingFlight.stops} stop`}
                  </p>
                  <p className="text-grey-400">
                    {selectedDepartingFlight.stops != 0
                      ? `${selectedDepartingFlight.stopLength}`
                      : ""}
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-end">
                  <p>${selectedDepartingFlight.price}</p>
                  <p className="text-grey-400">round trip</p>
                </div>
              </div>
            </div>
            <p className="text-grey-400 mt-3">
              Seat 9F (economy, window), 1 checked bag
            </p>
          </div>
        )}

        {selectedReturningFlight && (
          <div>
            <p className="text-h4 text-grey-600 mt-10">
              Arriving March 21st, 2021{" "}
            </p>
            <div
              className={`px-4 flex mt-4  text-grey-900 cursor-pointer border border-grey-200 rounded-lg w-[50rem]`}
            >
              <Image
                src={selectedReturningFlight.airlineLogo}
                alt="airline logo"
                width={40}
                height={40}
                className="my-4 mx-4 object-contain"
              />
              <div className="flex   flex-auto p-4 ">
                <div className="flex flex-col flex-1 items-start  ">
                  <p>{returningTripLength}</p>
                  <p className="text-grey-400">
                    {selectedReturningFlight.airline}
                  </p>
                </div>
                <div className="flex flex-1 justify-start flex-col">
                  <div>
                    {`${selectedReturningFlight.fromTime} - ${selectedReturningFlight.toTime}`}
                  </div>
                  <p className="text-grey-400">value</p>
                </div>
                <div className="flex flex-1 flex-col items-end">
                  <p>
                    {selectedReturningFlight.stops == 0
                      ? "Nonstop"
                      : `${selectedReturningFlight.stops} stop`}
                  </p>
                  <p className="text-grey-400">
                    {selectedReturningFlight.stops != 0
                      ? `${selectedReturningFlight.stopLength}`
                      : ""}
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-end">
                  <p>${selectedReturningFlight.price}</p>
                  <p className="text-grey-400">round trip</p>
                </div>
              </div>
            </div>
            <p className="text-grey-400 mt-3">
              Seat 9F (economy, window), 1 checked bag
            </p>
          </div>
        )}

        {selectedDepartingFlight && (
          <div className="w-[25rem] flex flex-col">
            {bussinessClassSeatsCount !== 0 && (
              <div className="mb-3  flex justify-between">
                <span className="mr-10">Seat upgrade (business)</span>
                <span>${(bussinessClassSeatsCount * 199).toFixed(2)}</span>
              </div>
            )}
            <div className="mb-3 flex justify-between">
              <span className="mr-10">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mb-3 flex justify-between">
              <span className="mr-10">Taxes and Fees</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-2/5"></div>
    </div>
  );
}

function calculateTripLength(fromTime, toTime) {
  if (!fromTime || !toTime) return "Invalid time";

  const parseTime = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const fromDate = parseTime(fromTime);
  const toDate = parseTime(toTime);

  const differenceInMs = toDate - fromDate;
  if (differenceInMs < 0) return "Invalid time range";

  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
}
