import "./css/style.css";
import Header from "./moduls/header";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import home from "./moduls/pages/home";
import Footer from "./moduls/footer";
import search from "./moduls/pages/search";
import broaning from "./moduls/pages/broaning";
import final from "./moduls/pages/final";
import registration from "./moduls/pages/registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Route path="/home" component={home} />
          <Route path="/search" component={search} />
          <Route path="/broaning" component={broaning} />
          <Route path="/final" component={final} />
          <Route path="/registration" component={registration} />
          <Redirect from="/" to="/home" />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
