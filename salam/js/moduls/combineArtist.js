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

export default combineArtist;