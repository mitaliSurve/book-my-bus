import React from "react";
import PropTypes from 'prop-types';

const Bus = ({ onClick  }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="25"
    viewBox="0 0 57 25"
    onClick={onClick}
  >
    <g fill="none" >
      <g>
        <g>
          <path
            fill="#F2F2F2"
            d="M36-14c1.105 0 2 .895 2 2v48c0 1.105-.895 2-2 2H20c-1.105 0-2-.895-2-2v-48c0-1.105.895-2 2-2h16zm-3.5 44.296h-9c-.552 0-1 .448-1 1v1.852c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-1.852c0-.552-.448-1-1-1z"
            transform="translate(-890 -704) translate(890.5 704.5) rotate(-90 28 12)"
          />
        </g>
      </g>
    </g>
  </svg>
);

Bus.propTypes = {
  onClick: PropTypes.func,
}

export default Bus;
