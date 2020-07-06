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
      {projectTypes.map(({ type, label }) => (
        <div className="item" key={type}>
          <ProjectItem icon={type} label={label} />
        </div>
      ))}
    </div>
  );
};

export default CompanyProjects;
