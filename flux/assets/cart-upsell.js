/* Cart upsells, "Recommended for the cart" mode (2.3.0). Loaded only when that mode is switched on.
   Asks Shopify's product recommendations for the products in the cart, puts those first, tops up from the
   fallback collection the theme already rendered, and leaves out anything already in the cart. */
(() => {
  'use strict';
  if (window.__themeCartUpsell) return;
  window.__themeCartUpsell = true;

  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));
  const cache = new Map();

  function recommendationsFor(url, id, limit) {
    const key = `${id}:${limit}`;
    if (!cache.has(key)) {
      const src = `${url}?section_id=cart-upsell&product_id=${encodeURIComponent(id)}&limit=${limit}&intent=related`;
      cache.set(key, fetch(src)
        .then((r) => (r.ok ? r.text() : ''))
        .then((html) => {
          const box = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-upsell-results]');
          return box ? $$('[data-upsell-product]', box) : [];
        })
        .catch(() => []));
    }
    return cache.get(key);
  }

  async function fill(box) {
    if (box.dataset.filled) return;
    box.dataset.filled = '1';
    const list = $('[data-upsell-list]', box);
    const limit = parseInt(box.dataset.limit, 10) || 3;
    const exclude = new Set((box.dataset.exclude || '').split(',').filter(Boolean));
    const seeds = (box.dataset.seeds || '').split(',').filter(Boolean);
    const fallback = $$('[data-upsell-product]', list);
    if (!seeds.length || !box.dataset.url) return;

    const results = await Promise.all(seeds.map((id) => recommendationsFor(box.dataset.url, id, Math.min(10, limit + 4))));
    if (!box.isConnected) return;
    // Take one from each cart product in turn, so a big cart doesn't fill up from a single product's matches.
    const picked = [];
    const seen = new Set(exclude);
    const add = (node) => {
      const id = node.dataset.productId;
      if (seen.has(id) || picked.length >= limit) return;
      seen.add(id);
      picked.push(node);
    };
    for (let i = 0; i < 10; i++) results.forEach((r) => { if (r[i]) add(r[i]); });
    fallback.forEach(add);
    if (!picked.length) { box.hidden = true; return; }
    list.replaceChildren(...picked.map((n) => (n.ownerDocument === doc && n.isConnected ? n : doc.importNode(n, true))));
    box.hidden = false;
  }

  function init(scope = doc) { $$('[data-cart-upsell]', scope).forEach(fill); }

  // Show the chosen variant's price.
  const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  doc.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-upsell-variant]');
    if (!sel) return;
    const opt = sel.selectedOptions[0];
    const row = sel.closest('[data-upsell-product]');
    const wrap = row && $('[data-upsell-price]', row);
    const fmt = window.ThemeUtils && window.ThemeUtils.formatMoney;
    if (!opt || !wrap || !fmt) return;
    const price = parseInt(opt.dataset.price, 10) || 0;
    const compare = parseInt(opt.dataset.compare, 10) || 0;
    const sale = compare > price;
    wrap.innerHTML = `<div class="price${sale ? ' price--sale' : ''}" data-price><span class="price__current">${sale ? `<span class="visually-hidden">${esc(wrap.dataset.saleLabel)}</span>` : ''}${esc(fmt(price))}</span>${sale ? `<s class="price__compare"><span class="visually-hidden">${esc(wrap.dataset.regularLabel)}</span>${esc(fmt(compare))}</s>` : ''}</div>`;
  });

  // The cart drawer is re-rendered after every change, so fill the fresh box each time.
  const drawer = doc.getElementById('CartDrawer');
  if (drawer) new MutationObserver(() => init(drawer)).observe(drawer, { childList: true, subtree: true });
  doc.addEventListener('shopify:section:load', (e) => init(e.target));
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', () => init()); else init();
})();
