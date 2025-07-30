"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import Image from "next/image";
import ConfirmationMap from "../components/confirmation/confirmationMap";
import HotelDealCard from "../components/confirmation/hotelDealCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingCircle from "../components/loadingCircle";

export default function ConfirmationPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    selectedSeatsDeparting,
    selectedSeatsReturning,
  } = useGlobalContext();

  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated" || !selectedDepartingFlight) {
      router.push("/");
    }
  }, [status, selectedDepartingFlight]);

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
    if (selectedDepartingFlight) {
      const price = selectedReturningFlight
        ? selectedDepartingFlight.price +
          selectedReturningFlight.price +
          bussinessClassSeatsCount * 199
        : selectedDepartingFlight.price + bussinessClassSeatsCount * 199;

      setTotalPrice(price);
    }
  }, [
    selectedDepartingFlight,
    selectedReturningFlight,
    bussinessClassSeatsCount,
  ]);

  const taxes = totalPrice * (24 / 100);
  const subtotal = totalPrice - taxes;

  if (
    !selectedDepartingFlight ||
    status === "loading" ||
    status === "unauthenticated"
  ) {
    return <LoadingCircle />;
  }

  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-8 lg:mx-24 my-14 justify-between gap-8">
      <div className="w-full lg:w-3/5 flex flex-col">
        <div className="bg-lightGreen text-deepGreen border p-5 border-deepGreen rounded-lg w-full max-w-2xl">
          Your flight has been booked successfully! Your confirmation number is
          #381029404387
        </div>
        <p className="text-h3 text-purpleBlue mt-10">Bon voyage !</p>
        <p className="text-h4 text-grey-600 mt-4">
          Confirmation number: #381029404387
        </p>
        <p className="text-lg text-grey-400 mt-4">
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to {selectedDepartingFlight.toCity}. We’ve sent a copy of
          your booking confirmation to your email address. You can also find
          this page again in <span className="text-purpleBlue">My trips</span>.
        </p>
        <p className="text-h3 text-grey-600 mt-14">Flight summary</p>

        {selectedDepartingFlight && (
          <div>
            <p className="text-h4 text-grey-600 mt-6">
              Departing {formatDate(selectedDepartingFlight.departDay)}
            </p>

            <div
              className={`px-4 flex mt-4 text-grey-900 border border-grey-200 rounded-lg w-full max-w-3xl`}
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
              {selectedSeatsDeparting.length > 1 ? "Seats" : "Seat"}{" "}
              {selectedSeatsDeparting.join("-")}
            </p>
          </div>
        )}

        {selectedReturningFlight && (
          <div>
            <p className="text-h4 text-grey-600 mt-10">
              Arriving {formatDate(selectedReturningFlight.departDay)}
            </p>
            <div
              className={`px-4 flex mt-4  text-grey-900 border border-grey-200 rounded-lg w-[50rem]`}
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
              {selectedSeatsReturning.length > 1 ? "Seats" : "Seat"}{" "}
              {selectedSeatsReturning.join("-")}
            </p>
          </div>
        )}

        {selectedDepartingFlight && (
          <div className="w-[25rem] flex flex-col text-lg text-grey-600">
            <p className="text-h3 mb-6 mt-14">Price breakdown</p>
            <div className="mb-3 flex justify-between">
              <span className="mr-10">Departing Flight</span>
              <span>
                $
                {(
                  selectedDepartingFlight.price -
                  (selectedDepartingFlight.price * 24) / 100
                ).toFixed(2)}
              </span>
            </div>
            {selectedReturningFlight && (
              <div className="mb-3 flex justify-between">
                <span className="mr-10">Arriving Flight</span>
                <span>
                  $
                  {(
                    selectedReturningFlight.price -
                    (selectedReturningFlight.price * 24) / 100
                  ).toFixed(2)}
                </span>
              </div>
            )}
            <div className="mb-3 flex justify-between">
              <span className="mr-10">Baggage fees</span>
              <span>$0</span>
            </div>
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
              <span className="mr-10">Taxes (24%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-grey-800 text-h4  border-t-2 border-b-2  py-2">
              <span className="">Amount paid</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}

        <p className="text-h3 text-grey-600 mt-14 mb-6">Payment method</p>
        <Image
          src="/creditcardconfirmation.svg"
          alt="credit card"
          width={300}
          height={188}
        />
        <p className="text-h3 text-grey-600 mt-14 mb-4">
          Share your travel itinerary
        </p>
        <p className="text-lg text-grey-400 mb-6">
          You can email your itinerary to anyone by entering their email address
          here.
        </p>
        <input
          type="email"
          name="email"
          className="border pl-3  py-2 mb-6 rounded border-grey-300 w-[25rem]"
          placeholder="Email address"
        />
        <input
          type="email"
          name="email"
          className="border pl-3  py-2 mb-6 rounded border-grey-300 w-[25rem]"
          placeholder="Email address"
        />
        <input
          type="email"
          name="email"
          className="border pl-3  py-2 mb-6 rounded border-grey-300 w-[25rem]"
          placeholder="Email address"
        />

        <div className="flex gap-8">
          <NavigationButton
            text={"Email itinerary"}
            color={"text-trueWhite"}
            bgColor={"bg-purpleBlue"}
          />
          <NavigationButton
            text={"Add Another"}
            color={"text-purpleBlue"}
            borderColor={"border-transparent"}
          />
        </div>
        <p className="text-h3 text-grey-600 mt-14 mb-6">Flight Route</p>
        <ConfirmationMap
          fromCity={selectedDepartingFlight?.from}
          toCity={selectedDepartingFlight?.to}
        />
      </div>

      <div className=" flex flex-col w-[25rem]">
        <p className="text-h3 text-grey-600 mb-4">
          Shop <span className="text-purpleBlue">hotels</span>
        </p>
        <p className="text-lg text-grey-400">
          Tripma partners with thousands of hotels to get you the best deal.
          Save up to 30% when you add a hotel to your trip.
        </p>

        <HotelDealCard
          description={"Enjoy views of the garden from your room"}
          imageSrc={"/confirmationshop1.png"}
          price={439}
          title={"Ryokan Japan"}
        />
        <HotelDealCard
          description={"Japanese ryokan with private onsen bath"}
          imageSrc={"/confirmationshop2.png"}
          price={529}
          title={"Bessho SASA"}
        />
        <HotelDealCard
          description={"Modern hotel in the heart of Osaka"}
          imageSrc={"/confirmationshop3.png"}
          price={139}
          title={"HOTEL THE FLAG 大阪市"}
        />
        <HotelDealCard
          description={"A convenient capsule hotel at Shinjuku station"}
          imageSrc={"/confirmationshop4.png"}
          price={59}
          title={"9 Hours Shinjuku"}
        />
        <div className="flex justify-center mb-16 mt-2">
          <NavigationButton
            text={"Shop all hotels"}
            borderColor={"border-purpleBlue"}
            color={"text-purpleBlue"}
          />
        </div>

        <p className="text-h3 text-grey-600 mb-4">
          Find unique <span className="text-purpleBlue">experiences</span>
        </p>
        <p className="text-lg text-grey-400">
          Find events and authentic cultrual experiences available exclusively
          to Tripma users.
        </p>

        <HotelDealCard
          description={"Wear the national dress of Japan around the city"}
          imageSrc={"/confirmationshop5.png"}
          price={89}
          title={"Nihon Kimono"}
        />
        <HotelDealCard
          description={"A modern sensory experience of light and sound"}
          imageSrc={"/confirmationshop6.png"}
          price={39}
          title={"teamLab Borderless"}
        />
        <div className="flex justify-center mb-16 mt-2">
          <NavigationButton
            text={"View all experiences"}
            borderColor={"border-purpleBlue"}
            color={"text-purpleBlue"}
          />
        </div>
      </div>
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

function formatDate(dateString) {
  const date = new Date(dateString?.split("-").reverse().join("-"));

  const month = date.toLocaleString("default", { month: "long" });

  const day = date.getDate();

  let suffix = "th";
  if (day % 10 === 1 && day !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    suffix = "rd";
  }

  const year = date.getFullYear();

  return `${month} ${day}${suffix}, ${year}`;
}
