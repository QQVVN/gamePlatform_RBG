$(document).ready(function () {

    // show password
    $(".eye").click(function () {
        var pass_type = $(".inputbox input.password").attr("type");
        if (pass_type === "password") {
            $(".inputbox input.password").attr("type", "text");
            $(".eye").addClass("show");
        } else {
            $(".inputbox input.password").attr("type", "password");
            $(".eye").removeClass("show");
        }
    });

});