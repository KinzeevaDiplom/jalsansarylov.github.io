import "./style.css";
import Content from "./moduls/Content";
import Menu from "./moduls/Menu";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <div
      // выбор темы приложения
      className={
        "app " +
        props.state.menu.colorTheme +
        " " +
        props.state.menu.hideShowMenu
      }
    >
      <BrowserRouter>
        <div className="wraper">
          <Menu state={props.state.menu} dispatch={props.dispatch} />

          <Content state={props.state.content} dispatch={props.dispatch} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
