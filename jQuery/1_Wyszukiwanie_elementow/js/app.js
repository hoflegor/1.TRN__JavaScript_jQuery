$(function() {

    console.log("DOM LOADED");
    console.log($);

    var lisMain = $("section.main").find("li").addClass("borderClass");

    $(".showMore").first().css("color","red");

    lisMain.addClass("colorText backgroundElement").fadeOut(5000).fadeIn(5000);

    $(".menu").find("a").addClass("redLinks").first().addClass("biggerFont");

    var h1 = $("h1");

    h1.hasClass("creepyHeader")? console.log("nagłówek ma już taką klasę"):
        h1.addClass("creepyHeader");

});