Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @hoflegor Sign out
0
0 11 TomekWie/WAR_PHP_S_08_JavaScript Private
forked from CodersLab/WAR_PHP_S_08_JavaScript
Code  Pull requests 0  Projects 0  Wiki  Insights
WAR_PHP_S_08_JavaScript/1_Zadania/Dzień_3/1_Eventy/js/zadanie08.js
444305f  on 31 Jan
@TomekWie TomekWie Powtórka z eventów w js

Executable File  35 lines (27 sloc)  1.07 KB
document.addEventListener("DOMContentLoaded", function() {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function(event) {
        console.log("Click in element 1");
    });

    element2.addEventListener("click", function(event) {
        console.log("Click in element 2");
        event.stopPropagation();
        //tutaj
    });

    element3.addEventListener("click", function(event) {
        console.log("Click in element 3");
    });

    element4.addEventListener("click", function(event) {
        console.log("Click in element 4");
    });

    element5.addEventListener("click", function(event) {
        console.log("Click in element 5");
        event.stopImmediatePropagation();
        //tutaj
    });

    element5.addEventListener("click", function(event) {
        console.log("Second click in element 5");
    });

});