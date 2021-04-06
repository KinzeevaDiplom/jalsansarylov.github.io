import React from "react";
import { Redirect, Route } from "react-router-dom";
import ContentItem from "./ContentItem";

const Content = (props) => {
  let themes = Object.keys(props.state.themes);
  let drowThemeContent = themes.map((theme) => {
    return (
      <Route
        path={"/" + theme}
        key={props.state.themes[theme].id}
        render={() => (
          <ContentItem
            theme={props.state.themes[theme]}
            themeName={theme}
            dispatch={props.dispatch}
            stateTest={props.state.stateTest}
          />
        )}
      />
    );
  });

  return (
    <div className="content">
      <div className="content__text">
        <div className="container">
          {drowThemeContent}
          <Redirect from="/" to={themes[0]} />
          {/* <a
            // Target="_blank"
            className="for__link"
            href="http://www.elista-politeh.ru/"
          >
            Элистинский политехнический колледж
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
