"use client";
import { userSignUp } from "@/app/actions/authActions";
import Image from "next/image";
import React, { useEffect } from "react";
import ZodError from "./zodError";

const initialState = {
  zodErrors: null,
  data: {
    email: "",
    password: "",
    terms: false,
  },
  message: null,
};

export default function SignupForm() {
  const [formState, formAction] = React.useActionState(
    userSignUp,
    initialState
  );

  const { email, password, terms } = formState.data || {};

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
        <input type="checkbox" name="terms" defaultValue={terms} id="terms" />
        <label htmlFor="terms" className="ml-2  text-grey-600">
          I agree to the{" "}
          <span className="text-purpleBlue">terms and conditions</span>
        </label>
        <ZodError errorMsg={formState?.zodErrors?.terms} />

        <br />
        <input type="checkbox" name="alerts" id="alerts" />
        <label htmlFor="alerts" className="ml-2  text-grey-600">
          Send me the latest deal alerts
        </label>

        <button
          type="submit"
          name="action"
          value="signup"
          className="bg-purpleBlue text-white px-4 py-2 mt-4 rounded w-full"
        >
          Sign Up
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
          <button className=" flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg">
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
