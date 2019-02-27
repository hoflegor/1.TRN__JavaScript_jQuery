document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("a").forEach(function(element)
    {
        element.addEventListener("click", function(event)
        {
            if (this.nextElementSibling.classList.contains("hidden"))
            {
                this.nextElementSibling.classList.remove("hidden");
            }
            else
            {
                this.nextElementSibling.classList.add("hidden");
            }
        });
    });

});