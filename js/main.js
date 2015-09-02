$(document).ready(function() {
  // Variables
  $body = $("body");
  $MainNav = $("#MainNav");
  $MobileNavOpener = $('#MobileNavOpener');

  var body = document.body,
      html = document.documentElement,
      resizeTimer;
      
  var mobileNavOpener = document.getElementById("MobileNavOpener");

  var bodyObj = {
    init: function() {
      this.height = this.getBodyHeight();
      this.width = this.getBodyWidth();
    },
    getBodyHeight: function() {
      return Math.max(Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.scrollHeight, html.offsetHeight));
    },
    getBodyWidth: function() {
      return Math.max(Math.max(body.scrollWidth, body.offsetWidth, body.clientWidth, html.scrollWidth, html.offsetWidth));
    },
    refreshSizes: function() {
      this.height = this.getBodyHeight();
      this.width = this.getBodyWidth();
    }
  };

  var windowObj = {
    init: function() {
      this.height = this.getWindowHeight();
      this.width = this.getWindowWidth();
    },
    getWindowHeight: function() {
      return window.innerHeight;
    },
    getWindowWidth: function() {
      return window.innerWidth;
    },
    refreshSizes: function() {
      this.height = this.getWindowHeight();
      this.width = this.getWindowWidth();
    }
  };
  
  var refreshBodyWindowSizes = function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      body.style.height = "auto";

      bodyObj.refreshSizes();
      windowObj.refreshSizes();
      
      body.style.height = Math.max(bodyObj.height, windowObj.height) + "px";
    }, 50);    
  }
  
  function init() {
    bodyObj.init();
    windowObj.init();
    
    // Set the body height on page load
    body.style.height = Math.max(bodyObj.height, windowObj.height) + "px";
    
    // Define event listeners
    window.addEventListener("resize", refreshBodyWindowSizes);
  };
  
  init();
  
  
	// CLICK: Header navigation
	// NEED TO CONVERT TO VANILLA JS
	$MobileNavOpener.click(function(event) {
		event.preventDefault();
		
		$body.toggleClass("is-nav-opened");
		
		if ($body.hasClass("is-nav-opened")) {
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
