// Página do hub de dados: anima as ilustrações quando entram na tela. Sem dependências.
// Sem suporte ou com movimento reduzido, tudo aparece pronto, sem animação.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els = document.querySelectorAll('[data-reveal]');
  document.documentElement.classList.add('hub-anim');
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  els.forEach(function (el) { io.observe(el); });
})();
