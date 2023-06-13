import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DraftEditor = () => {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
    // const [text, setText] = React.useState();
    const onEditorStateChange = function (editorState) {
      setEditorState(editorState);     
    };
  return (
    <React.Fragment>
      <div>
        <Editor
        //   ref={null}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
            ]
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default DraftEditor;
