import React from "react";
import { DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import "./EditableText.css";

interface IProps {
  placeholder: string;
  allowNewLine?: boolean;
  enableToolbar?: boolean;
}

function EditableText(props: IProps): JSX.Element {
  const { placeholder, allowNewLine, enableToolbar } = props;
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(stateFromHTML(placeholder))
  );
  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    return newState ? (setEditorState(newState), "handled") : "not-handled";
  };
  const returnHandler = (_e: React.KeyboardEvent, editorState: EditorState) => {
    return allowNewLine ? "not-handled" : "handled";
  };

  return (
    <div className="EditableText">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        handleReturn={returnHandler}
      />
    </div>
  );
}

export default EditableText;
