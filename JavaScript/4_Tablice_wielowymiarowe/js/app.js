function allEven(array) {
    for (var i=0; i<array.length; i++) {
        if (array[i] % 2) {
            return false;
        }
        return true;
    }
}

function checkArray(array) {
    var res = [];
    for (var i=0; i<array.length; i++) {
        res.push(allEven(array[i]));

    }
    return res;
}

function print2DArray(array) {
    for (var i=0; i<array.length; i++) {
        for (var j=0; j<array[i].length ; j++) {
            console.log(array[i][j]);
        }

    }
}

function create2DArray(rows,columns) {
    var array = [],
        num = 0;
    for (var i=0; i<rows; i++) {
        array[i] = [];
        for (var j=0; j<columns; j++) {
            array[i][j] = num;
            num++;
        }
    }
    return array;
    //i*columns+j
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

console.log(checkArray(arr));
var arr = [];
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];
console.log(checkArray(arr));
print2DArray(arr);

var arr1 = [
    ["ala","ma","kota"],
    ["kot", "ma", "ale"]
];
print2DArray(arr1);
print2DArray(create2DArray(3,3));


//
// -----------------------------------------------------------------





//console.log(checkArray(arr));

// ZADANIE 2
//
// function print2DArray(array) {
//     for(var i=0; i<array.length;i++){
//         for(var j=0;j<array[i].length;j++){
//             console.log(array.length + "=>" + array[i].length);
//
//         }
//     }
//
// }
//
// var array2D = [];
// array2Dnew[0] = [1, 2, 3, 4, 5];
// array2Dnew[1] = ["Ala", "Adam"];
// array2Dnew[2] = ["Wojtek", "Kasia"];
// array2Dnew[3] = [3, 4, 5, 6];
//
//
//
// console.log(array2D);

// Zadanie 4







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
