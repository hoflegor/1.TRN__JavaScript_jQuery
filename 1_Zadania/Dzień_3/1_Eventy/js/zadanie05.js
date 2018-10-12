document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.getElementsByTagName("button");

    for (var btn of buttons) {

        btn.addEventListener("click", function () {
            var counter = document.querySelector("button+p .counter");
            console.log(counter);
            counter.innerHTML = parseInt(counter.innerHTML) + 1;


        })

    }

    // document.querySelectorAll("#button1").addEventListener("click",function() {
    //     var counter = document.querySelector("#button1+p .counter");
    //     counter.innerHTML = parseInt(counter.innerHTML)+1;
    // });

})
