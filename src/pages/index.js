import React from "react";
import Header from "./../components/header";
import { Link } from "gatsby";
import "../styles/index.scss";
import CompanyProjects from "../components/companyProjects";
import OfferSection from "./../components/offerSection";
import FeaturesSection from "./../components/featuresSection";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CompanyProjects />
      <OfferSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
