    // --->ZADANIE 1

    var menu = document.getElementById("menu");
    // console.log(menu);

    function getDataInfo(element) {

        var arr = [];

        var li = element.querySelectorAll("li");

        for (var el of li){
            arr.push(el.dataset.info);
        }
        return arr;
    }

    console.log(getDataInfo(menu));


    // --->ZADANIE 2

    var mc = document.getElementById("main-contener");
   // console.log(mc);

   function getElementClass(element) {

       var className = element.classList;

       var arr = [];

       for(var i=0; i<className.length; i++ ){

           arr.push(className[i]);

       }

       return arr;

   }

   console.log(getElementClass(mc));


   // --->ZADANIE 3

    var pc = document.querySelector(".pink-color");

    // console.log(pc);

    function getElementText(element) {

        return element.innerText;

    }

    console.log(getElementText(pc));


    // --->ZADANIE 4

    var images = document.querySelectorAll(".images")
    console.log("images");

    function getElementAlt(element) {

        arr = [];

        for (var el of element) {

            arr.push(el.alt);

        }

        return arr;

    }

    console.log(getElementAlt(images));

    // --->ZADANIE 5

    var myLink = document.querySelectorAll(".my-link");
    // console.log(myLink);

    function getElementHref(element) {

        var arr = [];

        for(var el of element){
            arr.push(el.getAttribute("href"));
        }

        return arr;

    }

    console.log(myLink);
















































