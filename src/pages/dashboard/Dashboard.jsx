import React, { useState } from "react";
import cx from "classnames";

import style from "./dashboard.module.css";

import BusList from "../busList/BusList";
import ButtonGroup from "../../components/button/groupButton/GroupButton";
import { seatNo } from "../../constant/SeatNo";
import { busesName } from "../../constant/BusName";
import Operator from "../operator/Operator";
import Customer from "../customer/Customer";
import { CustomerName } from "../../constant/CustomerList";
import BusSeats from "../seats/Seat";
// import Tab from "../../components/tab/Tab";

const Dashboard = () => {
  const [operatorMenu, setOperatorMenu] = useState(false);
  const [customerMenu, setCustomerMenu] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");
  const [operatorSeatNo, setOperatorSeatNo] = useState("");
  const [buttonValue, setButtonValue] = useState("");

  const toggleOperatorMenu = () => {
    setOperatorMenu(!operatorMenu);
  };

  const toggleCustomerMenu = () => {
    setCustomerMenu(!customerMenu);
  };

  const selectSeat = (s) => {
    setSelectedSeat(s.seat);
    setOperatorSeatNo(s);
    console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------", s.seat);
  };

  const handleClick = () => {
    setButtonValue(buttonValue, "operator");
  };

  // console.log(busesName, "bus name===========================================");

  return (
    <div className={style.root}>
      <div className={style.display_flex}>
        <div>
          <BusList name="bus" busList={busesName} />
          <BusList
            name="Customer"
            busList={CustomerName}
            className={style.margin}
          />
        </div>
        <div className={cx(style.display, style.margin)}>
          <ButtonGroup onClick={handleClick}>Operator</ButtonGroup>
          <ButtonGroup onClick={toggleCustomerMenu}>Customer</ButtonGroup>
        </div>
      </div>

      <BusSeats selectSeatNo={seatNo} selectedSeat={selectedSeat} onClick={selectSeat}/>

      {operatorMenu && (
        <Operator operatorSeat={operatorSeatNo} onClose={toggleOperatorMenu} />
      )}

      {customerMenu && <Customer onClose={toggleCustomerMenu} />}

      {/* <Tab /> */}
    </div>
  );
};

export default Dashboard;
