import React from "react";
import TextEditor from "../text_editor/TextEditor";
import "./Hero.css";

function Hero(): JSX.Element {
  const headlineTextContent = "Everyone has a story";
  const subTextContent =
    "We are the International Christian Fellowship in Moldova. " +
    "It is through the sharing of our <b>stories</b> that <b>meaningful relationships</b> are formed.";
  const tipTextContent =
    "Learn about our <b>services</b> and <b>get directions</b>";

  return (
    <section id="Hero">
      <h2 id="Hero--headline">
        <TextEditor content={headlineTextContent} width={600}></TextEditor>
      </h2>
      <p id="Hero--sub">
        <TextEditor content={subTextContent} width={800}></TextEditor>
      </p>
      <button id="Hero--cta" className="btn btn-lg btn-primary">
        Join us on Sunday
      </button>
      <p id="Hero--tip">
        <TextEditor content={tipTextContent} width={500}></TextEditor>
      </p>
    </section>
  );
}

export default Hero;
