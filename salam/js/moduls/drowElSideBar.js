let drowElSideBar = (arr) => {
  let res = "";
  arr.forEach((artist) => {
    let item = `
      <button onclick="playListCreate(${artist.id},'${artist.name}')">
        <img
          src="https://avatars.yandex.net/get-music-content/${artist.photo}.p.${artist.id}/200x200"
          alt="${artist.name}"
        />
        <span> ${artist.name} </span>
      </button>`;
    res += item;
  });
  return res;
};

export default drowElSideBar;