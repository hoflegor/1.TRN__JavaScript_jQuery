<img alt="Logo" src="http://coderslab.pl/wp-content/themes/coderslab/svg/logo-coderslab.svg" width="400">


# JavaScript/jQuery &ndash; egzamin


## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.
3. Rozwiąż zadania i [*skomituj*][ref-commit] zmiany do swojego repozytorium.
4. [*Wypchnij*][ref-push] zmiany do swojego repozytorium na GitHubie.
5. Stwórz [*pull request*][pull-request] do oryginalnego repozytorium, gdy skończysz egzamin.

**Pamiętaj, że pull request musi być stworzony, aby Mentor dostał Twoje odpowiedzi**.

* Podczas egzaminu możesz korzystać z notatek, kodu napisanego wcześniej, internetu i prezentacji.
* Zabroniona jest jakakolwiek komunikacja z innymi kursantami.

## Pytania otwarte
Odpowiedzi wpisz w pliku `pytania01_02.txt`.

### Pytanie 1 (2 pkt)  

Co to jest propagacja eventów?  
Jakie znasz typy propagacji?  
Czym się od siebie różnią?

### Pytanie 2 (1 pkt)  

Wytłumacz, dlaczego dobrze jest umieszczać kod JavaScript w następującej funkcji:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    //JS code goes here
});
```

Co się może stać, jeśli w powyższej funkcji kodu JavaScript nie umieścimy?

## Zadania praktyczne  

Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.  

**BARDZO WAŻNE** - Wasze zadania są sprawdzanie przy pomocy automatycznego systemu.  
  
Aby odpowiedzi zostały uznane za poprawne strony **MUSZĄ** wyświetlać te same komunikaty co w treści zadania,  
a funkcje i metody **MUSZĄ** posiadać nazwy dokładnie takie same jak podane w zadaniu.

**Pamiętaj, żeby nie używać polskich nazw zmiennych i funkcji**.

Nie zmieniaj nic w strukturze plików HTML.
Jedyna dozwolona modyfikacja to dołączenie zewnętrznej biblioteki jQuery.

### Zadanie 1 (3 pkt)  

Stwórz obiekt `User` w JavaScript, który będzie miał:
1.  Konstruktor przyjmujący parametr imię i zapisujący go w atrybucie `name`.  
2.  Funkcję dodaną poprzez prototyp o nazwie `welcomeUser`, która **zwróci** string z przywitaniem:  
    `"Welcome " + user.name`  
    np. `Welcome Piotr` (pamiętajcie o spacji między wyrazami).

### Zadanie 2 (5 pkt)  

* Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku `html` przed końcem `body`.
* Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
* Każda funkcja ma **zwracać** tablicę.

Wykonaj następujące polecenia:
* **1. Szukanie nazw tagów:**
  - znajdź wszystkie elementy o **klasie** ```sample_class```,
  - stwórz funkcję ```getElementsTag(elements)``` do której przekaż, jako argument, znalezione elementy,
  - stwórz w funkcji tablicę i wypełnij ją nazwami tagów. Pobierz je z elementów przekazanych jako argument.
  - zwróć tablicę.


* **2. Szukanie nazw klas:**
  - Znajdź element o **id** ```sample_id```.
  - stwórz funkcję ```getElementsClass(element)``` do której przekaż, jako argument, znaleziony element.
  - stwórz w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
  - zwróć tablicę.


* **3. Szukanie tekstu:**
  - Znajdź wszystkie elementy listy znajdujące się w elemencie o **klasie** ```sample_class_2```,
  - stwórz funkcję ```getElementsInnerText(liElements)```, do której przekaż, jako argument, znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją tekstami pobranymi z każdego elementu li (tych przekazanych jako argument)
  - zwróć tablicę.


* **4. Szukanie adresów linków:**
  - Znajdź wszystkie linki,
  - stwórz funkcję ```getElementsAdress(aElements)```, do której przekaż, jako argument, znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją adresami pobranymi z linków,
  - zwróć tablicę.


* **5. Szukanie tagów dzieci:**
    - Znajdź wszystkie dzieci elementu o **klasie** ```sample_class_3```,
    - do funkcji, która wyszukuje tagi elementów,  przekaż, jako argument, znalezione dzieci.

Korzystaj z JavaScript lub jQuery.

### Zadanie 3 (3 pkt)  

1. Do wszystkich przycisków znajdujących się na stronie dopisz event,  
   który po naciśnięciu spowoduje, że w elemencie `div` pokaże się tekst trzymany w `data-text`.
   
Korzystaj z JavaScript.

### Zadanie 4 (6 pkt)  

Na stronie znajduje się lista zakupów.  
Przeanalizuj HTML i zobacz jak lista jest zbudowana.  
Dopisz odpowiednią obsługę eventów tak aby:  

1. Po kliknięciu przycisku pierwszego do listy został dopisany nowy produkt (np.: `chleb`).
2. Po kliknięciu przycisku drugiego z listy był usuwany ostatni element.
3. Po kliknięciu przycisku trzeciego na końcu listy był dodawany nowy produkt, który jest klonem drugiego produktu.

Korzystaj z JavaScript lub jQuery.

<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
