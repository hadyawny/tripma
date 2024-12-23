import React from 'react'

export default function TotalPrice({selectedDepartingFlight,selectedReturningFlight}) {
  return (
    <div>
      <p>{selectedDepartingFlight.price}</p>
      <p>{selectedReturningFlight && selectedReturningFlight.price}</p>

    </div>
  )
}
