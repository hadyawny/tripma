"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function FilterDropDownMenu({
  title,
  data,
  onItemsChange,
}) {
  const [selectedTitle, setSelectedTitle] = useState(title);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        as="div"
        className="text-grey-900 px-5 py-2 mr-5 w-36 h-16 border cursor-pointer rounded-lg border-grey-200 flex justify-center items-center"
      >
        {selectedTitle == "All" ? title : selectedTitle}
        <Image
          src="/arrowdown.png"
          alt="airline logo"
          width={8}
          height={4}
          className="ml-2 object-contain"
        />
      </MenuButton>
      <MenuItems className="absolute left-0 mt-2 bg-white border border-grey-200 shadow-lg rounded-md max-h-56 overflow-y-auto w-[var(--button-width)] p-4">
        {data?.map((item,index) => (
          <MenuItem key={index}>
            {() => (
              <p
                onClick={() => {
                  setSelectedTitle(item);
                  onItemsChange({ item });
                }}
                className={`block px-4 py-2 
                   "bg-blue-100" 
                 cursor-pointer`}
              >
                {item}
              </p>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
