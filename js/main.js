/*
 * Thanks to Google Developers for the lazy loading script:
 * https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
 */

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.is-notLoaded"));
console.log(IntersectionObserverEntry.prototype);

  /* WHY: need to check if full IntersectionObserver spec is available */
  if ('IntersectionObserver' in window
      && 'IntersectionObserverEntry' in window 
      && 'intersectionRatio' in window.IntersectionObserverEntry.prototype
      && 'isIntersecting' in IntersectionObserverEntry.prototype) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // TODO: add next line back in once srcset added
          // lazyImage.srcset = lazyImage.dataset.srcset;
          
          /* WHY: once image finishes loading, takes off the .is-notLoaded class, which creates the fade-in animation */
          var newImage = new Image();
          newImage.src = lazyImage.src;
          newImage.onload = function() {
            console.log("YOUSDLFKSDJFLSDKJF");
            lazyImage.classList.remove("is-notLoaded");
          }
          
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    }, {
      rootMargin: "0px 0px 300px 0px"
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {

  }
});