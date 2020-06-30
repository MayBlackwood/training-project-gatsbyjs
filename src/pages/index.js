import React from "react";
import Header from "./../components/header";
import { Link } from "gatsby";
import "../styles/index.scss";
import CompanyProjects from "../components/companyProjects";
import OfferSection from "./../components/offerSection";
import FeaturesSection from "./../components/featuresSection";
import TechnologiesSection from "./../components/TechnologiesSection";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CompanyProjects />
      <OfferSection />
      <FeaturesSection />
      <TechnologiesSection />
    </div>
  );
};

export default Home;
