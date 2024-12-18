import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthModal from "../modal/authModal";

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
        
        <AuthModal buttonLabel="Sign in" modalType="signIn" />
        <AuthModal buttonLabel="Sign up" modalType="signUp" />
      </ul>
    </div>
  );
}
