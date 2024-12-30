import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthModal from "../modal/authModal";
import { auth } from "@/auth"
import LogoutForm from "../forms/logoutForm";

export default async function NavBar() {
  const session = await auth();
  
  return (
    <div className="flex justify-between p-2 mx-6 my-2 bg-trueWhite">
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
        {session && <li className="text-grey-400 p-2.5">
          <Link href="/">My Trips</Link>
        </li>}
        {session && <LogoutForm/>
        }

        {!session && <AuthModal buttonLabel="Sign in" modalType="signIn" />}
        {!session &&  <AuthModal buttonLabel="Sign up" modalType="signUp" />}
      </ul>
    </div>
  );
}
