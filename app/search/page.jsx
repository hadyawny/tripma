'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchPage({params}) {

  const searchParams = useSearchParams();
  const fromAirport = searchParams.get('from');
  const toAirport = searchParams.get('to');
  const depatDate = searchParams.get('startDate');
  const arriveDate = searchParams.get('endDate') || null;
  const adults = searchParams.get('adults')|| 1;
  const minors = searchParams.get('minors')|| 0;


  return (
    <div>
      <h1>Search Page</h1>
      <p>From: {fromAirport}</p>
      <p>To: {toAirport}</p>
      <p>Departure Date: {depatDate}</p>
      {arriveDate && <p>Arrival Date: {arriveDate}</p>}
      <p>Adults: {adults}</p>
      <p>Minors: {minors}</p>
    </div>
  )
}
