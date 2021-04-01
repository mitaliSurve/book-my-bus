import React, { useState } from "react";
import cx from "classnames";

import style from "./dashboard.module.css";

import BusList from "../busList/BusList";
import ButtonGroup from "../../components/button/groupButton/GroupButton";
import { seatNo } from "../../constant/SeatNo";
import { busesName } from "../../constant/BusName";
import Operator from "../operator/Operator";
import Customer from "../customer/Customer";

const Dashboard = () => {
  const [operatorMenu, setOperatorMenu] = useState(false);
  const [customerMenu, setCustomerMenu] = useState(false);

  const toggleOperatorMenu = () => {
    setOperatorMenu(!operatorMenu);
    console.log(operatorMenu);
  };

  const toggleCustomerMenu = () => {
    setCustomerMenu(!customerMenu);
    console.log(customerMenu);
  };


  const handle = (s) => {
    console.log(s, "jhhhhhhhhhhhhhhhhhhg-----------------------");
  }

  return (
    <div className={style.root}>
      <div className={style.display_flex}>
        <div>
          <BusList name="bus" busList={busesName} />
          <BusList name="Customer" busList={busesName} className={style.margin} />
        </div>
        <div className={cx(style.display, style.margin)}>
          <ButtonGroup>Operator</ButtonGroup>
          <ButtonGroup onClick={toggleCustomerMenu}>Customer</ButtonGroup>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.grid_container}>
          {seatNo.map((seats) => (
            <div className={style.seat} key={seats.id}  onClick={toggleOperatorMenu}>
              {seats.seatNumber.map((s) => (
                <div key={s.id} className={style.seat_label} onClick={() => handle(s)}>
                  {s.seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {operatorMenu && <Operator onClose={toggleOperatorMenu} />}

      {customerMenu && <Customer onClose={toggleCustomerMenu} />}
    </div>
  );
};

export default Dashboard;
