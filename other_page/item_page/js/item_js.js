$(document).ready(function () {
    console.log("item_js.js")
    $("header article nav ul li").click(function (e) {
        e.preventDefault();
        var self = $(this);
        var thisC = self.attr("class");
        var banner = $(".banbox .banner");
        var ibbg = $("main .ibbox .ibbg");
        self.parent().children("li").siblings().removeClass("active");
        self.addClass("active");
        $("main .btnbox").children().addClass("none");
        if (thisC === "H") {
            return
        } else if (thisC === "SE") {
            banner.attr("class", "banner");
            ibbg.attr("class", "ibbg");
            $("main .btnbox .sebtn").removeClass("none");
        } else if (thisC === "OC") {
            banner.attr("class", "banner ban2");
            ibbg.attr("class", "ibbg bg2");
            $("main .btnbox .ocbtn").removeClass("none");
        } else if (thisC === "SG") {
            banner.attr("class", "banner ban3");
            ibbg.attr("class", "ibbg bg3");
            $("main .btnbox .sgbtn").removeClass("none");
        } else if (thisC === "LT") {
            banner.attr("class", "banner ban4");
            ibbg.attr("class", "ibbg bg4");
            $("main .btnbox .ltbtn").removeClass("none");
        } else if (thisC === "DG") {
            banner.attr("class", "banner ban5");
            ibbg.attr("class", "ibbg bg5");
            $("main .btnbox .dgbtn").removeClass("none");
        } else if (thisC === "BO") {
            banner.attr("class", "banner ban6");
            ibbg.attr("class", "ibbg bg6");
            $("main .btnbox .bobtn").removeClass("none");
        } else {
            banner.attr("class", "banner ban7");
            ibbg.attr("class", "ibbg bg7");
        }
    });
});