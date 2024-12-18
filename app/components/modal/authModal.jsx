"use client";

import Image from "next/image";
import { useState } from "react";

export default function AuthModal({ buttonLabel, modalType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {modalType == "signUp" && <SignUpModal />}
      {modalType == "signIn" && <SignInModal />}
    </>
  );

  function SignInModal() {
    return (
      <div>
        <button
          onClick={handleOpen}
          className=" text-grey-400 px-5 py-3.5 rounded-md"
        >
          {buttonLabel}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-trueWhite p-10 rounded-lg w-3/6">
              <div className="flex justify-between mb-4">
                <p className="text-h3 text-grey-600 font-bold ">Sign In</p>
                <button onClick={handleClose}>
                  <Image
                    src="/closegrey.png"
                    alt="close button"
                    width={16}
                    height={16}
                    className=""
                  />
                </button>
              </div>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 rounded w-full"
                >
                  Sign In
                </button>
              </form>
              <div className="flex items-center mt-4">
                  <div className="flex-grow border-t border-gray-400 mr-2"></div>
                  <span className="text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-400 ml-2"></div>
                  
                </div>
                <div className="flex flex-col items-center mt-4">
                <button className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg">
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
            </div>
          </div>
        )}
      </div>
    );
  }

  function SignUpModal() {
    return (
      <div>
        <button
          onClick={handleOpen}
          className="bg-purpleBlue text-grey-100 px-5 py-3.5 rounded-md"
        >
          {buttonLabel}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-trueWhite p-10 rounded-lg ">
              <div className="flex justify-between mb-4">
                <p className="text-h3 text-grey-600 font-bold ">
                  Sign up for Tripma{" "}
                </p>
                <button onClick={handleClose}>
                  <Image
                    src="/closegrey.png"
                    alt="close button"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <p className="text-lg text-grey-400 mb-4">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="ml-2  text-grey-600">
                  I agree to the{" "}
                  <span className="text-purpleBlue">terms and conditions</span>
                </label>
                <br />
                <input type="checkbox" name="alerts" id="alerts" />
                <label htmlFor="alerts" className="ml-2  text-grey-600">
                  Send me the latest deal alerts
                </label>

                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 mt-4 rounded w-full"
                >
                  Sign Up
                </button>
              </form>

                <div className="flex items-center mt-4">
                  <div className="flex-grow border-t border-gray-400 mr-2"></div>
                  <span className="text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-400 ml-2"></div>
                  
                </div>
                <div className="flex flex-col items-center mt-4">
                <button className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg">
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
                
              </div>
            
          </div>
        )}
      </div>
    );
  }
}
