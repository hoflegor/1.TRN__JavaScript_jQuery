function factors(someDigit){

    var divisors = [];
    for (var i = 1; i <= Math.sqrt(someDigit); i++) {
        if (someDigit % i === 0) {
            divisors.push(i);
            if (i !== Math.sqrt(someDigit)) {
                divisors.push(someDigit / i);
            }
        }
    }

    return divisors.sort(function (a,b) {return b-a;});

}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));
console.log(factors(0));