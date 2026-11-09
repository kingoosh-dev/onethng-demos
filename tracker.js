/* One Thng demo gallery: counts page views and button clicks. No cookies, no storage, no personal data. */
(function () {
  var API = 'https://iilxlsskhmrznrxriyiz.supabase.co/rest/v1/demo_events';
  var KEY = 'sb_publishable_zpOtG2SNVuEph-rwUrCzMA_VWpya-u_';
  var PRODUCTS = {
    '59651559588172': 'Bundle', '59803773272396': 'Vigor', '59803775926604': 'Dewy',
    '59803780415820': 'Drape', '59803784675660': 'Ember', '59803786903884': 'Fetch', '59804227240268': 'Custom'
  };
  function cut(s, n) { return s ? String(s).slice(0, n) : null; }
  function send(event, target) {
    try {
      var ref = null;
      try { ref = document.referrer ? new URL(document.referrer).hostname : null; } catch (e) {}
      var body = {
        event: event,
        path: cut(location.pathname, 200),
        hash: cut(location.hash.replace('#', ''), 40),
        target: cut(target, 200),
        referrer: cut(ref, 120),
        utm_source: cut(new URLSearchParams(location.search).get('utm_source'), 60),
        device: window.matchMedia && window.matchMedia('(max-width: 760px)').matches ? 'mobile' : 'desktop'
      };
      fetch(API, {
        method: 'POST', keepalive: true, mode: 'cors',
        headers: { apikey: KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify(body)
      }).catch(function () {});
    } catch (e) {}
  }
  send('view');
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.href || '';
    var cart = href.match(/onethng\.store\/cart\/(\d+)/);
    if (cart) { send('buy_click', PRODUCTS[cart[1]] || cart[1]); return; }
    if (/^https?:\/\/(www\.)?onethng\.store\/?/.test(href)) { send('buy_click', 'Store'); return; }
    var demo = (a.getAttribute('href') || '').match(/^\/?(vigor|dewy|drape|ember|fetch)\//);
    if (demo && location.pathname.split('/').filter(Boolean).length === 0) send('demo_open', demo[1]);
  }, true);
})();
