import React from "react";
import "./../styles/header.scss";
import LeftColumnBottom from "./header/leftColumnBottom";
import Logo from "./logo";
import Button from "./button";
import RightColHeaderBackground from "./header/rightColHeaderBackground";

export default function Header(props) {
  return (
    <div className="headerContainer">
      <div className="leftColumn">
        <div className="headerLogoContainer">
          <Logo />
          <div className="blackFigure3"></div>
        </div>
        <div className="servicesInfoContainer">
          <div className="text">HealthTech development Services</div>
          <div className="button">
            <Button type="common" text="Let's talk" />
          </div>
          <div className="blackFigure2"></div>
        </div>
        <div className="leftColumnBottom">
          <LeftColumnBottom />
        </div>
      </div>
      <div className="rightColumn">
        <RightColHeaderBackground />
        <div className="textContainer">
          <div>
            <div className="textDecoration"></div>
            <div className="text">
              Dashbouquet is a leading healthcare software development company.
              We can build a custom solution for your company, develop an MVP
              for your startup or make a final step to move your project to
              production. We offer web and mobile apps development, UI/UX design
              and software testing. We build HIPAA and GDPR compliant healthcare
              software
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
