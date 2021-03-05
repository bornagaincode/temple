import React from "react";
import EditableText from "../editable_text/EditableText";
import "./Hero.css";

function Hero(): JSX.Element {
  const heroHeadlineText = [{ children: [{ text: "Everyone has a story" }] }];
  const heroSubText = [
    {
      children: [
        {
          text:
            "We are the International Christian Fellowship in Moldova. It is through the sharing of our ",
        },
        { text: "stories ", bold: true },
        { text: "that " },
        { text: "meaningful relationships ", bold: true },
        { text: "are formed" },
      ],
    },
  ];
  const tipText = [
    { children: [{ text: "Learn about our services and get directions " }] },
  ];

  return (
    <section id="Hero">
      <h2 id="Hero--headline">
        <EditableText initialValue={heroHeadlineText} />
      </h2>
      <p id="Hero--sub">
        <EditableText initialValue={heroSubText} />
      </p>

      <button id="Hero--cta" className="btn btn-lg btn-primary">
        Join us on Sunday
      </button>
      <p id="Hero--tip">
        <EditableText initialValue={tipText} />
      </p>
    </section>
  );
}

export default Hero;
