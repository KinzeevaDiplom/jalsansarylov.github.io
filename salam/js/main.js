import artistsData from "./moduls/artistsData.js";

$(document).ready(() => {
  $(".header__slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });
 
  // заполняем sidebar
  let arrCombArtist = combineArtist(artistsData);
  let randomArtists = rondomizeArtists(arrCombArtist);


  $(".side-bar").html(drowElSideBar(randomArtists));

});

let combineArtist = (arr) => {

  let res = [];
  arr.forEach((element) => {
    let arrEl = Object.keys(element);
    arrEl.forEach((arrEl) => {
      res = res.concat(element[arrEl]);
    });
  });
  return res;
};

let rondomizeArtists = (arr) => {
  let res = [];
  let randomNum = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Math.floor(Math.random() * arr.length) + 0;
    if (!randomNum.includes(num)) {
      randomNum.push(num);
      res.push(arr[num]);
    } else i--;
  }
  return res;
};

let drowElSideBar = (arr) => {
  let res = "";
  arr.forEach((artist) => {
    let item = `
    <button onclick="playListCreate(${artist.id})">
      <img
        src="https://avatars.yandex.net/get-music-content/${artist.photo}.p.${artist.id}/200x200"
        alt="${artist.name}"
      />
      <span> ${artist.name} </span>
    </button>`;
    res += item;
  });
  // debugger
  return res;
};
