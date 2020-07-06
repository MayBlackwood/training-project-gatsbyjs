import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/featuresSection.scss";
import Heading from "./heading";
import StickerCard from "./stickerCard";
import SquareDecoration from "./decoration/squareDecoration";

const FeaturesSection = () => {
  const {
    featuresData: {
      frontmatter: {
        longTitle,
        list: { list1 },
      },
    },
  } = useStaticQuery(graphql`
    {
      featuresData: markdownRemark(frontmatter: { name: { eq: "healthcare-app-features" } }) {
        frontmatter {
          title
          longTitle
          seoTitle
          list {
            list1
            list2
          }
          keywords
        }
      }
    }
  `);

  return (
    <div className="featuresSectionContainer">
      <Heading text={longTitle} />
      <StickerCard list={list1} leftMargin={"25%"} />
      <SquareDecoration
        color="darkGrey"
        style={{
          right: "181px",
          top: "170px",
          zIndex: 3,
          width: "150px",
          height: "150px",
        }}
      />
      <SquareDecoration
        color="yellow"
        style={{
          right: "241px",
          top: "195px",
          zIndex: 3,
          width: "60px",
          height: "60px",
        }}
      />
    </div>
  );
};

export default FeaturesSection;
