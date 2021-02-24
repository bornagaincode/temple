import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import "./AnnouncementEditor.css";

interface IProps {
  text: string;
  setAnnouncementText: React.Dispatch<React.SetStateAction<string>>;
  setAnnouncementEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnnouncementEditor(props: IProps): JSX.Element {
  const input = useRef<HTMLInputElement>(null);
  const { setAnnouncementText, setAnnouncementEditMode } = props;
  const [text, setText] = useState(props.text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setAnnouncementText(event.target.value);
  };

  useEffect(() => {
    input.current?.focus();

    const disableEditMode = (e: any) => {
      if (input.current?.contains(e.target)) {
        return;
      }

      setAnnouncementEditMode(false);
    };

    document.body.addEventListener("click", disableEditMode);

    return () => {
      document.body.removeEventListener("click", disableEditMode);
    };
  });

  return (
    <input
      ref={input}
      id="AnnouncementEditor"
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
}

export default AnnouncementEditor;
