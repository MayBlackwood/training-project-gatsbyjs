import React from "react";
import "./../styles/quote.scss";
import quotes from "./../images/quotes.png";

const Quote = ({ text, author }) => (
  <div className="quoteContainer">
    <div className="quoteIcon">
      <img src={quotes} alt="quotes" />
    </div>
    <div className="quoteText">&quot;{text}&quot;</div>
    <div className="quoteAuthor">{author}</div>
  </div>
);

export default Quote;
