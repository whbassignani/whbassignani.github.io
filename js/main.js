$(document).ready(function() {
  // Variables
  $body = $("body");
  $wrapper = $("#wrapper");
  $headerCarousel = $(".header-carousel");

  // ADD FUNCTIONS TO THE INIT FUNCTION/OBJECT
  var init = function() {
    $headerCarousel.flickity({
      // Options
      cellAlign: 'left',
      cellSelector: ".header-carousel-item",
      contain: true,
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
      // wrapAround: true
    });
  };

  init();
});
