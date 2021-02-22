import React, { useState, useEffect } from "react";
import "./Announcement.css";

function Announcement(): JSX.Element {
  const [text, setText] = useState("Announcement");

  useEffect(() => {
    setText(
      "Our Church honors all possible COVID-19 precautions for your safety."
    );
  }, []);

  return (
    <div className="Announcement">
      <div className="Announcement--content">{text}</div>
    </div>
  );
}

export default Announcement;
