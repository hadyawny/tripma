"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function DropDownMenu({ title, icon, data, onItemsChange }) {
  const [selectedTitle, setSelectedTitle] = useState(title);

  return (
    <Menu as="div" className="relative inline-block text-left w-full md:w-64">
      <MenuButton
        as="div"
        className="flex items-center justify-start border border-grey-200 py-2 pl-4 w-full cursor-pointer rounded-lg md:rounded-none"
      >
        <Image
          src={icon}
          alt="dropdown icon"
          width={24}
          height={24}
          className="object-contain mr-4"
        />
        <span className="truncate">{selectedTitle}</span>
      </MenuButton>
      <MenuItems className="absolute left-0 mt-2 bg-white border border-grey-200 shadow-lg rounded-md max-h-56 overflow-y-auto w-full p-4 z-10">
        {data?.map((item) => (
          <MenuItem key={item._id}>
            {() => (
              <p
                onClick={() => {
                  setSelectedTitle(item.code);
                  onItemsChange({ item });
                }}
                className={`block px-4 py-2 
                   "bg-blue-100" 
                 cursor-pointer hover:bg-gray-100`}
              >
                {item.code}
              </p>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
