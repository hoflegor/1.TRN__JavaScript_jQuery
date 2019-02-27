document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".box").forEach(function (value) {

        value.addEventListener("click", function () {

            this.querySelectorAll(".button").forEach(function (value1) {

                // console.log(value1);

                value1.parentElement.style.backgroundColor =
                    "#" + Math.floor(Math.random() * 16777215).toString(16);
            })


        })

    })
});