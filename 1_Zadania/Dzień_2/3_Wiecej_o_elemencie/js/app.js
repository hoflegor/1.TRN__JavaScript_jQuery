/**
 * Created by Jacek on 2016-01-11.
 */

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
        el.setAttribute("style","text-decoration:underline");
    }

//    ZADANIE 2

    // console.log(">>--ZADANIE 2--<</\n\n");

var options = document.querySelectorAll(".year ");

for (var el of options){
    el.innerHTML= el.value;
    el.dataset.year=parseInt(el.value) + 20;
}

//    ZADANIE 3

    console.log(">>--ZADANIE 3--<</\n\n");
    console.log("TO DO !!!!!!");

    //    ZADANIE 4

    console.log(">>--ZADANIE 4--<</\n\n");

    var name = document.querySelector("#name");
    name.innerHTML="Tom Hof";

    // document.querySelector("#name").innerHTML="Tom Hof Faster";
    document.querySelector("#fav_color").innerHTML="everyDark";
    document.querySelector("#fav_meal").innerHTML="McKanibal";

    console.log(name);
    
    
});
