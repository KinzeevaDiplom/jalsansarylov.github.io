import React from "react";
import ReactHtmlParser from "react-html-parser";

const ContentItem = (props) => {
  let steps = Object.keys(props.theme);

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

      for (let i = 0; i < str.lastIndexOf(size); i++) {
        imgLink += str[i];
      }
    } else imgLink = str;
    res.push(imgLink, sizeClassName);

    return res;
  };

  let parserText = (str) => {
    let res = "";
    let firstText = "";
    let lastText = "";

    for (let i = 0; i < str.indexOf("<s>"); i++) {
      firstText += str[i];
    }

    for (let i = str.indexOf("<s>") + 3; i < str.length; i++) {
      lastText += str[i];
    }

    res = firstText + lastText;

    // console.log(str.indexOf("<s>"));
    console.log("helo");
    return res;
  };

  let parserContent = steps.map((step, index) => {
    let res = [];

    if (step !== "id") {
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
                <p>{ReactHtmlParser(parserText(str))}</p>
              </div>
            );
          } else res.push(<p>{ReactHtmlParser(str)}</p>);
        } else if (str.includes("<s>")) {
          res.push(
            <div className="selection-text">
              <p>{parserText(str)}</p>
            </div>
          );
        } else res.push(<p>{str}</p>);
      });
    }

    return res;
  });

  return <div className="content--text__item">{parserContent}</div>;
};

export default ContentItem;
