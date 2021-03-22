import React from "react";

const MenuStep = (props) => {
  let themeItem = Object.keys(props.theme);
  let steps = [];
  let stepId = [];

  themeItem.forEach((item, id) => {
    if (item !== "id") {
      steps.push(item);
      stepId.push(id);
    }
  });

  let drowSteps = steps.map((step, index) => (
    <a href={"#" + stepId[index]} key={index} className="step__link">
      {step}
    </a>
  ));

  return <div className="step__chapter fadeIn">{drowSteps}</div>;
};

export default MenuStep;
