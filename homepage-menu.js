(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('[data-home-menu-toggle]');
    var panel = document.querySelector('[data-home-menu-panel]');
    if (!toggle || !panel) return;
    var label = toggle.querySelector('[data-home-menu-label]');
    var openLabel = toggle.getAttribute('data-open-label') || 'Menu';
    var closeLabel = toggle.getAttribute('data-close-label') || 'Close menu';
    function setOpen(open) {
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) label.textContent = open ? closeLabel : openLabel;
    }
    toggle.addEventListener('click', function () { setOpen(!panel.classList.contains('is-open')); });
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) setOpen(false);
    });
    setOpen(false);
  });
}());
