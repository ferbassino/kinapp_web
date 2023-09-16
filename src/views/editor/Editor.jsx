import React from "react";
import EditorNavigation from "./EditorNavigation";

const Editor = (view, userName) => {
  return (
    <div className="container">
      <h2 className="m-3">Editor Zone....</h2>
      <EditorNavigation view={view} userName={userName} />
    </div>
  );
};

export default Editor;
