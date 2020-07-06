import React from "react";
import "./../../styles/decoration/SquareDecoration.scss";

const SquareDecoration = ({ style, color }) => {
  return (
    <div
      className={`square ${color}`}
      style={style}
    ></div>
  );
};

export default SquareDecoration;
