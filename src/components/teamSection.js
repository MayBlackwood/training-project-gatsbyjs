import React, { useState } from "react";
import "./../styles/teamSection.scss";
import Heading from "./heading";
import Slider from "./slider/slider";
import { useStaticQuery, graphql } from "gatsby";

const TeamSection = () => {
  const {
    teamData: {
      frontmatter: { longTitle, teamList },
    },
  } = useStaticQuery(graphql`
    {
      teamData: markdownRemark(frontmatter: { name: { eq: "team-info" } }) {
        frontmatter {
          title
          longTitle
          seoTitle
          teamList {
            imgUrl
            title
            subtitle
          }
          keywords
        }
      }
    }
  `);

  return (
    <div className="teamSectionContainer">
      <Heading text={longTitle} />
      <div className="teamCarousel">
        <Slider items={teamList} />
      </div>
    </div>
  );
};

export default TeamSection;
