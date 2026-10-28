/* SITE.JS: shared behavior for every page (mobile menu + nav on scroll) */
(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  // Mobile menu open/close
  var toggle = nav.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Homepage only: nav turns solid after scrolling past the top of the hero
  if (nav.classList.contains('over-hero')) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
