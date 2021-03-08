import React, { useRef } from "react";
import "./Announcement.css";
import TextEditor from "../text_editor/TextEditor";

function Announcement(): JSX.Element {
  const root = useRef<HTMLDivElement>(null);
  const announcementTextContent =
    "Our Church honors all possible COVID-19 precautions for your safety.";

  return (
    <div ref={root} id="Announcement">
      <TextEditor content={announcementTextContent} width={800} />
    </div>
  );
}

export default Announcement;
