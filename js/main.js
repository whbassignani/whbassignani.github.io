$(document).ready(function() {
	// CLICK: Header navigation
	$('#header-MobileNavOpener').click(function(event) {
		event.preventDefault();
		
		$('#header-Nav').toggleClass('js-opened');
	})

	// CLICK: Portfolio item, read more link
	$('.portfolio-Item-mobileOpener').click(function(event) {
		event.preventDefault();
		
		if ($(this).parent().hasClass('js-opened')) {
			$(this).parent().removeClass('js-opened');
			$(this).html("Read More");
		} else {
			$(this).parent().addClass('js-opened');
			$(this).html("Read Less");
		}
	});
	
	$('.fluidbox').fluidbox();
});
