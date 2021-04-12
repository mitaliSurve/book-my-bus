import React, { useState } from "react";
import cx from "classnames";

import style from "./dashboard.module.css";

import BusList from "../busList/BusList";
import ButtonGroup from "../../components/button/groupButton/GroupButton";
import { busesName } from "../../constant/BusName";
import { CustomerName } from "../../constant/CustomerList";
import CustomerContainer from "../Customer";
import OperatorContainer from "../Operator";

const btnGroup = [
  { id: 1, title: "Operator" },
  { id: 2, title: "Customer"},
];

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleSelect = (btn) => {
    setSelectedButton(btn.title);
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
    </div>
  );
};

export default Dashboard;
