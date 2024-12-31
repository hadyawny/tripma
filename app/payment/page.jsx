"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import NavigationButton from "../components/navigationButton";
import SelectedFlights from "../components/search/selectedFlights";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingCircle from "../components/loadingCircle";
import { z } from "zod";

export default function PaymentPage() {
  const {
    selectedDepartingFlight,
    selectedReturningFlight,
    selectedSeatsDeparting,
    selectedSeatsReturning,
    passengerInfo,
    
  } = useGlobalContext();

  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated" || !selectedDepartingFlight) {
      router.push("/");
    }
  }, [status, selectedDepartingFlight]);
  const [formErrors, setFormErrors] = useState({}); 

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
  });


  const paymentDataSchema = z.object({
    cardNumber: z
      .string()
      .min(16, 'Card number must be 16 digits')
      .max(16, 'Card number must be 16 digits')
      .regex(/^\d{16}$/, 'Card number must contain only numbers'),
    
    nameOnCard: z
      .string()
      .min(1, 'Name on card is required')
      .max(100, 'Name on card is too long'),
  
    expirationDate: z
      .string()
      .refine(val => /^\d{2}\/\d{2}$/.test(val), {
        message: 'Expiration date must be in MM/YY format',
      })
      .refine(val => {
        const [month, year] = val.split('/');
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear() % 100;
        return (
          parseInt(year) > currentYear ||
          (parseInt(year) === currentYear && parseInt(month) >= currentMonth)
        );
      }, {
        message: 'Expiration date cannot be in the past',
      }),
  
    cvv: z
      .string()
      .length(3, 'CVV must be 3 digits')
      .regex(/^\d{3}$/, 'CVV must be a 3-digit number'),
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

    const departingCount = selectedSeatsDeparting
      ? countBusinessClassSeats(selectedSeatsDeparting)
      : 0;
    const returningCount = selectedSeatsReturning
      ? countBusinessClassSeats(selectedSeatsReturning)
      : 0;

    setbussinessClassSeatsCount(departingCount + returningCount);
  }, [selectedSeatsDeparting, selectedSeatsReturning]);

   async function handleConfirmAndPay() {
    const result = paymentDataSchema.safeParse(paymentData);

    if (!result.success) {
      const errors = result.error.format();
      console.log(errors);
      
      const formattedErrors = Object.keys(errors).reduce((acc, key) => {
        const errorMessages = errors[key]?._errors || [];
      
        acc[key] = errorMessages.length > 0 ? errorMessages[0] : ''; 
      
        return acc;
      }, {});
      setFormErrors(formattedErrors); 
      console.log(formattedErrors);
      
      return;
    }
    setFormErrors({})

    try {


          const bookingObject= {
            passengerList: passengerInfo,
            selectedDepartingFlight: selectedDepartingFlight._id,
            selectedReturningFlight: selectedReturningFlight? selectedReturningFlight._id : null,
            selectedSeatsDeparting: selectedSeatsDeparting,
            selectedSeatsReturning: selectedSeatsReturning? selectedSeatsReturning : null,
            user_id: session.user._id,
          }
          
          
          const response = await fetch("http://localhost:3000/api/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingObject),
          });
    
          if (response.ok){
            router.push("/confirmation");
          }
        } catch (e) {
          
        }



  }



  if (
    !selectedDepartingFlight ||
    status === "loading" ||
    status === "unauthenticated"
  ) {
    return <LoadingCircle />;
  }

  return (
    <div className="flex mx-24 my-14">
      <div className="w-3/5 flex flex-col items-start ">
        <p className="text-h3 text-purpleBlue mb-4">Payment method</p>
        <p className="text-lg text-grey-400 mb-9">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
        <div className="w-[43rem] border rounded-lg border-purpleBlue flex mb-10">
          <div className="flex bg-purpleBlue py-3 px-5 border rounded-lg border-purpleBlue ">
            <Image
              src="/ccicon.svg"
              alt="credit card icon"
              width={14}
              height={11}
              className="mr-2"
            />
            <span className="text-lg text-grey-100 ">Credit card</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image
              src="/googleiconpayment.svg"
              alt="credit card icon"
              width={14}
              height={11}
              className="mr-2"
            />
            <span className="text-lg text-purpleBlue ">Google Pay</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image
              src="/appleiconpayment.svg"
              alt="credit card icon"
              width={14}
              height={11}
              className="mr-2"
            />
            <span className="text-lg text-purpleBlue ">Apple pay</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image
              src="/paypalicon.svg"
              alt="credit card icon"
              width={14}
              height={11}
              className="mr-2"
            />
            <span className="text-lg text-purpleBlue ">Paypal</span>
          </div>
          <div className="flex  py-3 px-5 ">
            <Image
              src="/cryptoicon.svg"
              alt="credit card icon"
              width={14}
              height={11}
              className="mr-2"
            />
            <span className="text-lg text-purpleBlue ">Crypto</span>
          </div>
        </div>
        <p className="text-h4 text-grey-600 font-bold mb-6">
          Credit card details
        </p>

        <div className="mb-6">
          <input
            type="checkbox"
            name="sameBillingAddress"
            id="sameBillingAddress"
          />
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
        {formErrors.nameOnCard && (
          <div className="text-red text-sm">{formErrors.nameOnCard}</div>
        )}
        <div className="mb-4">

        <input
          type="text"
          placeholder="Card number"
          value={paymentData.cardNumber}
          name="cardNumber"
          onChange={handleInputChange}
          className=" p-2 mb-1 w-[30rem] border border-gray-300 rounded"
        />
        {formErrors.cardNumber && (
          <div className="text-red text-sm">{formErrors.cardNumber}</div>
        )}

        </div>

        <div className="flex justify-between w-[30rem]">
          <div className="relative mb-4 ">
            <input
              type="text"
              placeholder="Expiration date"
              value={paymentData.expirationDate}
              name="expirationDate"
              onChange={handleInputChange}
              className=" p-2 mb-1 border w-[14rem] border-gray-300 rounded"
            />
            {!formErrors.expirationDate && <span className="text-xs text-grey-400 absolute -bottom-4 left-0">
              MM/YY
            </span>}
            {formErrors.expirationDate && (
              <div className="text-red text-sm ">{formErrors.expirationDate}</div>
            )}
          </div>
          <div className="mb-4">
          <input
            type="text"
            placeholder="CVV"
            value={paymentData.cvv}
            name="cvv"
            onChange={handleInputChange}
            className=" p-2 mb-1  border border-gray-300 rounded"
          />
          {formErrors.cvv && (
            <div className="text-red text-sm">{formErrors.cvv}</div>
          )}
          </div>
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
            disabled={isPaymentValid ? false : true}
            func={handleConfirmAndPay}

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
            disabled={isPaymentValid ? false : true}
            func={handleConfirmAndPay}
          />
        </div>
      </div>
    </div>
  );
}
