/* Interacciones básicas: menú móvil, formularios front-end, acordeón FAQ */
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.click();
        toggle.focus();
      }
    });
  }

  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.parentElement.querySelector('.form-success');
      form.hidden = true;
      if (ok) { ok.hidden = false; ok.focus(); }
    });
  });

  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
    });
  });

  var y = document.querySelectorAll('[data-year]');
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
