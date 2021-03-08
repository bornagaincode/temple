import React, { useEffect, useRef } from "react";
import TextFrame from "./TextFrame";
import MediumEditor from "medium-editor";
import "./TextEditor.css";

interface ITextProps {
  children: JSX.Element;
  className?: string;
}

function TextEditor(props: ITextProps): JSX.Element {
  const { children } = props;
  const root = useRef(null);

  // Medium
  useEffect(() => {
    const editor = new MediumEditor(root.current!, {
      toolbar: {
        buttons: ["bold", "italic", "underline", "anchor"],
      },
    });

    editor.subscribe("editableInput", (event: Event) => {
      // Post to server
    });
  });

  return (
    <TextFrame width={800} maxWidth={1200} minWidth={600} align={"center"}>
      <div ref={root} className="TextEditor">
        {children}
      </div>
    </TextFrame>
  );
}

export default TextEditor;
