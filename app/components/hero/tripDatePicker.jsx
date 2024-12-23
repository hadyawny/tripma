"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/app/components/hero/datepickerStyles.css";
export default function TripDatePicker({
  startDateValue,
  endDateValue,
  isRoundTripValue,
  onDateChange,
}) {
  console.log({ startDateValue, endDateValue, isRoundTripValue, onDateChange });

  const [isRoundTrip, setIsRoundTrip] = useState(
    isRoundTripValue === undefined ? true : isRoundTripValue
  );
  const [startDate, setStartDate] = useState(startDateValue || null);
  const [endDate, setEndDate] = useState(endDateValue || null);
  const [title, setTitle] = useState("Depart - Arrive");

  function onChangeHandler(value) {
    const newStartDate = value[0];
    const newEndDate = value[1];

    setStartDate(newStartDate);
    setEndDate(newEndDate);

    if (newStartDate && newEndDate) {
      setTitle(
        `${newStartDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - ${newEndDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}`
      );
    } else if (newStartDate) {
      setTitle(
        `${newStartDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - `
      );
    } else {
      setTitle("Depart - Arrive");
    }

    onDateChange({ startDate: newStartDate, endDate: newEndDate, isRoundTrip });
  }

  function onTripTypeChange(roundTrip) {
    setIsRoundTrip(roundTrip);
    if (!roundTrip) {
      setStartDate(null);
      setEndDate(null);
      setTitle("Depart - Arrive");

    }else if(roundTrip){
      setStartDate(null);
      setEndDate(null);
      setTitle("Depart - Arrive");

    }
    onDateChange({ startDate, endDate: null, isRoundTrip: roundTrip });
  }

  const formatDate = (date) => {
    if (!date) return;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Popover className="relative h-8 ">
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
      <PopoverPanel
        anchor={""}
        className="flex flex-col items-center bg-trueWhite  pt-4 pb-2  border border-grey-200 shadow-lg rounded-md absolute  z-10  "
        style={{ width: "600px", top: "-50%", left: "-100%" }}
      >
        <div className="mb-4 flex justify-between items-center mx-2">
          <div className="m">
            <input
              type="radio"
              name="round"
              id="round"
              onChange={() => onTripTypeChange(true)}
              checked={isRoundTrip}
              className="mr-2 "
            />
            <label htmlFor="round" className="mr-4">
              Round Trip
            </label>
            <input
              type="radio"
              name="round"
              id="oneWay"
              checked={!isRoundTrip}
              onChange={() => onTripTypeChange(false)}
              className="mr-2"
            />
            <label htmlFor="oneWay" className="mr-2">
              One-Way
            </label>
          </div>
          <div className="flex items-center justify-start border border-grey-200 py-2 pl-4 pr-16 w-60 rounded ">
            <Image
              src="/calendaricon.png"
              alt="dropdown icon"
              width={24}
              height={24}
              className="object-contain mr-4"
            />

            {title}
          </div>
          <PopoverButton className="ml-2 px-4 py-2 bg-blue-500 bg-purpleBlue text-trueWhite rounded">
            Done
          </PopoverButton>
        </div>
        <hr className="w-full border-t border-grey-150 mt-px mb-4" />

        <DatePicker
          placeholderText={isRoundTrip ? "Depart - Arrive" : "Select Date"}
          selectsRange={isRoundTrip}
          startDate={startDate}
          selected={isRoundTrip ? null : startDate}
          endDate={isRoundTrip ? endDate : null}
          onChange={
            isRoundTrip
              ? onChangeHandler
              : (date) => {
                  setStartDate(date);
                  setEndDate(null);
                  setTitle(
                    `${date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}`
                  );
                  onDateChange({
                    startDate: date,
                    endDate: endDate,
                    isRoundTrip,
                  });
                }
          }
          dateFormat="dd MMM yyyy"
          monthsShown={2}
          inline
          formatWeekDay={(day) => day.substring(0, 1)}
        />
      </PopoverPanel>
    </Popover>
  );
}
