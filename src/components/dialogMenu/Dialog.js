import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import style from "./dialog.module.css";
import buttonStyle from "../button/button.module.css";

import Button from "../button/Button";

const Dialog = ({ onClose, header, children, action }) => {
  return (
    <div className={style.modal}>
      <div className={style.modal_content}>
        <div className={cx(style.modal_header, style.display)}>
          <p>{header}</p>
          <span className={style.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={style.modal_body}>{children}</div>
        <div className={style.modal_footer}>
          <Button className={buttonStyle.button} onClick={onClose}>
            {action}
          </Button>
          <Button
            className={cx(buttonStyle.button, buttonStyle.button_light)}
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
  action: PropTypes.string,
};

export default Dialog;
