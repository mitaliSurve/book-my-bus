import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import Styles from "./dialog.module.css";
import ButtonStyle from "../button/button.module.css";

import Button from "../button/Button";

const Dialog = ({ onClose, header, children }) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.modal_content}>
        <div className={cx(Styles.modal_header, Styles.display)}>
          <p>{header}</p>
          <span className={Styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={Styles.modal_body}>
          {children}
        </div>
        <div className={Styles.modal_footer}>
          <Button
            className={cx(ButtonStyle.button, ButtonStyle.button_light)}
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onClose: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default Dialog;
