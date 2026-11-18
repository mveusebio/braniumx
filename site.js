(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

/* Checkout links: paste each GoHighLevel checkout URL between the quotes.
   While a plan is empty, its buttons send people to the demo page. */
(function () {
  var CHECKOUT = { starter: "", growth: "" };
  document.querySelectorAll('[data-checkout]').forEach(function (a) {
    var url = CHECKOUT[a.getAttribute('data-checkout')];
    if (url) a.setAttribute('href', url);
  });
})();
