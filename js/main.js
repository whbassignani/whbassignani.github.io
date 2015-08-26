$(document).ready(function() {
  // Variables
  $window = $(window);
  winHeight = $window.height();
  winWidth = $window.width();

  $body = $("body");
  
  $MainNav = $("#MainNav");
  $MobileNavOpener = $('#MobileNavOpener')
  
  $body.height(winHeight);

  $window.resize(function() {
    winHeight = $window.height();
    winWidth = $window.width();
    
    $body.height(winHeight);
  });
  
	// CLICK: Header navigation
	$MobileNavOpener.click(function(event) {
		event.preventDefault();
		
		$MainNav.toggleClass('js-opened');
		
		if ($MainNav.hasClass('js-opened')) {
  		$MobileNavOpener.html("Close");
		} else {
  		$MobileNavOpener.html("Menu");
		}
	})
	
	// Initialize Fluidbox photo viewer on modern browsers (IE9+)
	if (!$('html').hasClass('lt-ie9')) {
		$('.fluidbox').fluidbox();
	}
});
