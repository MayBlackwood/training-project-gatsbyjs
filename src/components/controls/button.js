import React from "react";
import "./../../styles/controls/button.scss";

const Button = ({ type, text, onClickHandler }) => {
  return (
    <div role="button" className={`button ${type}`} onClick={onClickHandler}>
      {text}
    </div>
  );
};

export default Button;
