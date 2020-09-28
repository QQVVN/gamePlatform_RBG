$(function () {
    console.log('script main.js');

    // select js
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

    // sign in
    $(".hif .si").click(function () {
        var hif = $(".hif");
        var hifi = $(".hifi");
        hif.addClass('none');
        hifi.removeClass('none');
    });

    // sign out
    $(".hifi .so").click(function () {
        var hif = $(".hif");
        var hifi = $(".hifi");
        hifi.addClass('none');
        hif.removeClass('none');
    });

});