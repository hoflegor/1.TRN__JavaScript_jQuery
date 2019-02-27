

document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

//    Zadanie 1
    console.log('>>>>ZADANIE 1<<<<\n');
//
//     console.log('-->Before:');
//     console.log(homeElement.id);
//     console.log(homeElement.className);
//
//
//     var id = homeElement.id;
//     // console.log(id);
//
//     homeElement.id=homeElement.className;
//     homeElement.className=id;
//
//     console.log('-->After:');
//     console.log(homeElement.id);
//     console.log(homeElement.className);

    console.log('\n\n>>>>ZADANIE 2<<<<\n');

/*    function isIterable(obj) {
        if(obj == null){
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    var vars = [homeElement, childElements, banner, blocks, links];

    for (var el of vars)  {
        console.log(el);
        console.log(typeof el);
        if(isIterable(el)){
            console.log("START SUB ELEMENTS");
            for (var subEl of el){
                console.log(subEl);
                console.log(typeof subEl);
            }
            console.log("END SUB ELEMENTS");
        }
    }*/

    console.log('\n\n>>>>ZADANIE 3<<<<\n');
/*
    // console.log(blocks);

    for (var item of blocks){
        console.log("inner --->" + item.innerHTML);
        console.log("outer --->" + item.outerHTML);
    }

    //inner HTML zawiera link (<a>...</a>, czyli element elementu "div").outerHTML to cały "<div>...</div>"

    for(var el of blocks){
        el.innerHTML = "Nowa wartość diva o klasie blocks";
    }*/

    console.log('\n\n>>>>ZADANIE 4<<<<\n');

    // console.log(homeElement.id);

    console.log('\n\n>>>>ZADANIE 5<<<<\n');

    // console.log(childElements);
    
/*    for (var el of childElements){
        console.log(el.tagName);
    } */

    console.log('\n\n>>>>ZADANIE 6<<<<\n');

    // console.log(links);

    // for (var link of links){
    //     console.log(link.dataset);
    // }

    console.log('\n\n>>>>ZADANIE 7<<<<\n\n');

    // console.log(banner);

    console.log(banner.classList);
    console.log(banner.className);
    console.log("\ntype of--->");
    console.log(typeof banner.classList);
    console.log(typeof banner.className);

});
