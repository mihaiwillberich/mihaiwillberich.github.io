(function () {
  "use strict";

  // Mobile menu
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    var toggle = function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger.addEventListener("click", toggle);
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
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
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Highlight today's opening hours
  var today = new Date().getDay();
  document.querySelectorAll(".hours-row[data-day]").forEach(function (row) {
    if (parseInt(row.getAttribute("data-day"), 10) === today) {
      row.classList.add("today");
      row.style.fontWeight = "700";
      row.style.color = "var(--rose-deep)";
    }
  });

  // Year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
