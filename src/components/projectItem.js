import React from "react";
import "./../styles/projectItem.scss";
import organizations from "./../images/shield-cross.png";
import devices from "./../images/comp.png";
import practices from "./../images/arm.png";
import careProviders from "./../images/doctor.png";
import pharmacy from "./../images/snake.png";
import healthcare from "./../images/rocket.png";
import labs from "./../images/micro.png";

const ProjectItem = ({ icon, label }) => {
  const getImgUrl = name => {
    switch (name) {
      case "organizations":
        return organizations;
      case "devices":
        return devices;
      case "practices":
        return practices;
      case "careProviders":
        return careProviders;
      case "pharmacy":
        return pharmacy;
      case "healthcare":
        return healthcare;
      case "labs":
        return labs;
    }
  };

  return (
    <div className="itemContainer">
      <div className="iconContainer">
        <div className="containerBackground">
          <div />
          <div />
        </div>
        <div className="icon">
          <img src={getImgUrl(icon)} alt="" />
        </div>
      </div>
      <div className="itemLabel">{label}</div>
    </div>
  );
};

export default ProjectItem;
