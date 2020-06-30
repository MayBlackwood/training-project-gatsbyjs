import React from "react";
import Header from "./../components/header";
import { Link } from "gatsby";
import "../styles/index.scss";
import CompanyProjects from "../components/companyProjects";
import OfferSection from "./../components/offerSection";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CompanyProjects />
      <OfferSection />
    </div>
  );
};

export default Home;
