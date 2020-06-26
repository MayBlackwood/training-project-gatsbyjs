import React from "react";
import "./../styles/button.scss";

export default function Button(props) {
  const { type, text, onClickHandler } = props;
  console.log(props);
  return (
    <div className={`button ${type}`} onClick={onClickHandler}>
      <span>{text}</span>
    </div>
  );
}
