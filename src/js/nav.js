// Toggle Navigation
$(function() {
	$(".open-panel").click(function(){
		console.log('yup! you clicked it');
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		} else {
			$('html').addClass('open-nav');
		}
		$(this).toggleClass('active');
	});
	$('.close-panel').click(function() {
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		}
	});
});

// no fixed nav please
// if ($("body").hasClass("home")) {
// 	var nav = $('nav');
// 	navHeight = $('nav').outerHeight();
// 	bannerHeight = $('.hero-banner').outerHeight();
// 	headerBanner = $(bannerHeight - navHeight);
// 	ns = 'fixed-top';
// 	winHeight = $(window).height();

// 	$(window).scroll(function() {
// 		if( $(this).scrollTop() > (winHeight - navHeight) ){
// 			nav.addClass(ns);
// 			$('nav li.hidden').css('display', 'inline');
// 		} else {
// 			nav.removeClass(ns);
// 			$('nav li.hidden').css('display', 'none');
// 			$('header').css('z-index', '9');
// 		}
// 	});
// }

// Search Bar
$(function() {
	$('.search-submit').click(function() {
		$('nav .search').slideToggle();
	});
});

$(function() {
	$('.mobile-search-submit').click(function() {
		$(this).next('.search').slideToggle();
	});
});
