$(document).ready(() => {
  // выключаем preloader
  $("iframe").on("load", function () {
    $(".preloader").addClass("preloader-disable");
  });
});
