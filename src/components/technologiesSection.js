import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/technologiesSection.scss";
import Heading from "./heading";
import ProjectItem from "./projectItem";

const TechnologiesSection = () => {
  const {
    technologiesData: {
      frontmatter: { longTitle, technologies },
    },
  } = useStaticQuery(graphql`
    {
      technologiesData: markdownRemark(
        frontmatter: { name: { eq: "technologies-info" } }
      ) {
        frontmatter {
          title
          longTitle
          seoTitle
          technologies {
            type
            label
          }
          keywords
        }
      }
    }
  `);

  return (
    <div className="technologiesContainer">
      <Heading text={longTitle} />
      <div className="iconsContainer">
        {technologies.map(item => {
          return (
            <div className="item" key={item.type}>
              <ProjectItem icon={item.type} label={item.label} type="plain"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesSection;