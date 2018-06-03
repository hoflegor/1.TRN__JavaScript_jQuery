function getMissingElement(array){
    for (var i=1; i < array.length; i++){
        if ((array[i]-1)!== array[i-1]){
            return console.log((array[i]-1));
        }
    }
    return console.log(null);
}


getMissingElement([1,2,3,4,5,6,7]);// => null
getMissingElement([6,7,8,10,11,12,13,14,15]);// => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]);// => -1