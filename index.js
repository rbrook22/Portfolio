$(document).ready(function() {
    $(".menuIcon").on("click", function(){
        $("body").toggleClass("open");
    });
});
// NavBar Scroll Change Color
$(document).scroll(function(){
    var height = $(".navOptions").height();

    if($(this).scrollTop() > height){
        $(".navOptions").css("background-color", "rgba(183, 213, 245, 0.8)");
    } else{
        $(".navOptions").css("background-color", "rgb(242, 240, 234)");
    };
});
// Homepage Logo Ease In
$(function() {
    $('.imgMain').removeClass('fade-out');
});

// Load Content on Scroll Effect
$(document).ready( function() {
    $("#aboutSection").hide(); //hide your div initially
    var topOfOthDiv = $("#aboutTitle").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#aboutSection").show(); //reached the desired point -- show div
        }
    });
});