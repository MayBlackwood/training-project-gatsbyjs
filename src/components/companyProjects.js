import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/companyProjects.scss";
import ProjectItem from "./projectItem";

const CompanyProjects = () => {
  const {
    projectsData: {
      frontmatter: { projectTypes },
    },
  } = useStaticQuery(graphql`
    {
      projectsData: markdownRemark(
        frontmatter: { name: { eq: "healthcare-project-types" } }
      ) {
        frontmatter {
          title
          longTitle
          seoTitle
          projectTypes {
            type
            label
          }
          keywords
        }
      }
    }
  `);

  return (
    <div className="companyProjectsContainer">
      <div className="item companyProjectsText">We work with</div>
      {projectTypes.map(item => {
        return (
          <div className="item" key={item.type}>
            <ProjectItem icon={item.type} label={item.label} />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyProjects;
