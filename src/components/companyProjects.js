import React from "react";
import "./../styles/companyProjects.scss";
import ProjectItem from "./projectItem";
import shieldCross from "./../images/shield-cross.png";
import comp from "./../images/comp.png";
import arm from "./../images/arm.png";
import doctor from "./../images/doctor.png";
import snake from "./../images/snake.png";
import rocket from "./../images/rocket.png";
import micro from "./../images/micro.png";

export default function companyProjects() {
  return (
    <div className="companyProjectsContainer">
      <div>
        <div className="companyProjectsText">We work with</div>
        <div>
          <ProjectItem icon={arm} label="Private medical practices" />
        </div>
        <div>
          <ProjectItem icon={comp} label="Medical device manufacturers" />
        </div>
      </div>
      <div>
        <div>
          <ProjectItem icon={micro} label="Medical device manufacturers" />
        </div>
        <div>
          <ProjectItem icon={shieldCross} label="Healthcare organizations" />
        </div>
        <div>
          <ProjectItem icon={doctor} label="Care providers" />
        </div>
      </div>
      <div>
        <div>
          <ProjectItem icon={rocket} label="Healthcare startups" />
        </div>
        <div>
          <ProjectItem icon={snake} label="Pharmacy organizations" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
