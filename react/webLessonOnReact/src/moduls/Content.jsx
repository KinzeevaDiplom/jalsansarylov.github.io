import React from "react";
import { Redirect, Route } from "react-router-dom";
import ContentItem from "./ContentItem";

const Content = (props) => {
  let themes = Object.keys(props.state);

  let drowThemeContent = themes.map((theme, index) => {
    return (
      <Route
        path={"/" + theme}
        key={props.state[theme].id}
        render={() => <ContentItem theme={props.state[theme]} />}
      />
    );
  });

  return (
    <div className="content">
      <div className="content__text">
        <div className="container">
          {drowThemeContent}
          <Redirect from="/" to={themes[0]} />
          <a
            // Target="_blank"
            className="for__link"
            href="http://www.elista-politeh.ru/"
          >
            Элистинский политехнический колледж
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
