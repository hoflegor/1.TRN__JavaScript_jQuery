function add(array) {
    var res=0;
    for (var i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res;
}

function distFromAvarage(array) {
    var res = [],
        avg = add(array) / array.length;
    for (var i=0; i < array.length; i++) {
        res.push(Math.abs(array[i] - avg));
    }
    return res;
}

console.log(distFromAvarage([1,2,3,4]));