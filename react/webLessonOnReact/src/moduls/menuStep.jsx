import React from "react";
import { Route } from "react-router";
import { Link } from "react-scroll";

const MenuStep = (props) => {
  let themeItem = Object.keys(props.theme);
  let showDeley = 0.3;

  let qsnQuantity = () => {
    let qsns;
    let res;

    themeItem.forEach((item) => {
      qsns = Object.keys(props.theme[item]);
      if (item.includes("<test>")) res = qsns.length;
      else res = 0;
    });

    return res;
  };

  let searchStep = () => {
    let steps = [];

    if (props.search === "") {
      themeItem.forEach((item) => {
        if (item !== "id" && !item.includes("test") && item !== "icon") {
          steps.push(item);
        }
      });
    } else {
      let str = props.search;
      themeItem.forEach((item, id) => {
        if (
          item.includes(str) &&
          !item.includes("test") &&
          item !== "icon" &&
          item !== "id"
        ) {
          steps.push(item);
        }
      });
    }

    return steps;
  };

  let drowQsn = () => {
    let res = [];
    for (let i = 1; i <= qsnQuantity(); i++) {
      let show = {
        animation: "fadeInUp",
        animationDuration: showDeley + "s",
      };
      showDeley += 0.2;

      res.push(
        <Link
          style={show}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={500}
          to={i}
          spy={true}
          className="step__link"
        >
          Вопрос {i}
        </Link>
      );
    }
    return res;
  };

  let drowSteps = searchStep().map((step, index) => {
    let show = {
      animation: "fadeInUp",
      animationDuration: showDeley + "s",
    };
    showDeley += 0.2;
    return (
      <Link
        style={show}
        activeClass="active"
        to={index}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="step__link"
      >
        {step}
      </Link>
    );
  });

  let drowMenuItem = () => {
    let res = [];

    if (qsnQuantity() === 0) {
      res = drowSteps;
    } else {
      res.push(
        <Route exact path={"/" + props.themeName} render={() => drowSteps} />
      );

      res.push(
        <Route
          path={"/" + props.themeName + "/test"}
          render={() => drowQsn()}
        />
      );
    }

    return res;
  };

  // let drowQsn =
  // let drowSteps = steps.map((step, index) => {
  //   let res = [];

  //   res.push(
  //     <Route
  //       exact
  //       path={"/" + props.themeName}
  //       render={() => (
  //         <a href={"#" + stepId[index]} key={index} className="step__link">
  //           {step}
  //         </a>
  //       )}
  //     />
  //   );
  //   res.push(
  //     <Route
  //       path="/test"
  //       render={() => (
  //         <a href={"#" + stepId[index]} key={index} className="step__link">
  //           {/* {step} */}
  //         </a>
  //       )}
  //     />
  //   );

  //   return res;
  // });

  return <div className="step__chapter fadeIn">{drowMenuItem()}</div>;
};

export default MenuStep;
