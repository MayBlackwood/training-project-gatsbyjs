import React from "react";
import "./../../styles/header/leftColumnBottom.scss";
import BlackSquare from "./../decoration/blackSquare";

const LeftColumnBottom = () => {
  return (
    <div className="figuresContainer">
      <div className="pinkFigure"></div>
      <div className="yellowFigure"></div>
      <BlackSquare position={{ bottom: "180px", left: "180px" }} />
    </div>
  );
};

export default LeftColumnBottom;
