$(document).ready(function () {
    console.log("item_js.js")
    $("header article nav ul li").click(function (e) {
        e.preventDefault();

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
            banner.attr("class", "banner");
            ibbg.attr("class", "ibbg");
            btnChildren.addClass("none");
            btnSE.attr("class", "sebtn");
        } else if (thisC === "OC" & btnOC.attr("class") === "ocbtn none") {
            banner.attr("class", "banner ban2");
            ibbg.attr("class", "ibbg bg2");
            btnChildren.addClass("none");
            btnOC.attr("class", "ocbtn");
        } else if (thisC === "SG" & btnSG.attr("class") === "sgbtn none") {
            banner.attr("class", "banner ban3");
            ibbg.attr("class", "ibbg bg3");
            btnChildren.addClass("none");
            btnSG.attr("class", "sgbtn");
        } else if (thisC === "LT" & btnLT.attr("class") === "ltbtn none") {
            banner.attr("class", "banner ban4");
            ibbg.attr("class", "ibbg bg4");
            btnChildren.addClass("none");
            btnLT.attr("class", "ltbtn");
        } else if (thisC === "DG" & btnDG.attr("class") === "dgbtn none") {
            banner.attr("class", "banner ban5");
            ibbg.attr("class", "ibbg bg5");
            btnChildren.addClass("none");
            btnDG.attr("class", "dgbtn");
        } else if (thisC === "BO" & btnBO.attr("class") === "bobtn none") {
            banner.attr("class", "banner ban6");
            ibbg.attr("class", "ibbg bg6");
            btnChildren.addClass("none");
            btnBO.attr("class", "bobtn");
        } else {
            return;
        }
    });
});