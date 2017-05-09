function myEval(a, b, operation) {
    var result = 0;
    switch (operation) {
        case'+':
            result = a + b;

        case'-':
            result = a - b;

        case'/':
            result = a / b;

        case'*':
            result = a * b;

        case'%':
            result = a % b;

        case'^':
            return Math.pow(a, b);
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 2 * 4 = " + myEval(2, 4, "*"));
console.log(" 4 % 8 = " + myEval(4, 8, "%"));

//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja