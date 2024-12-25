"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./seatsGrid.css";
import { useGlobalContext } from "@/app/context/store";

const SeatsGrid = ({ passengerCount, getSelectedSeats, bookedSeats }) => {
  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showBusinessClassModal, setShowBusinessClassModal] = useState(false);
  const [pendingSeat, setPendingSeat] = useState(null);

  // Function to handle seat selection
  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (
      selectedSeats.length >= passengerCount &&
      !selectedSeats.includes(seat)
    ) {
      return;
    }

    if(parseInt(seat) <= 5){
      if (parseInt(seat) <= 5 && !selectedSeats.includes(seat)) {
        // Trigger modal for business class confirmation
        setPendingSeat(seat);
        setShowBusinessClassModal(true);
        return;
      }
    }

    toggleSeatSelection(seat)

  };


  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const handleModalConfirm = () => {
    toggleSeatSelection(pendingSeat);
    setPendingSeat(null);
    setShowBusinessClassModal(false);
  };

  const handleModalReject = () => {
    setPendingSeat(null);
    setShowBusinessClassModal(false);
  };

  useEffect(() => {
    getSelectedSeats(selectedSeats);
  }, [selectedSeats]);

  const seats = [
    { seat: "1A", top: "21.3%", left: "46.3%" },
    { seat: "1B", top: "21.3%", left: "48.1%" },
    { seat: "1C", top: "21.3%", left: "50.8%" },
    { seat: "1D", top: "21.3%", left: "52.6%" },
    { seat: "2A", top: "23.2%", left: "46.3%" },
    { seat: "2B", top: "23.2%", left: "48.1%" },
    { seat: "2C", top: "23.2%", left: "50.8%" },
    { seat: "2D", top: "23.2%", left: "52.6%" },
    { seat: "3A", top: "25.3%", left: "46.3%" },
    { seat: "3B", top: "25.3%", left: "48.1%" },
    { seat: "3C", top: "25.3%", left: "50.8%" },
    { seat: "3D", top: "25.3%", left: "52.6%" },
    { seat: "4A", top: "27.3%", left: "46.3%" },
    { seat: "4B", top: "27.3%", left: "48.1%" },
    { seat: "4C", top: "27.3%", left: "50.8%" },
    { seat: "4D", top: "27.3%", left: "52.6%" },
    { seat: "5A", top: "29.3%", left: "46.3%" },
    { seat: "5B", top: "29.3%", left: "48.1%" },
    { seat: "5C", top: "29.3%", left: "50.8%" },
    { seat: "5D", top: "29.3%", left: "52.6%" },

    { seat: "6A", top: "32.9%", left: "46.1%" },
    { seat: "6B", top: "32.9%", left: "47.3%" },
    { seat: "6C", top: "32.9%", left: "48.5%" },
    { seat: "6D", top: "32.9%", left: "50.7%" },
    { seat: "6E", top: "32.9%", left: "51.9%" },
    { seat: "6F", top: "32.9%", left: "53%" },

    { seat: "7A", top: "34.3%", left: "46.1%" },
    { seat: "7B", top: "34.3%", left: "47.3%" },
    { seat: "7C", top: "34.3%", left: "48.5%" },
    { seat: "7D", top: "34.3%", left: "50.7%" },
    { seat: "7E", top: "34.3%", left: "51.9%" },
    { seat: "7F", top: "34.3%", left: "53%" },

    { seat: "8A", top: "35.9%", left: "46.1%" },
    { seat: "8B", top: "35.9%", left: "47.3%" },
    { seat: "8C", top: "35.9%", left: "48.5%" },
    { seat: "8D", top: "35.9%", left: "50.7%" },
    { seat: "8E", top: "35.9%", left: "51.9%" },
    { seat: "8F", top: "35.9%", left: "53%" },

    { seat: "9A", top: "37.4%", left: "46.1%" },
    { seat: "9B", top: "37.4%", left: "47.3%" },
    { seat: "9C", top: "37.4%", left: "48.5%" },
    { seat: "9D", top: "37.4%", left: "50.7%" },
    { seat: "9E", top: "37.4%", left: "51.9%" },
    { seat: "9F", top: "37.4%", left: "53%" },

    { seat: "10A", top: "38.9%", left: "46.1%" },
    { seat: "10B", top: "38.9%", left: "47.3%" },
    { seat: "10C", top: "38.9%", left: "48.5%" },
    { seat: "10D", top: "38.9%", left: "50.7%" },
    { seat: "10E", top: "38.9%", left: "51.9%" },
    { seat: "10F", top: "38.9%", left: "53%" },

    { seat: "11A", top: "40.4%", left: "46.1%" },
    { seat: "11B", top: "40.4%", left: "47.3%" },
    { seat: "11C", top: "40.4%", left: "48.5%" },
    { seat: "11D", top: "40.4%", left: "50.7%" },
    { seat: "11E", top: "40.4%", left: "51.9%" },
    { seat: "11F", top: "40.4%", left: "53%" },

    { seat: "12A", top: "41.9%", left: "46.1%" },
    { seat: "12B", top: "41.9%", left: "47.3%" },
    { seat: "12C", top: "41.9%", left: "48.5%" },
    { seat: "12D", top: "41.9%", left: "50.7%" },
    { seat: "12E", top: "41.9%", left: "51.9%" },
    { seat: "12F", top: "41.9%", left: "53%" },

    { seat: "13A", top: "43.3%", left: "46.1%" },
    { seat: "13B", top: "43.3%", left: "47.3%" },
    { seat: "13C", top: "43.3%", left: "48.5%" },
    { seat: "13D", top: "43.3%", left: "50.7%" },
    { seat: "13E", top: "43.3%", left: "51.9%" },
    { seat: "13F", top: "43.3%", left: "53%" },

    { seat: "14A", top: "45.6%", left: "46.1%" },
    { seat: "14B", top: "45.6%", left: "47.3%" },
    { seat: "14C", top: "45.6%", left: "48.5%" },
    { seat: "14D", top: "45.6%", left: "50.7%" },
    { seat: "14E", top: "45.6%", left: "51.9%" },
    { seat: "14F", top: "45.6%", left: "53%" },

    { seat: "15A", top: "47%", left: "46.1%" },
    { seat: "15B", top: "47%", left: "47.3%" },
    { seat: "15C", top: "47%", left: "48.5%" },
    { seat: "15D", top: "47%", left: "50.7%" },
    { seat: "15E", top: "47%", left: "51.9%" },
    { seat: "15F", top: "47%", left: "53%" },

    { seat: "16A", top: "48.5%", left: "46.1%" },
    { seat: "16B", top: "48.5%", left: "47.3%" },
    { seat: "16C", top: "48.5%", left: "48.5%" },
    { seat: "16D", top: "48.5%", left: "50.7%" },
    { seat: "16E", top: "48.5%", left: "51.9%" },
    { seat: "16F", top: "48.5%", left: "53%" },

    { seat: "17A", top: "50%", left: "46.1%" },
    { seat: "17B", top: "50%", left: "47.3%" },
    { seat: "17C", top: "50%", left: "48.5%" },
    { seat: "17D", top: "50%", left: "50.7%" },
    { seat: "17E", top: "50%", left: "51.9%" },
    { seat: "17F", top: "50%", left: "53%" },

    { seat: "18A", top: "51.5%", left: "46.1%" },
    { seat: "18B", top: "51.5%", left: "47.3%" },
    { seat: "18C", top: "51.5%", left: "48.5%" },
    { seat: "18D", top: "51.5%", left: "50.7%" },
    { seat: "18E", top: "51.5%", left: "51.9%" },
    { seat: "18F", top: "51.5%", left: "53%" },

    { seat: "19A", top: "53.7%", left: "46.1%" },
    { seat: "19B", top: "53.7%", left: "47.3%" },
    { seat: "19C", top: "53.7%", left: "48.5%" },
    { seat: "19D", top: "53.7%", left: "50.7%" },
    { seat: "19E", top: "53.7%", left: "51.9%" },
    { seat: "19F", top: "53.7%", left: "53%" },

    { seat: "20A", top: "55.1%", left: "46.1%" },
    { seat: "20B", top: "55.1%", left: "47.3%" },
    { seat: "20C", top: "55.1%", left: "48.5%" },
    { seat: "20D", top: "55.1%", left: "50.7%" },
    { seat: "20E", top: "55.1%", left: "51.9%" },
    { seat: "20F", top: "55.1%", left: "53%" },

    { seat: "21A", top: "56.6%", left: "46.1%" },
    { seat: "21B", top: "56.6%", left: "47.3%" },
    { seat: "21C", top: "56.6%", left: "48.5%" },
    { seat: "21D", top: "56.6%", left: "50.7%" },
    { seat: "21E", top: "56.6%", left: "51.9%" },
    { seat: "21F", top: "56.6%", left: "53%" },

    { seat: "22A", top: "58.1%", left: "46.1%" },
    { seat: "22B", top: "58.1%", left: "47.3%" },
    { seat: "22C", top: "58.1%", left: "48.5%" },
    { seat: "22D", top: "58.1%", left: "50.7%" },
    { seat: "22E", top: "58.1%", left: "51.9%" },
    { seat: "22F", top: "58.1%", left: "53%" },

    { seat: "23A", top: "59.6%", left: "46.1%" },
    { seat: "23B", top: "59.6%", left: "47.3%" },
    { seat: "23C", top: "59.6%", left: "48.5%" },
    { seat: "23D", top: "59.6%", left: "50.7%" },
    { seat: "23E", top: "59.6%", left: "51.9%" },
    { seat: "23F", top: "59.6%", left: "53%" },

    { seat: "24A", top: "61%", left: "46.1%" },
    { seat: "24B", top: "61%", left: "47.3%" },
    { seat: "24C", top: "61%", left: "48.5%" },
    { seat: "24D", top: "61%", left: "50.7%" },
    { seat: "24E", top: "61%", left: "51.9%" },
    { seat: "24F", top: "61%", left: "53%" },

    { seat: "25A", top: "62.5%", left: "46.1%" },
    { seat: "25B", top: "62.5%", left: "47.3%" },
    { seat: "25C", top: "62.5%", left: "48.5%" },
    { seat: "25D", top: "62.5%", left: "50.7%" },
    { seat: "25E", top: "62.5%", left: "51.9%" },
    { seat: "25F", top: "62.5%", left: "53%" },

    { seat: "26A", top: "64%", left: "46.1%" },
    { seat: "26B", top: "64%", left: "47.3%" },
    { seat: "26C", top: "64%", left: "48.5%" },
    { seat: "26D", top: "64%", left: "50.7%" },
    { seat: "26E", top: "64%", left: "51.9%" },
    { seat: "26F", top: "64%", left: "53%" },

    { seat: "27A", top: "65.5%", left: "46.1%" },
    { seat: "27B", top: "65.5%", left: "47.3%" },
    { seat: "27C", top: "65.5%", left: "48.5%" },
    { seat: "27D", top: "65.5%", left: "50.7%" },
    { seat: "27E", top: "65.5%", left: "51.9%" },
    { seat: "27F", top: "65.5%", left: "53%" },

    { seat: "28A", top: "67%", left: "46.1%" },
    { seat: "28B", top: "67%", left: "47.3%" },
    { seat: "28C", top: "67%", left: "48.5%" },
    { seat: "28D", top: "67%", left: "50.7%" },
    { seat: "28E", top: "67%", left: "51.9%" },
    { seat: "28F", top: "67%", left: "53%" },

    { seat: "29A", top: "69.2%", left: "46.1%" },
    { seat: "29B", top: "69.2%", left: "47.3%" },
    { seat: "29C", top: "69.2%", left: "48.5%" },
    { seat: "29D", top: "69.2%", left: "50.7%" },
    { seat: "29E", top: "69.2%", left: "51.9%" },
    { seat: "29F", top: "69.2%", left: "53%" },

    { seat: "30A", top: "70.7%", left: "46.1%" },
    { seat: "30B", top: "70.7%", left: "47.3%" },
    { seat: "30C", top: "70.7%", left: "48.5%" },
    { seat: "30D", top: "70.7%", left: "50.7%" },
    { seat: "30E", top: "70.7%", left: "51.9%" },
    { seat: "30F", top: "70.7%", left: "53%" },

    { seat: "31A", top: "72.2%", left: "46.1%" },
    { seat: "31B", top: "72.2%", left: "47.3%" },
    { seat: "31C", top: "72.2%", left: "48.5%" },
    { seat: "31D", top: "72.2%", left: "50.7%" },
    { seat: "31E", top: "72.2%", left: "51.9%" },
    { seat: "31F", top: "72.2%", left: "53%" },

    { seat: "32A", top: "73.7%", left: "46.1%" },
    { seat: "32B", top: "73.7%", left: "47.3%" },
    { seat: "32C", top: "73.7%", left: "48.5%" },
    { seat: "32D", top: "73.7%", left: "50.7%" },
    { seat: "32E", top: "73.7%", left: "51.9%" },
    { seat: "32F", top: "73.7%", left: "53%" },

    { seat: "33A", top: "75.2%", left: "46.1%" },
    { seat: "33B", top: "75.2%", left: "47.3%" },
    { seat: "33C", top: "75.2%", left: "48.5%" },
    { seat: "33D", top: "75.2%", left: "50.7%" },
    { seat: "33E", top: "75.2%", left: "51.9%" },
    { seat: "33F", top: "75.2%", left: "53%" },
  ];

  const getRowClass = (seat) => {
    const rowNumber = seat.match(/^(\d+)/);
    return rowNumber ? `row-${rowNumber[0]}` : "";
  };

  return (
    <div className="absolute -top-64 -left-[46rem] ">
      {/* Airplane Image */}
      <Image
        src="/airplane1.svg"
        alt="seats location in the airplane"
        width={2426}
        height={2965}
        className="relative scale-120"
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
        {showBusinessClassModal && (
  <>
    <div className="modal-overlay" onClick={handleModalReject}></div>
    <div className="modal p-10">
      <p className="text-h3 text-grey-600 mb-2">Upgrade seat</p>
      <p className="text-lg text-grey-400 mb-2">Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
      <div className="flex items-end justify-end">
      <button className="button2" onClick={handleModalReject}>Cancel</button>
      <button className="button1" onClick={handleModalConfirm}>Upgrade for $199</button>
      </div>
    </div>
  </>
)}

      </div>
    </div>
  );
};

export default SeatsGrid;
