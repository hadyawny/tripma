'use client'

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
    selectedDepartingFlight: null,
    setSelectedDepartingFlight: () => {},
    selectedReturningFlight: null,
    setSelectedReturningFlight: () => {},
    passengerInfo: null,
    setPassengerInfo: () => {},
  });

// Context Provider Component
export const GlobalContextProvider = ({ children }) => {
    const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(null);
    const [selectedReturningFlight, setSelectedReturningFlight] = useState(null);
    const [passengerInfo, setPassengerInfo] = useState(null);

  
    return (
      <GlobalContext.Provider
        value={{
          selectedDepartingFlight,
          setSelectedDepartingFlight,
          selectedReturningFlight,
          setSelectedReturningFlight,
          passengerInfo,
          setPassengerInfo,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
  // Custom hook to use the GlobalContext
  export const useGlobalContext = () => useContext(GlobalContext);