$(document).ready(function() {

	function setBannerHeight() {
		var height = $(window).height();
		// $(".hero-banner").height(height);
  	$(".background-image").height(height);
	}

	$(document).ready(function() {
		setBannerHeight();
	});

	$(window).resize(function() {
		setBannerHeight();
	});

});
