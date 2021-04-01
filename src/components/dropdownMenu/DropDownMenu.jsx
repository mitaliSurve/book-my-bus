import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../button/Button";

import buttonStyle from "../button/button.module.css";
import style from "./dropdown.module.css";

const DropDownMenu = ({ menu, onClick }) => {
  return (
    <div className={cx(style.card, style.display)}>
      {menu.map((menus) => (
        <Button
          key={menus}
          className={cx(
            buttonStyle.button,
            buttonStyle.button_light,
            style.margin
          )}
          onClick={onClick}
        >
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
