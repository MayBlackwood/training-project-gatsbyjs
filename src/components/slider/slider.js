import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../../styles/slider/slider.scss";
import Arrow from "./arrow";
import SlideItem from "./slideItem";
import ItemsCarousel from "react-items-carousel";
import SquareDecoration from "./../decoration/squareDecoration";

const Slider = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="sliderContainer">
      <ItemsCarousel
        infiniteLoop
        placeholderItem={<div style={{ height: 200, background: "#EEE" }} />}
        enablePlaceholder={true}
        numberOfPlaceholderItems={3}
        numberOfCars={3}
        gutter={12}
        slidesToScroll={2}
        chevronWidth={60}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={<Arrow direction="right" />}
        leftChevron={<Arrow direction="left" />}
        classes={{
          wrapper: "carouselWrapper",
          itemsWrapper: "itemsWrapper",
          itemsInnerWrapper: "itemsInnerWrapper",
          itemWrapper: "itemWrapper",
          rightChevronWrapper: "rightArrow",
          leftChevronWrapper: "leftArrow",
        }}
      >
        {items.map((item, index) => (
          <SlideItem
            key={index}
            img={item.imgUrl}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ItemsCarousel>
      <SquareDecoration
        color="darkGrey"
        style={{
          left: "0px",
          top: "350px",
          zIndex: 3,
          width: "550px",
          height: "80px",
        }}
      />
      <SquareDecoration
        color="yellow"
        style={{
          right: "0",
          top: "226px",
          zIndex: -1,
          width: "960px",
          height: "300px",
        }}
      />
    </div>
  );
};

export default Slider;
