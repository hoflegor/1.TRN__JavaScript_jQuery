document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("resize", function(event)
    {
        document.querySelector("#windowWidth").innerText = window.innerWidth;

        document.querySelector("#windowHeight").innerText = window.innerHeight;
    });
});