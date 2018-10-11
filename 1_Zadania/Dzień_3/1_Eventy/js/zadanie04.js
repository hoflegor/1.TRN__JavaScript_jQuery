document.addEventListener('DOMContentLoaded', function () {



    document.querySelector("#button1").addEventListener("click",function() {
        var counter = document.querySelector("#button1+p .counter");
        counter.innerHTML = parseInt(counter.innerHTML)+1;
    });

    document.querySelector("#button2").addEventListener("click",function() {
        var counter = document.querySelector("#button2+p .counter");
        counter.innerHTML = parseInt(counter.innerHTML)+1;
    });

    document.querySelector("#button3").addEventListener("click",function() {
        var counter = document.querySelector("#button3+p .counter");
        counter.innerHTML = parseInt(counter.innerHTML)+1;
    });

});