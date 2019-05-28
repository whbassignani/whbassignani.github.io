/*
 * Thanks to Google Developers for the lazy loading script:
 * https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
 */

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.is-notLoaded"));
  let active = false;

  /* WHY: polyfill for Edge ~15 to fix problem with IntersectionObserver */
  if ("IntersectionObserver" in window
      && "IntersectionObserverEntry" in window 
      && "intersectionRatio" in window.IntersectionObserverEntry.prototype
      && !("isIntersecting" in IntersectionObserverEntry.prototype)) {

    Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
      get: function () {
        return this.intersectionRatio > 0
      }
    })
  }

  /* WHY: need to check if full IntersectionObserver spec is available */
  if ("IntersectionObserver" in window) {
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
    const lazyLoad = function() {
      if (active === false) {
        active = true;
  
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
  
              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });
  
              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
  
          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);  
  }
});