import Image from "next/image";
import React from "react";

export default function SearchItem({ flightInfo ,onClick ,isSelected}) {
  const tripLength = calculateTripLength(
    flightInfo.fromTime,
    flightInfo.toTime
  );

  return (
    <>
    <div className={`px-4 flex mb-4 text-grey-900 cursor-pointer rounded-lg ${isSelected ? 'border rounded-lg border-purpleBlue bg-purpleWhite' : ''}`} onClick={onClick}>
      <Image
        src={flightInfo.airlineLogo}
        alt="airline logo"
        width={40}
        height={40}
        className="my-4 mx-4 object-contain"
      />
      <div className="flex   flex-auto p-4 ">
        <div className="flex flex-col flex-1 items-start  ">
          <p>{tripLength}</p>
          <p className="text-grey-400">{flightInfo.airline}</p>
        </div>
        <div className="flex flex-1 justify-start">{`${flightInfo.fromTime} - ${flightInfo.toTime}`}</div>
        <div className="flex flex-1 flex-col items-end">
          <p>
            
            {flightInfo.stops == 0 ? "Nonstop" : `${flightInfo.stops} stop`}
          </p>
          <p className="text-grey-400">{flightInfo.stops != 0 ? `${flightInfo.stopLength}` : ""}</p>
        </div>
        <div className="flex flex-1 flex-col items-end">
            <p>${flightInfo.price}</p>
            <p className="text-grey-400">round trip</p>
            </div>
      </div>

    </div>
      <hr className="w-full border-t border-grey-150 mt-px mb-4"  />
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

// id: 1;
// airline: "Delta Airlines";
// departDay: "23-12-2024";
// from: "ATL";
// to: "LAX";
// fromTime: "08:00 AM";
// toTime: "11:00 AM";
// price: 250;
// stopLength: null;
// stops: "No stop";
