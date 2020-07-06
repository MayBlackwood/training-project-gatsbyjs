import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/messageForm.scss";
import Input from "./controls/input";
import Textarea from "./controls/textarea";
import Button from "./controls/button";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
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
          value={name}
          changeHandler={handleInputChange}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={email}
          changeHandler={handleInputChange}
        />
      </div>
      <div className="messageInput">
        <Textarea
          placeholder="Message"
          name="message"
          value={message}
          changeHandler={handleInputChange}
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
