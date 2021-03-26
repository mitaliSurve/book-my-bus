import React, { useState } from "react";
import cx from "classnames";

import Style from "./dashboard.module.css";

import BusList from "./BusList";
import ButtonGroup from "../../components/button/GroupButton";
// import DropDownMenu from "../../components/dropdownMenu.js/DropDownMenu";

const busesName = [
  {
    id: 1,
    name: "Raj Ratan Travels",
  },
  {
    id: 2,
    name: "Apple travels",
  },
  {
    id: 3,
    name: "RTS RoyalStar",
  },
  {
    id: 4,
    name: "Hans Travels",
  },
  {
    id: 5,
    name: "Dhariwal Travels",
  },
];

const seatNo = [
  {
    id: 1,
    number: "1",
  },
  {
    id: 2,
    number: "2",
  },
  {
    id: 3,
    number: "3",
  },
  {
    id: 4,
    number: "4",
  },
  {
    id: 5,
    number: "5",
  },
  {
    id: 6,
    number: "6",
  },
  {
    id: 7,
    number: "7",
  },
  {
    id: 8,
    number: "8",
  },
  {
    id: 9,
    number: "9",
  },
  {
    id: 10,
    number: "10",
  },
  {
    id: 11,
    number: "11",
  },
  {
    id: 12,
    number: "12",
  },
  {
    id: 13,
    number: "13",
  },
  {
    id: 14,
    number: "14",
  },
  {
    id: 15,
    number: "15",
  },
  {
    id: 16,
    number: "16",
  },
  {
    id: 17,
    number: "17",
  },
  {
    id: 18,
    number: "18",
  },
  {
    id: 19,
    number: "19",
  },
  {
    id: 20,
    number: "20",
  },
];
const Dashboard = () => {
  const [openMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!openMenu);
  };

  return (
    <>
      <div className={Style.display_flex}>
        <div>
          <BusList name="bus" busList={busesName} onClick={toggleMenu} />
          <BusList name="Customer" busList={busesName} onClick={toggleMenu} />
        </div>
        <div className={cx(Style.display, Style.margin)}>
          <ButtonGroup>Customer</ButtonGroup>
          <ButtonGroup>Operator</ButtonGroup>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.grid_container}>
          {seatNo.map((seats) => (
            <div className={Style.seat} key={seats.id}>
              <div style={{ fontSize: 15 }}>{seats.number}</div>
            </div>
          ))}
        </div>
      </div>

      {/* {openMenu && <DropDownMenu menu={menuItem} onClick={toggleMenu} />} */}

      {/* <div className={Style.container}>
          <div className={Style.display_flex}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((topSeats) => (
              <div className={Style.seat} key={topSeats}>
                {"1"}
              </div>
            ))}
          </div>
          <div className={Style.display_flex}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lowerSeats) => (
              <div className={Style.seat} key={lowerSeats}>
                {1}
              </div>
            ))}
          </div>
      </div> */}
    </>
  );
};

export default Dashboard;
