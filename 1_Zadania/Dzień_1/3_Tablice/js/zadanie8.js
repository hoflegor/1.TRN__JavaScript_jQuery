var arr = [1960, 1999, 1970, 2010, 1988, 1987];

function oldAndYoung(array)
{
    var presentYear = (new Date()).getFullYear();
    var sortedArr = arr.sort(function(a, b){return a-b});

    console.log(sortedArr);

    var oldest = sortedArr.shift();
    var youngest = sortedArr.pop();
    var youngAge = presentYear - youngest;
    var oldAge = presentYear - oldest;

    console.log("najstarszy rocznik to: " + oldest
        + " ma on " + oldAge + "lat");

    console.log("najmłodszy rocznik to: " + youngest
        + " ma on " + youngAge + "lat");
}

oldAndYoung(arr);