import testData from "./moduls/testData.js";

$(document).ready(() => {
  drowQuestion();
  $(".btn-res").click(checkAnswers);
});

let drowQuestion = () => {
  let testName = localStorage.getItem("testName");
  let testQuest = getQuest(testName);

  if (testQuest.type == "trueFalse") {
    let questHtml = createHtml(testQuest.questions);
    $(".qustion").html(questHtml);
  }
};

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

let drowNav = (quantity) => {
  let navHtml = "";
  for (let i = 0; i < quantity + 1; i++) {
    navHtml += `<a href="#${i}" content="вопрос${i + 1}"></a>`;
  }
  $(".nav").html(navHtml);
};

let checkAnswers = () => {
  if (testQuest.type == "trueFalse") {
  }
};
