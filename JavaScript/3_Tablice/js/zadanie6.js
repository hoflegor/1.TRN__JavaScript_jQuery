function factors(num) {

    if(!num>0){
        console.log('num must be larger than 0');
        return;
    }

    var count=0;
    var arrFactors = [];
    for (var i=1; i<=num; i++){
        if (num % i == 0) {
            // console.log(i);
            arrFactors.push(i);
            count++;
        }

        arrFactors.reverse();
    }
    console.log("Ilość dzielników: "+count);

    console.log(arrFactors);
}

console.log(factors(666));
console.log(factors(0));