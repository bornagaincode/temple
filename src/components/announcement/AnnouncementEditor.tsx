import React, { useState, ChangeEvent, useRef } from "react";
import "./AnnouncementEditor.css";

interface IProps {
  text: string;
  setAnnouncementText: React.Dispatch<React.SetStateAction<string>>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnnouncementEditor(props: IProps): JSX.Element {
  const input = useRef<HTMLInputElement>(null);
  const { setAnnouncementText, setIsFocused } = props;
  const [text, setText] = useState(props.text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setAnnouncementText(event.target.value);
  };

  const onFocusHandler = () => setIsFocused(true);
  const onBlurHandler = () => setIsFocused(false);

  return (
    <input
      ref={input}
      id="AnnouncementEditor"
      type="text"
      value={text}
      onChange={handleChange}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
}

export default AnnouncementEditor;
