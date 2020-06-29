import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/header.scss";
import LeftColumnBottom from "./header/leftColumnBottom";
import Logo from "./logo";
import Button from "./button";
import RightColHeaderBackground from "./header/rightColHeaderBackground";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      healthTechPageData: markdownRemark(
        frontmatter: { name: { eq: "healthcare" } }
      ) {
        frontmatter {
          title
          longTitle
          seoTitle
          description
          keywords
        }
      }
    }
  `);

  const {
    healthTechPageData: {
      frontmatter: { title, longTitle, description },
    },
  } = data;

  return (
    <div className="headerContainer">
      <div className="leftColumn">
        <div className="headerLogoContainer">
          <Logo />
          <div className="blackFigure3"></div>
        </div>
        <div className="servicesInfoContainer">
          <div className="text">{longTitle}</div>
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
            <div className="text">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
