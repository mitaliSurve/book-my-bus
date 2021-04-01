import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import style from "../operator/operator.module.css";
import Dialog from "../../components/dialogMenu/Dialog";
import Switch from "../../components/switch/Switch";

const Operator = ({ onClose, operatorSeat }) => {
  // const [seat, setSeat] = useState("");

  return (
    <Dialog header="Operator Form" onClose={onClose} action="Submit">
      <div className={style.root}>
        <form className={style.grid_container}>
          <label
            htmlFor="seatNo"
            className={cx(style.label, style.label_color)}
          >
            Seat No.
          </label>
          <span className={style.label}>{operatorSeat.seat}</span>
          {/* <input
            type="text"
            id="seatNo"
            value={operatorSeat.seat}
            className={style.input}
          /> */}
          {/* <label className={style.label}>S1</label> */}

          <label htmlFor="price" className={cx(style.label, style.label_color)}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="seatPrice"
            placeholder="Your Price.."
            className={style.input}
          />
          {/* <span className={style.label}>&#x20B9; 500</span> */}

          <label className={cx(style.label, style.label_color)}>Booking</label>
          <Switch className={style.label} />
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
