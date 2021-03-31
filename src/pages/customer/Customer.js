import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Dialog from "../../components/dialogMenu/Dialog";
import style from "../customer/customer.module.css";

const Customer = ({ onClose }) => {
  return (
    <Dialog header="Customer Form" onClose={onClose} action="book">
        <form className={style.grid_container}>
          <label htmlFor="name" className={cx(style.label, style.label_color)}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="customerName"
            placeholder="Enter your name"
            className={style.input}
          />

          <label
            htmlFor="seatNo"
            className={cx(style.label, style.label_color)}
          >
            Seat no
          </label>
          <input
            type="text"
            id="seatNo"
            name="customerSeatNo"
            placeholder="Seat number"
            className={style.input}
          />

          <label htmlFor="age" className={cx(style.label, style.label_color)}>
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className={style.input}
          />

          <label htmlFor="price" className={cx(style.label, style.label_color)}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="seatPrice"
            placeholder="Price"
            className={style.input}
          />
        </form>
    </Dialog>
  );
};

Customer.propTypes = {
  onClose: PropTypes.func,
};

export default Customer;
