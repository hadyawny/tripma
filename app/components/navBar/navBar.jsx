import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between p-3 mx-6 my-4 bg-trueWhite">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={54} />
        </Link>
      </div>

      <ul className="flex gap-4 items-center ">
        <li className="text-purpleBlue p-2.5">
          <Link href="/">Flights</Link>
        </li>
        <li className="text-grey-400 p-2.5">
          <Link href="/">Hotels</Link>
        </li>
        <li className="text-grey-400 p-2.5">
          <Link href="/">Packages</Link>
        </li>
        <li className="text-grey-400 p-2.5">
          <Link href="/">Sign in</Link>
        </li>
        <button className="bg-purpleBlue text-grey-100 px-5 py-3.5 rounded-md mt-0">
          Sign up
        </button>
      </ul>
    </div>
  );
}
