$(document).ready(function() {
	$('body').find('img[alt$="www.000webhost.com"]').remove();
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('active');
		$('.header__nav').toggleClass('active');

		if ($('.header__burger').hasClass('active'))
			$('body').css('overflow', 'hidden');
		else
			$("body").css("overflow", "scroll");
	});
});

$("a[data-goto]").click(function(ev) {
	ev.preventDefault();

	$('.header__burger').removeClass('active');
	$('.header__nav').removeClass('active');
	$('body').css('overflow', 'scroll');

	var targetId = $(this).attr("data-goto");

	var margintop = parseInt($(targetId).css("margin-top"), 10);
	window.scrollTo({
		top: $(targetId).offset().top - margintop - 50,
		behavior: "smooth"
	});
});