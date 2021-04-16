import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import style from "./switch.module.css";

const Switch = ({
  label,
  checked,
  className,
  id,
  name,
  onChange,
  disabled,
}) => {
  return (
    <div className={className}>
      <label className={style.switch}>
        {label}
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <span className={cx(style.slider, style.round)}></span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Switch;
