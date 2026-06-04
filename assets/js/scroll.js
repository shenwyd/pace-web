/* Pace — scroll interactivity (progressive enhancement).
   Adds .in-view to .reveal / .reveal-stagger elements as they enter the
   viewport, and .scrolled to the sticky nav. No dependencies. If JS is off
   or IntersectionObserver is unsupported, everything stays fully visible
   (the .reveal base styles only hide when this script can reveal them). */
(function () {
  "use strict";

  // If the user prefers reduced motion, reveal everything immediately.
  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll() {
    document.querySelectorAll(".reveal, .reveal-stagger")
      .forEach(function (el) { el.classList.add("in-view"); });
  }

  // Fallback: no IntersectionObserver → just show everything.
  if (reduce || !("IntersectionObserver" in window)) {
    document.addEventListener("DOMContentLoaded", revealAll);
    return;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

    document.querySelectorAll(".reveal, .reveal-stagger")
      .forEach(function (el) { io.observe(el); });

    // Sticky-nav border once the page has scrolled a touch.
    var nav = document.querySelector(".nav");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("scrolled", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  });
})();
