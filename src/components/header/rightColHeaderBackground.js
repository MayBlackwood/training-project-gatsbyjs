import React from "react";
import "./../../styles/header/rightColHeaderBackground.scss";
import SquareDecoration from "./../decoration/squareDecoration";

const RightColHeaderBackground = () => (
  <div className="backgroundContainer">
    <div className="top">
      <div className="pinkRectangle">
        <div className="cornerFigure">
          <div />
          <div />
        </div>
        <SquareDecoration
          color="violet"
          style={{
            left: "-85px",
            top: "70px",
            zIndex: 1,
            width: "170px",
            height: "170px",
          }}
        />
        <SquareDecoration
          color="white"
          style={{
            left: "-60px",
            top: "150px",
            zIndex: 2,
            width: "60px",
            height: "60px",
          }}
        />
      </div>
      <div className="purpleRectangle">
        <div className="cornerFigure">
          <div />
          <div />
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="purpleRectangle">
        <div className="cornerFigure">
          <div />
          <div />
        </div>
      </div>
      <div className="blackRectangle">
        <div className="cornerFigure">
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default RightColHeaderBackground;
