import artistsData from "./artistsData.js";
import combineArtist from "./combineArtist.js";

$(document).ready(() => {

    let artistId = localStorage.getItem("idArtist");
    let artistName = localStorage.getItem("nameArtist");
    let arrCombArtist = combineArtist(artistsData);
    let artistData = getDataArtist(arrCombArtist, artistName);

    $(".all-tracks").html(`<img src = "https://avatars.yandex.net/get-music-content/${artistData.photo}.p.${artistId}/200x200" >`)
    $(".all-tracks").click(() => {
        $(document).ready(function () {
            drowPlayList();
        });
    })

    $(".alboms__wrapper__render").html(drowAlboms(artistData.alboms));
    // console.log(drowAlboms(artistData.alboms))

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


let drowAlboms = (alboms) => {
    let res = "";

    alboms.forEach(el => {
        res += `<button class="alboms__item" onclick="drowPlayListAlbom(${el.id})">
            <img src="http://avatars.yandex.net/get-music-content/${el.photo}.a.${el.id}-1/200x200">
        </button>`
    })

    return res;
}