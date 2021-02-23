import React, { useState, useEffect } from "react";
import "./Announcement.css";
import AnnouncementEditor from "./AnnouncementEditor";

function Announcement(): JSX.Element {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(
    "Our Church honors all possible COVID-19 precautions for your safety."
  );
  const setEditModeHandler = () => setEditMode(true);

  useEffect(() => {}, []);

  return (
    <div className="Announcement">
      <div className="Announcement--content" onClick={setEditModeHandler}>
        {!editMode ? (
          text
        ) : (
          <AnnouncementEditor
            text={text}
            setAnnouncementText={setText}
            setAnnouncementEditMode={setEditMode}
          />
        )}
      </div>
    </div>
  );
}

export default Announcement;
