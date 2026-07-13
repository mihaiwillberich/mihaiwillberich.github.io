/* Salon YK Style — Tulcea · minimal interactivity */
(function () {
  'use strict';

  // Mobile nav toggle
  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Deschide meniul');
  }

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // Reveal-on-scroll
  var els = document.querySelectorAll('.section, .hero__content, .card, .member, .rev, .grid-gallery figure');
  els.forEach(function (el, i) {
    el.classList.add('reveal');
    if (el.parentElement && el.parentElement.classList.contains('grid-gallery')) {
      el.style.setProperty('--i', i % 6);
    }
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Current year
  var yr = document.getElementById('yr');
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
