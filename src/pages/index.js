import React from "react";
import Header from "./../components/header";
import "../styles/index.scss";
import { graphql } from "gatsby";
import CompanyProjects from "../components/companyProjects";
import OfferSection from "./../components/offerSection";
import FeaturesSection from "./../components/featuresSection";
import TechnologiesSection from "./../components/TechnologiesSection";
import MobileDevSection from "./../components/mobileDevSection";
import TeamSection from "./../components/TeamSection";
import InfoText from "./../components/infoTextSection";
import Footer from "./../components/footer";

const Home = ({
  data: {
    solutionText: {
      frontmatter: { description },
    },
  },
}) => {
  return (
    <div className="container">
      <Header />
      <CompanyProjects />
      <OfferSection />
      <FeaturesSection />
      <TechnologiesSection />
      <MobileDevSection />
      <TeamSection />
      <InfoText text={description} />
      <Footer />
    </div>
  );
};

export default Home;

export const query = graphql`
  {
    solutionText: markdownRemark(
      frontmatter: { name: { eq: "solution-text" } }
    ) {
      frontmatter {
        title
        seoTitle
        description
        keywords
      }
    }
  }
`;
