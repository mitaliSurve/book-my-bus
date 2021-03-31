import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import style from "./switch.module.css";

const Switch = ({ label, checked, className }) => {
  return (
    <div className={className}>
      <label className={style.switch}>
        {label}
        <input type="checkbox" checked={checked}/>
        <span className={cx(style.slider, style.round)}></span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default Switch;
