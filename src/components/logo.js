import React from "react";
import "./../styles/logo.scss";

const Logo = () => {
  const dashBouquetSymbols = ["B", "O", "U", "Q", "U", "E", "T"];
  return (
    <div className="logoContainer">
      <div className="dashText">
        <img src={`${require(`./../images/Dash.png`)}`} alt="Dash" />
      </div>
      <div className="bouquetText">
        {dashBouquetSymbols.map((item, index) => (
          <div className="dashText" key={index}>
            <img src={`${require(`./../images/${item}.png`)}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
