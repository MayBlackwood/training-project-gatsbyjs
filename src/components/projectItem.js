import React from "react";
import "./../styles/projectItem.scss";

export default function ProjectItem(props) {
  const { icon, label } = props;
  return (
    <div className="itemContainer">
      <div className="iconContainer">
        <div className="containerBackground">
					<div />
					<div />
				</div>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="itemLabel">{label}</div>
    </div>
  );
}
