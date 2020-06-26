import React from "react";
import Header from "./../components/header";
import { Link } from "gatsby";
import "../styles/index.scss";
import CompanyProjects from "../components/companyProjects";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <CompanyProjects />
    </div>
  );
}