import React, { useState } from "react";
import cx from "classnames";

import style from "./dashboard.module.css";

import BusList from "../busList/BusList";
import ButtonGroup from "../../components/button/groupButton/GroupButton";
// import { seatNo } from "../../constant/SeatNo";
import { busesName } from "../../constant/BusName";
import { CustomerName } from "../../constant/CustomerList";
import CustomerContainer from "../Customer";
import OperatorContainer from "../Operator";
// import BusSeats from "../seats/Seat";

const btnGroup = [
  { id: 1, title: "Operator" },
  { id: 2, title: "Customer"},
];

const Dashboard = () => {
  // const [operatorMenu, setOperatorMenu] = useState(false);
  // const [customerMenu, setCustomerMenu] = useState(false);
  // const [selectedSeat, setSelectedSeat] = useState("");
  // const [operatorSeatNo, setOperatorSeatNo] = useState("");

  const [selectedButton, setSelectedButton] = useState('');

  const handleSelect = (btn) => {
    console.log('--------------->>>', btn);
    setSelectedButton(btn.title);
  };

  // const toggleOperatorMenu = () => {
  //   setOperatorMenu(!operatorMenu);
  // };

  // const toggleCustomerMenu = () => {
  //   setCustomerMenu(!customerMenu);
  // };

  // const selectSeat = (s) => {
  //   setSelectedSeat(s.seat);
  //   setOperatorSeatNo(s);
  //   console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------", s.seat);
  // };

  console.log(busesName, "bus name===========================================");

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
          {btnGroup.map((btn) => (
            <ButtonGroup
              key={btn.id}
              onClick={() => handleSelect(btn)}
              style={{
                backgroundColor: btn.title === selectedButton ? "#d84e55" : "",
                color: btn.title === selectedButton ? "#ffffff" : "",
              }}
            >
              {btn.title}
            </ButtonGroup>
          ))}
        </div>
      </div>

      {selectedButton === 'Customer' ? <CustomerContainer /> : <OperatorContainer />}

      {/* <BusSeats
        selectSeatNo={seatNo}
        selectedSeat={selectedSeat}
        onClick={selectSeat}
      /> */}
{/* 
      {operatorMenu && (
        <Operator operatorSeat={operatorSeatNo} onClose={toggleOperatorMenu} />
      )}

      {customerMenu && <Customer onClose={toggleCustomerMenu} />} */}

    </div>
  );
};

export default Dashboard;
