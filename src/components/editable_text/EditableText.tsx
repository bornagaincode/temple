import React, { useMemo } from "react";
import Editor from "@draft-js-plugins/editor";
import { DraftEditorCommand, EditorState, RichUtils } from "draft-js";
import createInlineToolbarPlugin, {
  InlineToolbarPluginConfig,
} from "@draft-js-plugins/inline-toolbar";
import "../../../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from "@draft-js-plugins/buttons";
import { stateFromHTML } from "draft-js-import-html";
import "./EditableText.css";

interface IProps {
  placeholder: string;
  allowNewLine?: boolean;
}

function EditableText(props: IProps): JSX.Element {
  const { placeholder, allowNewLine } = props;
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(stateFromHTML(placeholder))
  );
  const [plugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin({
      structure: [BoldButton, ItalicButton, UnderlineButton],
    } as InlineToolbarPluginConfig);

    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
  }, []);
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
        plugins={plugins}
      />
      <InlineToolbar>
        {(externalProps) => (
          <div>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
          </div>
        )}
      </InlineToolbar>
    </div>
  );
}

export default EditableText;
