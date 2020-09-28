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

// document.addEventListener("DOMContentLoaded", function () {

//     var selectP = document.querySelector('.select p');
//     var selectUl = document.querySelector('.select ul');
//     var selectA = document.querySelector('.select ul li a');

//     selectP.addEventListener("click", function (e) {
//         if (selectUl.getAttribute('class') !== "none") {
//             selectUl.setAttribute('class', 'none');
//         } else {
//             selectUl.removeAttribute('class', 'none');
//         };
//     });

//     selectA.addEventListener("click", function (e) {
//         var txt = document.querySelector(this).textContent;
//         selectP.innerHTML = txt;
//         selectUl.setAttribute('class', 'none');
//     });

//     $(".select ul li a").click(function () {
//         var txt = $(this).text();
//         $(".select p").html(txt);
//         $(".select ul").addClass('none');
//     });

// });

