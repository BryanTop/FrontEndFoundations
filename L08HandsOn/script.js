$(document).ready(function () {
  $("#banner").hover(function () {
            $("#banner").css("color", "red");
            $("#banner").addClass("bg-dark");
            $("#banner").removeClass("bg-primary");
        }, function () {
            $("#banner").css("color", "black");
            $("#banner").addClass("bg-primary");
            $("#banner").removeClass("bg-dark");
        }
    );

    $("#jqueryPara").click(function (e) { 
        e.preventDefault();
        let string = "jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it."

        if($('#jqueryPara').text() == string) {
            $("#jqueryPara").text("Click here to find out more about jquery!");
        } else {
            $("#jqueryPara").text(string);
        }
        
    });

    $('#skillList').click(function (e) { 
        e.preventDefault();
        $('#skillList').hide();
    });

    $('.form-control').keydown(function (e) { 
        $('.form-control').toggle('.input');
    });
});