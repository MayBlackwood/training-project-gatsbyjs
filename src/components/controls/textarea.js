import React from "react";
import "./../../styles/controls/textarea.scss";

const Textarea = ({ placeholder, name, value, changeHandler }) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={changeHandler}
      type="text"
    />
  );
};

export default Textarea;
