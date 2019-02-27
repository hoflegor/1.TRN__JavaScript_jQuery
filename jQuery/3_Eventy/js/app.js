$(document).ready(function()
{
    var butts = $(".hero-buttons").find("button");

    var b1 = butts[0];
    var b2 = butts[1];
    var b3 = butts[2];

    $(b1).click(function()
    {
        console.log('kliknięto mnie!');
    });

    $(b2).one("click",function()
    {
        console.log('kliknięto mnie, ale już drugi raz nie dam się kliknąć!');
    });

    $(b3).on("click",function()
    {
        $(butts).each(function()
        {
            $(this).off();
        })
        console.log("koniec przyciskania!");
    });


//zad 3 w jquery tylko this a nie element.

    $(".superhero-description").find("dt").each(function()//nizej this a nie element
    {
        $(this).click(function()//musi być this nie może byc element
        {
            $(this).next().toggleClass("hide");
        });
    });

//zad 4//w html classa login z elementu form była napisana duża literą!!

    $("form.login").on("click", "button.show-hide-btn", function()
    {
        var input = $("input.user-pass");
        $(input).attr("type") == "password"?
            $(input).attr("type", "text"):
            $(input).attr("type", "password");

        event.preventDefault();
    });

//zad 5

    $("nav.menu").mouseover(function()
    {
        console.log("Huraaaa!");
    });

//zad 6
    //
    $("form.login").on("click", "input", function()
    {
        $("form.login").css("box-shadow", "inset 0px 0px 10px 1px grey");//kluczowe słowo inset jesli chce się mieć cien w środku
        $(this).mouseout(function()
        {
            $("form.login").css("background-color","grey");
        });
    });





});