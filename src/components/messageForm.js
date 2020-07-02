import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/messageForm.scss";
import Input from "./controls/input";
import Textarea from "./controls/textarea";
import Button from "./controls/button";

const MessageForm = () => {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [messageVal, setMessageVal] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setNameVal(value);
      case "email":
        return setEmailVal(value);
    }
  };

  const handleMessageChange = e => {
    setMessageVal(e.target.value);
  };

  const confirmForm = () => {
    alert(`Message was sent.`);
  };

  const {
    formData: {
      frontmatter: { description },
    },
  } = useStaticQuery(graphql`
    {
      formData: markdownRemark(
        frontmatter: { name: { eq: "project-description-form" } }
      ) {
        frontmatter {
          title
          seoTitle
          description
          keywords
        }
      }
    }
  `);

  return (
    <div className="messageFormContainer">
      <div className="formLabel">{description}</div>
      <div className="inputs">
        <Input
          placeholder="Name"
          name="name"
          value={nameVal}
          changeHandler={handleInputChange}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={emailVal}
          changeHandler={handleInputChange}
        />
      </div>
      <div className="messageInput">
        <Textarea
          placeholder="Message"
          name="message"
          value={messageVal}
          changeHandler={handleMessageChange}
          type="text"
        />
      </div>
      <div>
        <Button type="primary" onClickHandler={confirmForm} text="send" />
      </div>
    </div>
  );
};

export default MessageForm;
