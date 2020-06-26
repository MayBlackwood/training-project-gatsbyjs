import React from "react";
import "./../../styles/header/rightColHeaderBackground.scss";

export default function RightColHeaderBackground() {
  return (
    <div className="backgroundContainer">
      <div className="top">
        <div className="pinkRectangle">
          <div className="cornerFigure">
            <div></div>
            <div></div>
          </div>
          <div className="purpleSquare"></div>
          <div className="whiteSquare"></div>
        </div>
        <div className="purpleRectangle">
          <div className="cornerFigure">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="purpleRectangle">
          <div className="cornerFigure">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="blackRectangle">
          <div className="cornerFigure">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
