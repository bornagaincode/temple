import React from "react";
import {
  ContentState,
  DraftEditorCommand,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "./EditableText.css";

interface IProps {
  placeholder?: string;
}

function EditableText(props: IProps): JSX.Element {
  const { placeholder } = props;
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(placeholder || "Editable text")
    )
  );
  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    return newState ? (setEditorState(newState), "handled") : "not-handled";
  };

  return (
    <div className="EditableText">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
}

export default EditableText;
