import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function DropDownMenu({ title, icon, data }) {
  return (
      <Menu>
        
        <MenuButton as="div" className="flex items-center justify-start border border-grey-200 py-2 pl-4 pr-32 cursor-pointer ">
          <Image
            src={icon}
            alt="dropdown icon"
            width={24}
            height={24}
            className="object-contain mr-4"
          />
          {title}
        </MenuButton>
        <MenuItems anchor="bottom" className="w-[var(--button-width)] p-4 absolute left-0 mt-2 bg-white border border-grey-200 shadow-lg rounded-md">
          {data?.map((item) => (
            <MenuItem key={item.id} className="m-">
              <Link
                className="block data-[focus]:bg-blue-100"
                href={item.href || "/"} 
              >
                {item.value}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
  );
}
