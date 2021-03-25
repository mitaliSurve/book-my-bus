import React from 'react';
import PropTypes from 'prop-types';
// import './button.css'

const Button = ({ children, className }) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}
export default Button;
