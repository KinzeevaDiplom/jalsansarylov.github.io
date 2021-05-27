$(document).ready(() => {
  $(".btn-hide__wrapper").click(toggleBtn);
});

let reloadFile = (nameFile) => {
  $("iframe").attr("src", nameFile);
};

let toggleBtn = () => {
  $(".btn-hide__wrapper").toggleClass("btn-hide__close");
  $(".menu").toggleClass("menu-hide");
};
