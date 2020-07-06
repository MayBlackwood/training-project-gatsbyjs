import React from "react";
import SquareDecoration from "./decoration/squareDecoration";
import MessageForm from "./messageForm";
import "./../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="formContainer">
        <MessageForm />
      </div>
      <div className="footerDecoration">
        <SquareDecoration
          color="violet"
          style={{
            right: "0",
            top: "0",
            zIndex: 3,
            width: "700px",
            height: "270px",
          }}
        />
        <SquareDecoration
          color="red"
          style={{
            right: "0",
            bottom: "0",
            zIndex: 3,
            width: "700px",
            height: "270px",
          }}
        />
        <SquareDecoration
          color="yellow"
          style={{
            right: "615px",
            top: "245px",
            zIndex: 4,
            width: "170px",
            height: "50px",
          }}
        />
        <SquareDecoration
          color="yellow"
          style={{
            right: "675px",
            top: "185px",
            zIndex: 4,
            width: "50px",
            height: "170px",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
