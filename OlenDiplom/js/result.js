import testData from "./moduls/testData.js";

$(document).ready(() => {
  $(".result").html(getHtmlResult());
});

let getHtmlResult = () => {
  let res = "";
  let typeTest = localStorage.getItem("testType");
  let name = localStorage.getItem("name");
  let lastName = localStorage.getItem("lastName");
  let resTest = localStorage.getItem("testRes");

  if (typeTest == "trueFalse") {
    res = `<p>${name} ${lastName}, результат проиденного теста: ${resTest}</p>`;
  } else {
    res = `<p>${name} ${lastName}, результат проиденного теста: ${resTest[0]} </p>
    <p>${resTest[1]}</p>
    `;
  }

  return res;
};
