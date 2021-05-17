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

export default rondomizeArtists;