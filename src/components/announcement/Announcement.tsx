import React from "react";
import "./Announcement.css";
import EditableText from "../editable_text/EditableText";

function Announcement(): JSX.Element {
  const text =
    "Our Church honors all possible COVID-19 precautions for your safety.";

  return (
    <div id="Announcement">
      <EditableText placeholder={text} />
    </div>
  );
}

export default Announcement;
