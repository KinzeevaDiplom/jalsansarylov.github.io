import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link, Route } from "react-router-dom";
import Test from "./Test";

const ContentItem = (props) => {
  let steps = Object.keys(props.theme);

  let checkTest = () => {
    let testExist = false;
    steps.forEach((step) => {
      if (step.includes("test")) testExist = true;
    });
    return testExist;
  };

  let createRouteTest = () => {
    let res;
    steps.forEach((step) => {
      if (step.includes("test"))
        res = (
          <Route
            path={"/" + props.themeName + "/test"}
            render={() => (
              <Test
                stateTest={props.stateTest}
                dispatch={props.dispatch}
                test={props.theme[step]}
              />
            )}
          />
        );
    });
    return res;
  };

  let parserImg = (str) => {
    let res = [];
    let size = "";
    let sizeClassName = "img__middle";
    let imgLink = "";

    if (str.includes("small") || str.includes("big")) {
      if (str.includes("small")) size = "small";
      else size = "big";

      switch (size) {
        case "small":
          sizeClassName = "img__small";
          break;
        case "big":
          sizeClassName = "img__big";
          break;
        default:
          sizeClassName = "img__middle";
      }

      imgLink = str.replace(size, "");
    } else imgLink = str;

    res.push(imgLink, sizeClassName);

    return res;
  };

  let parserContent = steps.map((step, index) => {
    let res = [];

    if (step !== "id" && !step.includes("test")) {
      res.push(
        <h2 id={index} className="content__title">
          {step}
        </h2>
      );
      props.theme[step].forEach((str) => {
        if (str.includes("img")) {
          let img = parserImg(str);
          res.push(
            <div className={img[1]}>
              <img src={img[0]} alt="картинка"></img>
            </div>
          );
        } else if (str.includes("<a") && str.includes("</a>")) {
          if (str.includes("<s>")) {
            res.push(
              <div className="selection-text">
                <p>{ReactHtmlParser(str.replace("<s>", ""))}</p>
              </div>
            );
          } else res.push(<p>{ReactHtmlParser(str)}</p>);
        } else if (str.includes("<s>")) {
          res.push(
            <div className="selection-text">
              <p>{str.replace("<s>", "")}</p>
            </div>
          );
        } else res.push(<p>{str}</p>);
      });
    } else if (step.includes("test")) {
      let testName = step.replace("<test>", "");
      res.push(
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/" + props.themeName + "/test"}
        >
          пройти тест "{testName}"
        </Link>
      );
    }

    return res;
  });

  let drowContent = () => {
    if (checkTest()) {
      let res = [];

      res.push(
        <Route
          exact
          path={"/" + props.themeName}
          render={() => parserContent}
        />
      );

      res.push(createRouteTest());

      return res;
    } else return parserContent;
  };

  return <div className="content--text__item">{drowContent()}</div>;
};

export default ContentItem;
