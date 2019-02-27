/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...
//Deklaracja funkcji
function sortArray() {

    //Twój komentarz ...
    //Utworzenie tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ...
    //sortowanie
    points.sort(function(a, b) {
        //Twój komentarz ...
        //definiowanie funkcji porównującej
        return a-b;
    });

    //Twój komentarz ...
    //Wyświetla w konsoli, potem zwraca tablicę
    console.log(points);
    return points;
}

//Twój komentarz ...
//wywołanie funkcji
sortArray();
