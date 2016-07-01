// === mobile status variable === \\
var isMobile = false;

// === on load sequence === \\
$(document).ready(function() {
	
	// === set mobile status === \\
	if (/Mobi/.test(navigator.userAgent)) {
    	var isMobile = true;
  	}
    
	// === on load animation === \\
	if (isMobile != true) {
		$("header").css("opacity", 0);

		$("#me").addClass("animateSlow fadeIn");

		setTimeout(function() {
			$("#design").css("opacity", 1);
			$("#design").addClass("animate slideInLeftDramatic");
		}, 1000);

		setTimeout(function() {
			$("#bar").css("opacity", 1);
			$("#bar").addClass("animate zoomIn");
		}, 2200);

		setTimeout(function() {
			$("#development").css("opacity", 1);
			$("#development").addClass("animate slideInRightDramatic");
		}, 2900);

		setTimeout(function() {
			$("header").addClass("animateFast fadeIn");
		}, 3800)

		setTimeout(function() {
			$("nav").css("opacity", 1);
			$("nav").addClass("animate slideInLeft");
			$(".social-media").css("opacity", 1);
			$(".social-media").addClass("animate slideInDown");
		}, 4300);
	} else {
		$("header, #design, #bar, #development, nav, .social-media").css("opacity", 1);
	}
    
});

// === project reveal animation === \\
if (isMobile != true) {
	$(window).scroll(function(event) {
		$('#column-right').find(".project-wrap").each(function(i){
			var objBottom = $(this).offset().top + $(this).outerHeight();
			var winBottom = $(window).scrollTop() + $(window).height();
			if(winBottom > objBottom){
				$(this).addClass("fadeInRight animate");
			}
		});
	});
};

if (isMobile != true) {
	$(window).scroll(function(event) {
		$('#column-left').find(".project-wrap").each(function(i){
			var objBottom = $(this).offset().top + $(this).outerHeight();
			var winBottom = $(window).scrollTop() + $(window).height();
			if(winBottom > objBottom){
				$(this).addClass("fadeInLeft animate");
			}
		});
	});
};