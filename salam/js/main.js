$(document).ready(() => {
  $(".header__slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $("iframe").on("load", function () {
    $(".preloader").addClass("preloader-disable");
    console.log("ready");
  });
  // отлавливаем фреймы
});

let playListCreate = (artist) => {
  localStorage.setItem("idArtist", artist);
  document.location.href = "artist.html";
};
