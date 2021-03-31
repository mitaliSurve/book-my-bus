import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import Styles from "../operator/operator.module.css";
import Dialog from "../../components/dialogMenu/Dialog";
import Switch from "../../components/switch/Switch";

const Operator = ({ onClose }) => {
  return (
    <Dialog header="Operator Form" onClose={onClose} action="Submit">
      <div className={Styles.root}>
        <div className={Styles.grid_container}>
          <label className={cx(Styles.label, Styles.label_color)}>
            Seat No.
          </label>
          <label className={Styles.label}>S1</label>

          <label
            htmlFor="price"
            className={cx(Styles.label, Styles.label_color)}
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="seatPrice"
            placeholder="Your Price.."
            className={Styles.input}
          />
          {/* <span className={Styles.label}>&#x20B9; 500</span> */}

          <>
            <label className={cx(Styles.label, Styles.label_color)}>
              Booking
            </label>
            <Switch className={Styles.label} />
            {/* <label className={cx(Styles.label, Styles.label_color)}>
              Booking
            </label>
            <div className={Styles.container}>
              <label className={Styles.label}>
                enable
                <input type="radio" name="radio" checked />
                <span className="check"></span>
              </label>

              <label className={cx(Styles.label, Styles.margin)}>
                disable
                <input type="radio" name="radio" />
                <span className="check"></span>
              </label>
            </div> */}
          </>
        </div>
      </div>
    </Dialog>
  );
};

Operator.propTypes = {
  onClose: PropTypes.func,
};

export default Operator;
