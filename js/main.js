$('.popular-image__item img').click(function(e) {
	var more = $(this).next();
	if(more.is(':hidden')){
		more.slideDown(400);
		more.closest('.popular-image__line').addClass('active');
	}
	else{
		more.slideUp(400);
		more.closest('.popular-image__line').removeClass('active');
	}
});

$(function() {
	var menu = $('.mobile-nav'),
			navigation = $('.mobile-nav-wrapp > ul')

	$('.navbar-toggle').click(function() {
		if (menu.is(':hidden')) {
			menu.fadeIn(500);
			navigation.addClass('active');
		}
	});
	$('.close-menu').click(function(e) {
		e.preventDefault();
		if (menu.is(':visible')){
			menu.fadeOut(500);
			navigation.removeClass('active');
		}
	});
});