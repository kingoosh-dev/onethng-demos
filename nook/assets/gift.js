/* Gift with purchase (2.3.0). Loaded only when it's switched on with a gift product chosen.
   - Adds the gift (1 only) when the cart reaches the threshold, and removes it when the cart drops below.
   - The gift's own price never counts towards the threshold.
   - Shoppers who remove the gift aren't forced to keep it: it stays out, with an "Add free gift" button.
   The price is set by the Shopify automatic discount in the setup guide, never by the theme. */
(() => {
  'use strict';
  if (window.__themeGift) return;
  window.__themeGift = true;

  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const T = window.theme || {};
  const routes = T.routes || {};
  const cartUrl = (routes.cart || '/cart').replace(/\/$/, '');
  const session = {
    get(k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { if (v == null) window.sessionStorage.removeItem(k); else window.sessionStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  const ADDED = 'gift:added';
  const DECLINED = 'gift:declined';

  // Thresholds are set in the store's currency; shoppers paying in another currency see the converted amount.
  const rate = () => { const r = window.Shopify && window.Shopify.currency && parseFloat(window.Shopify.currency.rate); return r > 0 ? r : 1; };
  const money = (c) => (window.ThemeUtils && window.ThemeUtils.formatMoney ? window.ThemeUtils.formatMoney(c) : String(c / 100));

  const hasDrawer = () => !!doc.getElementById('CartDrawerInner');

  async function post(path, body) {
    const res = await fetch(`${path}.js`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(hasDrawer() ? { ...body, sections: 'cart-drawer', sections_url: window.location.pathname } : body)
    });
    const data = await res.json();
    if (!res.ok || data.status) throw new Error(data.description || data.message || 'cart');
    return data;
  }

  function refresh(data) {
    if (hasDrawer() && data && data.sections && window.ThemeUtils) {
      window.ThemeUtils.Cart.render(data.sections['cart-drawer']);
    } else if (!hasDrawer()) {
      window.location.reload();
    }
  }

  function paint(bar, eligible, threshold, unlocked, waiting) {
    const text = $('[data-gift-text]', bar);
    const add = $('[data-gift-add]', bar);
    bar.style.setProperty('--p', `${Math.min(100, Math.floor((eligible * 100) / threshold))}%`);
    bar.classList.toggle('is-unlocked', unlocked);
    if (text) {
      text.textContent = !unlocked
        ? bar.dataset.textRemaining.replace('[amount]', money(threshold - eligible))
        : waiting ? bar.dataset.textWaiting : bar.dataset.textUnlocked;
    }
    if (add) add.hidden = !waiting;
  }

  let busy = false;
  let again = false;
  async function sync() {
    const bar = $('[data-gift-bar]');
    if (!bar) return;
    if (busy) { again = true; return; }
    busy = true;
    try {
      const product = Number(bar.dataset.product);
      const variant = Number(bar.dataset.variant);
      const threshold = Math.round(Number(bar.dataset.threshold) * rate());
      const cart = await fetch(`${cartUrl}.js`, { headers: { Accept: 'application/json' } }).then((r) => r.json());
      const gifts = cart.items.filter((it) => it.product_id === product);
      const eligible = cart.items.filter((it) => it.product_id !== product).reduce((sum, it) => sum + (it.original_line_price || 0), 0);
      const unlocked = eligible > 0 && eligible >= threshold;
      let data = null;

      if (!unlocked) {
        session.set(ADDED, null);
        session.set(DECLINED, null);
        if (gifts.length) {
          const updates = {};
          gifts.forEach((it) => { updates[it.key] = 0; });
          data = await post(`${cartUrl}/update`, { updates });
        }
      } else if (!gifts.length) {
        // We added it before and it's gone: the shopper removed it, so leave it out.
        if (session.get(ADDED)) { session.set(ADDED, null); session.set(DECLINED, '1'); }
        if (!session.get(DECLINED)) {
          data = await post((routes.cartAdd || '/cart/add.js').replace(/\.js$/, ''), { items: [{ id: variant, quantity: 1, properties: { _gift: 'free' } }] });
          session.set(ADDED, '1');
        }
      } else {
        session.set(ADDED, '1');
        session.set(DECLINED, null);
        const qty = gifts.reduce((s, it) => s + it.quantity, 0);
        if (qty > 1) {
          const updates = {};
          gifts.forEach((it, i) => { updates[it.key] = i === 0 ? 1 : 0; });
          data = await post(`${cartUrl}/update`, { updates });
        }
      }

      if (data) { refresh(data); return; }
      paint(bar, eligible, threshold, unlocked, unlocked && !gifts.length && !!session.get(DECLINED));
    } catch (err) {
      /* Leave the cart as it is; Shopify's discount still decides the price at checkout. */
    } finally {
      busy = false;
      if (again) { again = false; sync(); }
    }
  }

  doc.addEventListener('click', (e) => {
    if (!e.target.closest('[data-gift-add]')) return;
    e.preventDefault();
    session.set(DECLINED, null);
    session.set(ADDED, null);
    sync();
  });

  // The drawer is re-rendered after every cart change: check the gift each time a fresh cart arrives.
  const drawer = doc.getElementById('CartDrawer');
  if (drawer) {
    new MutationObserver((list) => {
      if (list.some((m) => Array.from(m.addedNodes).some((n) => n.id === 'CartDrawerInner'))) sync();
    }).observe(drawer, { childList: true, subtree: true });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', sync); else sync();
})();
