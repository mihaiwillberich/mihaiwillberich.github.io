// Ταβέρνα «Ο Χόντος» — Βόλος
(function () {
  'use strict';

  // Mobile menu toggle
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Highlight today's hours row
  var today = new Date().getDay(); // 0=Sun..6=Sat
  document.querySelectorAll('.hours-row').forEach(function (row) {
    if (parseInt(row.getAttribute('data-day'), 10) === today) {
      row.classList.add('today');
      var val = row.querySelector('span:last-child');
      if (val && /κλειστ/i.test(val.textContent)) row.classList.add('closed');
    }
  });

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
