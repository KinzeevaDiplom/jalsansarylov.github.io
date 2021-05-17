let playListCreate = (artistId, artistName) => {
    console.log(artistName)
    localStorage.setItem("idArtist", artistId);
    localStorage.setItem("nameArtist", artistName);
    document.location.href = "artist.html";
};

