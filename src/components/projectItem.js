import React from "react";
import "./../styles/projectItem.scss";
import organizations from "./../images/shield-cross.png";
import devices from "./../images/comp.png";
import practices from "./../images/arm.png";
import careProviders from "./../images/doctor.png";
import pharmacy from "./../images/snake.png";
import healthcare from "./../images/rocket.png";
import labs from "./../images/micro.png";
import typescript from "./../images/typescript.png";
import react from "./../images/react.png";
import python from "./../images/python.png";
import javascript from "./../images/javascript.png";

const ProjectItem = ({ icon, label, type }) => {
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
      case "typescript":
        return typescript;
      case "react":
        return react;
      case "python":
        return python;
      case "javascript":
        return javascript;
    }
  };

  return (
    <div className="itemContainer">
      <div className="iconContainer">
        <div className="containerBackground">
          {type === "plain" ? (
            <div className="plain" />
          ) : (
            <>
              <div />
              <div />
            </>
          )}
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
