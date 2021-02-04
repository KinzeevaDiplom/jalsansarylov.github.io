import "./index.css";
import state from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import Rerender from "./render";
import { addComment } from "./redux/state";
import { updateTextEl } from "./redux/state";

Rerender(state, addComment, updateTextEl);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
