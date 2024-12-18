"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function CookiesPopUp() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  const handleDecline = () => {
    setVisible(false);
    localStorage.setItem("cookiesAccepted", "false");
  };
  if (!visible) return null;

  return (
    <div className="fixed bottom-12 left-12 w-80 px-6 py-4 border border-purpleBlue bg-trueWhite rounded-xl ">
      <div className="flex justify-between ">
        <p className="text-h4 text-purpleBlue">
          <span>By using our site, you</span>
          <br />
          <span>agree to eat our cookies.</span>
        </p>
        <button onClick={handleDecline}>
          <Image
            src="/close.png"
            alt="close button"
            width={16}
            height={16}
            className="w-4 h-4 object-contain cursor-pointer"
          />
        </button>
      </div>

      <div className="flex mt-2">
        <button
          onClick={handleAccept}
          className="bg-purpleBlue  px-2 py-2 text-grey-100  rounded-md mr-2 "
        >
          Accept cookies
        </button>
        <button
          onClick={handleDecline}
          className=" text-purpleBlue  px-2  py-2 rounded-md"
        >
          Go to settings
        </button>
      </div>
    </div>
  );
}
