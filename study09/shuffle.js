
/**
 * originArray를 받아서 순서를 섞은 새로운 array를 구한다!
 * @param {*} originArray 
 */
function shuffle(originArray) {
    var arr = [];
    var idx = [];

    // originArray를 무작위로 섞자!
    for(var i = 0; i < originArray.length; i++) {
        // 난수 발생 (for index)
        var randomNumber;
        while(true) {
            randomNumber = Math.floor(Math.random() * originArray.length);
            if(idx.indexOf(randomNumber) == -1) break;
        }
        idx.push(randomNumber);
        arr.push(originArray[randomNumber]);
    }

    return arr;
}

