// Mobile nav toggle
(function(){
  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    });
    nav.querySelectorAll('.nav__mobile a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  // Current year in footer
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
