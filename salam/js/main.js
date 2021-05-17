import artistsData from "./moduls/artistsData.js";
import rondomizeArtists from "./moduls/rondomizeArtists.js";
import drowElSideBar from "./moduls/drowElSideBar.js"
import combineArtist from "./moduls/combineArtist.js"

$(document).ready(() => {
  $(".header__slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });

  let arrCombArtist = combineArtist(artistsData);
  let randomArtists = rondomizeArtists(arrCombArtist);

  $(".side-bar").html(drowElSideBar(randomArtists));

});



