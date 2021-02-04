import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = (state, addComment, updateTextEl) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addComment={addComment} updateTextEl={updateTextEl} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderTree;
