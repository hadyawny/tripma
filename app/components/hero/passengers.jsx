"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function Passengers({adultsValue,minorsValue,onPassengersChange}) {
  const [adults, setAdults] = useState(+adultsValue||1);
  const [minors, setMinors] = useState(+minorsValue||0);
  const [title, setTitle] = useState(minors ? `${adults} Adult - ${minors} Minor` : `${adults} adult`);

  function onChangeAdults(value) {
    setAdults(value);
    if (minors !== 0) {
      setTitle(`${value} Adult - ${minors} Minor`);
      onPassengersChange({ adults: value, minors: minors });
    } else {
      setTitle(`${value} Adult `);
      onPassengersChange({ adults: value, minors: 0 });
    }
  }

  function onChangeMinors(value) {
    setMinors(value);
    setTitle(`${adults} Adult - ${value} Minor`);
    if (value !== 0) {
      setTitle(`${adults} Adult - ${value} Minor`);
      onPassengersChange({ adults: adults, minors: value });
    } else {
      setTitle(`${adults} Adult `);
      onPassengersChange({ adults: adults, minors: 0 });
    }
  }


  return (
    <Popover className="h-8 ">
      <PopoverButton className="flex items-center justify-start border border-grey-200 py-2 pl-4 w-60  cursor-pointer ">
        <Image
          src="/person.png"
          alt="person icon"
          width={24}
          height={24}
          className="object-contain mr-4"
        />

        {title}
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className=" bg-trueWhite px-6 pt-6 pb-2   text-grey-400 border border-grey-200 shadow-lg rounded-md mt-1 fixed"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="mr-6">Adults:</span>
          <div className="flex items-center">
            <button
              onClick={() => onChangeAdults(adults - 1)}
              disabled={adults <= 1}
              className="mr-4"
            >
              <Image
                src="/minus.png"
                alt="minus icon"
                width={24}
                height={24}
                className="object-contain "
              />
            </button>
            <span className="">{adults}</span>
            <button onClick={() => onChangeAdults(adults + 1)} className="ml-4">
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

        <div className="flex justify-between items-center ">
          <span>Minors:</span>
          <div className="flex items-center ">
            <button
              onClick={() => onChangeMinors(minors - 1)}
              disabled={minors <= 0}
              className="mr-4"
            >
              <Image
                src="/minus.png"
                alt="minus icon"
                width={24}
                height={24}
                className="object-contain "
              />
            </button>
            <span className="">{minors}</span>
            <button onClick={() => onChangeMinors(minors + 1)} className="ml-4">
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
      </PopoverPanel>
    </Popover>
  );
}
