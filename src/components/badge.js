import React from "react";
import "./../styles/badge.scss";

const Badge = ({ icon, label, type }) => {

  return (
    <div className="itemContainer">
      <div className={`iconContainer ${type}`}>
        <div className="icon">
          <img src={`${require(`./../images/${icon}.png`)}`} alt={icon} />
        </div>
      </div>
      <div className="itemLabel">{label}</div>
    </div>
  );
};

export default Badge;
