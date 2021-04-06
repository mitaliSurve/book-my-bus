import React from "react";
import PropTypes from "prop-types";
import styles from "./groupButton.module.css";

const ButtonGroup = ({ onClick, children, value, style }) => {
  return (
    <div className={styles.btn_group}>
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
  style: PropTypes.object,
};
export default ButtonGroup;
