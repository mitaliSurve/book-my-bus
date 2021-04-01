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
// import Tab from "../../components/tab/Tab";

const Dashboard = () => {
  const [operatorMenu, setOperatorMenu] = useState(false);
  const [customerMenu, setCustomerMenu] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("");
  const [operatorSeatNo, setOperatorSeatNo] = useState("");

  const toggleOperatorMenu = () => {
    setOperatorMenu(!operatorMenu);
    console.log(operatorMenu);
  };

  const toggleCustomerMenu = () => {
    setCustomerMenu(!customerMenu);
    console.log(customerMenu);
  };

  const selectSeat = (s) => {
    setSelectedSeat(s.seat);
    setOperatorSeatNo(s);
    console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------", s.seat);
  };

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
          <ButtonGroup>Operator</ButtonGroup>
          <ButtonGroup onClick={toggleCustomerMenu}>Customer</ButtonGroup>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.grid_container}>
          {seatNo.map((seats) => (
            <div
              className={style.seat}
              key={seats.id}
              onClick={toggleOperatorMenu}
            >
              {seats.seatNumber.map((s) => (
                <div
                  key={s.id}
                  className={
                    s.seat === selectedSeat
                      ? style.seat_label_color
                      : style.seat_label
                  }
                  onClick={() => selectSeat(s)}
                >
                  {s.seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {operatorMenu && (
        <Operator operatorSeat={operatorSeatNo} onClose={toggleOperatorMenu} />
      )}

      {customerMenu && <Customer onClose={toggleCustomerMenu} />}

      {/* <Tab /> */}
    </div>
  );
};

export default Dashboard;
