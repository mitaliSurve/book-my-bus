import React from "react";
import PropTypes from "prop-types";
import Style from "./groupButton.module.css";

const ButtonGroup = ({ onClick, children }) => {
  return (
    <div className={Style.btn_group}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  // className: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonGroup;
