import React, { useState } from "react";
import { seatNo } from "../constant/SeatNo";
import BusSeats from "./seats/Seat";
import Customer from "../pages/customer/Customer.jsx";

const array = [];

const CustomerContainer = () => {
  const [customerMenu, setCustomerMenu] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState('');

  const toggleCustomerMenu = () => {
    setSelectedSeat(null);
    setCustomerMenu(!customerMenu);
  };

  const selectSeat = (s) => {
    setSelectedSeat(s.seat);
    array.push(s);    //for select object
    // array.push(s.seat);    //for select array
    console.log(s);
  };

  console.log(selectedSeat, "===========================array");

  return (
    <>
      <BusSeats
        selectSeatNo={seatNo}
        selectedSeat={selectedSeat}
        seatedArray={array}
        onClick={(s)=> selectSeat(s)}
      />
      {selectedSeat && <Customer onClose={toggleCustomerMenu} />}
    </>
  );
};

export default CustomerContainer;
