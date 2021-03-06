import React, { useEffect, useRef } from "react";
import TextFrame from "./TextFrame";
import MediumEditor from "medium-editor";
import "./TextEditor.scss";

interface ITextProps {
  content: string;
  className?: string;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
}

function TextEditor(props: ITextProps): JSX.Element {
  const { content, width, maxWidth, minWidth } = props;
  const root = useRef(null);

  useEffect(() => {
    // Instantiate editor
    const editor = new MediumEditor(root.current!, {
      toolbar: {
        buttons: [
          "bold",
          "italic",
          "underline",
          { name: "anchor", contentDefault: '<span class="icon-link"></span>' },
        ],
        diffLeft: 0,
        diffTop: -10,
      },
      anchor: {
        linkValidation: true,
        placeholderText: "Paste or type a link here...",
        targetCheckbox: false,
        targetCheckboxText: "Open in new window",
      },
      placeholder: {
        text: "Click to edit",
      },
    });

    // Initialize with HTML content
    editor.setContent(content);

    // Save changes
    editor.subscribe("editableInput", (event: Event) => {
      // Post to server or update state here
    });
  });

  return (
    <TextFrame
      width={width || 800}
      minWidth={500 || minWidth}
      maxWidth={1400 || maxWidth}
      align={"center"}
    >
      <div ref={root} className="TextEditor"></div>
    </TextFrame>
  );
}

export default TextEditor;
