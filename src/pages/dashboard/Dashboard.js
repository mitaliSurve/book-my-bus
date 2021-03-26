import React from "react";
import cx from "classnames";

import Style from "./dashboard.module.css";

import BusList from "./BusList";
import ButtonGroup from "../../components/button/GroupButton";
import Dialog from "../../components/dialogMenu/Dialog";
import { seatNo } from "../../constant/SeatNo";
import { busesName } from "../../constant/BusName";
// import DropDownMenu from "../../components/dropdownMenu.js/DropDownMenu";

const Dashboard = () => {
  const [operatorMenu, setOperatorMenu] = React.useState(false);
  const [customerMenu, setCustomerMenu] = React.useState(false);

  const toggleOperatorMenu = () => {
    setOperatorMenu(!operatorMenu);
    console.log(operatorMenu);
  };

  const toggleCustomerMenu = () => {
    setCustomerMenu(!customerMenu);
    console.log(customerMenu);
  };

  return (
    <>
      <div className={Style.display_flex}>
        <div>
          <BusList name="bus" busList={busesName} />
          <BusList name="Customer" busList={busesName} />
        </div>
        <div className={cx(Style.display, Style.margin)}>
          <ButtonGroup onClick={toggleOperatorMenu}>Operator</ButtonGroup>
          <ButtonGroup onClick={toggleCustomerMenu}>Customer</ButtonGroup>
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

      {operatorMenu && (
        <Dialog header="Operator Form" onClose={toggleOperatorMenu}>
          <label>body</label>
        </Dialog>
      )}

      {customerMenu && (
        <Dialog header="Customer Form" onClose={toggleCustomerMenu}>
          <label>body</label>
        </Dialog>
      )}

      {/* {operatorMenu && <DropDownMenu menu={menuItem} onClick={toggleMenu} />} */}

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
