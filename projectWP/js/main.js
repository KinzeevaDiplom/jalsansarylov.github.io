$(document).ready(function () {
  // кнопка навигации для мобилок
  $(".mobile-nav-btn__wrapper").click(function () {
    $(".mobile-nav-btn").toggleClass("mobile-nav-btn--active");
    $(".mobile-nav__wrapper").toggleClass("mobile-nav--active");
    $(".mobile-nav-close").toggleClass("mobile-nav-close--active");
  });
  $(".mobile-nav-close").click(function () {
    $(".mobile-nav-btn").toggleClass("mobile-nav-btn--active");
    $(".mobile-nav__wrapper").toggleClass("mobile-nav--active");
    $(".mobile-nav-close").toggleClass("mobile-nav-close--active");
  });
});
