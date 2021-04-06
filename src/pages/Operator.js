import React, { useState } from "react";
import { seatNo } from "../constant/SeatNo";
import BusSeats from "./seats/Seat";
import Operator from '../pages/operator/Operator.jsx'

const OperatorContainer = () => {
  const [operatorMenu, setOperatorMenu] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");
  const [operatorSeatNo, setOperatorSeatNo] = useState("");

  const toggleOperatorMenu = () => {
    setSelectedSeat(null);
    setOperatorMenu(!operatorMenu);
  };

  const selectSeat = (s) => {
    setSelectedSeat(s.seat);
    setOperatorSeatNo(s);
    console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------", s);
  };

  return (
    <div>
      <BusSeats
        selectSeatNo={seatNo}
        selectedSeat={selectedSeat}
        onClick={(s) => selectSeat(s)}
      />
      {selectedSeat && <Operator operatorSeat={operatorSeatNo} onClose={toggleOperatorMenu} />}
    </div>
  );
}

export default OperatorContainer;
