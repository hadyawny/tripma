import Image from "next/image";
import React from "react";

export default function SelectedFlights({
  departingFlightInfo,
  returningFlightInfo,
}) {
  const departingFlightLength = calculateTripLength(
    departingFlightInfo.fromTime,
    departingFlightInfo.toTime
  );

  const totalPrice = returningFlightInfo
    ? departingFlightInfo.price + returningFlightInfo.price
    : departingFlightInfo.price;
  const taxes = totalPrice * (24 / 100);
  const subtotal = totalPrice - taxes;

  return (
    <>
      <div className="border rounded-lg mt-10 ml-32 mb-10">
        <div className="p-6 flex items-start   text-grey-900 cursor-pointer rounded-lg ">
          <Image
            src={departingFlightInfo.airlineLogo}
            alt="airline logo"
            width={40}
            height={40}
            className="mr-4 ml-2 object-contain"
          />
          <div className="mr-10">
            <p>{departingFlightInfo.airline}</p>
            <p className="text-grey-400">FIG4312</p>
          </div>
          <div className="flex flex-col items-end">
            <p>{`${departingFlightLength} (+1d)`}</p>
            <p>{`${departingFlightInfo.fromTime} - ${departingFlightInfo.toTime}`}</p>
            <p className="text-grey-400">
              {departingFlightInfo.stops == 0
                ? "Nonstop"
                : `${departingFlightInfo.stopLength}`}
            </p>
          </div>
        </div>
        {returningFlightInfo && (
          <hr className="w-9/10 mx-4 border-t border-grey-150 mt-px mb-4" />
        )}
        {returningFlightInfo && (
          <div className="p-6 flex items-start   text-grey-900 cursor-pointer rounded-lg ">
            <Image
              src={returningFlightInfo.airlineLogo}
              alt="airline logo"
              width={40}
              height={40}
              className="mr-4 ml-2 object-contain"
            />
            <div className="mr-10">
              <p>{returningFlightInfo.airline}</p>
              <p className="text-grey-400">FIG4312</p>
            </div>
            <div className="flex flex-col items-end">
              <p>{`${calculateTripLength(
                returningFlightInfo.fromTime,
                returningFlightInfo.toTime
              )} (+1d)`}</p>
              <p>{`${returningFlightInfo.fromTime} - ${returningFlightInfo.toTime}`}</p>
              <p className="text-grey-400">
                {returningFlightInfo.stops == 0
                  ? "Nonstop"
                  : `${returningFlightInfo.stopLength}`}
              </p>
            </div>
          </div>
        )}
      </div>

      <div>
        <span className="mr-10">Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div>
        <span className="mr-10">Taxes and Fees</span>
        <span>${taxes}</span>
      </div>
      <div className="mb-10">
        <span className="mr-10 ">Total</span>
        <span>${totalPrice}</span>
      </div>
    </>
  );
}

function calculateTripLength(fromTime, toTime) {
  const parseTime = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const fromDate = parseTime(fromTime);
  const toDate = parseTime(toTime);

  const differenceInMs = toDate - fromDate;
  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
}
