/Zadanie 1

$(function()
{

    var shopping = $(".shopping");
    shopping.find("button").on("click", function()
    {
        if (!$(this).hasClass("added"))
        {
            $(this).addClass("added");
            $(this).closest(".cart-item").css("border", "1px solid green");
        }
        else
        {
            $(this).removeClass("added");
            $(this).closest(".cart-item").css("border", "1px solid black");
        }
    });

    //Poniżej krótsze rozwiązanie i zdaje się bardziej eleganckie rozwiązanie...

    // $(".shopping").on("click", "button", function (e)
    // {
    //    $(this).parent().parent().toggleClass('cart-updated');
    //    //alert("hnrnkjwrnfkwnckwnfknw"); //wyskakuje okienko z tym komunikatem wpisanym! WOW!
    //
    //    $(this).toggleClass('added');
    // });

    ////////zad 2

    $(".films").on("click",".expand", function (event)
    {
        $(this).parent().next().css('display', 'block');
        // event.preventDefault(); //dlaczego to tu było?
    });

    $(".films").on("click", ".close", function (event) {
        $(this).parent().css('display', 'none');
        //event.preventDefault();// i to?
    });

    $("#close-all").on("click", function (event)
    {
        $(".films .container").css('display', 'none');
    });
});