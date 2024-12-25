'use client'

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
    selectedDepartingFlight: null,
    setSelectedDepartingFlight: () => {},
    selectedReturningFlight: null,
    setSelectedReturningFlight: () => {},
    passengerInfo: null,
    setPassengerInfo: () => {},
    passengersCount: 1,
    setPassengersCount: () => {},
    selectedSeatsDeparting: null,
    setSelectedSeatsDeparting: () => {},
    selectedSeatsReturning: null,
    setSelectedSeatsReturning: () => {},
  });

// Context Provider Component
export const GlobalContextProvider = ({ children }) => {
    const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(null);
    const [selectedReturningFlight, setSelectedReturningFlight] = useState(null);
    const [passengerInfo, setPassengerInfo] = useState(null);
    const [passengersCount, setPassengersCount] = useState(1);
    const [selectedSeatsDeparting, setSelectedSeatsDeparting] = useState(null);
    const [selectedSeatsReturning, setSelectedSeatsReturning] = useState(null);



  
    return (
      <GlobalContext.Provider
        value={{
          selectedDepartingFlight,
          setSelectedDepartingFlight,
          selectedReturningFlight,
          setSelectedReturningFlight,
          passengerInfo,
          setPassengerInfo,
          passengersCount,
          setPassengersCount,
          selectedSeatsDeparting,
          setSelectedSeatsDeparting,
          selectedSeatsReturning,
          setSelectedSeatsReturning,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
  // Custom hook to use the GlobalContext
  export const useGlobalContext = () => useContext(GlobalContext);