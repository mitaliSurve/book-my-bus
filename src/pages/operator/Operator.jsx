import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import style from "../operator/operator.module.css";
import Dialog from "../../components/dialogMenu/Dialog";
import ToggleSwitch from "../../components/switch/Switch";

const Operator = ({ onClose, operatorSeat }) => {
  const [price, setPrice] = useState({ price: "" });
  const [booking, setbooking] = useState(false);

  const changePrice = (event) => {
    setPrice((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    console.log(price, booking);
  };

  const changeBookingStatus = (checked) => {
    setbooking(checked);
  };

  return (
    <Dialog
      header="Operator Form"
      onClose={onClose}
      action="Submit"
      onSubmit={handleSubmit}
    >
      <div className={style.root}>
        <form className={style.grid_container}>
          <label
            htmlFor="seatNo"
            className={cx(style.label, style.label_color)}
          >
            Seat No.
          </label>
          <span className={style.label}>{operatorSeat.seat}</span>

          <label htmlFor="price" className={cx(style.label, style.label_color)}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price.price}
            onChange={changePrice}
            placeholder="Your Price.."
            className={style.input}
          />

          <label className={cx(style.label, style.label_color)}>Booking</label>
          <ToggleSwitch
            id="newsletter"
            checked={booking}
            onChange={changeBookingStatus}
            className={style.label}
          />
        </form>
      </div>
    </Dialog>
  );
};

Operator.propTypes = {
  onClose: PropTypes.func,
  operatorSeat: PropTypes.object,
};

export default Operator;
