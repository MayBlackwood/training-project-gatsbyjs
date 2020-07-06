import React from "react";
import "./../styles/logo.scss";
import Dash from "./../images/Vector.png";
import B from "./../images/Vector-1.png";
import O from "./../images/Vector-2.png";
import U from "./../images/Vector-3.png";
import Q from "./../images/Vector-4.png";
import E from "./../images/Vector-6.png";
import T from "./../images/Vector-7.png";

const Logo = () => {
  return (
    <div className="logoContainer">
      <div className="dashText">
        <img src={Dash} alt="Dash" />
      </div>
      <div className="bouquetText">
        <div>
          <img src={B} alt="B" />
        </div>
        <div>
          <img src={O} alt="U" />
        </div>
        <div>
          <img src={U} alt="Q" />
        </div>
        <div className="QLetter">
          <img src={Q} alt="U" />
        </div>
        <div>
          <img src={U} alt="U" />
        </div>
        <div>
          <img src={E} alt="E" />
        </div>
        <div>
          <img src={T} alt="T" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
