document.addEventListener('DOMContentLoaded', function () {
// event(w domyśle eventlistener) nastawiamy na rodzica, ale countera zmieniamy w dziecku :)

    var parent = document.querySelector("#bubblingButtons");

    parent.addEventListener("click", function (event)//dzięki podaniu tutaj zmiennej o dowolnej nazwie do niej własnie funkcja przypisze event, moze być to e, event, foo lub cokolwiek innego
    {
        console.log(event.target.tagName);
        if (event.target.tagName === "BUTTON")//koniecznie z dużej litery
        {
            event.target.dataset.counter = parseInt(event.target.dataset.counter) + 1;
        }
    });
});