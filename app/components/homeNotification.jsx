"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HomeNotification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNotification = localStorage.getItem("showNotification");
    if (!showNotification) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem("showNotification", "true");
  };

  const handleDecline = () => {
    setVisible(false);
    localStorage.setItem("showNotification", "false");
  };
  if (!visible) return null;

  return (
    <div className="flex bg-purpleBlue w-full justify-between px-4 md:px-8">
      <p className="text-sm md:text-h4 text-trueWhite py-4 w-11/12 text-center">
        Join Tripma today and save up to 20% on your flight using code TRAVEL at
        checkout. Promotion valid for new users only.
      </p>
      <div className="p-4">
        <button onClick={handleDecline}>
          <Image
            src="/closewhite.png"
            alt="close button"
            width={16}
            height={16}
            className="w-4 h-4 object-contain cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
