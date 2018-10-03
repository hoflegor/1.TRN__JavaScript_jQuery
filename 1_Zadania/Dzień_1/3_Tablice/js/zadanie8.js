
var birthYear = [1980, 1975, 2000, 1999, 1995];

function age(array) {
    var year = new Date().getFullYear();
    console.log(year);
    var oldest = array[0];
    for (var i=1; i<array.length; i++) {
        if (array[i] < oldest) {
            oldest = array[i];
        }
    }
    console.log("Rok uroszenia najstarszej osoby to: " + oldest + " a jej wiek to: " + (year - oldest));
}

age(birthYear);