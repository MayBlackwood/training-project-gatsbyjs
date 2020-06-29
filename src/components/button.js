import React from "react";
import "./../styles/button.scss";

const Button = ({ type, text, onClickHandler }) => {
  return (
    <div className={`button ${type}`} onClick={onClickHandler}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
