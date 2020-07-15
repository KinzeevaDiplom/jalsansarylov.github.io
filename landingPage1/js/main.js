$(document).ready(function () {
  $(".header-slider").slick({
    arrows: true,
    // убирает стрелки при разрешении 768px
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".news__slider").slick();
  // для смены текста стрелок
  setInterval(() => {
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
  }, 100);

  // кнопка меню на мобилках
  $(".gmr-btn").click(function () {
    $(".gmr-btn").toggleClass("gmr-btn__active");
    $(".gmr-menu").toggleClass("gmr-menu__active");
  });
});
