import React from "react";
import "./../../styles/controls/input.scss";

const Input = ({ placeholder, name, value, changeHandler }) => {
  return (
    <input
      className="inputContainer"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={changeHandler}
      type="text"
    />
  );
};

export default Input;
