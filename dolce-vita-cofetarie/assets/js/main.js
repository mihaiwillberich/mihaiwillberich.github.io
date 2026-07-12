/* Dolce Vita Cofetărie — Buzău. Interactions, vanilla, no deps. */
(function () {
  'use strict';

  /* ---- Nav scroll state ---- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var toggleMenu = function (open) {
    var isOpen = open != null ? open : !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  if (burger && menu) {
    burger.addEventListener('click', function () { toggleMenu(); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggleMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) toggleMenu(false);
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Highlight today's hours ---- */
  var day = new Date().getDay(); // 0 = Sun
  var todayRow = document.querySelector('.hours-row[data-day="' + day + '"]');
  if (todayRow) {
    todayRow.classList.add('today');
    var first = todayRow.firstElementChild;
    if (first) first.textContent += ' · azi';
  }

  /* ---- Footer year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
