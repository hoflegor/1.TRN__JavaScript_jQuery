$(function() {

    $("#text").on('keydown keyup', function(){
        var length = $(this).val().length;//The val() method returns or sets the value attribute of the selected elements.
        $(this).attr("maxLength","100");

        if (length <= 33)
        {
            $(this).css('color','green');
        }
        else if (length <= 66)
        {
            $(this).css('color','yellow');
        }
        else if (length <= 100)
        {
            $(this).css('color','red');
        }
        else
        {
            var newVal = $(this).val().substr(0,100);
            $(this).val(newVal);
        }
        $("#counter").text(length + "/100");
    });
});
