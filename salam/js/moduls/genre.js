import artistsData from "./artistsData.js";
import rondomizeArtists from "./rondomizeArtists.js";
import drowElSideBar from "./drowElSideBar.js"


$(document).ready(() => {
  let genre = localStorage.getItem("genreName");
  if (artistsData[0][genre] != undefined) {
    console.log(artistsData[0][genre]);
    let randomArtists = rondomizeArtists(artistsData[0][genre]);
    $(".side-bar").html(drowElSideBar(randomArtists));
  }
  $(".track-list").html(drowTrackList());
});

let drowTrackList = () => {
  let res = "";
  switch (localStorage.getItem("genreName")) {
    case "rock":
      res = `<iframe frameborder="0" style="border:none;width:100%;height:100vh;" width="100%" height="450" src="https://music.yandex.ru/iframe/#playlist/music.partners/2050">Listen to <a href='https://music.yandex.ru/users/music.partners/playlists/2050?lang=en'>Best Russian Rock Songs</a> — <a href='https://music.yandex.ru/users/music.partners'>Editors' choice</a> on Yandex Music</iframe>`;
      return res;
    case "rap":
      res = `<iframe frameborder="0" style="border:none;width:100%;height:100vh;" width="100%" height="450vh" src="https://music.yandex.ru/iframe/#playlist/music-blog/1892">Listen to <a href='https://music.yandex.ru/users/music-blog/playlists/1892?lang=en'>Legends of Hip-Hop</a> — <a href='https://music.yandex.ru/users/music-blog'>Yandex Music</a> on Yandex Music</iframe>`;
      return res;
    case "pop":
      res = `<iframe frameborder="0" style="border:none;width:100%;height:100vh;" width="100%" height="450vh" src="https://music.yandex.ru/iframe/#playlist/music-blog/1002">Listen to <a href='https://music.yandex.ru/users/music-blog/playlists/1002?lang=en'>Pop Forever</a> — <a href='https://music.yandex.ru/users/music-blog'>Yandex Music</a> on Yandex Music</iframe>`;
      return res;
    case "electronics":
      res = `<iframe frameborder="0" style="border:none;width:100%;height:100vh;" width="100%" height="450" src="https://music.yandex.ru/iframe/#playlist/music-blog/2136">Слушайте <a href='https://music.yandex.ru/users/music-blog/playlists/2136'>Электронная одиссея</a> — <a href='https://music.yandex.ru/users/music-blog'>Яндекс.Музыка</a> на Яндекс.Музыке</iframe>`;
      return res;
    case "metal":
      res = `<iframe frameborder="0" style="border:none;width:100%;height:100vh;" width="100%" height="450vh" src="https://music.yandex.ru/iframe/#playlist/music-blog/1002">Listen to <a href='https://music.yandex.ru/users/music-blog/playlists/1002?lang=en'>Pop Forever</a> — <a href='https://music.yandex.ru/users/music-blog'>Yandex Music</a> on Yandex Music</iframe>`;
      return res;
  }

  console.log(res);
};
