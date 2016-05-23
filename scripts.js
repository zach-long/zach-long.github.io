
// === on load sequence === \\
$(document).ready(function() {
    
    $("header").css("opacity", 0);
    
    $("#me").addClass("animateSlow fadeIn");
    
    setTimeout(function() {
        $("#design").css("opacity", 1);
        $("#design").addClass("animate slideInLeftDramatic");
    }, 1000);
    
    setTimeout(function() {
        $("#bar").css("opacity", 1);
        $("#bar").addClass("animate zoomIn");
    }, 1900);
    
    setTimeout(function() {
        $("#development").css("opacity", 1);
        $("#development").addClass("animate slideInRightDramatic");
    }, 2800);
    
    setTimeout(function() {
        $("header").addClass("animateFast fadeIn");
    }, 3700)
    
    setTimeout(function() {
        $("nav").css("opacity", 1);
        $("nav").addClass("animate slideInLeft");
        $(".social-media").css("opacity", 1);
        $(".social-media").addClass("animate slideInDown");
    }, 3800);
    
    // === individual project animation === \\
//    $(".offset-box").hover(
//    function(){
//        $("p").addClass("animate slideInLeft");
//    }, function(){
//        $("p").removeClass("slideInLeft");
//        $("p").addClass("slideInRight");
//    });
    
});

// === project reveal animation === \\
$(window).scroll(function(event) {
    $('#column-right').find(".project-wrap").each(function(i){
        var objBottom = $(this).offset().top + $(this).outerHeight();
        var winBottom = $(window).scrollTop() + $(window).height();
        if(winBottom > objBottom){
            $(this).addClass("fadeInRight animate");
        }
    });
});

$(window).scroll(function(event) {
    $('#column-left').find(".project-wrap").each(function(i){
        var objBottom = $(this).offset().top + $(this).outerHeight();
        var winBottom = $(window).scrollTop() + $(window).height();
        if(winBottom > objBottom){
            $(this).addClass("fadeInLeft animate");
        }
    });
});

