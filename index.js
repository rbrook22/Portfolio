$(document).ready(function () {
    $(".menuIcon, .menuWord").on("click", function () {
        $("body").toggleClass("open");
    });
    $(".menu-items-list a").on("click", function () {
        $("body").toggleClass("open");
    })
});

// NavBar Scroll Change Color
$(document).scroll(function () {
    var height = $(".navOptions").height();
    if ($(this).scrollTop() > height) {
        $(".navOptions").css("background-color", "rgba(183, 213, 245, 0.8)");
    } else {
        $(".navOptions").css("background-color", "rgb(242, 240, 234)");
    }
});

// Homepage Logo Ease In
$(function () {
    $('.imgMain').removeClass('fade-out');
});