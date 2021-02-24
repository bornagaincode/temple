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
  const [inputText, setInputText] = useState(props.text);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    setAnnouncementText(event.target.value);
  };
  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape" || event.key === "Enter") {
      input.current?.blur();
    }
  };
  const onFocusHandler = () => setIsFocused(true);
  const onBlurHandler = () => setIsFocused(false);

  return (
    <input
      ref={input}
      id="AnnouncementEditor"
      type="text"
      value={inputText}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
}

export default AnnouncementEditor;
