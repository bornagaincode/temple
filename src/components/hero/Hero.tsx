import React from "react";
import EditableText from "../editable_text/EditableText";
import "./Hero.css";

function Hero(): JSX.Element {
  const headlineText = "Everyone has a story";
  const subText =
    "We are the International Christian Fellowship in Moldova. It is through the sharing of our <strong>stories</strong> that <strong>meaningful relationships</strong> are formed.";
  const tipPlaceholderText =
    "Learn about our <strong>services</strong> and get <strong>directions</strong>";

  return (
    <section id="Hero">
      <h2 id="Hero--headline">
        <EditableText placeholder={headlineText} />
      </h2>
      <p id="Hero--sub">
        <EditableText placeholder={subText} allowNewLine={true} />
      </p>
      <button id="Hero--cta" className="btn btn-lg btn-primary">
        Join us on Sunday
      </button>
      <div id="Hero--tip">
        <EditableText placeholder={tipPlaceholderText} />
      </div>
    </section>
  );
}

// Learn about our services and get directions

export default Hero;
