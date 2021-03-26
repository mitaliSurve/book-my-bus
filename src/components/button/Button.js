import React from "react";
import PropTypes from "prop-types";
// import './button.css'

const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
