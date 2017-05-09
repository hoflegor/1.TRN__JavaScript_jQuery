function calculateTip(amount, raiting) {

    if(raiting === "Very good service"){
        return (amount * (25/100));
    }

    if(raiting === "Good service"){
        return (amount * (20/100));
    }

    if(raiting === "Natural service"){
        return (amount * (15/100));
    }

    if(raiting === "Bad service") {
        return (amount * (0 / 100));
    }

    else{
        return "Opis nieczytelny";
    }


}

console.log(calculateTip(100, "Good service"));