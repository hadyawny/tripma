import React from 'react'
import SelectedFlights from './selectedFlights'

export default function TotalPrice({selectedDepartingFlight,selectedReturningFlight,isRoundTrip}) {
  const totalPrice = selectedReturningFlight? selectedDepartingFlight.price+selectedReturningFlight.price : selectedDepartingFlight.price ;
  const taxes = totalPrice*(24/100);
  const subtotal = totalPrice- taxes;

  return (
    <div className='flex flex-col items-end'>
      <SelectedFlights departingFlightInfo={selectedDepartingFlight} returningFlightInfo={selectedReturningFlight}/>
      <div><span className='mr-10'>Subtotal</span><span>${subtotal}</span></div>
      <div><span className='mr-10'>Taxes and Fees</span><span>${taxes}</span></div>
      <div className='mb-10'><span className='mr-10 '>Total</span><span>${totalPrice}</span></div>

      {isRoundTrip && !selectedReturningFlight ? <SaveInfoButton/> :<PassengerInfoButton/>  }

    </div>
  )
}


export  function PassengerInfoButton() {
  return (
    <button className="text-lg text-grey-100 bg-purpleBlue px-5 py-3 border rounded-lg border-purpleBlue">
              Passenger Information
            </button>
  )
}

export  function SaveInfoButton() {
  return (
    <button className="text-lg text-purpleBlue px-5 py-3 border rounded-lg border-purpleBlue">
              Save and close
            </button>
  )
}