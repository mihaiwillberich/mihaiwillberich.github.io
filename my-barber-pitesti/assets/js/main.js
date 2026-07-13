/* My Barber Pitești — nav toggle, scroll reveal, year, today's hours highlight */
(function () {
  'use strict';

  // --- Mobile nav toggle ---
  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    });
    // Close on link tap
    var mobile = document.getElementById('navMobile');
    if (mobile) {
      mobile.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- Current year ---
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // --- Highlight today's row in the hours table ---
  var hours = document.getElementById('hours');
  if (hours) {
    var today = new Date().getDay(); // 0 = Sun .. 6 = Sat
    hours.querySelectorAll('tr[data-day]').forEach(function (tr) {
      var days = tr.getAttribute('data-day').split(',').map(Number);
      // Mon–Wed row carries data-day="1" but covers 1,2,3
      if (tr.querySelector('th') && tr.querySelector('th').textContent.indexOf('Miercuri') !== -1) {
        days = [1, 2, 3];
      }
      if (days.indexOf(today) !== -1) tr.classList.add('today');
    });
  }

  // --- Reveal on scroll ---
  var revealEls = [].slice.call(document.querySelectorAll(
    '.about__text, .about__figure, .section__head, .menu__col, .signature, .rev, .grid-gallery figure, .locate__info, .locate__map'
  ));
  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    if (el.matches('.grid-gallery figure')) el.style.setProperty('--i', i % 8);
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();
