import React from "react";
import PropTypes from "prop-types";
import style from "./groupButton.module.css";

const ButtonGroup = ({ onClick, children, value }) => {
  return (
    <div className={style.btn_group}>
      <button value={value} onClick={onClick}>{children}</button>
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onClick: PropTypes.func,
  value: PropTypes.string,
};
export default ButtonGroup;
