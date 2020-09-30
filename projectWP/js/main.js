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
    //fixed_offset нужен для фиксированных шапок
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
    e.preventDefault();
  });
});
