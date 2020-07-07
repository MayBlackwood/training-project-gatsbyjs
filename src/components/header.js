import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/header.scss";
import Logo from "./logo";
import Button from "./controls/button";
import RightColHeaderBackground from "./header/rightColHeaderBackground";
import SquareDecoration from "./decoration/squareDecoration";

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
      frontmatter: { longTitle, description },
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
          <SquareDecoration
            color="darkGrey"
            style={{
              left: "140px",
              top: "200px",
              zIndex: 0,
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div className="servicesInfoContainer">
          <div className="text">{longTitle}</div>
          <Button
            actionType="button"
            type="common"
            text="Let's talk"
            onClickHandler={onButtonCLick}
          />
          <SquareDecoration
            color="red"
            style={{
              left: "0",
              bottom: "0",
              zIndex: 0,
              width: "200px",
              height: "200px",
            }}
          />
          <SquareDecoration
            color="yellow"
            style={{
              left: "120px",
              bottom: "120px",
              zIndex: 2,
              width: "120px",
              height: "120px",
            }}
          />
          <SquareDecoration
            color="darkGrey"
            style={{
              left: "180px",
              bottom: "180px",
              zIndex: 3,
              width: "40px",
              height: "40px",
            }}
          />
          <SquareDecoration
            color="darkGrey"
            style={{
              left: "441px",
              bottom: "300px",
              zIndex: 0,
              width: "40px",
              height: "40px",
            }}
          />
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
