$(function () {
    console.log('script main.js');

    $(".select p").click(function () {
        var ul = $(".select ul");

        if (ul.css("display") !== "none") {
            ul.addClass('none');
        } else {
            ul.removeClass('none');
        }
    });

    $(".select ul li a").click(function () {
        var txt = $(this).text();
        $(".select p").html(txt);
        $(".select ul").addClass('none');
    });

});