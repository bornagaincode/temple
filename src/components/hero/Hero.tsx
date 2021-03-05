import React from "react";
import EditableText from "../editable_text/EditableText";
import "./Hero.css";

function Hero(): JSX.Element {
  return (
    <section id="Hero">
      <h2 id="Hero--headline">Everyone has a story</h2>
      <p id="Hero--sub">
        We are the International Christian Fellowship in Moldova. It is through
        the sharing of our <strong>stories</strong> that{" "}
        <strong>meaningful relationships</strong> are formed.
      </p>
      <button id="Hero--cta" className="btn btn-lg btn-primary">
        Join us on Sunday
      </button>
      <div id="Hero--tip">
        <EditableText placeholder="Learn about our services and get directions" />
      </div>
    </section>
  );
}

// Learn about our services and get directions

export default Hero;
