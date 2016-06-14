$(document).ready(function() {
  // Variables
  $body = $("body");
  $wrapper = $("#wrapper");
  $navDrawerOpener = $("#nav-open-btn--left");
  $navDrawerCloser = $("#nav-close-btn--left");
  $overlay = $("#wrapper");


	// ADD FUNCTIONS TO THE INIT FUNCTION/OBJECT  
  var init = function() {
//     $navDrawerOpener.trigger("click");
  };
  
	// CLICK: Header navigation
	// NEED TO CONVERT TO VANILLA JS
	// ADD ALL THIS TO THE INIT FUNCTION
	var toggleNavLeft = function(event) {
		event.preventDefault();
		$body.toggleClass("js-nav-open--left");

    animateNavDrawer();
	}

	var closeNavLeft = function(event) {
		event.preventDefault();
		$body.removeClass("js-nav-open--left");

    animateNavDrawer();
	}

  var animateNavDrawer = function() {
    if ($body.hasClass("js-nav-open--left")) {
      $(document).on("click", function(event) {
/*
        event.preventDefault();
        event.stopPropagation();
*/

        if (event.target.id === "nav-left") {
          $navDrawerCloser.trigger("click");
        }
      });
    } else {
      $(document).off("click");
    }
  }
	
  $navDrawerCloser.click(closeNavLeft);
	$navDrawerOpener.click(toggleNavLeft);

  init();
});
