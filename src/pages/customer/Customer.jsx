import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Dialog from "../../components/dialogMenu/Dialog";
import style from "../customer/customer.module.css";

const Customer = ({ onClose }) => {
  const [items, setItems] = useState({
    customerName: "",
    customerSeatNo: "",
    age: "",
    price: "500",
  });

  const handleChange = (event) => {
    setItems((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    console.log(items);
  };

  return (
    <Dialog
      header="Customer Form"
      onClose={onClose}
      action="book"
      onSubmit={handleSubmit}
    >
      <form className={style.grid_container} onSubmit={handleSubmit}>
        <label htmlFor="name" className={cx(style.label, style.label_color)}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="customerName"
          value={items.customerName}
          onChange={handleChange}
          placeholder="Enter your name"
          className={style.input}
        />

        <label htmlFor="seatNo" className={cx(style.label, style.label_color)}>
          Seat no
        </label>
        <input
          type="text"
          id="seatNo"
          name="customerSeatNo"
          placeholder="Seat number"
          value={items.customerSeatNo}
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="age" className={cx(style.label, style.label_color)}>
          Age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Enter your age"
          value={items.age}
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="price" className={cx(style.label, style.label_color)}>
          Price
        </label>
        <span className={style.label}>&#x20B9; {name.price}</span>
      </form>
    </Dialog>
  );
};

Customer.propTypes = {
  onClose: PropTypes.func,
};

export default Customer;
