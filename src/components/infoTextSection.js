import React from "react";
import "./../styles/infoTextSection.scss";

const InfoText = ({ text }) => (
  <div className="infoTextContainer">
    <div className="text">{text}</div>
  </div>
);

export default InfoText;
