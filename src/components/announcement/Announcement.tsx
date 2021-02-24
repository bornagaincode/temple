import React, { useState, useRef, useEffect } from "react";
import AnnouncementEditor from "./AnnouncementEditor";
import AnnouncementText from "./AnnouncementText";
import "./Announcement.css";

function Announcement(): JSX.Element {
  const root = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(
    "Our Church honors all possible COVID-19 precautions for your safety."
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const onMouseEnterHandler = () => setIsEditMode(true);
  const onMouseLeaveHandler = () => (isFocused ? false : setIsEditMode(false));

  useEffect(() => {
    const listenForOutsideClicks = (e: MouseEvent) => {
      if (root.current?.contains(e.target as Node)) {
        return;
      }

      setIsEditMode(false);
    };

    document.body.addEventListener("click", listenForOutsideClicks);

    return () => {
      document.body.removeEventListener("click", listenForOutsideClicks);
    };
  }, []);

  return (
    <div
      ref={root}
      id="Announcement"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {isEditMode ? (
        <AnnouncementEditor
          text={text}
          setAnnouncementText={setText}
          setIsFocused={setIsFocused}
        />
      ) : (
        <AnnouncementText text={text} />
      )}
    </div>
  );
}

export default Announcement;
