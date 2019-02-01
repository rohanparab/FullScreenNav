$(document).ready(function () {

    $("#ham").click(function () {
        $(".overlay").css("width","100%");
        $("#main").addClass("blur");
        $("#main").removeClass("unblur");
    });

    $("#close").click(function () {
        $("#main").removeClass("blur");
        $("#main").addClass("unblur");
        $(".overlay").css("width","0%");
    });

});