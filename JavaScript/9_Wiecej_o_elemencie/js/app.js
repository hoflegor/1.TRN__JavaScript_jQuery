
document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
// ZADANIE 1

    var ex1 = document.querySelectorAll(".ex1 ul li");

    // console.log(ex1);

    for (var el of ex1) {
        el.dataset.direction = "up";
    }

    var ex1b = document.querySelectorAll(".ex1 ul li:nth-of-type(even)");

    for (var el of ex1b) {
        el.style.backgroundColor = "green";
    }

    var fifth = document.querySelector(".ex1 ul li:nth-of-type(5)");

    fifth.classList.add("big");

    // console.log(fifth);

    var treci = document.querySelectorAll(".ex1 ul li:nth-of-type(3n)");

    for (var el of treci) {
        el.setAttribute("style", "text-decoration:underline");
    }

//    ZADANIE 2

    // console.log(">>--ZADANIE 2--<</\n\n");

    var options = document.querySelectorAll(".year ");

    for (var el of options) {
        el.innerHTML = el.value;
        el.dataset.year = parseInt(el.value) + 20;
    }

//    ZADANIE 3

    console.log(">>--ZADANIE 3--<</\n\n");

    var chrome = document.querySelector('.ex3 div.chrome');
    chrome.style.width = "100px";

    var chromeLink = document.querySelector('.ex3 .chrome+a')
    chromeLink.innerText = "Chrome";


    var edge = document.querySelector('.ex3 div.edge');
    edge.style.backgroundImage = 'url("assets/img/edge.png")';

    var edgeLink = document.querySelector('.ex3 .edge+a')
    edgeLink.setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge')


    var firefox = document.querySelector('.ex3 div.firefox');
    firefox.style.backgroundImage = 'url("assets/img/firefox.png")';

    var firefoxLink = document.querySelector('.ex3 .firefox+a')
    firefoxLink.innerText = "Firefox";
    firefoxLink.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/')

    //    ZADANIE 4

    console.log(">>--ZADANIE 4--<</\n\n");

    var name = document.querySelector("#name");
    name.innerHTML = "Tom Hof";

    // document.querySelector("#name").innerHTML="Tom Hof Faster";
    document.querySelector("#fav_color").innerHTML = "everyDark";
    document.querySelector("#fav_meal").innerHTML = "McKanibal";

    // console.log(name);

    //    ZADANIE 5

    console.log(">>--ZADANIE 5--<</\n\n");

    document.querySelector(".ex5 ul").setAttribute("class", "menu");

    // console.log(document.querySelector(".ex5 ul"));

    var lisy = document.querySelectorAll(".ex5 ul li");

    for (var lis of lisy) {

        lis.classList.add("menuElement");
        lis.classList.remove("error");

        console.log(lis);

    }


    //    ZADANIE 6

    console.log(">>--ZADANIE 6--<</\n\n");

    //Zadanie 6.1
    console.log(">>--6.1--<</\n\n");

    var lisy = document.querySelectorAll(".ex6 li");

    var i = 1;

    for (var lis of lisy) {

        lis.dataset.id = i;
        i++;

        console.log(lis);
    }

    //ZADANIE 6.2
    console.log(">>--6.2--<</\n\n");

    var list= document.querySelectorAll(".ex6 li");
    var i = 1
    for(var lis of lisy){
        el.setAttribute('data-id',i);
        i++;
        console.log(lis);
    }

});
