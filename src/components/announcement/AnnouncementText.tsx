import React from "react";
import "./AnnouncementText.css";

interface IProps {
  text: string;
}

function AnnouncementText(props: IProps): JSX.Element {
  const { text } = props;

  return <div id="AnnouncementText">{text}</div>;
}

export default AnnouncementText;
