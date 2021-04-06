import React, { useState } from "react";
import { seatNo } from "../constant/SeatNo";
import BusSeats from "./seats/Seat";
import Customer from "../pages/customer/Customer.jsx";

const CustomerContainer = () => {
  const [customerMenu, setCustomerMenu] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");

  const toggleCustomerMenu = () => {
    setSelectedSeat(null);
    setCustomerMenu(!customerMenu);
  };

  const selectSeat = (s) => {
    setSelectedSeat(s.seat);
    console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------", s.seat);
  };

  return (
    <div>
      <BusSeats
        selectSeatNo={seatNo}
        selectedSeat={selectedSeat}
        onClick={selectSeat}
      />
      {selectedSeat && <Customer onClose={toggleCustomerMenu} />}
    </div>
  );
};

export default CustomerContainer;
