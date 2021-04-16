import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import style from "./tab.module.css";

const TabItemComponent = ({
  icon = "",
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {

  return (
    <div
      className={
        isActive ? style.tabitem : cx(style.tabitem, style.tabitemInactive)
      }
      onClick={onItemClicked}
    >
      <i className={icon}></i>
      <p className={style.tabitemTitle}>{title}</p>
    </div>
  );
};

TabItemComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onItemClicked: PropTypes.func,
  isActive: PropTypes.bool,
};

export default TabItemComponent;
