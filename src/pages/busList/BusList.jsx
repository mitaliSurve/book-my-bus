import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/button/Button";

import ButtonStyle from "../../components/button/button.module.css";
import Style from "./buslist.module.css";

const BusList = ({ onClick, busList, name }) => {

  return (
    <div className={Style.dropdown}>
      <Button className={ButtonStyle.button}>
        {name}<span style={{ marginLeft: 10 }}>+</span>
      </Button>
      <div className={Style.dropdown_content} onClick={onClick}>
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
