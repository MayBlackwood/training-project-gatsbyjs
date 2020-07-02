import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "./heading";
import Quote from "./quote";
import "./../styles/mobileDevSection.scss";
import iphone from "./../images/iphone.png";
import Button from "./controls/button";
import SquareDecoration from "./decoration/squareDecoration";

const MobileDevSection = () => {
  const {
    mobileDevData: {
      frontmatter: { description, longTitle },
    },
    quoteData: {
      frontmatter: { quote, author },
    },
  } = useStaticQuery(graphql`
    {
      mobileDevData: markdownRemark(
        frontmatter: { name: { eq: "mobile-dev" } }
      ) {
        frontmatter {
          title
          longTitle
          seoTitle
          description
          keywords
        }
      }
      quoteData: markdownRemark(
        frontmatter: { name: { eq: "Belotserkovsky-review" } }
      ) {
        frontmatter {
          title
          seoTitle
          quote
          author
          keywords
        }
      }
    }
  `);

  return (
    <div className="mobileSectionContainer">
      <Heading text={longTitle} />
      <div className="description">{description}</div>
      <div className="reviewContainer">
        <div className="imgContainer">
          <img src={iphone} alt="iphone" />
        </div>
        <div className="review">
          <Quote text={quote} author={author} />
          <Button
            type="common"
            onClickHandler={console.log("ds")}
            text="view more works"
          />
        </div>
      </div>
      <SquareDecoration
        color="red"
        style={{
          right: "181px",
          top: "270px",
          zIndex: 3,
          width: "150px",
          height: "150px",
        }}
      />
      <SquareDecoration
        color="darkGrey"
        style={{
          right: "271px",
          top: "360px",
          zIndex: 4,
          width: "90px",
          height: "90px",
        }}
      />
      <SquareDecoration
        color="darkGrey"
        style={{
          right: "660px",
          bottom: "-60px",
          zIndex: 3,
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
};

export default MobileDevSection;
