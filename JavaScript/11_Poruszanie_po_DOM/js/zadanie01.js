document.addEventListener("DOMContentLoaded", function(event)
{
    document.querySelectorAll(".listContainer ul").forEach(function(element)
    {
        element.addEventListener("mouseover", function(event)
        {
            this.querySelectorAll("li").forEach(function(element)
            {
                element.style.backgroundColor = "green";
            });

            this.firstElementChild.style.backgroundColor = "red";
            this.lastElementChild.style.backgroundColor = "blue";

            this.classList.add("hovered");
        });
    });
});