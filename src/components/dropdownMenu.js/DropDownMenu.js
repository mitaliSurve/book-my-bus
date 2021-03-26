import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../button/Button";

import ButtonCss from "../button/button.module.css";
import Styles from "./dropdown.module.css";

const DropDownMenu = ({ menu, onClick }) => {
  return (
    <div className={cx(Styles.card, Styles.display)}>
      {menu.map((menus) => (
        <Button
          key={menus}
          className={cx(
            ButtonCss.button,
            ButtonCss.button_light,
            Styles.margin
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
