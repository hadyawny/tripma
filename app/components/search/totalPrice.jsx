"use client";
import React, { useState } from "react";
import SelectedFlights from "./selectedFlights";
import { useGlobalContext } from "@/app/context/store";
import { useRouter } from "next/navigation";
import { getSession, signIn, useSession } from "next-auth/react";

export default function TotalPrice({
  selectedDepartingFlight,
  selectedReturningFlight,
  isRoundTrip,
  adults,
  minors,
}) {
  const {
    setSelectedDepartingFlight,
    setSelectedReturningFlight,
    setPassengersCount,
  } = useGlobalContext();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showSignInModal, setShowSignInModal] = useState(false);

  function handleSaveAndClose() {
    router.push("/");
  }

  async function handleGoToPassenger() {
    if (status === "authenticated") {
      setSelectedDepartingFlight(selectedDepartingFlight);
      setSelectedReturningFlight(selectedReturningFlight);
      setPassengersCount(Number(adults) + Number(minors));
      router.push("/passenger");
    } else if (status === "unauthenticated") {
      await signIn("credentials", { redirect: false });

      const updatedSession = await getSession();
      if (updatedSession) {
        setSelectedDepartingFlight(selectedDepartingFlight);
        setSelectedReturningFlight(selectedReturningFlight);
        setPassengersCount(Number(adults) + Number(minors));
        router.push("/passenger");
      } else {
        setShowSignInModal(true);
      }
    }
  }

  function closeModal() {
    setShowSignInModal(false);
  }

  return (
    <>
      <div className="flex flex-col items-end">
        <SelectedFlights
          departingFlightInfo={selectedDepartingFlight}
          returningFlightInfo={selectedReturningFlight}
        />

        {isRoundTrip && !selectedReturningFlight ? (
          <button
            className={`text-lg text-grey-400 text-purpleBlue  border-purpleBlue px-5 py-3 border rounded-lg `}
            type="button"
            onClick={handleSaveAndClose}
          >
            Save and close
          </button>
        ) : (
          <button
            className={`text-lg text-grey-100 bg-purpleBlue border-purpleBlue px-5 py-3 border rounded-lg `}
            onClick={handleGoToPassenger}
            type="button"
          >
            Passenger Information
          </button>
        )}
        {showSignInModal && <NeedSignInModal />}
      </div>
    </>
  );
  function NeedSignInModal() {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={closeModal}
      >
        <div className="bg-trueWhite border rounded-md fixed bottom-96">
          <div className="p-10">
            <p className="text-h3 text-grey-600 mb-2">Sign In </p>
            <p className="text-lg text-grey-400 mb-2">
              You Need To sign in to Complete Your Booking
            </p>
            <div className="flex items-end justify-end"></div>
          </div>
        </div>
      </div>
    );
  }
}
