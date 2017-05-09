function sum(a,b,c) {
    // metoda bez tablicy --->return a+b+c;
    var sum = 0;
    for (var i=0; i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

// console.log(sum); --> metoda

console.log(sum(1,2,3,4,5,8));