import React, { useState } from "react";
import "./../../styles/slider/slideItem.scss";

const SlideItem = ({ img, title, subtitle }) => {
  const [currentImg, setImg] = useState(img);
  return (
    <div className="slideItemContainer">
      <div
        className="slideItem"
        style={{
          backgroundImage: `url(${require(`./../../images/slider/${currentImg}.webp`)})`,
        }}
        onMouseEnter={() => {
          setImg(`${img}Hover`);
        }}
        onMouseOut={() => {
          setImg(img);
        }}
      ></div>
      <div className="slideLabel">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default SlideItem;
