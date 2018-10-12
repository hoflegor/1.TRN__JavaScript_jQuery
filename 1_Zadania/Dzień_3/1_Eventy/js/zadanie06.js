document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".box").forEach(function (value) {

        value.addEventListener("click", function () {

                var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

                value.style.backgroundColor =
                    "#" + Math.floor(Math.random()*16777215).toString(16);


        });


    })


});