$(function () {
    console.log('script main.js');

    //news 
    var X = $(".newbox .new .con .t .X");
    var ti = $(".newbox .new .con .b .news .ti");

    X.on("click", function () {
        $(".newbox").addClass("none");
    });

    ti.on("click", function () {
        $(this).toggleClass("active");
    });


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
    var cpNavB = [".cmnbox .se", ".cmnbox .oc", ".cmnbox .sg", ".cmnbox .lt", ".cmnbox .dg", ".cmnbox .bo"];
    var navDeg = ["se_deg", "oc_deg", "sg_deg", "lt_deg", "dg_deg", "bo_deg"];
    var cpOffC = "se_deg oc_deg sg_deg lt_deg dg_deg bo_deg";

    var navB = ["se_bg", "oc_bg", "sg_bg", "lt_bg", "dg_bg", "bo_bg"];
    var navBoffC = "se_bg oc_bg sg_bg lt_bg dg_bg bo_bg";

    $(cpNavB[0]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[0]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[0]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcr").removeClass("roc rsg rlt rdg rbo");
    });

    $(cpNavB[1]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[1]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[1]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcl").addClass("loc");

        $(".mcr").removeClass("roc rsg rlt rdg rbo");
        $(".mcr").addClass("roc");
    });

    $(cpNavB[2]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[2]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[2]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcl").addClass("lsg");

        $(".mcr").removeClass("roc rsg rlt rdg rbo");
        $(".mcr").addClass("rsg");
    });

    $(cpNavB[3]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[3]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[3]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcl").addClass("llt");

        $(".mcr").removeClass("roc rsg rlt rdg rbo");
        $(".mcr").addClass("rlt");
    });

    $(cpNavB[4]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[4]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[4]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcl").addClass("ldg");

        $(".mcr").removeClass("roc rsg rlt rdg rbo");
        $(".mcr").addClass("rdg");
    });

    $(cpNavB[5]).on("click mouseenter", function () {
        $(".mcm .po").removeClass(cpOffC);
        $(".mcm .po").addClass(navDeg[5]);

        $(".mcm .cpb").removeClass(navBoffC);
        $(".mcm .cpb").addClass(navB[5]);

        $(".mcl").removeClass("loc lsg llt ldg lbo");
        $(".mcl").addClass("lbo");

        $(".mcr").removeClass("roc rsg rlt rdg rbo");
        $(".mcr").addClass("rbo");
    });

    // banner arrow
    $(".wcr .lar").click(function (e) {
        e.preventDefault();
        var ulLeft = $(".wcr .bnr ul").css("left");
        var imgWidth = parseInt($(".wcr .bnr ul li").css("width"));
        if (ulLeft === "0px") {
            return;
        } else {
            $(".wcr .bnr ul").css("left", function (index, value) {
                return parseFloat(value) + imgWidth;
            });
        }
        var prev = $(".index ul li").filter(".active").prev();
        var filter = $(".index ul li").filter(".active");
        prev.addClass("active");
        filter.removeClass("active");
    });
    $(".wcr .lar").on("mouseenter", function () {
        window.clearInterval(timer);
    })

    $(".wcr .lar").on("mouseleave", function () {
        timer = setTimer();
    })

    $(".wcr .rar").click(function (e) {
        e.preventDefault();
        var ulLeft = $(".wcr .bnr ul").css("left");
        var imgWidth = parseInt($(".wcr .bnr ul li").css("width"));
        if (ulLeft === "-4980px") {
            return;
        } else {
            $(".wcr .bnr ul").css("left", function (index, value) {
                return parseFloat(value) - imgWidth;
            });
        }
        var next = $(".index ul li").filter(".active").next();
        var filter = $(".index ul li").filter(".active");
        next.addClass("active");
        filter.removeClass("active");
    });

    $(".wcr .rar").on("mouseenter", function () {
        window.clearInterval(timer);
    })

    $(".wcr .rar").on("mouseleave", function () {
        timer = setTimer();
    })

    // banner index
    var iNow = 0;
    $(".index ul li").click(function (e) {
        e.preventDefault();
        var imgWidth = parseInt($(".wcr .bnr ul li").css("width"));
        var index = $(this).index();
        iNow = index;
        $(".wcr .bnr ul").css("left", function (index, value) {
            return parseFloat((iNow * (-imgWidth)));
        });
        $(".index ul li").eq(iNow).siblings("li").removeClass("active");
        $(".index ul li").eq(iNow).addClass("active");
    });

    $(".index ul li").on("mouseenter", function () {
        window.clearInterval(timer);
    })

    $(".index ul li").on("mouseleave", function () {
        timer = setTimer();
    })

    function setTimer() {
        return setInterval(function () {
            iNow += 1;
            if (iNow > $(".index ul li").length - 1) {
                iNow = 0;
            }
            $(".index ul li").eq(iNow).trigger("click");
            $(".index ul li").eq(iNow).siblings("li").removeClass("active");
            $(".index ul li").eq(iNow).addClass("active");
        }, 3000);
    }

    var timer = null;
    timer = setTimer();

    $(".wcr .bnr ul").on("mouseenter", function () {
        window.clearInterval(timer);
    })

    $(".wcr .bnr ul").on("mouseleave", function () {
        timer = setTimer();
    })

});