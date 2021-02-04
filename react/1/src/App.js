// import logo from './logo.svg';
import "./App.css";
import Home from "./moduls/Home";
import Navigation from "./moduls/Navigation";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import Comment from "./moduls/Comment";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Route path="/home" component={Home} />
          <Route
            path="/comments"
            render={() => (
              <Comment
                commentsD={props.state.commentsD}
                addComment={props.addComment}
                updateTextEl={props.updateTextEl}
                newTextPost={props.state.newTextPost}
              />
            )}
          />
        </div>
        <Redirect from="/" to="/home" />
      </BrowserRouter>
    </div>
  );
}

export default App;
