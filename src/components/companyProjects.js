import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/companyProjects.scss";
import Badge from "./badge";

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
      <div className="itemsWrapper">
        <div className="item companyProjectsText">We work with</div>
        {projectTypes.map(item => {
          return (
            <div className="item" key={item.type}>
              <Badge
                icon={item.type}
                label={item.label}
                type="twoColored"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyProjects;
