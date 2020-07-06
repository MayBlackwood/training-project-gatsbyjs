import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "./heading";
import StickerCard from "./stickerCard";
import SquareDecoration from "./decoration/squareDecoration";
import "./../styles/offerSection.scss";

const OfferSection = () => {
  const {
    offersData: {
      frontmatter: {
        longTitle,
        list: { list1, list2 },
      },
    },
  } = useStaticQuery(graphql`
    {
      offersData: markdownRemark(frontmatter: { name: { eq: "app-offers" } }) {
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
    <div className="offerSectionContainer">
      <Heading text={longTitle} />
      <StickerCard list={list1} leftMargin={"40%"} />
      <StickerCard list={list2} leftMargin={"70%"} />
      <SquareDecoration
        color="violet"
        style={{
          left: "181px",
          bottom: "170px",
          zIndex: 3,
          width: "140px",
          height: "140px",
        }}
      />
      <SquareDecoration
        color="yellow"
        style={{
          left: "281px",
          bottom: "150px",
          zIndex: 4,
          width: "70px",
          height: "70px",
        }}
      />
      <SquareDecoration
        color="red"
        style={{
          right: "441px",
          top: "150px",
          zIndex: 3,
          width: "90px",
          height: "90px",
        }}
      />
    </div>
  );
};

export default OfferSection;
