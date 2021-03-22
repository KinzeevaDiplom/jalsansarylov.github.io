import "./style.css";
import Content from "./moduls/Content";
import Menu from "./moduls/Menu";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="wraper">
          <Menu state={props.state.menu} />
          <Content state={props.state.content} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
