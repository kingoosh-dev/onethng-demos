/* Product page blocks added in 2.3.0: Size guide and Estimated delivery.
   Loaded only on pages that use one of those blocks. */
(() => {
  'use strict';
  if (window.__themeProductExtras) return;
  window.__themeProductExtras = true;

  const doc = document;
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));

  /* ---------------------------------------------------------------- Size guide */
  let opener = null;
  doc.addEventListener('click', (e) => {
    const open = e.target.closest('[data-size-guide-open]');
    if (open) {
      const dlg = doc.getElementById(open.dataset.sizeGuideOpen);
      if (dlg && dlg.showModal) { opener = open; dlg.showModal(); doc.documentElement.classList.add('size-guide-open'); }
      return;
    }
    const dlg = e.target.closest('[data-size-guide]');
    // Close on the X, or a click on the dimmed backdrop (the dialog itself, outside its panel).
    if (dlg && (e.target.closest('[data-size-guide-close]') || e.target === dlg)) dlg.close();
  });
  doc.addEventListener('close', (e) => {
    if (!e.target.matches || !e.target.matches('[data-size-guide]')) return;
    doc.documentElement.classList.remove('size-guide-open');
    if (opener) { opener.focus({ preventScroll: true }); opener = null; }
  }, true);

  /* ---------------------------------------------------------------- Estimated delivery */
  const pad = (n) => String(n).padStart(2, '0');
  const key = (d) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
  const addDays = (d, n) => new Date(d.getTime() + n * 864e5);

  // Dates are handled as "store wall-clock" values in UTC fields, so the store's time zone decides the cut-off.
  function storeNow(tz) {
    const m = /^([+-])(\d{2})(\d{2})$/.exec(tz || '');
    const offset = m ? (m[1] === '-' ? -1 : 1) * (parseInt(m[2], 10) * 60 + parseInt(m[3], 10)) : -new Date().getTimezoneOffset();
    return new Date(Date.now() + offset * 6e4);
  }

  function estimate(el) {
    const ds = el.dataset;
    const off = new Set((ds.off || '').split(',').map((s) => s.trim()).filter(Boolean));
    const weekends = ds.weekends !== 'false';
    const isWorkday = (d) => !(weekends && (d.getUTCDay() === 0 || d.getUTCDay() === 6)) && !off.has(key(d));
    const addWorkdays = (d, n) => { let x = d; let left = n; while (left > 0) { x = addDays(x, 1); if (isWorkday(x)) left--; } return x; };

    const now = storeNow(ds.tz);
    const cutoff = parseInt(ds.cutoff, 10) || 0;
    const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const beforeCutoff = !cutoff || now.getUTCHours() < cutoff;
    // The first day the order can be packed.
    let ship = today;
    if (!isWorkday(ship) || !beforeCutoff) { do { ship = addDays(ship, 1); } while (!isWorkday(ship)); }
    ship = addWorkdays(ship, parseInt(ds.dispatch, 10) || 0);
    const start = addWorkdays(ship, parseInt(ds.min, 10) || 0);
    const end = addWorkdays(ship, Math.max(parseInt(ds.max, 10) || 0, parseInt(ds.min, 10) || 0));

    // The shop's language, in the shopper's regional format when it matches (en + en-GB gives "Tue 17 Nov").
    const shopLang = doc.documentElement.lang || '';
    const browser = navigator.language || '';
    const lang = shopLang && browser.toLowerCase().startsWith(shopLang.toLowerCase()) ? browser : shopLang || undefined;
    const fmt = (d) => d.toLocaleDateString(lang, { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
    const startText = fmt(start);
    const endText = fmt(end);

    let text = ds.text || '';
    if (ds.textCountdown && cutoff && isWorkday(today) && beforeCutoff) {
      const mins = Math.max(1, (cutoff * 60) - (now.getUTCHours() * 60 + now.getUTCMinutes()));
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      const left = h > 0 ? ds.hours.replace('[h]', h).replace('[m]', m) : ds.minutes.replace('[m]', m);
      text = ds.textCountdown.replace('[countdown]', `<strong>${left}</strong>`);
    }
    const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    // Merchant text is escaped; only the dates and countdown are wrapped in <strong>.
    const html = esc(text).replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\/strong&gt;/g, '</strong>')
      .replace('[start]', `<strong>${esc(startText)}</strong>`)
      .replace('[end]', `<strong>${esc(endText)}</strong>`);
    const out = el.querySelector('[data-delivery-text]');
    if (out) out.innerHTML = start.getTime() === end.getTime() ? html.replace(/<strong>[^<]*<\/strong>\s*(–|-|to)\s*<strong>[^<]*<\/strong>/, `<strong>${esc(startText)}</strong>`) : html;
  }

  const run = () => $$('[data-delivery]').forEach(estimate);
  doc.addEventListener('shopify:section:load', run);
  doc.addEventListener('shopify:block:select', run);
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', run); else run();
  // Keep the countdown honest while the page stays open.
  setInterval(run, 60000);
})();
