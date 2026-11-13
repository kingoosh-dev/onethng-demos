/* Etsy mode: visitors who arrive from the Etsy listing see the demos without prices or links to the One Thng store. */
(function () {
  var d = document.documentElement, k = 'ot_etsy', q = new URLSearchParams(location.search), on = false;
  var fromEtsy = q.get('from') === 'etsy' || /(^|\.)etsy\.com$/.test((function () { try { return new URL(document.referrer).hostname; } catch (e) { return ''; } })());
  try {
    if (fromEtsy) localStorage.setItem(k, String(Date.now()));
    var t = +localStorage.getItem(k);
    on = !!t && Date.now() - t < 30 * 864e5;
  } catch (e) { on = fromEtsy; }
  if (!on) return;
  d.classList.add('etsy');
  var css = 'html.etsy a[href*="onethng.store"],html.etsy #pricing,html.etsy .offer__note,html.etsy a[href="#pricing"]{display:none!important}';
  var s = document.createElement('style'); s.textContent = css; (document.head || d).appendChild(s);
  document.addEventListener('DOMContentLoaded', function () {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      if (/\$\d/.test(n.nodeValue) && !n.parentElement.closest('.product, .price, [class*=price], [class*=cart], form')) {
        n.nodeValue = n.nodeValue.replace(/\s*(the\s+)?\$\d+(\.\d+)?\s*/g, function (m, the) { return the ? ' the ' : ' '; }).replace(/\s{2,}/g, ' ');
      }
    }
    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], a:not([href*=":"])').forEach(function (a) {
      var h = a.getAttribute('href'); if (!h || h.charAt(0) === '#') return;
      try { var u = new URL(h, location.href); if (u.origin === location.origin) { u.searchParams.set('from', 'etsy'); a.setAttribute('href', u.pathname + u.search + u.hash); } } catch (e) {}
    });
  });
})();
