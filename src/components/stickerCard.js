import React from "react";
import "./../styles/stickerCard.scss";

const StickerCard = ({ list, leftMargin }) => (
  <div className="stickerContainer">
    <div className="listContainer" style={{ marginLeft: leftMargin }}>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  </div>
);

export default StickerCard;
