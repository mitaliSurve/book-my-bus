import React from "react";
import PropTypes from "prop-types";

import Dialog from "../../components/dialogMenu/Dialog";
import style from "../customer/customer.module.css";

const Customer = ({ onClose }) => {
  return (
    <Dialog header="Customer Form" onClose={onClose} action="book">
      <form>
        <div className={style.root}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="customerName"
            placeholder="Enter your name"
            className={style.input}
          />

          <label htmlFor="seatNo" className={style.label}>
            Seat no
          </label>
          <input
            type="text"
            id="seatNo"
            name="customerSeatNo"
            placeholder="Seat number"
            className={style.input}
          />

          <label htmlFor="age" className={style.label}>
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className={style.input}
          />

          <label htmlFor="price" className={style.label}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="seatPrice"
            placeholder="Price"
            className={style.input}
          />
        </div>
      </form>
    </Dialog>
  );
};

Customer.propTypes = {
  onClose: PropTypes.func,
};

export default Customer;
