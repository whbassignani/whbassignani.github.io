$(document).ready(function() {
  // Variables
  $body = $("body");
  $wrapper = $("#wrapper");
  $navDrawer = $("#nav-left");
  $navDrawerOpener = $("#nav-open-btn--left");
  $navDrawerCloser = $("#nav-close-btn--left");
  $overlay = $("#wrapper");


	// ADD FUNCTIONS TO THE INIT FUNCTION/OBJECT  
  var init = function() {

  };
  
  init();
  
  
	// CLICK: Header navigation
	// NEED TO CONVERT TO VANILLA JS
	// ADD ALL THIS TO THE INIT FUNCTION
	var toggleNavLeft = function(event) {
		event.preventDefault();
		$body.toggleClass("js-nav-open--left");

    if ($body.hasClass("js-nav-open--left")) {
      $(document).on("click", function(event) {
/*
        event.preventDefault();
        event.stopPropagation();
*/

        if (event.target.id === "wrapper") {
          $navDrawerCloser.trigger("click");
        }
      });
    } else {
      $(document).off("click");
    }
	}
	
  $navDrawerCloser.click(toggleNavLeft);
	$navDrawerOpener.click(toggleNavLeft);
});
