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

$(".slct").each(function (){
    var dropBlock = $(this).parent().find('.drop').find('li.active');
    var selectResult = dropBlock.html();
    dropBlock.parent().parent().find('input').val(selectResult);
    dropBlock.parent().parent().find('.slct').removeClass('active').html(selectResult);
})
// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(100);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(100);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(100);
	}

	return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(100);
      $('.slct').removeClass('active');
  }
});