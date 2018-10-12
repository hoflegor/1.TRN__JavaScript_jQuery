document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#box").addEventListener("mousemove", function(event)
    {
        document.querySelector("#globalX").innerText = event.clientX ;
        document.querySelector("#globalY").innerText = event.clientY ;
        document.querySelector("#localX").innerText = event.screenX ;
        document.querySelector("#localY").innerText = event.screenY ;
    });
});