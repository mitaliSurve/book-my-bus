import React from "react";
import PropTypes from "prop-types";
import styles from "./groupButton.module.css";

const ButtonGroup = ({ onClick, children, value, style }) => {
  
  return (
    <div className={styles.btnGroup}>
      <button style={style} value={value} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  value: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
};

export default ButtonGroup;
