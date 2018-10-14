document.addEventListener("DOMContentLoaded", function () {
    
    var one = document.querySelector(".first").firstElementChild.children[2];

    console.log(one);

    console.log("\n\n");

    var two = document.querySelector("#second").parentElement.querySelector(":nth-child(4)");

    console.log(two);

    console.log("\n\n");

    var onThree = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild;

    var three = onThree.children[Math.floor(onThree.children.length /2)];

    console.log(three);
    
    console.log("\n\n");
    
    var four = document.querySelector(".forth").parentElement.querySelector("article").querySelector("p:nth-of-type(2)");
    
    console.log(four);

});