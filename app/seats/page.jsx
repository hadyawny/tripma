"use client"
import React from 'react'
import { useGlobalContext } from '../context/store'

export default function Seatspage() {
    const{passengerInfo,selectedDepartingFlight, selectedReturningFlight}=useGlobalContext();
    console.log({passengerInfo,selectedDepartingFlight,selectedReturningFlight});
    
  return (
    <div>

    </div>
  )
}
