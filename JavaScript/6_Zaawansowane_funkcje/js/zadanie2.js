/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Twój komentarz ...
//deklaracja funkcji
function jeden() {

    //Twój komentarz ...
    //Deklaracja zmiennej
    var zmienna1 = 1;

    //Twój komentarz ...
    //Deklaracja funkcji zagnieżdżonej
    function dwa() {

        //Twój komentarz ...
        //funkcja zagnirżdżona ma dostęp do zmiennej lokalnej z zakresu, w którynm jest zagnieżdżona
        console.log(zmienna1);


        //Twój komentarz ...
        //Deklaracja zmiennej w funkcji zagnieżdżonej
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    //Wywołanie funkcji, wyświetla w konsoli zmienną zadeklarowaną w zakresie nadrzędnym
    dwa();

    //Twój komentarz ...
    //Wyświetli błąd, ponieważ nie ma dostępu do zmiennej stworzonej w funkcji zagnieżdżonej
    console.log(zmienna2)
}

//Twój komentarz ...
//Wywołanie funkcji
jeden()