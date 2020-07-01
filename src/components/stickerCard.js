import React from "react";
import "./../styles/stickerCard.scss";

const StickerCard = ({ list, leftMargin }) => {
  return (
    <div className="stickerContainer">
      <div className="listContainer" style={{ marginLeft: leftMargin }}>
        {list.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default StickerCard;
