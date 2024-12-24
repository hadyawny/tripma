'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./seatsGrid.css";

const SeatsGrid = ({passengerCount,getSelectedSeats,bookedSeats}) => {
  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatClick = (seat) => {

    if (bookedSeats.includes(seat)) {
        return;
      }

      if (selectedSeats.length >= passengerCount && !selectedSeats.includes(seat)) {
        return;
      }

    setSelectedSeats(
      (prevSeats) =>
        prevSeats.includes(seat)
          ? prevSeats.filter((s) => s !== seat) 
          : [...prevSeats, seat] 
    );
  };


useEffect(() => {
    getSelectedSeats(selectedSeats);
  }, [selectedSeats]); 

  const seats = [
    { seat: "1A", top: "16.5%", left: "20%" },
    { seat: "1B", top: "16.5%", left: "22%" },
    { seat: "1C", top: "16.5%", left: "26%" },
    { seat: "1D", top: "16.5%", left: "28%" },
    { seat: "2A", top: "19%", left: "20%" },
    { seat: "2B", top: "19%", left: "22%" },
    { seat: "2C", top: "19%", left: "26%" },
    { seat: "2D", top: "19%", left: "28%" },
    { seat: "3A", top: "21.5%", left: "20%" },
    { seat: "3B", top: "21.5%", left: "22%" },
    { seat: "3C", top: "21.5%", left: "26%" },
    { seat: "3D", top: "21.5%", left: "28%" },
    { seat: "4A", top: "24%", left: "20%" },
    { seat: "4B", top: "24%", left: "22%" },
    { seat: "4C", top: "24%", left: "26%" },
    { seat: "4D", top: "24%", left: "28%" },
    { seat: "5A", top: "26.3%", left: "20%" },
    { seat: "5B", top: "26.3%", left: "22%" },
    { seat: "5C", top: "26.3%", left: "26%" },
    { seat: "5D", top: "26.3%", left: "28%" },
    { seat: "6A", top: "30.6%", left: "19.9%" },
    { seat: "6B", top: "30.6%", left: "21.4%" },
    { seat: "6C", top: "30.6%", left: "22.9%" },
    { seat: "6D", top: "30.6%", left: "25.6%" },
    { seat: "6E", top: "30.6%", left: "27.1%" },
    { seat: "6F", top: "30.6%", left: "28.6%" },
    { seat: "7A", top: "32.3%", left: "19.9%" },
    { seat: "7B", top: "32.3%", left: "21.4%" },
    { seat: "7C", top: "32.3%", left: "22.9%" },
    { seat: "7D", top: "32.3%", left: "25.6%" },
    { seat: "7E", top: "32.3%", left: "27.1%" },
    { seat: "7F", top: "32.3%", left: "28.6%" },
    { seat: "8A", top: "34.0%", left: "19.9%" },
    { seat: "8B", top: "34.0%", left: "21.4%" },
    { seat: "8C", top: "34.0%", left: "22.9%" },
    { seat: "8D", top: "34.0%", left: "25.6%" },
    { seat: "8E", top: "34.0%", left: "27.1%" },
    { seat: "8F", top: "34.0%", left: "28.6%" },
    { seat: "9A", top: "35.8%", left: "19.9%" },
    { seat: "9B", top: "35.8%", left: "21.4%" },
    { seat: "9C", top: "35.8%", left: "22.9%" },
    { seat: "9D", top: "35.8%", left: "25.6%" },
    { seat: "9E", top: "35.8%", left: "27.1%" },
    { seat: "9F", top: "35.8%", left: "28.6%" },
    { seat: "10A", top: "37.7%", left: "19.9%" },
    { seat: "10B", top: "37.7%", left: "21.4%" },
    { seat: "10C", top: "37.7%", left: "22.9%" },
    { seat: "10D", top: "37.7%", left: "25.6%" },
    { seat: "10E", top: "37.7%", left: "27.1%" },
    { seat: "10F", top: "37.7%", left: "28.6%" },
    { seat: "11A", top: "39.4%", left: "19.9%" },
    { seat: "11B", top: "39.4%", left: "21.4%" },
    { seat: "11C", top: "39.4%", left: "22.9%" },
    { seat: "11D", top: "39.4%", left: "25.6%" },
    { seat: "11E", top: "39.4%", left: "27.1%" },
    { seat: "11F", top: "39.4%", left: "28.6%" },

    { seat: "12A", top: "41.3%", left: "19.9%" },
    { seat: "12B", top: "41.3%", left: "21.4%" },
    { seat: "12C", top: "41.3%", left: "22.9%" },
    { seat: "12D", top: "41.3%", left: "25.6%" },
    { seat: "12E", top: "41.3%", left: "27.1%" },
    { seat: "12F", top: "41.3%", left: "28.6%" },
    { seat: "13A", top: "43%", left: "19.9%" },
    { seat: "13B", top: "43%", left: "21.4%" },
    { seat: "13C", top: "43%", left: "22.9%" },
    { seat: "13D", top: "43%", left: "25.6%" },
    { seat: "13E", top: "43%", left: "27.1%" },
    { seat: "13F", top: "43%", left: "28.6%" },

    { seat: "14A", top: "45.8%", left: "19.9%" },
    { seat: "14B", top: "45.8%", left: "21.4%" },
    { seat: "14C", top: "45.8%", left: "22.9%" },
    { seat: "14D", top: "45.8%", left: "25.6%" },
    { seat: "14E", top: "45.8%", left: "27.1%" },
    { seat: "14F", top: "45.8%", left: "28.6%" },

    { seat: "15A", top: "47.5%", left: "19.9%" },
    { seat: "15B", top: "47.5%", left: "21.4%" },
    { seat: "15C", top: "47.5%", left: "22.9%" },
    { seat: "15D", top: "47.5%", left: "25.6%" },
    { seat: "15E", top: "47.5%", left: "27.1%" },
    { seat: "15F", top: "47.5%", left: "28.6%" },

    { seat: "16A", top: "49.3%", left: "19.9%" },
    { seat: "16B", top: "49.3%", left: "21.4%" },
    { seat: "16C", top: "49.3%", left: "22.9%" },
    { seat: "16D", top: "49.3%", left: "25.6%" },
    { seat: "16E", top: "49.3%", left: "27.1%" },
    { seat: "16F", top: "49.3%", left: "28.6%" },

    { seat: "17A", top: "51.1%", left: "19.9%" },
    { seat: "17B", top: "51.1%", left: "21.4%" },
    { seat: "17C", top: "51.1%", left: "22.9%" },
    { seat: "17D", top: "51.1%", left: "25.6%" },
    { seat: "17E", top: "51.1%", left: "27.1%" },
    { seat: "17F", top: "51.1%", left: "28.6%" },

    { seat: "18A", top: "52.9%", left: "19.9%" },
    { seat: "18B", top: "52.9%", left: "21.4%" },
    { seat: "18C", top: "52.9%", left: "22.9%" },
    { seat: "18D", top: "52.9%", left: "25.6%" },
    { seat: "18E", top: "52.9%", left: "27.1%" },
    { seat: "18F", top: "52.9%", left: "28.6%" },

    { seat: "19A", top: "55.7%", left: "19.9%" },
    { seat: "19B", top: "55.7%", left: "21.4%" },
    { seat: "19C", top: "55.7%", left: "22.9%" },
    { seat: "19D", top: "55.7%", left: "25.6%" },
    { seat: "19E", top: "55.7%", left: "27.1%" },
    { seat: "19F", top: "55.7%", left: "28.6%" },

    { seat: "20A", top: "57.4%", left: "19.9%" },
    { seat: "20B", top: "57.4%", left: "21.4%" },
    { seat: "20C", top: "57.4%", left: "22.9%" },
    { seat: "20D", top: "57.4%", left: "25.6%" },
    { seat: "20E", top: "57.4%", left: "27.1%" },
    { seat: "20F", top: "57.4%", left: "28.6%" },

    { seat: "21A", top: "59.2%", left: "19.9%" },
    { seat: "21B", top: "59.2%", left: "21.4%" },
    { seat: "21C", top: "59.2%", left: "22.9%" },
    { seat: "21D", top: "59.2%", left: "25.6%" },
    { seat: "21E", top: "59.2%", left: "27.1%" },
    { seat: "21F", top: "59.2%", left: "28.6%" },

    { seat: "22A", top: "60.9%", left: "19.9%" },
    { seat: "22B", top: "60.9%", left: "21.4%" },
    { seat: "22C", top: "60.9%", left: "22.9%" },
    { seat: "22D", top: "60.9%", left: "25.6%" },
    { seat: "22E", top: "60.9%", left: "27.1%" },
    { seat: "22F", top: "60.9%", left: "28.6%" },

    { seat: "23A", top: "62.7%", left: "19.9%" },
    { seat: "23B", top: "62.7%", left: "21.4%" },
    { seat: "23C", top: "62.7%", left: "22.9%" },
    { seat: "23D", top: "62.7%", left: "25.6%" },
    { seat: "23E", top: "62.7%", left: "27.1%" },
    { seat: "23F", top: "62.7%", left: "28.6%" },

    { seat: "24A", top: "64.5%", left: "19.9%" },
    { seat: "24B", top: "64.5%", left: "21.4%" },
    { seat: "24C", top: "64.5%", left: "22.9%" },
    { seat: "24D", top: "64.5%", left: "25.6%" },
    { seat: "24E", top: "64.5%", left: "27.1%" },
    { seat: "24F", top: "64.5%", left: "28.6%" },

    { seat: "25A", top: "66.4%", left: "19.9%" },
    { seat: "25B", top: "66.4%", left: "21.4%" },
    { seat: "25C", top: "66.4%", left: "22.9%" },
    { seat: "25D", top: "66.4%", left: "25.6%" },
    { seat: "25E", top: "66.4%", left: "27.1%" },
    { seat: "25F", top: "66.4%", left: "28.6%" },

    { seat: "26A", top: "68.2%", left: "19.9%" },
    { seat: "26B", top: "68.2%", left: "21.4%" },
    { seat: "26C", top: "68.2%", left: "22.9%" },
    { seat: "26D", top: "68.2%", left: "25.6%" },
    { seat: "26E", top: "68.2%", left: "27.1%" },
    { seat: "26F", top: "68.2%", left: "28.6%" },

    { seat: "27A", top: "70%", left: "19.9%" },
    { seat: "27B", top: "70%", left: "21.4%" },
    { seat: "27C", top: "70%", left: "22.9%" },
    { seat: "27D", top: "70%", left: "25.6%" },
    { seat: "27E", top: "70%", left: "27.1%" },
    { seat: "27F", top: "70%", left: "28.6%" },

    { seat: "28A", top: "71.8%", left: "19.9%" },
    { seat: "28B", top: "71.8%", left: "21.4%" },
    { seat: "28C", top: "71.8%", left: "22.9%" },
    { seat: "28D", top: "71.8%", left: "25.6%" },
    { seat: "28E", top: "71.8%", left: "27.1%" },
    { seat: "28F", top: "71.8%", left: "28.6%" },

    { seat: "29A", top: "74.6%", left: "19.9%" },
    { seat: "29B", top: "74.6%", left: "21.4%" },
    { seat: "29C", top: "74.6%", left: "22.9%" },
    { seat: "29D", top: "74.6%", left: "25.6%" },
    { seat: "29E", top: "74.6%", left: "27.1%" },
    { seat: "29F", top: "74.6%", left: "28.6%" },

    { seat: "30A", top: "76.4%", left: "19.9%" },
    { seat: "30B", top: "76.4%", left: "21.4%" },
    { seat: "30C", top: "76.4%", left: "22.9%" },
    { seat: "30D", top: "76.4%", left: "25.6%" },
    { seat: "30E", top: "76.4%", left: "27.1%" },
    { seat: "30F", top: "76.4%", left: "28.6%" },

    { seat: "31A", top: "78.2%", left: "19.9%" },
    { seat: "31B", top: "78.2%", left: "21.4%" },
    { seat: "31C", top: "78.2%", left: "22.9%" },
    { seat: "31D", top: "78.2%", left: "25.6%" },
    { seat: "31E", top: "78.2%", left: "27.1%" },
    { seat: "31F", top: "78.2%", left: "28.6%" },

    { seat: "32A", top: "80%", left: "19.9%" },
    { seat: "32B", top: "80%", left: "21.4%" },
    { seat: "32C", top: "80%", left: "22.9%" },
    { seat: "32D", top: "80%", left: "25.6%" },
    { seat: "32E", top: "80%", left: "27.1%" },
    { seat: "32F", top: "80%", left: "28.6%" },

    { seat: "33A", top: "81.7%", left: "19.9%" },
    { seat: "33B", top: "81.7%", left: "21.4%" },
    { seat: "33C", top: "81.7%", left: "22.9%" },
    { seat: "33D", top: "81.7%", left: "25.6%" },
    { seat: "33E", top: "81.7%", left: "27.1%" },
    { seat: "33F", top: "81.7%", left: "28.6%" },
  ];

  const getRowClass = (seat) => {
    const rowNumber = seat.match(/^(\d+)/);
    return rowNumber ? `row-${rowNumber[0]}` : "";
  };

  return (
    <div className="">
      {/* Airplane Image */}
      <Image
        src="/airplane1.svg"
        alt="seats location in the airplane"
        width={2426}
        height={2965}
        className="absolute top-16 -left-[30rem] scale-125"
      />
      {/* Seat Grid */}
      <div className="absolute top-0 left-0 w-full h-full">
        {seats.map(({ seat, top, left }) => {
          const rowClass = getRowClass(seat); // Get row-specific class dynamically
          const isBooked = bookedSeats.includes(seat);

          return (
            <div
              key={seat}
              className={`seat-box ${rowClass} ${
                selectedSeats.includes(seat) ? "selected" : ""
              }
              
              ${isBooked ? "booked" : ""}
              `}
              style={{ top, left }}
              onClick={() => handleSeatClick(seat)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatsGrid;
