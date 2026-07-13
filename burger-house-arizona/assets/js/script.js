// Burger House Arizona — light interactions
(function () {
  // Mobile menu toggle
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Highlight today's hours row
  var today = new Date().getDay(); // 0 Sun .. 6 Sat
  var row = document.querySelector('.hours-row[data-day="' + today + '"]');
  if (row) row.classList.add('today');

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
