$(function()
{

    function ageFun(newUser)
    {
        if (newUser.data("age") < 16)
        {
            return newUser.css("color","green");
        }
        else if (newUser.data("age") < 41)
        {
            return newUser.css("color","blue");
        }
        else
        {
            return newUser.css("color","brown");
        }
    }

    var people = $(".people");

    people.on("click", "input[type=submit]", function()
    {
        var name = $("#addUser").val();
        var age = $("#age").val();

        var newUser = $("<li>" + name + "</li>");

        newUser.data("age", age);

        $("ul.main").append(newUser);

        ageFun(newUser);

        //mądrzej by było tak:
        //newUser.css("color",ageFun(age));
    });

    var where = $(".where-i-am");

    function appender()
    {
        var span = $("<span> Jestem tutaj appender </span>");
        return span;
    }

    where.prepend(appender());
    where.append(appender());
    where.find("div").prepend(appender());
    where.find("div").append(appender());

});