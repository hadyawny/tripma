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
    setpassengerInfo,
    passengerInfo,
  } = useGlobalContext();

  const [formData, setFormData] = useState({
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
  });

  const [additionalFormData, setAdditionalFormData] = useState({
    middleName: "",
    suffix: "",
    redressNumber: "",
    middleName: "",
    middleName: "",
    middleName: "",
  });

  const handleAdditionalInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [bags, setBags] = useState(1);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  function savePassengerData() {
    setpassengerInfo({
      ...formData,
      bags: bags,
      ...additionalFormData,
    });
  }

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 ">
        <p className="text-h3 text-purpleBlue mb-4">Passenger information</p>
        <p className="text-lg text-grey-400 mb-9">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>

        <div>
          <form action="">
            <p className="text-h4 text-grey-600">Passenger 1 (Adult)</p>
            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="firstName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="middleName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Middle"
                value={additionalFormData.middleName}
                onChange={handleAdditionalInputChange}
              />
              <input
                type="text"
                name="lastName"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="suffix"
                className="border px-3 py-2 rounded border-grey-300 mr-6"
                placeholder="Suffix"
                value={additionalFormData.suffix}
                onChange={handleAdditionalInputChange}
              />
              <div className="flex flex-col relative">
                <input
                  type="text"
                  name="dateOfBirth"
                  className="border pl-3 pr-12 py-2 rounded border-grey-300 mr-6"
                  placeholder="Date of birth*"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phoneNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Phone number*"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex text-lg mt-6">
              <input
                type="text"
                name="redressNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Redress number"
                value={additionalFormData.redressNumber}
                onChange={handleAdditionalInputChange}
              />
              <input
                type="text"
                name="travellerNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Known traveller number*"
                value={formData.travellerNumber}
                onChange={handleInputChange}
              />
            </div>
            <p className="text-h4 text-grey-600 mt-12">
              Emergency contact information
            </p>
            <div className="mt-7">
              <input
                type="checkbox"
                name="sameAsPassenger1"
                id="sameAsPassenger1"
              />
              <label htmlFor="sameAsPassenger1" className="text-grey-600 ml-2">
                Same as Passenger 1
              </label>
            </div>
            <div className="flex text-lg mt-7">
              <input
                type="text"
                name="emergencyFirstName"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="First name*"
                value={formData.emergencyFirstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="emergencyLastName"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Last name*"
                value={formData.emergencyLastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex text-lg mt-6">
              <input
                type="email"
                name="emergencyEmail"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Email address*"
                value={formData.emergencyEmail}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="emergencyPhoneNumber"
                className="border pl-3 pr-28 py-2 rounded border-grey-300 mr-6"
                placeholder="Phone number*"
                value={formData.emergencyPhoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <p className="text-h4 text-grey-600 mt-12">Bag information</p>
            <p className="text-lg text-grey-400 mt-3 ">
              Each passenger is allowed one free carry-on bag and one personal
              item. First checked bag for each passenger is also free. Second
              bag check fees are waived for loyalty program members.{" "}
              <span className="text-purpleBlue"> See the full bag policy.</span>
            </p>
            <div className="mt-9 text-h4 flex">
              <div className="mr-80">
                <p className="text-grey-400">Passenger 1</p>
                <p className="text-grey-600 mt-4">
                  <span>
                    {formData.firstName ? formData.firstName : "First"}{" "}
                  </span>
                  <span>{formData.lastName ? formData.lastName : "Last"} </span>
                </p>
              </div>
              <div>
                <p className="text-grey-400">Checked bags</p>
                <div className="flex items-center mt-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setBags(bags - 1);
                    }}
                    disabled={bags <= 1}
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
                  <span className="text-lg text-grey-600">{bags}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      setBags(bags + 1);
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
                destination={"/seats"}
                disabled={!isFormValid}
                func={savePassengerData}
              />
            </div>
          </form>
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
          {selectedDepartingFlight && (
            <NavigationButton
              text={"Select Seats"}
              color={"text-grey-100"}
              bgColor={"bg-purpleBlue"}
              borderColor={"border-purpleBlue"}
              destination={"/seats"}
              disabled={!isFormValid}
              func={savePassengerData}
            />
          )}
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
