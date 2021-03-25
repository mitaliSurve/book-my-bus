import React from "react";
import PropTypes from "prop-types";

const BookedBus = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="25"
    viewBox="0 0 57 25"
    onClick={onClick}
  >
    <g fill="none">
      <g fill="#FFF" stroke="#9B9B9B">
        <g>
          <g>
            <g transform="translate(-890 -745) translate(890.5 745.5) rotate(-90 12 12) translate(2 2)">
              <rect width="20" height="52" rx="2" />
              <path d="M5.5 44h9c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-9c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

BookedBus.propTypes = {
  onClick: PropTypes.func,
};

export default BookedBus;
