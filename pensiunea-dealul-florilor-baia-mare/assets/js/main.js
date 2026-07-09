/* Pensiunea Dealul Florilor — nav toggle, scroll reveal, year */
(function () {
  "use strict";

  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Închide meniul" : "Deschide meniul");
    });
  }
  if (mobile) {
    mobile.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Current year
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // Scroll reveal
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  revealEls.forEach(function (el) { io.observe(el); });
})();
