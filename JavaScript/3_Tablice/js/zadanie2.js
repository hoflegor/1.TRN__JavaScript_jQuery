function add(array) {
    var res=0;
    for (var i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res;
}

function multiply(array) {
    var res=1;
    for (var i = 0; i < array.length; i++) {
        res *= array[i];
    }
    return res;

    return calculate(array,0,function(a,b) {
        return a+b;
    })

}

function calculate(array, start, operation) {
    var res=start;
    for (var i = 0; i < array.length; i++) {
        res = operation(res, array[i]);
    }
    return res;
}
console.log(add([1,2,3,4]));
console.log(multiply([1,2,3,4]));