"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";

export default function PaymentPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    selectedSeatsDeparting,
    selectedSeatsReturning,

  } = useGlobalContext();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
  });

  const [isPaymentValid, setIsPaymentValid] = useState(false);
  const [bussinessClassSeatsCount, setbussinessClassSeatsCount] = useState(0);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    const isPaymentValid = Object.values(paymentData).every(
      (value) => value.trim() !== ""
    );
    setIsPaymentValid(isPaymentValid);
  }, [paymentData]);

  useEffect(() => {
  
    const countBusinessClassSeats = (seats) => {
      let count = 0;
      seats?.forEach((seat) => {
        const rowNumber = parseInt(seat, 10);
        if (rowNumber >= 1 && rowNumber <= 5) {
          count++;
        }
      });
      return count;
    };
  
    const departingCount = selectedSeatsDeparting ? countBusinessClassSeats(selectedSeatsDeparting): 0;
    const returningCount = selectedSeatsReturning ? countBusinessClassSeats(selectedSeatsReturning) : 0;
  
    setbussinessClassSeatsCount(departingCount + returningCount);
  
  }, [selectedSeatsDeparting, selectedSeatsReturning]);
  
  

  

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 flex flex-col items-start ">
        <p className="text-h3 text-purpleBlue mb-4">Payment method</p>
        <p className="text-lg text-grey-400 mb-9">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
        <div className="w-[43rem] border rounded-lg border-purpleBlue flex mb-10" >
          <div className="flex bg-purpleBlue py-3 px-5 border rounded-lg border-purpleBlue ">
            <Image src='/ccicon.svg' alt="credit card icon" width={14} height={11} className="mr-2"/>
            <span className="text-lg text-grey-100 ">Credit card</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image src='/googleiconpayment.svg' alt="credit card icon" width={14} height={11} className="mr-2"/>
            <span className="text-lg text-purpleBlue ">Google Pay</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image src='/appleiconpayment.svg' alt="credit card icon" width={14} height={11} className="mr-2"/>
            <span className="text-lg text-purpleBlue ">Apple pay</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image src='/paypalicon.svg' alt="credit card icon" width={14} height={11} className="mr-2"/>
            <span className="text-lg text-purpleBlue ">Paypal</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image src='/cryptoicon.svg' alt="credit card icon" width={14} height={11} className="mr-2"/>
            <span className="text-lg text-purpleBlue ">Crypto</span>
          </div>

        </div>
        <p className="text-h4 text-grey-600 font-bold mb-6">Credit card details</p>

        <div className="mb-6">
          <input type="checkbox" name="sameBillingAddress" id="sameBillingAddress" />
          <label htmlFor="sameBillingAddress" className="ml-2  text-grey-600">
            Billing address is same as Passenger 1
          </label>
        </div>
        <input
          type="text"
          placeholder="Name on card"
          value={paymentData.nameOnCard}
          name="nameOnCard"
          onChange={handleInputChange}
          className=" p-2 mb-4 border w-[30rem] border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Card number"
          value={paymentData.cardNumber}
          name="cardNumber"
          onChange={handleInputChange}

          className=" p-2 mb-4 w-[30rem] border border-gray-300 rounded"
        />

        <div className="flex justify-between w-[30rem]">
          <div className="relative ">
          <input
            type="text"
            placeholder="Expiration date"
            value={paymentData.expirationDate}
            name="expirationDate"
            onChange={handleInputChange}

            className=" p-2 mb-4 border w-[14rem] border-gray-300 rounded"
          />
          <span className="text-xs text-grey-400 absolute -bottom-1 left-0">MM/YY</span>
          </div>
          <input
            type="text"
            placeholder="CVV"
            value={paymentData.cvv}
            name="cvv"
            onChange={handleInputChange}
            className=" p-2 mb-4  border border-gray-300 rounded"
          />
        </div>

        <p className="text-h4 text-grey-600 font-bold mt-6 mb-4 ">Create an account</p>
        <p className="text-lg text-grey-400 mb-4">
          Tripma is free to use as a guest, but if you create an account today,
          you can save and view flights, manage your trips, earn rewards, and
          more.
        </p>
        <div>
          <input type="checkbox" name="saveCard" id="saveCard" />
          <label htmlFor="saveCard" className="ml-2  text-grey-600">
            Save card and create account for later
          </label>
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className=" p-2 mb-4 mt-4 border w-[30rem] border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-2 mb-4 w-[30rem] border border-gray-300 rounded"
        />

        <div className="flex items-center mt-4 w-[30rem]">
          <div className="flex-grow border-t border-gray-400 mr-2"></div>
          <span className="text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400 ml-2"></div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button className="flex  border border-purpleBlue rounded-lg px-5 py-3 w-[30rem]  items-center justify-center text-purpleBlue text-lg">
            <Image
              src="/googleicon.png"
              alt="google logo"
              width={14}
              height={14}
              className="mr-6"
            />
            Continue With Google
          </button>
          <button className="flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-[30rem] items-center justify-center text-purpleBlue text-lg">
            <Image
              src="/appleicon.png"
              alt="apple logo"
              width={14}
              height={14}
              className="mr-6"
            />
            Continue With Apple
          </button>
          <button className=" flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-[30rem] items-center justify-center text-purpleBlue text-lg">
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
        <p className="text-h4 text-grey-600 font-bold mt-12">
          Cancellation policy
        </p>
        <p className="text-lg text-grey-400  mt-4">
          This flight has a flexible cancellation policy. If you cancel or
          change your flight up to 30 days before the departure date, you are
          eligible for a free refund. All flights booked on Tripma are backed by
          our satisfaction guarantee, however cancellation policies vary by
          airline. See the full cancellation policy for this flight.
        </p>
        <div className="mt-14 flex gap-10">
          <NavigationButton
            text={"Back to seat select"}
            bgColor={"text-purpleBlue"}
            borderColor={"border-purpleBlue"}
            destination={"/seats/departure"}

          />
          <NavigationButton
            text={"Confirm and pay"}
            color={"text-grey-100"}
            bgColor={"bg-purpleBlue"}
            borderColor={"border-purpleBlue"}
            destination={"/confirmation"}
            disabled={isPaymentValid? false: true}
          />
        </div>
      </div>

      <div className="w-2/5">
        <div className="flex flex-col items-end mt-28">
          {selectedDepartingFlight && (
            <SelectedFlights
              departingFlightInfo={selectedDepartingFlight}
              returningFlightInfo={selectedReturningFlight}
              seatUpgrades={bussinessClassSeatsCount}
            />
          )}
          <NavigationButton
            text={"Confirm and pay"}
            color={"text-grey-100"}
            bgColor={"bg-purpleBlue"}
            borderColor={"border-purpleBlue"}
            destination={"/confirmation"}
            disabled={isPaymentValid? false: true}
          />
        </div>
      </div>
    </div>
  );
}
