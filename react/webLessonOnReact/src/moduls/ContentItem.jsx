import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link, Route } from "react-router-dom";
import Test from "./Test";

const ContentItem = (props) => {
  let steps = Object.keys(props.theme);
  let showDeley = 0.3;

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

  let imgIncreaseShow = (event) => {
    props.dispatch({ type: "IMG_INCREASE_SHOW", src: event.target.src });
  };

  let idStep = 0;

  let parserContent = steps.map((step) => {
    let stepItems = [];
    let res = [];

    if (!step.includes("test") && step !== "icon") {
      stepItems.push(<h2 className="content__title">{step}</h2>);
      props.theme[step].forEach((str, imgId) => {
        let show = {
          animation: "fadeInUpBig",
          animationDuration: showDeley + "s",
        };
        showDeley += 0.1;

        if (str.includes("img")) {
          let img = parserImg(str);
          stepItems.push(
            <div style={show} className={img[1] + " img-wrapper"}>
              <img
                onClick={imgIncreaseShow}
                src={img[0]}
                id={"img" + imgId}
                alt="картинка"
              ></img>
            </div>
          );
        } else if (str.includes("<a") && str.includes("</a>")) {
          let newStr = str.replace("<a", "<a target='_blank'");
          if (str.includes("<s>")) {
            stepItems.push(
              <div style={show} className="selection-text">
                <p>{ReactHtmlParser(newStr.replace("<s>", ""))}</p>
              </div>
            );
          } else stepItems.push(<p style={show}>{ReactHtmlParser(newStr)}</p>);
        } else if (str.includes("<s>")) {
          stepItems.push(
            <div style={show} className="selection-text">
              <p>{str.replace("<s>", "")}</p>
            </div>
          );
        } else stepItems.push(<p style={show}>{str}</p>);
      });

      if (stepItems.length !== 0) {
        res.push(
          <div id={idStep} className="content__item">
            {stepItems}
          </div>
        );
        stepItems = [];
        idStep++;
      }
    } else if (step.includes("test")) {
      let testName = step.replace("<test>", "");
      res.push(
        <div className="btn-test__wrapper">
          <Link
            className="btn-test button"
            onClick={() => window.scrollTo(0, 0)}
            to={"/" + props.themeName + "/test"}
          >
            test "{testName}"
          </Link>
        </div>
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

  return <div className="container">{drowContent()}</div>;
};

export default ContentItem;
