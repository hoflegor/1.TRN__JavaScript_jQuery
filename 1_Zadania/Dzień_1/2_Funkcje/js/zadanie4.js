function calculateTip(amount, raiting) {

    switch(raiting){
        case 'Very good service':
            console.log(0.25*amount);
            break;
        case 'Good service':
            console.log(0.20*amount);
            break;
        case "Neutral service":
            console.log(0.15*amount);
            break;
        case "Bad service":
            console.log(0);
            break;
        default:
            console.log('Opis nieczytelny');
    }

}

calculateTip(100, "Very good service");
calculateTip(100, "Bad service");
calculateTip(100, "Klawo");
calculateTip(100, "Neutral service");