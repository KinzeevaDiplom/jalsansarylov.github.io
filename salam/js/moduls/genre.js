import artistsData from "./artistsData.js";

$(document).ready(() => {
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
    case "dubstep":
      return res;
    case "metal":
      return res;
  }

  console.log(res);
};
