
document.addEventListener('DOMContentLoaded', function() {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
//po odkomentowaniu tego co poniżej zadziała css z .menu
// menu.classList.add("menu");
    paragraf.innerText = "A to jest paragraf w zadaniu 1";

});

//Wniosek: Jeśli chcemy dodawać script w head a nie pod koniec body do trzeba cały kod js zamknąc w addEventListenera. Jeśli tego nie zrobimy i a script będzie w head to kod js będzie świrował gdyż  html jeszcze nie będzie wszystany (a z niego przeglądarka budej DOM na którym pracuje js).

