"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";

export default function PassengerPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    setPassengerInfo,
    passengersCount,
  } = useGlobalContext();
  const [sameAsPassenger, setSameAsPassenger] = useState(
    Array(passengersCount).fill(false)
  );
  const [passengersData, setPassengersData] = useState(
    Array.from({ length: passengersCount }, () => ({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      emergencyFirstName: "",
      emergencyLastName: "",
      emergencyEmail: "",
      emergencyPhoneNumber: "",
      travellerNumber: "",
    }))
  );

  const [additionalPassengerData, setAdditionalPassengerData] = useState(
    Array.from({ length: passengersCount }, () => ({
      middleName: "",
      suffix: "",
      redressNumber: "",
    }))
  );

  const [bags, setBags] = useState(Array(passengersCount).fill(1));
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setPassengersData((prevData) =>
      prevData.map((data, i) =>
        i === index ? { ...data, [name]: value } : data
      )
    );
  };

  const handleAdditionalInputChange = (e, index) => {
    const { name, value } = e.target;
    setAdditionalPassengerData((prevData) =>
      prevData.map((data, i) =>
        i === index ? { ...data, [name]: value } : data
      )
    );
  };

  const handleBagsChange = (index, increment) => {
    setBags((prevBags) =>
      prevBags.map((bag, i) => (i === index ? bag + increment : bag))
    );
  };

  useEffect(() => {
    const allValid = passengersData.every((data) =>
      Object.values(data).every((value) => value.trim() !== "")
    );
    setIsFormValid(allValid);
  }, [passengersData]);

  const savePassengerData = () => {
    setPassengerInfo(
      passengersData.map((data, index) => ({
        ...data,
        ...additionalPassengerData[index],
        bags: bags[index],
      }))
    );
  };

  const handleCheckboxChange = (index) => {
    const updatedSameAsPassenger = [...sameAsPassenger];
    updatedSameAsPassenger[index] = !updatedSameAsPassenger[index];

    setSameAsPassenger(updatedSameAsPassenger);
    console.log(updatedSameAsPassenger, index);
    if (updatedSameAsPassenger[index]) {
      setPassengersData((prevData) =>
        prevData.map((data, i) =>
          i === index
            ? {
                ...data,
                emergencyFirstName: passengersData[0].emergencyFirstName,
                emergencyLastName: passengersData[0].emergencyLastName,
                emergencyEmail: passengersData[0].emergencyEmail,
                emergencyPhoneNumber: passengersData[0].emergencyPhoneNumber,
              }
            : data
        )
      );
    } else {
      setPassengersData((prevData) =>
        prevData.map((data, i) =>
          i === index
            ? {
                ...data,
                emergencyFirstName: "",
                emergencyLastName: "",
                emergencyEmail: "",
                emergencyPhoneNumber: "",
              }
            : data
        )
      );
    }
  };

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5">
        <p className="text-h3 text-purpleBlue mb-4">Passenger information</p>
        <p className="text-lg text-grey-400 mb-9">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>

        {Array.from({ length: passengersCount }).map((_, index) => (
          <div key={index} className="mb-10">
            {/* form for each passenger */}
            <p className="text-h4 text-grey-600">Passenger {index + 1}</p>

            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="firstName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="First name*"
                value={passengersData[index].firstName}
                onChange={(e) => handleInputChange(e, index)}
              />
              <input
                type="text"
                name="middleName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Middle"
                value={additionalPassengerData[index].middleName}
                onChange={(e) => handleAdditionalInputChange(e, index)}
              />
              <input
                type="text"
                name="lastName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Last name*"
                value={passengersData[index].lastName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>

            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="suffix"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Suffix"
                value={additionalPassengerData[index].suffix}
                onChange={(e) => handleAdditionalInputChange(e, index)}
              />
              <div className="flex flex-col relative">
                <input
                  type="date"
                  name="dateOfBirth"
                  className="border pl-3 pr-12 py-2 rounded border-grey-300 mr-6"
                  placeholder="Date of birth*"
                  value={passengersData[index].dateOfBirth}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <p className="text-xs text-grey-400 absolute -bottom-6 left-1">
                  MM/DD/YY
                </p>
              </div>
            </div>

            <div className="flex text-lg mt-12">
              <input
                type="email"
                name="email"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Email address*"
                value={passengersData[index].email}
                onChange={(e) => handleInputChange(e, index)}
              />
              <input
                type="text"
                name="phoneNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Phone number*"
                value={passengersData[index].phoneNumber}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>

            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="redressNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Redress number"
                value={additionalPassengerData[index].redressNumber}
                onChange={(e) => handleAdditionalInputChange(e, index)}
              />
              <input
                type="text"
                name="travellerNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Known traveller number*"
                value={passengersData[index].travellerNumber}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>

            <p className="text-h4 text-grey-600 mt-12">
              Emergency contact information
            </p>
            {index !== 0 && (
              <div className="mt-7">
                <input
                  type="checkbox"
                  name={`sameAsPassenger${index}`}
                  id={`sameAsPassenger${index}`}
                  checked={sameAsPassenger[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`sameAsPassenger${index}`} // Use the corresponding ID
                  className="text-grey-600 ml-2"
                >
                  Same as Passenger 1
                </label>
              </div>
            )}
            <div className="flex text-lg mt-7">
              <input
                type="text"
                name="emergencyFirstName"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="First name*"
                value={passengersData[index].emergencyFirstName}
                onChange={(e) => handleInputChange(e, index)}
              />
              <input
                type="text"
                name="emergencyLastName"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Last name*"
                value={passengersData[index].emergencyLastName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="flex text-lg mt-6">
              <input
                type="email"
                name="emergencyEmail"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Email address*"
                value={passengersData[index].emergencyEmail}
                onChange={(e) => handleInputChange(e, index)}
              />
              <input
                type="text"
                name="emergencyPhoneNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Phone number*"
                value={passengersData[index].emergencyLastName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          </div>
        ))}
        <div>
          <p className="text-h4 text-grey-600 mt-12">Bag information</p>
          <p className="text-lg text-grey-400 mt-3 ">
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members.{" "}
            <span className="text-purpleBlue"> See the full bag policy.</span>
          </p>
          <div className="mt-9 text-h4 flex">
            <div className="w-2/4">
              <p className="text-grey-400">Passengers </p>
            </div>
            <div>
              <p className="text-grey-400">Checked bags</p>
            </div>
          </div>
        </div>
        {Array.from({ length: passengersCount }).map((_, index) => (
          <div key={index} className="">
            <div className="mt-4 text-h4 flex items-center justify-start  ">
              <div className="w-2/4">
                <p className="text-grey-600 mt-4">
                  <span>
                    {passengersData[index].firstName
                      ? passengersData[index].firstName
                      : `Passenger ${index + 1}`}{" "}
                  </span>
                  <span>
                    {passengersData[index].lastName
                      ? passengersData[index].lastName
                      : ""}{" "}
                  </span>
                </p>
              </div>
              <div>
                <div className="flex  mt-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleBagsChange(index, -1);
                    }}
                    disabled={bags[index] <= 1}
                    className="mr-4"
                  >
                    <Image
                      src="/minus.png"
                      alt="minus icon"
                      width={30}
                      height={30}
                      className="object-contain "
                    />
                  </button>
                  <span className="text-lg text-grey-600">{bags[index]}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      handleBagsChange(index, 1);
                    }}
                    className="ml-4"
                  >
                    <Image
                      src="/plus.png"
                      alt="plus icon"
                      width={18}
                      height={18}
                      className="object-contain "
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-20 flex gap-10">
          <NavigationButton
            text={"Save and close"}
            bgColor={"text-purpleBlue"}
            borderColor={"border-purpleBlue"}
          />
          <NavigationButton
            text={"Select Seats"}
            color={"text-grey-100"}
            bgColor={"bg-purpleBlue"}
            borderColor={"border-purpleBlue"}
            destination={"/seats/departure"}
            disabled={!isFormValid}
            func={savePassengerData}
          />
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex flex-col items-end mt-28">
          {selectedDepartingFlight && (
            <SelectedFlights
              departingFlightInfo={selectedDepartingFlight}
              returningFlightInfo={selectedReturningFlight}
            />
            
          )}
          <NavigationButton
            text={"Select Seats"}
            color={"text-grey-100"}
            bgColor={"bg-purpleBlue"}
            borderColor={"border-purpleBlue"}
            destination={"/seats/departure"}
            disabled={!isFormValid}
            func={savePassengerData}
          />
          <Image
            src="/passengersbags.svg"
            alt="picture of passenger bag"
            width={382}
            height={525}
            className="mt-28"
          />
        </div>
      </div>
    </div>
  );
}
