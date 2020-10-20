$(document).ready(function () {
    console.log("item_js.js");

    // item nav
    $("header article nav ul li").click(function () {
        var self = $(this);
        var thisC = self.attr("class");
        var banner = $(".banbox .banner");
        var ibbg = $("main .ibbox .ibbg");
        var btnChildren = $("main .btnbox").children();
        var btnSE = $("main .btnbox .sebtn");
        var btnOC = $("main .btnbox .ocbtn");
        var btnSG = $("main .btnbox .sgbtn");
        var btnLT = $("main .btnbox .ltbtn");
        var btnDG = $("main .btnbox .dgbtn");
        var btnBO = $("main .btnbox .bobtn");

        self.parent().children("li").siblings().removeClass("active");
        self.addClass("active");

        if (thisC === "H") {
            return
        } else if (thisC === "SE" & btnSE.attr("class") === "sebtn none") {
            $("head title").text("Sports Events");
            banner.attr("class", "banner");
            ibbg.attr("class", "ibbg");
            btnChildren.addClass("none");
            btnSE.attr("class", "sebtn");
        } else if (thisC === "OC" & btnOC.attr("class") === "ocbtn none") {
            $("head title").text("Online Casino");
            banner.attr("class", "banner ban2");
            ibbg.attr("class", "ibbg bg2");
            btnChildren.addClass("none");
            btnOC.attr("class", "ocbtn");
        } else if (thisC === "SG" & btnSG.attr("class") === "sgbtn none") {
            $("head title").text("Slot Game");
            banner.attr("class", "banner ban3");
            ibbg.attr("class", "ibbg bg3");
            btnChildren.addClass("none");
            btnSG.attr("class", "sgbtn");
        } else if (thisC === "LT" & btnLT.attr("class") === "ltbtn none") {
            $("head title").text("Lottery");
            banner.attr("class", "banner ban4");
            ibbg.attr("class", "ibbg bg4");
            btnChildren.addClass("none");
            btnLT.attr("class", "ltbtn");
        } else if (thisC === "DG" & btnDG.attr("class") === "dgbtn none") {
            $("head title").text("DDF Ganing");
            banner.attr("class", "banner ban5");
            ibbg.attr("class", "ibbg bg5");
            btnChildren.addClass("none");
            btnDG.attr("class", "dgbtn");
        } else if (thisC === "BO" & btnBO.attr("class") === "bobtn none") {
            $("head title").text("Boardgame");
            banner.attr("class", "banner ban6");
            ibbg.attr("class", "ibbg bg6");
            btnChildren.addClass("none");
            btnBO.attr("class", "bobtn");
        } else {
            return;
        }
    });

    // slot game inside
    $("main .btnbox .sgbtn .btn").click(function (e) { 
        e.preventDefault();
        $("body").css("height","1386px");
        $("main .ibbox .ibbg").addClass("inside");
        $("footer").addClass("inside");
        $(".banbox .banner").attr("class", "banner sgin");
        $("header .nbbox").removeClass("none");
        $("main .btnbox").addClass("none");
        $("main .sgIn").removeClass("none");
        $("main .ibbox").addClass("ietop");
    });

    // slot game inside back
    $("header .nbbox .btn .back").click(function (e) { 
        e.preventDefault();
        $("body").css("height","937px");
        $("main .ibbox .ibbg").removeClass("inside");
        $("footer").removeClass("inside");
        $(".banbox .banner").attr("class", "banner ban3");
        $("header .nbbox").addClass("none");
        $("main .btnbox").removeClass("none");
        $("main .sgIn").addClass("none");
        $("main .ibbox").removeClass("ietop");
    });
});