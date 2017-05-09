function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    // console.log(randomNumber + " ello");
    //poniżej napisz rozwiązanie zadania

    if (randomNumber % 2 == 0) {
        console.log(randomNumber + "-->parzysta");
    }
    else {
        console.log("-->nieparzysta");
    }

    var divisors = [];
    for (var i =1; i<=Math.sqrt(randomNumber); i++){
        if(randomNumber%i==0) {
            divisors.push(i);
            if(i !=Math.sqrt(randomNumber)){
                divisors.push(randomNumber/i);
            }
        }
    }

    console.log(divisors);

    console.log("---0");

    console.log(
        randomNumber + "^" + randomNumber %5 + "=" +
        Math.pow(
            randomNumber,
            randomNumber % 5
        )
    );

}


//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
