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

  //плавная прокрутка
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
    e.preventDefault();
  });

  // изменение элементов при прогрутке
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 700) {
      $(".btn-up").addClass("btn-up--active");
    } else {
      $(".btn-up").removeClass("btn-up--active");
    }
  });
});
