"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TripDatePicker() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [title, setTitle] = useState("Depart - Arrive");

  function onChangeHandler(value) {
    setDateStart(value[0]);
    setDateEnd(value[1]);
    if (value[0]) {
      setTitle(
        `${value[0].toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - `
      );
    }
    if (value[0] && value[1]) {
      setTitle(
        `${value[0].toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - ${value[1].toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}`
      );
    }

    if (!value) {
      setTitle("Depart - Arrive");
    }
  }

  return (
    <Popover className="h-8 ">
      <PopoverButton className="flex items-center justify-start border border-grey-200 py-2 pl-4 pr-16 w-60 cursor-pointer ">
        <Image
          src="/calendaricon.png"
          alt="dropdown icon"
          width={24}
          height={24}
          className="object-contain mr-4"
        />

        {title}
      </PopoverButton>
      <PopoverPanel anchor="bottom" className=" bg-trueWhite px-6 pt-6 pb-2  border border-grey-200 shadow-lg rounded-md  " >
        <div className="mb-4 flex justify-between items-center mx-2">
          <div className="m">
          <input
            type="radio"
            name="round"
            id="round"
            onChange={() => setIsRoundTrip(true)}
            checked={isRoundTrip}
            className="mr-2 "
            
          />
          <label htmlFor="round" className="mr-4">Round Trip</label>
          <input
            type="radio"
            name="round"
            id="oneWay"
            checked={!isRoundTrip}
            onChange={() => setIsRoundTrip(false)}
            className="mr-2"
          />
          <label htmlFor="oneWay" className="mr-4">One-Way</label>
          </div>
          <PopoverButton className="ml-4 px-4 py-2 bg-blue-500 bg-purpleBlue text-trueWhite rounded">
            Done
          </PopoverButton>
        </div>

        <DatePicker
          placeholderText={isRoundTrip ? "Depart - Arrive" : "Select Date"}
          selectsRange={isRoundTrip}
          startDate={dateStart}
          selected={isRoundTrip ? null : dateStart}
          endDate={isRoundTrip ? dateEnd : null}
          onChange={
            isRoundTrip
              ? onChangeHandler
              : (date) => {
                  setDateStart(date);
                  setTitle(
                    `${date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}`
                  );
                }
          }
          dateFormat="dd MMM yyyy"
          monthsShown={2}
          inline
          
        />
      </PopoverPanel>
    </Popover>
  );
}
