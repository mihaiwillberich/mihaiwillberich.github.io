// M Salon — Călărași · minimal interactions
(function () {
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');

  // Sticky nav frosting
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function closeMenu() { menu.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Highlight today's hours row
  var today = new Date().getDay(); // 0 = Sunday
  var row = document.querySelector('.hours-row[data-day="' + today + '"]');
  if (row) row.classList.add('today');

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
