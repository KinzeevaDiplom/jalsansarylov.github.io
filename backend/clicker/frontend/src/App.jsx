import logo from "./logo.svg";
import "./App.css";
import "materialize-css"
import Clicker from "./Clicker"

function App() {
  return (
    <div className="wrapper-app">
      <div className="app center">
        <h1>кликер</h1>
        <div className="">
          <div className="app__content">
            <Clicker/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
