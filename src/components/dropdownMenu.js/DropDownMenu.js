import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import "../button/button.css";
import "./dropdown.css";

const DropDownMenu = ({ menu, onClick }) => {
  
  return (
    <div className="card display display_column">
      {menu.map((menus) => (
        <Button key={menus} className="button button_light margin" onClick={onClick}>
          {menus.item}
        </Button>
      ))}
    </div>
  );
};

DropDownMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default DropDownMenu;
