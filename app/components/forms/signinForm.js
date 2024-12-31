"use client"
import { userSignin } from "@/app/actions/authActions";
import Image from "next/image";
import React, { useEffect } from "react";
import ZodError from "./zodError";

const initialState = {
  zodErrors: null,
  data: {
    email: "",
    password: "",
  },
  message: null,
};

export default function SigninForm() {
  const [formState, formAction] = React.useActionState(
    userSignin,
    initialState
  );
  const { email, password } = formState.data || {};

  return (
    <div>
      <form action={formAction}>
        <div className="mb-3 w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={email}
            className="w-full p-2 mb-1 border border-gray-300 rounded"
          />
          <ZodError errorMsg={formState?.zodErrors?.email} />
        </div>
        <div className="mb-3 w-[55rem]  ">
          <input
            type="password"
            name="password"
            defaultValue={password}
            placeholder="Password"
            className="w-full p-2 mb-1 border border-gray-300 rounded"
          />
          <ZodError errorMsg={formState?.zodErrors?.password} />
        </div>
        <button
          type="submit"
          name="action"
          value="signin"
          className="bg-purpleBlue text-white px-4 py-2 rounded w-full"
        >
          Sign In
        </button>
        <div className="flex items-center mt-4">
          <div className="flex-grow border-t border-gray-400 mr-2"></div>
          <span className="text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400 ml-2"></div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            name="action"
            value="google"
            className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg"
          >
            <Image
              src="/googleicon.png"
              alt="google logo"
              width={14}
              height={14}
              className="mr-6"
            />
            Continue With Google
          </button>
          <button className="flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg">
            <Image
              src="/appleicon.png"
              alt="apple logo"
              width={14}
              height={14}
              className="mr-6"
            />
            Continue With Apple
          </button>
          <button className=" flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg ">
            <Image
              src="/facebookicon.png"
              alt="facebook logo"
              width={14}
              height={14}
              className="mr-6"
            />
            Continue With Facebook
          </button>
        </div>
      </form>
    </div>
  );
}
