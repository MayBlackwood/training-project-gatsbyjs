import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/header.scss";
import LeftColumnBottom from "./header/leftColumnBottom";
import Logo from "./logo";
import Button from "./button";
import RightColHeaderBackground from "./header/rightColHeaderBackground";
import BlackSquare from "./decoration/blackSquare";

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

  const onButtonCLick = () => {
    alert("Let's talk");
  };

  return (
    <div className="headerContainer">
      <div className="leftColumn">
        <div className="headerLogoContainer">
          <Logo />
          <BlackSquare
            position={{
              bottom: 0,
              left: "140px",
            }}
          />
        </div>
        <div className="servicesInfoContainer">
          <div className="text">{longTitle}</div>
          <Button
            type="common"
            text="Let's talk"
            onClickHandler={onButtonCLick}
          />
          <BlackSquare
            position={{
              left: "441px",
              bottom: 0,
            }}
          />
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
