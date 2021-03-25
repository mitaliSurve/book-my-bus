import React, { useState } from "react";
import "./index.css";
import "../../components/button/button.css";
import Button from "../../components/button/Button";
import DropDownMenu from "../../components/dropdownMenu.js/DropDownMenu";

const menuItem = [
  {
    id: 1,
    item: "Operator one",
  },
  {
    id: 2,
    item: "Operator one",
  },
  {
    id: 3,
    item: "Operator one",
  },
];

const Dashboard = () => {
  const [openMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!openMenu);
  };

  return (
    <div>
      <div className="display display_flex">
        <div>
          <Button className="button button_light">customer</Button>
        </div>
        <div style={{ marginLeft: 5, marginRight: 5 }}>
          <Button className="button" onClick={toggleMenu}>
            operator
          </Button>
        </div>
        
        {openMenu && <DropDownMenu menu={menuItem} onClick={toggleMenu} />}

      </div>
      <div className="container">
        <div className="display">
          {[1, 2, 3, 4].map((seats) => (
            <div className="seat" key={seats}>
              {seats.id}
            </div>
          ))}
        </div>
        <div className="display">
          {[1, 2, 3, 4].map((seats) => (
            <div className="seat" key={seats}>
              {seats.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
