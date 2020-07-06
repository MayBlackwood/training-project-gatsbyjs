import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./../styles/messageForm.scss";
import Input from "./controls/input";
import Textarea from "./controls/textarea";
import Button from "./controls/button";
import axios from "axios";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = ({ target: { name, value } }) => {
    console.log(formData);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    const { name, email, message } = formData;
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/contact-us",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name,
        email,
        message,
      },
    }).then(res => {
      console.log(res);
    });
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
      <form onSubmit={handleSubmit}>
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
          <Button
            actionType="submit"
            type="primary"
            // onClickHandler={handleSubmit}
            text="send"
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
