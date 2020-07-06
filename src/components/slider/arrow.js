import React from "react";
import "./../../styles/slider/arrow.scss";
import arrow from "./../../images/slider/arrow.png";

const Arrow = ({ direction }) => {
  return (
    <div className="arrowContainer">
      <div className="arrow">
        <img src={arrow} alt="arrow" className={direction} />
      </div>
    </div>
  );
};

export default Arrow;
