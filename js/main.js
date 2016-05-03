$(document).ready(function() {
  // Variables
  $body = $("body");
  $wrapper = $("#wrapper");
  $navDrawer = $("#nav-left");
  $navDrawerOpener = $("#nav-open-btn--left");
  $navDrawerCloser = $("#nav-close-btn--left");
  $overlay = $("#wrapper");


  
  function init() {

  };
  
  init();
  
  
	// CLICK: Header navigation
	// NEED TO CONVERT TO VANILLA JS
	// CONSOLIDATE: REFACTOR AND DRY IT
  $navDrawerCloser.click(function (event) {
		event.preventDefault();
		$body.toggleClass("js-nav-open--left");
	});

	$navDrawerOpener.click(function (event) {
		event.preventDefault();
		$body.toggleClass("js-nav-open--left");
	});
});
