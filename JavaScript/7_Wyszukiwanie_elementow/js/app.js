//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

//    Zadanie 1

    console.log("ZADANIE 1");

    var artFirst = document.querySelector("article.first");
    console.log(artFirst);

    var h1 = artFirst.querySelectorAll("h1");
    console.log(h1.length);

    var oferts = artFirst.getElementsByClassName('oferts');
    console.log("\n>>>>OFERTSY<<<< (length: " + oferts.length + ")");
    for (i = 0; i < oferts.length; i++) {
        console.log(i + "--->" + oferts[i]);
    }

    var divs = artFirst.querySelectorAll('div');
    console.log('\n'+">>>>DIVSY<<<< (length: " + divs.length + ")");
    // console.log(divs);
    for (i=0; i < divs.length; i++) {
        console.log(i + "--->" + divs[i]);
    }

//    Zadanie 2


      console.log('\n\n' + "ZADANIE 2");
  
      var ex2 = document.querySelector("li:nth-child(5) a");
  
          console.log(ex2);


// Zadanie 3

        console.log('\n\n' + "ZADANIE 3");

        var home1 = document.getElementById('home');
        console.log(home1);
        var home2 = document.querySelector("header:first-child");
        console.log(home2);

        var liNot = document.querySelector("li:not([data-direction])");
        console.log(liNot);

        var block = document.querySelector('.block');
        console.log(block);

// Zadanie 4

        console.log("\n\n ZADANIE 4");

        var navsLi = document.querySelectorAll('nav li');
        console.log(navsLi.length);

        var pInDivs = document.querySelectorAll("div p");
        console.log(pInDivs.length);

        var artDivs = document.querySelectorAll("article div");
        console.log(artDivs.length);

    //DODATKOWE

    console.log("\n\nDODATKOWE");

    var lisy = document.querySelectorAll("nav li");

    for (var i = 0; i < lisy.length; i++) {
        lisy[i].setAttribute("data-direction", "top");
        console.log(lisy[i]);
    }

});

