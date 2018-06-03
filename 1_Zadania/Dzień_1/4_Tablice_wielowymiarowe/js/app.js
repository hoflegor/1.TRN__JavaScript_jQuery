//zadanie 1
function checkArray(array)
{
    var boolArr=[];
    for (var i = 0; i < array.length; i++)
    {
        var result = array[i].every(function(element, index, array){return element%2===0;});
        boolArr.push(result);
    }
    return boolArr;
}

//zadanie 2 - pierwsze rozwiązanie
function print2DArray(array)
{
    for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array[i].length; j++)
        {
            console.log(array[i][j]);
        }
    }
}

//zadanie 2 - drugie rozwiązanie
function print2DArray2(array)
{
    for (var i = 0; i < array.length; i++)
    {
        var row = [];
        for (var j = 0; j < array[i].length; j++)
        {
            row.push(array[i][j]);
        }
        console.log(row.join(" "));
    }
}

//zadanie 3
var arr = [
    [11,12],
    [14,18],
    [33,17,11]
];

//zadanie 4
function create2DArray(rows, columns)
{
    var array = [];
    var num = 1;
    for (var i = 0; i < rows; i++)
    {
        var row = [];
        for (var j = 0; j < columns; j++)
        {
            row.push(num);
            num++;
        }
        array.push(row);
    }
    return array;
}

// var arr = [
//     [11, 12],
//     [42, 2],
//     [-4, -120],
//     [0, 0],
//     [1, 34]
// ];

// var arr = [];
// arr[0] = [3, 4, 56, 773, 1];
// arr[1] = [7, 12, 0, 98, 34, 381];
// arr[2] = [12, 66, 96, 54, 10];

console.log(checkArray(arr));
console.log("--------------------");
console.log(print2DArray(arr));
console.log("--------------------");
console.log(print2DArray2(arr));
console.log("--------------------");

var newArr = create2DArray(2, 7);
console.log(print2DArray2(newArr));