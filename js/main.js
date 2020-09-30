$(function () {
    console.log('script main.js');

    // select js
    $(".select p").click(function (e) {
        e.preventDefault();
        var ul = $(".select ul");

        if (ul.css("display") !== "none") {
            ul.addClass('none');
        } else {
            ul.removeClass('none');
        }
    });
    $(".select ul li a").click(function (e) {
        e.preventDefault();
        var txt = $(this).text();
        $(".select p").html(txt);
        $(".select ul").addClass('none');
    });

    // sign in
    $(".hif .si").click(function (e) {
        e.preventDefault();
        var hif = $(".hif");
        var hifi = $(".hifi");
        hif.addClass('none');
        hifi.removeClass('none');
    });

    // sign out
    $(".hifi .so").click(function (e) {
        e.preventDefault();
        var hif = $(".hif");
        var hifi = $(".hifi");
        hifi.addClass('none');
        hif.removeClass('none');
    });

    // compass pointer
    var cpNavB = [".cpnav .se", ".cpnav .oc", ".cpnav .sg", ".cpnav .lt", ".cpnav .dg", ".bobox .bo"];
    var navDeg = ["se_deg", "oc_deg", "sg_deg", "lt_deg", "dg_deg", "bo_deg"];
    var cpOffC = "se_deg oc_deg sg_deg lt_deg dg_deg bo_deg";

    var navB = ["se_bg", "oc_bg", "sg_bg", "lt_bg", "dg_bg", "bo_bg"];
    var navBoffC = "se_bg oc_bg sg_bg lt_bg dg_bg bo_bg";



    $(cpNavB[0]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[0]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[0]);
    });

    $(cpNavB[1]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[1]);
        
        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[1]);
    });

    $(cpNavB[2]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[2]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[2]);
    });

    $(cpNavB[3]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[3]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[3]);
    });

    $(cpNavB[4]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[4]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[4]);
    });

    $(cpNavB[5]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[5]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[5]);
    });


});