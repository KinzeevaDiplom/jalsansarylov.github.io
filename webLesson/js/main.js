$(document).ready(function () {
  // переключатель темной темы
  $(".switch").click(function () {
    $(this).toggleClass("switch--active");

    if ($(this).hasClass("switch--active")) {
      $(":root").css({
        "--mainColor": "#B9BBBE",
        "--bgMain": "#36393F",
        "--bgMenu": "#2F3136",
        "--bgTopPanel": "#202225",
        "--extraColor": "#EB850E",
      });
    } else {
      $(":root").css({
        "--mainColor": "#202225",
        "--bgMain": "#ebebeb",
        "--bgMenu": " #d2d2d2",
        "--bgTopPanel": "#b5b5b5",
        "--extraColor": "#AF0000",
      });
    }
  });

  // вскрыть меню
  $(".btn__hide").click(function () {
    $(".step").toggleClass("step--hide");

    if ($(".step").hasClass("step--hide")) {
      $(":root").css({
        "--whContainer": "1500px",
      });
    } else {
      $(":root").css({
        "--whContainer": "1234px",
      });
    }
  });
});
