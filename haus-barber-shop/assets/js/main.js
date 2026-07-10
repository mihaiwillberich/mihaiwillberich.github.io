// HĀUS •BARBERSHOP• — minimal UI behaviour
(function () {
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the mobile menu after tapping a link
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Current year in footer
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
