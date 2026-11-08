/* Theme core: motion, header, drawers, cart, product, collection, 3D scene loader. */
(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const T = window.theme || {};
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const motion = () => root.classList.contains('reveal');
  const strings = T.strings || {};

  /* ---------------------------------------------------------------- Money */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') cents = cents.replace('.', '');
    cents = Number(cents) || 0;
    const fmt = format || T.moneyFormat || '${{amount}}';
    const rx = /\{\{\s*(\w+)\s*\}\}/;
    const delimit = (n, precision, thousands = ',', decimal = '.') => {
      const fixed = (n / 100).toFixed(precision);
      const parts = fixed.split('.');
      return parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousands) + (parts[1] ? decimal + parts[1] : '');
    };
    const match = fmt.match(rx);
    const key = match ? match[1] : 'amount';
    const map = {
      amount: () => delimit(cents, 2),
      amount_no_decimals: () => delimit(cents, 0),
      amount_with_comma_separator: () => delimit(cents, 2, '.', ','),
      amount_no_decimals_with_comma_separator: () => delimit(cents, 0, '.', ','),
      amount_with_apostrophe_separator: () => delimit(cents, 2, "'", '.'),
      amount_no_decimals_with_space_separator: () => delimit(cents, 0, ' ', ''),
      amount_with_space_separator: () => delimit(cents, 2, ' ', ','),
      amount_with_period_and_space_separator: () => delimit(cents, 2, ' ', '.')
    };
    return fmt.replace(rx, (map[key] || map.amount)());
  }

  /* ---------------------------------------------------------------- Toast */
  let toastTimer;
  function toast(msg) {
    const el = $('[data-toast]');
    if (!el || !msg) return;
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3200);
  }

  /* ---------------------------------------------------------------- Reveal, split text, counters */
  function splitText(el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    let i = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const frag = doc.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(doc.createTextNode(part)); return; }
            const outer = doc.createElement('span');
            outer.className = 'split-word';
            const inner = doc.createElement('span');
            inner.style.setProperty('--i', i++);
            inner.textContent = part;
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
  }

  const fmtNum = (n, d) => n.toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const raw = el.dataset.countTo || '0';
    const target = parseFloat(raw);
    const dec = (raw.split('.')[1] || '').length;
    if (isNaN(target)) return;
    if (!motion()) { el.textContent = fmtNum(target, dec); return; }
    const t0 = performance.now();
    const dur = 1700;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmtNum(target * e, dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  let io;
  function finish(el) {
    el.classList.add('is-in');
    if (el.hasAttribute('data-count-to')) countUp(el);
  }
  function observe(scope = doc) {
    const targets = $$('[data-reveal]:not(.is-in), [data-split]:not(.is-in), [data-count-to], [data-observe]:not(.is-in)', scope);
    if (!motion() || !('IntersectionObserver' in window)) { targets.forEach(finish); return; }
    $$('[data-split]', scope).forEach(splitText);
    $$('[data-count-to]', scope).forEach((el) => {
      if (!el.dataset.counted) el.textContent = fmtNum(0, ((el.dataset.countTo || '').split('.')[1] || '').length);
    });
    io = io || new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { finish(entry.target); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    targets.forEach((t) => io.observe(t));
  }

  /* ---------------------------------------------------------------- Magnetic, tilt, parallax */
  function initMagnetic(scope = doc) {
    if (!fine || reduce || !body.classList.contains('magnetic-on')) return;
    $$('.btn--magnetic', scope).forEach((b) => {
      if (b.dataset.mag) return;
      b.dataset.mag = '1';
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1) + 'px');
      });
      b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
  }

  function initTilt(scope = doc) {
    if (!fine || reduce) return;
    $$('[data-tilt]', scope).forEach((el) => {
      if (el.dataset.tiltOn) return;
      el.dataset.tiltOn = '1';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
        el.style.setProperty('--rx', (-y * 8).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
    });
  }

  const parallaxEls = new Set();
  function initParallax(scope = doc) {
    if (!motion()) return;
    $$('[data-parallax]', scope).forEach((el) => parallaxEls.add(el));
  }
  function updateParallax() {
    const vh = window.innerHeight;
    parallaxEls.forEach((el) => {
      if (!el.isConnected) { parallaxEls.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty('--py', (p * -(parseFloat(el.dataset.parallax) || 40)).toFixed(1) + 'px');
    });
  }

  /* ---------------------------------------------------------------- Scroll motion */
  const clamp01 = (n) => Math.min(1, Math.max(0, n));

  // Pinned story: progress through a tall section drives which point is active.
  const stories = new Set();
  function initStories(scope = doc) {
    if (!motion()) return;
    $$('[data-story]', scope).forEach((el) => {
      el._items = $$('[data-story-item]', el);
      el._panels = $$('[data-story-panel]', el);
      el._idx = -1;
      stories.add(el);
    });
  }
  function updateStories(vh) {
    stories.forEach((el) => {
      if (!el.isConnected) { stories.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return;
      const p = clamp01(-r.top / Math.max(1, r.height - vh));
      el.style.setProperty('--p', p.toFixed(4));
      const n = el._items.length;
      const idx = Math.min(n - 1, Math.floor(p * n));
      if (idx === el._idx) return;
      el._idx = idx;
      el._items.forEach((it, i) => it.classList.toggle('is-active', i === idx));
      el._panels.forEach((pn, i) => { pn.classList.toggle('is-active', i === idx); pn.classList.toggle('is-past', i < idx); });
    });
  }

  // Scrubbed text: words light up one by one while the heading crosses the screen.
  const scrubs = new Set();
  function initScrub(scope = doc) {
    if (!motion()) return;
    $$('[data-scrub]', scope).forEach((el) => {
      if (!el._words) {
        const walk = (node) => {
          Array.from(node.childNodes).forEach((child) => {
            if (child.nodeType === 3) {
              const frag = doc.createDocumentFragment();
              child.textContent.split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) { frag.appendChild(doc.createTextNode(part)); return; }
                const w = doc.createElement('span');
                w.className = 'scrub-word';
                w.textContent = part;
                frag.appendChild(w);
              });
              child.replaceWith(frag);
            } else if (child.nodeType === 1 && child.tagName !== 'BR') walk(child);
          });
        };
        walk(el);
        el._words = $$('.scrub-word', el);
        el._lit = -1;
      }
      scrubs.add(el);
    });
  }
  function updateScrubs(vh) {
    scrubs.forEach((el) => {
      if (!el.isConnected) { scrubs.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.4));
      const lit = Math.round(p * el._words.length);
      if (lit === el._lit) return;
      el._lit = lit;
      el._words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    });
  }

  // Hero exit and the thin page progress bar.
  function updateScrollFx() {
    if (!motion()) return;
    const vh = window.innerHeight;
    const hero = $('[data-hero]');
    if (hero) {
      const r = hero.getBoundingClientRect();
      if (r.bottom > 0) hero.style.setProperty('--hp', clamp01(-r.top / Math.max(1, r.height)).toFixed(3));
    }
    const max = doc.documentElement.scrollHeight - vh;
    if (max > 0) root.style.setProperty('--sp', clamp01(window.scrollY / max).toFixed(4));
    updateStories(vh);
    updateScrubs(vh);
  }

  /* ---------------------------------------------------------------- Header */
  const header = $('[data-header]');
  let lastY = window.scrollY;
  function setHeaderVars() {
    if (header) root.style.setProperty('--header-h', header.offsetHeight + 'px');
  }
  function initHeaderOverlay() {
    if (!header) return;
    const firstHero = $('main > .shopify-section:first-child [data-hero]');
    const on = header.hasAttribute('data-overlay') && !!firstHero;
    body.classList.toggle('header-overlay', on);
    if (on) header.style.setProperty('--overlay-fg', getComputedStyle(firstHero).getPropertyValue('--hero-fg').trim());
  }
  function onHeaderScroll() {
    if (!header) return;
    const y = window.scrollY;
    const modal = $('[data-search-modal]', header);
    const menuOpen = !!$('.drawer.is-open') || (modal && !modal.hidden);
    header.classList.toggle('is-solid', y > 12 || menuOpen);
    const hide = header.dataset.hide !== 'false' && y > lastY && y > 320 && !header.contains(doc.activeElement);
    header.classList.toggle('is-hidden', hide);
    lastY = y;
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; onHeaderScroll(); updateParallax(); updateScrollFx(); });
  }, { passive: true });
  window.addEventListener('resize', () => { setHeaderVars(); updateScrollFx(); });

  /* ---------------------------------------------------------------- Search modal */
  function openSearch() {
    const modal = $('[data-search-modal]');
    if (!modal) return;
    modal.hidden = false;
    header && header.classList.add('is-solid');
    const input = $('input[type="search"]', modal);
    input && setTimeout(() => input.focus(), 30);
  }
  function closeSearch() {
    const modal = $('[data-search-modal]');
    if (modal && !modal.hidden) { modal.hidden = true; onHeaderScroll(); }
  }

  /* ---------------------------------------------------------------- Drawers */
  let lastFocus = null;
  function focusables(el) {
    return $$('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])', el)
      .filter((n) => n.offsetParent !== null);
  }
  function openDrawer(id) {
    const d = doc.getElementById(id);
    if (!d) return;
    lastFocus = doc.activeElement;
    d.classList.add('is-open');
    d.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
    $$(`[aria-controls="${id}"]`).forEach((b) => b.setAttribute('aria-expanded', 'true'));
    const f = focusables($('.drawer__panel', d) || d)[0];
    f && setTimeout(() => f.focus({ preventScroll: true }), 60);
  }
  function closeDrawer(d) {
    if (!d) return;
    d.classList.remove('is-open');
    d.setAttribute('aria-hidden', 'true');
    if (!$('.drawer.is-open')) body.classList.remove('no-scroll');
    $$(`[aria-controls="${d.id}"]`).forEach((b) => b.setAttribute('aria-expanded', 'false'));
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  doc.addEventListener('click', (e) => {
    const t = e.target;
    const opener = t.closest('[data-drawer-open]');
    if (opener) { e.preventDefault(); openDrawer(opener.dataset.drawerOpen); return; }
    const closer = t.closest('[data-drawer-close]');
    if (closer) { e.preventDefault(); closeDrawer(closer.closest('[data-drawer]')); return; }
    const cartBtn = t.closest('[data-cart-open]');
    if (cartBtn && body.dataset.cartType === 'drawer' && doc.getElementById('CartDrawer')) { e.preventDefault(); openDrawer('CartDrawer'); return; }
    if (t.closest('[data-search-open]')) { e.preventDefault(); openSearch(); return; }
    if (t.closest('[data-search-close]')) { e.preventDefault(); closeSearch(); return; }
    const qtyBtn = t.closest('[data-qty-btn]');
    if (qtyBtn) {
      const wrap = qtyBtn.closest('[data-qty]');
      const input = wrap && $('input', wrap);
      if (!input) return;
      const min = parseInt(input.min || '0', 10);
      const next = Math.max(min, (parseInt(input.value, 10) || 0) + parseInt(qtyBtn.dataset.qtyBtn, 10));
      input.value = next;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }
    const lineRemove = t.closest('[data-line-remove]');
    if (lineRemove) { e.preventDefault(); Cart.change(parseInt(lineRemove.dataset.lineRemove, 10), 0); }
  });

  doc.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeDrawer($('.drawer.is-open')); closeSearch(); return; }
    if (e.key !== 'Tab') return;
    const d = $('.drawer.is-open');
    if (!d) return;
    const items = focusables($('.drawer__panel', d) || d);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ---------------------------------------------------------------- Cart */
  const Cart = {
    section: 'cart-drawer',
    enabled() { return body.dataset.cartType === 'drawer' && !!doc.getElementById('CartDrawer'); },
    render(html) {
      if (!html) return;
      const fresh = new DOMParser().parseFromString(html, 'text/html').getElementById('CartDrawerInner');
      const current = doc.getElementById('CartDrawerInner');
      if (fresh && current) { current.replaceWith(fresh); observe(fresh); }
      const count = fresh ? fresh.dataset.itemCount : null;
      if (count != null) {
        $$('[data-cart-count]').forEach((c) => {
          c.textContent = count;
          c.classList.toggle('is-empty', count === '0');
          c.classList.remove('bump');
          void c.offsetWidth;
          c.classList.add('bump');
        });
      }
    },
    async add(form) {
      const fd = new FormData(form);
      fd.append('sections', Cart.section);
      fd.append('sections_url', window.location.pathname);
      const res = await fetch(T.routes.cartAdd, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/javascript' },
        body: fd
      });
      const data = await res.json();
      if (!res.ok || data.status) throw new Error(data.description || data.message || strings.cartError);
      Cart.render(data.sections && data.sections[Cart.section]);
      openDrawer('CartDrawer');
    },
    async change(line, quantity) {
      const inner = doc.getElementById('CartDrawerInner');
      inner && inner.classList.add('is-busy');
      try {
        const res = await fetch(T.routes.cartChange, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ line, quantity, sections: [Cart.section], sections_url: window.location.pathname })
        });
        const data = await res.json();
        if (!res.ok || data.status) throw new Error(data.description || data.message || strings.cartError);
        Cart.render(data.sections && data.sections[Cart.section]);
      } catch (err) {
        toast(err.message || strings.cartError);
        inner && inner.classList.remove('is-busy');
      }
    }
  };

  doc.addEventListener('submit', async (e) => {
    const form = e.target.closest('form[data-product-form]');
    if (!form || !Cart.enabled()) return;
    e.preventDefault();
    const btn = e.submitter && e.submitter.type === 'submit' ? e.submitter : $('[type="submit"]', form);
    const err = $('[data-form-error]', form);
    if (btn) { btn.classList.add('is-loading'); btn.setAttribute('aria-busy', 'true'); }
    if (err) err.hidden = true;
    try {
      await Cart.add(form);
    } catch (ex) {
      if (err) { err.textContent = ex.message; err.hidden = false; } else toast(ex.message);
    } finally {
      if (btn) { btn.classList.remove('is-loading'); btn.removeAttribute('aria-busy'); }
    }
  });

  let cartPageTimer;
  doc.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('[data-line-input]')) { Cart.change(parseInt(t.dataset.lineInput, 10), parseInt(t.value, 10) || 0); return; }
    if (t.matches('[data-cart-page-input]')) {
      clearTimeout(cartPageTimer);
      cartPageTimer = setTimeout(() => t.form && t.form.submit(), 450);
      return;
    }
    if (t.matches('[data-autosubmit]')) { t.form && t.form.submit(); return; }
    if (t.matches('[data-sort]')) { t.form && t.form.submit(); }
  });

  /* ---------------------------------------------------------------- Product */
  function priceMarkup(v, withSave) {
    const sale = v.compare_at_price && v.compare_at_price > v.price;
    let html = `<div class="price${sale ? ' price--sale' : ''}" data-price><span class="price__current">${formatMoney(v.price)}</span>`;
    if (sale) {
      html += `<s class="price__compare">${formatMoney(v.compare_at_price)}</s>`;
      if (withSave && strings.save) html += `<span class="price__save">${strings.save.replace('[amount]', formatMoney(v.compare_at_price - v.price))}</span>`;
    }
    return html + '</div>';
  }

  function initGallery(g) {
    if (!g || g.dataset.ready) return null;
    g.dataset.ready = '1';
    const track = $('[data-gallery-track]', g);
    const thumbs = $$('[data-thumb]', g);
    if (!track) return null;
    const count = track.children.length;
    const go = (i) => {
      const idx = (i + count) % count;
      track.scrollTo({ left: idx * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
    };
    const current = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    let raf;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = current();
        thumbs.forEach((t, n) => t.classList.toggle('is-active', n === i));
      });
    }, { passive: true });
    thumbs.forEach((t) => t.addEventListener('click', () => go(parseInt(t.dataset.thumb, 10))));
    const prev = $('[data-gallery-prev]', g);
    const next = $('[data-gallery-next]', g);
    prev && prev.addEventListener('click', () => go(current() - 1));
    next && next.addEventListener('click', () => go(current() + 1));
    return {
      toMedia(id) {
        const slides = Array.from(track.children);
        const idx = slides.findIndex((s) => s.dataset.mediaId === String(id));
        if (idx > -1) go(idx);
      }
    };
  }

  function initProducts(scope = doc) {
    $$('[data-product]', scope).forEach((p) => {
      if (p.dataset.ready) return;
      p.dataset.ready = '1';
      const gallery = initGallery($('[data-gallery]', p));
      const jsonEl = $('[data-product-json]', p);
      if (!jsonEl) return;
      const product = JSON.parse(jsonEl.textContent);
      const stockEl = $('[data-variant-stock]', p);
      const stock = stockEl ? JSON.parse(stockEl.textContent) : {};
      const picker = $('[data-variant-picker]', p);
      const idInput = $('[data-variant-id]', p);
      const addBtn = $('[data-add-button]', p);
      const sticky = $('[data-sticky-atc]', p);
      const stickyBtn = sticky && $('[data-sticky-add]', sticky);

      const setButton = (btn, v) => {
        if (!btn) return;
        const label = $('[data-add-text]', btn) || btn;
        btn.disabled = !v || !v.available;
        label.textContent = !v ? strings.unavailable : v.available ? strings.addToCart : strings.soldOut;
      };

      const renderStock = (v) => {
        const el = $('[data-stock]', p);
        if (!el) return;
        const textEl = $('[data-stock-text]', el);
        const info = v ? stock[v.id] : null;
        const threshold = parseInt(el.dataset.threshold || '0', 10);
        el.classList.remove('stock--low', 'stock--out');
        if (!v || !v.available) {
          el.classList.add('stock--out');
          textEl.textContent = el.dataset.out;
        } else if (info && info.m === 'shopify' && info.q > 0 && info.q <= threshold) {
          el.classList.add('stock--low');
          textEl.textContent = el.dataset.low.replace('[count]', info.q);
        } else {
          textEl.textContent = el.dataset.in;
        }
      };

      const setVariant = (v) => {
        setButton(addBtn, v);
        setButton(stickyBtn, v);
        renderStock(v);
        if (!v) return;
        if (idInput) idInput.value = v.id;
        $$('[data-price-wrap]', p).forEach((el) => { el.innerHTML = priceMarkup(v, true); });
        $$('[data-sticky-price]', p).forEach((el) => { el.innerHTML = priceMarkup(v, false); });
        if (v.featured_media && gallery) gallery.toMedia(v.featured_media.id);
        if (p.dataset.updateUrl !== 'false') {
          const url = new URL(window.location.href);
          url.searchParams.set('variant', v.id);
          window.history.replaceState({}, '', url.toString());
        }
        p.dispatchEvent(new CustomEvent('variant:change', { bubbles: true, detail: { variant: v } }));
      };

      if (picker) {
        picker.addEventListener('change', () => {
          const fieldsets = $$('fieldset', picker);
          const selected = fieldsets.map((fs) => { const c = $('input:checked', fs); return c ? c.value : null; });
          $$('[data-option-value]', picker).forEach((s, i) => { s.textContent = selected[i] || ''; });
          const v = product.variants.find((variant) => variant.options.every((o, i) => o === selected[i]));
          setVariant(v || null);
        });
      }

      if (sticky && addBtn && 'IntersectionObserver' in window) {
        const stickyIo = new IntersectionObserver(([entry]) => {
          const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          sticky.classList.toggle('is-visible', show);
          sticky.inert = !show;
          sticky.setAttribute('aria-hidden', String(!show));
        });
        stickyIo.observe(addBtn);
        stickyBtn && stickyBtn.addEventListener('click', () => {
          const form = addBtn.form;
          if (!form) return;
          if (form.requestSubmit) form.requestSubmit(addBtn); else addBtn.click();
        });
      }
    });
  }

  /* ---------------------------------------------------------------- Recommendations */
  function initRecommendations(scope = doc) {
    $$('[data-recommendations]', scope).forEach((el) => {
      if (el.dataset.ready || !el.dataset.url) return;
      el.dataset.ready = '1';
      const load = async () => {
        try {
          const res = await fetch(el.dataset.url);
          const html = await res.text();
          const fresh = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-recommendations]');
          if (fresh && fresh.innerHTML.trim()) {
            el.innerHTML = fresh.innerHTML;
            observe(el);
            initMagnetic(el);
          }
        } catch (err) { /* no-op */ }
      };
      if ('IntersectionObserver' in window) {
        const rio = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { rio.disconnect(); load(); } }, { rootMargin: '400px' });
        rio.observe(el);
      } else load();
    });
  }

  /* ---------------------------------------------------------------- Announcement rotator */
  const rotators = new WeakMap();
  function initRotators(scope = doc) {
    $$('[data-rotator]', scope).forEach((r) => {
      if (rotators.has(r)) return;
      const items = $$('.announcement__msg', r);
      if (items.length < 2) return;
      let i = 0;
      const id = setInterval(() => {
        if (!r.isConnected) { clearInterval(id); return; }
        items[i].classList.remove('is-active');
        i = (i + 1) % items.length;
        items[i].classList.add('is-active');
      }, parseInt(r.dataset.interval, 10) || 5000);
      rotators.set(r, id);
    });
  }

  /* ---------------------------------------------------------------- Facets */
  doc.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-facets-form]');
    if (!form) return;
    $$('input', form).forEach((i) => { if ((i.type === 'number' || i.type === 'text') && i.value === '') i.disabled = true; });
  });

  /* ---------------------------------------------------------------- 3D hero scenes (lazy) */
  const scenes = new Map();
  let scenePromise = null;
  function loadSceneScript() {
    if (window.ThemeScene) return Promise.resolve();
    if (!scenePromise) {
      scenePromise = new Promise((resolve, reject) => {
        const s = doc.createElement('script');
        s.src = T.sceneUrl;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        doc.head.appendChild(s);
      });
    }
    return scenePromise;
  }
  function initScenes(scope = doc) {
    const canvases = $$('[data-hero-scene]', scope).filter((c) => !scenes.has(c));
    if (!canvases.length || !T.sceneUrl) return;
    const conn = navigator.connection;
    if (conn && conn.saveData) return;
    const mountAll = () => {
      canvases.forEach((c) => {
        if (scenes.has(c) || !window.ThemeScene || !c.isConnected) return;
        try {
          const inst = window.ThemeScene.mount(c, { reduceMotion: reduce, intensity: c.dataset.intensity || 'normal' });
          if (inst) scenes.set(c, inst);
        } catch (err) { console.warn('[theme] 3D scene failed', err); }
      });
    };
    const start = () => loadSceneScript().then(mountAll).catch(() => {});
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 250));
    if (doc.readyState === 'complete') idle(start, { timeout: 1500 });
    else window.addEventListener('load', () => idle(start, { timeout: 1500 }), { once: true });
  }
  function destroyScenes(scope) {
    $$('[data-hero-scene]', scope).forEach((c) => {
      const s = scenes.get(c);
      if (s && s.destroy) s.destroy();
      scenes.delete(c);
    });
  }

  /* ---------------------------------------------------------------- Init */
  function initAll(scope = doc) {
    observe(scope);
    initMagnetic(scope);
    initTilt(scope);
    initParallax(scope);
    initStories(scope);
    initScrub(scope);
    initProducts(scope);
    initRecommendations(scope);
    initRotators(scope);
    initScenes(scope);
  }

  setHeaderVars();
  initHeaderOverlay();
  onHeaderScroll();
  initAll();
  updateParallax();
  updateScrollFx();
  window.themeReady = true;
  window.ThemeUtils = { formatMoney, openDrawer, closeDrawer, toast, Cart };

  doc.addEventListener('shopify:section:load', (e) => {
    initAll(e.target);
    setHeaderVars();
    initHeaderOverlay();
    updateScrollFx();
  });
  doc.addEventListener('shopify:section:unload', (e) => destroyScenes(e.target));
  doc.addEventListener('shopify:block:select', (e) => {
    $$('[data-reveal], [data-split]', e.target).forEach(finish);
    finish(e.target);
  });
})();
