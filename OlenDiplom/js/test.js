import testData from "./moduls/testData.js";

$(document).ready(() => {
  drowQuestion();

  let res = {};
  // для автоматического перехода к след вопросу
  $("input").click((e) => {
    res = addRes(e, res);
    nextStep(e);
  });
  // кнопка результата
  $(".btn-res").click(() => {
    checkAnswers(res);
  });
});
// рисует вопросы
let drowQuestion = () => {
  let testName = localStorage.getItem("testName");
  let testQuest = getQuest(testName);

  if (testQuest.type == "trueFalse") {
    localStorage.setItem("testType", "trueFalse");
  }

  let questHtml = createHtml(testQuest.questions);
  $(".qustion").html(questHtml);
};
// получить вопросы из общего массива
let getQuest = (testName) => {
  let res = {};

  let arrTests = Object.keys(testData);
  arrTests.forEach((test) => {
    if (testName == test) {
      res = testData[test];
    }
  });

  return res;
};
// формирует html размету вопросов
let createHtml = (arr) => {
  let res = "";

  arr.forEach((quest, index) => {
    drowNav(index);

    let optionHtmlArr = quest.option.map((option) => {
      return `<label><input type="radio" name="q${index}" value="${option}"  />${option}</label>`;
    });
    let optionHtmlStr = optionHtmlArr.join(" ");

    res += `
    <div class="qustion__item" id="${index}">
          <p>
            <span>вопрос${index + 1}</span> : ${quest.quest}
          </p>
            ${optionHtmlStr}
        </div>
    `;
  });

  return res;
};
// рисует элементы навигации
let drowNav = (quantity) => {
  let navHtml = "";
  for (let i = 0; i < quantity + 1; i++) {
    navHtml += `<a href="#${i}" id = "nav${i}" content="вопрос${i + 1}"></a>`;
  }
  $(".nav").html(navHtml);
};
// проверка результата
let checkAnswers = (res) => {
  if (localStorage.getItem("testType") == "trueFalse") {
    let arrRes = Object.values(res);
    let trueAns = 0;
    arrRes.forEach((el) => {
      if (el == "true") trueAns++;
    });
    console.log(trueAns);
  }
};
// заполнения массива с ответами на тест
let addRes = (e, res) => {
  let resF = res;
  if (localStorage.getItem("testType") == "trueFalse") {
    if (e.target.value.includes("<t>")) resF[e.target.name] = "true";
    else resF[e.target.name] = "false";
  }
  return resF;
};
// функция для перехода на след вопрос
let nextStep = (e) => {
  let name = e.target.name;
  let nextId = parseInt(name.replace("q", ""));
  document.location = `#${nextId + 1}`;
  $(`#nav${nextId}`).css("background", "orange");
};
