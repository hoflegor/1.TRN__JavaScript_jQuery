
function getMissingElement(array) {
    var arraySort = array.sort(function (a,b) {return a-b;}), //sortowanie tablicy po liczbach
        result = [];
    for (var i=0;i < array.length - 1; i++) {
        if (arraySort[i] + 1 != arraySort[i+1]) {
            result.push(arraySort[i] + 1);
        }
    }
    if (result.length<1) {
        console.log(null);
    } else {
        for (i=0; i < result.length; i++){
            console.log(result[i]);
        }
    }
}

getMissingElement([1,2,3,4,5,6,7]);
getMissingElement([6,7,8,10,11,12,13,14,15]);
getMissingElement([-4,-3,-2,0,1,2,3,4]);