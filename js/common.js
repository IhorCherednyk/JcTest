$(function() {


	$(".toggle-mnu").click(function() {
		$(".main-nav").stop().slideToggle();
		return false;
	});
	
	$(".s-slider").owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:false,
		navSpeed:1000,
		dotsSpeed:1000
	});

});
