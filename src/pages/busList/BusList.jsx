import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/button/Button";

import buttonstyle from "../../components/button/button.module.css";
import style from "./buslist.module.css";

const BusList = ({ onClick, busList, name }) => {

  return (
    <div className={style.dropdown}>
      <Button className={buttonstyle.button}>
        {name}<span className={style.margin}>+</span>
      </Button>
      <div className={style.dropdown_content} onClick={onClick}>
        {busList.map((list) => (
          <div key={list.id}>
            <a href="#">{list.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

BusList.propTypes = {
  busList: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default BusList;
