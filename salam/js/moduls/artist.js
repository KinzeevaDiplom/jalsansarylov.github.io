import artistsData from "./artistsData.js";
import combineArtist from "./combineArtist.js";

$(document).ready(() => {

    let artistId = localStorage.getItem("idArtist");
    let artistName = localStorage.getItem("nameArtist");
    let arrCombArtist = combineArtist(artistsData);
    let artistData = getDataArtist(arrCombArtist, artistName);

    $(".all-tracks").css("background-image", `url(https://avatars.yandex.net/get-music-content/${artistData.photo}.p.${artistId}/200x200)`)




})

let getDataArtist = (arr, artistName) => {
    let res = {};
    arr.forEach(element => {
        let arrObject = Object.values(element);
        if (arrObject.includes(artistName))
            res = element;
    });
    return res;
}