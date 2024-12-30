"use client";

import Image from "next/image";
import { useState } from "react";
import SignupForm from "../forms/signupForm";
import SigninForm from "../forms/signinForm";

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
              <SigninForm />
              
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
              <SignupForm />
              </div>
            
          </div>
        )}
      </div>
    );
  }
}
