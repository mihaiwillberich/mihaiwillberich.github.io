/* Anto & Elen — The Color Lab · interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("navToggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close mobile menu after tapping a link
    nav.querySelectorAll(".nav__mobile a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Current year in footer
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // Scroll reveal
  var revealables = document.querySelectorAll(
    ".about__text, .about__figure, .section__head, .menu__col, .pillar, .reviews__stat, .brandframe, .locate__info, .locate__map"
  );
  revealables.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.setProperty("--i", i % 4);
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealables.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealables.forEach(function (el) {
      el.classList.add("in");
    });
  }
})();
