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

  // Reveals are checked against the screen on every scroll frame rather than with an IntersectionObserver,
  // so an element that starts clipped or masked away is still found.
  const pending = new Set();
  function finish(el) {
    el.classList.add('is-in');
    if (el.hasAttribute('data-count-to')) countUp(el);
  }
  function observe(scope = doc) {
    const targets = $$('[data-reveal]:not(.is-in), [data-split]:not(.is-in), [data-count-to], [data-observe]:not(.is-in)', scope);
    if (!motion()) { targets.forEach(finish); return; }
    $$('[data-split]', scope).forEach(splitText);
    $$('[data-count-to]', scope).forEach((el) => {
      if (!el.dataset.counted) el.textContent = fmtNum(0, ((el.dataset.countTo || '').split('.')[1] || '').length);
    });
    targets.forEach((t) => { if (!t.dataset.counted) pending.add(t); });
    updateReveals(window.innerHeight);
  }
  function updateReveals(vh) {
    if (!pending.size) return;
    pending.forEach((el) => {
      if (!el.isConnected) { pending.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;
      if (r.top < vh * 0.93 && r.bottom > -vh * 0.5) { finish(el); pending.delete(el); }
      else if (r.bottom <= -vh * 0.5) { finish(el); pending.delete(el); }
    });
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

  // Values are measured on scroll, then eased a little every frame so pinned sections glide instead of stepping.
  let needsFrame = false;
  let looping = false;
  const ease = (el, key, target, k = 0.18) => {
    const cur = el[key] == null ? target : el[key];
    const next = Math.abs(target - cur) < 0.0006 ? target : cur + (target - cur) * k;
    el[key] = next;
    if (next !== target) needsFrame = true;
    return next;
  };

  // Pinned sections: the section is taller than the screen and its stage sticks while --p runs 0 to 1.
  // Children marked data-step / data-step-panel switch on in turn, and a rail track slides sideways.
  const pins = new Set();
  function measureRail(el) {
    const track = $('[data-rail-track]', el);
    if (!track) return;
    const max = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
    el._railMax = max;
    el.style.setProperty('--rail-dist', max + 'px');
  }
  function initPins(scope = doc) {
    if (!motion()) return;
    $$('[data-pin]', scope).forEach((el) => {
      el._steps = $$('[data-step]', el);
      el._panels = $$('[data-step-panel]', el);
      el._n = el._steps.length;
      el._idx = -1;
      el._stage = $('[data-pin-stage]', el);
      if (el.hasAttribute('data-rail')) measureRail(el);
      pins.add(el);
    });
  }
  function updatePins(vh) {
    pins.forEach((el) => {
      if (!el.isConnected) { pins.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;
      const stageH = el._stage ? el._stage.offsetHeight : vh;
      const dist = Math.max(1, r.height - stageH);
      const p = ease(el, '_p', clamp01(-r.top / dist));
      el.style.setProperty('--p', p.toFixed(4));
      if (el.hasAttribute('data-hero')) {
        el.style.setProperty('--hp', clamp01((-r.top - dist) / Math.max(1, stageH)).toFixed(3));
        const act = p > 0.24 ? '2' : '1';
        if (el.dataset.act !== act) el.dataset.act = act;
      }
      if (el._railMax != null) el.style.setProperty('--rail-x', (-p * el._railMax).toFixed(1) + 'px');
      const n = el._n;
      if (!n) return;
      const idx = Math.min(n - 1, Math.floor(p * n));
      if (idx === el._idx) return;
      el._idx = idx;
      el.dataset.active = idx;
      el._steps.forEach((it, i) => { it.classList.toggle('is-active', i === idx); it.classList.toggle('is-past', i < idx); });
      el._panels.forEach((pn, i) => { pn.classList.toggle('is-active', i === idx); pn.classList.toggle('is-past', i < idx); });
    });
  }

  // Stacking cards: each card sticks, and shrinks back a touch as the next one slides over it.
  const stacks = new Set();
  function initStacks(scope = doc) {
    if (!motion()) return;
    $$('[data-stack]', scope).forEach((el) => { el._cards = $$('[data-stack-card]', el); stacks.add(el); });
  }
  function updateStacks(vh) {
    stacks.forEach((el) => {
      if (!el.isConnected) { stacks.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const rects = el._cards.map((c) => c.getBoundingClientRect());
      el._cards.forEach((c, i) => {
        const next = rects[i + 1];
        const cover = next ? clamp01(1 - (next.top - rects[i].top) / Math.max(1, rects[i].height)) : 0;
        c.style.setProperty('--cover', cover.toFixed(3));
      });
    });
  }

  // View progress: --v runs 0 to 1 while an element crosses the screen (drifting type, image scale, meters).
  const views = new Set();
  function initViews(scope = doc) {
    if (!motion()) return;
    $$('[data-view]', scope).forEach((el) => views.add(el));
  }
  function updateViews(vh) {
    views.forEach((el) => {
      if (!el.isConnected) { views.delete(el); return; }
      const r = el.getBoundingClientRect();
      if (r.bottom < -120 || r.top > vh + 120) return;
      el.style.setProperty('--v', ease(el, '_v', clamp01((vh - r.top) / (vh + r.height))).toFixed(4));
    });
  }

  // Scrubbed text: words light up one by one, either across the screen or across a pinned section.
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
        el._pin = el.closest('[data-pin]');
      }
      scrubs.add(el);
    });
  }
  function updateScrubs(vh) {
    scrubs.forEach((el) => {
      if (!el.isConnected) { scrubs.delete(el); return; }
      let p;
      if (el._pin) {
        p = clamp01(((el._pin._p || 0) - 0.04) / 0.82);
      } else {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        p = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.4));
      }
      const lit = Math.round(p * el._words.length);
      if (lit === el._lit) return;
      el._lit = lit;
      el._words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    });
  }

  // Scroll speed: tickers run faster and lean while the page is moving.
  let lastSY = window.scrollY;
  let vel = 0;
  const marquees = new Set();
  function initMarquees(scope = doc) {
    if (!motion()) return;
    $$('[data-marquee]', scope).forEach((m) => marquees.add(m));
  }
  function updateVelocity() {
    const y = window.scrollY;
    const d = y - lastSY;
    lastSY = y;
    vel += (Math.max(-1, Math.min(1, d / 48)) - vel) * 0.16;
    if (Math.abs(vel) < 0.002) vel = 0; else needsFrame = true;
    root.style.setProperty('--vel', vel.toFixed(3));
    marquees.forEach((m) => {
      if (!m.isConnected) { marquees.delete(m); return; }
      if (!m._anim && m.getAnimations) m._anim = m.getAnimations()[0];
      if (m._anim) m._anim.playbackRate = 1 + Math.abs(vel) * 6;
    });
  }

  // Hero exit (when it is not pinned) and the thin page progress bar.
  function updateScrollFx() {
    if (!motion()) return;
    const vh = window.innerHeight;
    const hero = $('[data-hero]:not([data-pin])');
    if (hero) {
      const r = hero.getBoundingClientRect();
      if (r.bottom > 0) hero.style.setProperty('--hp', clamp01(-r.top / Math.max(1, r.height)).toFixed(3));
    }
    const max = doc.documentElement.scrollHeight - vh;
    if (max > 0) root.style.setProperty('--sp', clamp01(window.scrollY / max).toFixed(4));
    updateReveals(vh);
    updatePins(vh);
    updateStacks(vh);
    updateViews(vh);
    updateScrubs(vh);
    updateVelocity();
  }
  function frame() {
    needsFrame = false;
    onHeaderScroll();
    updateParallax();
    updateScrollFx();
    if (needsFrame) requestAnimationFrame(frame); else looping = false;
  }
  function kick() {
    if (looping) return;
    looping = true;
    requestAnimationFrame(frame);
  }

  // Pointer spotlight for cards that ask for it.
  function initSpots(scope = doc) {
    if (!fine || reduce) return;
    $$('[data-spot]', scope).forEach((el) => {
      if (el.dataset.spotOn) return;
      el.dataset.spotOn = '1';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--sx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        el.style.setProperty('--sy', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  }

  /* ---------------------------------------------------------------- Header */
  const header = $('[data-header]');
  let lastY = window.scrollY;
  function setHeaderVars() {
    if (header) root.style.setProperty('--header-h', header.offsetHeight + 'px');
    const bar = $('.announcement');
    root.style.setProperty('--announce-h', (bar ? bar.offsetHeight : 0) + 'px');
  }
  let heroUnder = null;
  function initHeaderOverlay() {
    if (!header) return;
    const firstHero = $('main > .shopify-section:first-child [data-hero]');
    const on = header.hasAttribute('data-overlay') && !!firstHero;
    heroUnder = on && firstHero.hasAttribute('data-pin') ? firstHero : null;
    body.classList.toggle('header-overlay', on);
    if (on) header.style.setProperty('--overlay-fg', getComputedStyle(firstHero).getPropertyValue('--hero-fg').trim());
  }
  function onHeaderScroll() {
    if (!header) return;
    const y = window.scrollY;
    const modal = $('[data-search-modal]', header);
    const menuOpen = !!$('.drawer.is-open') || (modal && !modal.hidden);
    // Over a hero that is held on screen, the header stays clear until the hero has scrolled away.
    const overHero = heroUnder && heroUnder.isConnected && heroUnder.getBoundingClientRect().bottom > header.offsetHeight;
    header.classList.toggle('is-solid', (y > 12 && !overHero) || menuOpen);
    const hide = header.dataset.hide !== 'false' && y > lastY && y > 320 && !header.contains(doc.activeElement);
    header.classList.toggle('is-hidden', hide);
    lastY = y;
  }

  /* ---------------------------------------------------------------- Mobile tab bar */
  const mtabs = $('[data-mtabs]');
  const setTabsH = () => {
    const h = mtabs && getComputedStyle(mtabs).display !== 'none' ? mtabs.offsetHeight : 0;
    doc.documentElement.style.setProperty('--mtabs-h', h + 'px');
  };
  setTabsH();
  window.addEventListener('resize', setTabsH);
  doc.addEventListener('shopify:section:load', setTabsH);

  window.addEventListener('scroll', kick, { passive: true });
  let resizeTimer;
  window.addEventListener('resize', () => {
    setHeaderVars();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { pins.forEach((el) => { if (el.hasAttribute('data-rail')) measureRail(el); }); kick(); }, 120);
    kick();
  });

  /* ---------------------------------------------------------------- Search modal */
  function openSearch() {
    const modal = $('[data-search-modal]');
    if (!modal) return;
    modal.hidden = false;
    header && header.classList.remove('is-hidden');
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
    // A drawer inside the sticky header must sit above the announcement bar while it is open.
    const sec = d.closest('.shopify-section');
    if (sec) { clearTimeout(sec._drawerT); sec.classList.add('has-open-drawer'); }
    body.classList.add('no-scroll');
    $$(`[aria-controls="${id}"]`).forEach((b) => b.setAttribute('aria-expanded', 'true'));
    const f = focusables($('.drawer__panel', d) || d)[0];
    f && setTimeout(() => f.focus({ preventScroll: true }), 60);
  }
  function closeDrawer(d) {
    if (!d) return;
    d.classList.remove('is-open', 'is-dragging');
    d.style.removeProperty('--sheet-drag');
    d.setAttribute('aria-hidden', 'true');
    const sec = d.closest('.shopify-section');
    if (sec) sec._drawerT = setTimeout(() => { if (!sec.querySelector('.drawer.is-open')) sec.classList.remove('has-open-drawer'); }, 600);
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

  /* ---------------------------------------------------------------- Cart sheet: drag down to close on phones */
  (() => {
    const d = doc.getElementById('CartDrawer');
    if (!d || !d.classList.contains('drawer--compact')) return;
    const phone = window.matchMedia('(max-width: 749px)');
    let startY = null;
    let dy = 0;
    d.addEventListener('touchstart', (e) => {
      if (!phone.matches || !e.target.closest('[data-sheet-grab], .drawer__head')) return;
      startY = e.touches[0].clientY;
      dy = 0;
      d.classList.add('is-dragging');
    }, { passive: true });
    d.addEventListener('touchmove', (e) => {
      if (startY == null) return;
      dy = Math.max(0, e.touches[0].clientY - startY);
      d.style.setProperty('--sheet-drag', `${dy}px`);
    }, { passive: true });
    const end = () => {
      if (startY == null) return;
      startY = null;
      d.classList.remove('is-dragging');
      if (dy > 90) closeDrawer(d);
      else d.style.removeProperty('--sheet-drag');
    };
    d.addEventListener('touchend', end);
    d.addEventListener('touchcancel', end);
  })();

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
      Cart.added(data.product_title || (data.items && data.items[0] && data.items[0].product_title));
      openDrawer('CartDrawer');
    },
    // A short confirmation at the top of the cart so shoppers know the add worked.
    added(title) {
      const bar = $('[data-cart-added]');
      if (!bar) return;
      const text = $('[data-cart-added-text]', bar);
      if (text) text.textContent = title ? `${strings.cartAdded || 'Added'}: ${title}` : (strings.cartAdded || 'Added');
      bar.hidden = false;
      clearTimeout(Cart._addedT);
      Cart._addedT = setTimeout(() => { bar.hidden = true; }, 4200);
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
    if (!form) return;
    if (!Cart.enabled()) {
      if (form.dataset.discount && !form.dataset.applied) {
        e.preventDefault();
        form.dataset.applied = '1';
        await applyDiscount(form.dataset.discount);
        form.submit();
      }
      return;
    }
    e.preventDefault();
    const btn = e.submitter && e.submitter.type === 'submit' ? e.submitter : $('[type="submit"]', form);
    const err = $('[data-form-error]', form);
    if (btn) { btn.classList.add('is-loading'); btn.setAttribute('aria-busy', 'true'); }
    if (err) err.hidden = true;
    try {
      await applyDiscount(form.dataset.discount);
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

      const buy = $('[data-buy]', p);
      const preLabel = buy && buy.dataset.preorderLabel;
      // Pre-order: a tracked variant at 0 stock that Shopify still lets you sell.
      const isPre = (v) => {
        if (!preLabel || !v || !v.available) return false;
        const info = stock[v.id];
        return !!info && info.m === 'shopify' && info.q <= 0;
      };
      const setButton = (btn, v) => {
        if (!btn) return;
        const label = $('[data-add-text]', btn) || btn;
        btn.disabled = !v || !v.available;
        label.textContent = !v ? strings.unavailable : isPre(v) ? preLabel : v.available ? strings.addToCart : strings.soldOut;
      };
      const setExtras = (v) => {
        const pre = isPre(v);
        const preInput = $('[data-preorder-input]', p);
        if (preInput) preInput.disabled = !pre;
        const preNote = $('[data-preorder-note]', p);
        if (preNote) preNote.hidden = !pre;
        const notify = $('[data-notify]', p);
        if (notify && !$('[data-notify-posted]', notify)) {
          notify.hidden = !v || v.available;
        }
      };

      const renderStock = (v) => {
        const el = $('[data-stock]', p);
        if (!el) return;
        const textEl = $('[data-stock-text]', el);
        const info = v ? stock[v.id] : null;
        const threshold = parseInt(el.dataset.threshold || '0', 10);
        el.classList.remove('stock--low', 'stock--out');
        el.classList.remove('stock--pre');
        if (!v || !v.available) {
          el.classList.add('stock--out');
          textEl.textContent = el.dataset.out;
        } else if (isPre(v) && el.dataset.pre) {
          el.classList.add('stock--pre');
          textEl.textContent = el.dataset.pre;
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
        setExtras(v);
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

      initQuantityBreaks(p);
      initBundle(p);
      initSubscriptions(p, product);
      Recent.remember($('[data-recently-viewed]', p));
    });
  }

  /* ---------------------------------------------------------------- Subscribe and save (Shopify selling plans) */
  function initSubscriptions(p, product) {
    const box = $('[data-subs]', p);
    if (!box) return;
    const input = $('[data-subs-input]', box);
    const select = $('[data-subs-plan]', box);
    const radios = $$('input[type="radio"]', box);
    const onceEl = $('[data-subs-once]', box);
    const priceEl = $('[data-subs-price]', box);
    const fullEl = $('[data-subs-full]', box);
    const badge = $('[data-subs-badge]', box);
    let variant = product.variants.find((v) => String(v.id) === String(($('[data-variant-id]', p) || {}).value)) || product.variants[0];
    const update = () => {
      const sub = (radios.find((r) => r.checked) || {}).value !== 'once';
      box.dataset.mode = sub ? 'sub' : 'once';
      radios.forEach((r) => r.closest('.subs__opt').classList.toggle('is-selected', r.checked));
      const planId = select ? select.value : '';
      input.disabled = !sub;
      input.value = sub ? planId : '';
      if (!variant) return;
      const alloc = (variant.selling_plan_allocations || []).find((a) => String(a.selling_plan_id) === String(planId));
      const subPrice = alloc ? alloc.price : variant.price;
      if (onceEl) onceEl.textContent = formatMoney(variant.price);
      if (priceEl) priceEl.textContent = formatMoney(subPrice);
      const pct = variant.price > subPrice ? Math.round(((variant.price - subPrice) / variant.price) * 100) : 0;
      if (fullEl) { fullEl.textContent = formatMoney(variant.price); fullEl.hidden = !pct; }
      if (badge) { badge.textContent = (box.dataset.save || '').replace('[percent]', pct); badge.hidden = !pct; }
    };
    box.addEventListener('change', update);
    p.addEventListener('variant:change', (e) => { variant = e.detail.variant; update(); });
    update();
  }

  /* ---------------------------------------------------------------- Wishlist and recently viewed (saved on this device) */
  const listStore = {
    read(k) { try { return JSON.parse(window.localStorage.getItem(k) || '[]'); } catch (e) { return []; } },
    write(k, v) { try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
  };
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function cardHtml(item) {
    const wish = T.wishlist !== false
      ? `<button type="button" class="wish-btn" data-wish="${esc(item.handle)}" data-wish-item="${esc(JSON.stringify(item))}" aria-pressed="false" aria-label="${esc((strings.wishSave || 'Save [title]').replace('[title]', item.title))}"><svg class="icon icon--heart" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10.4A4.1 4.1 0 0 1 12 7.1a4.1 4.1 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/></svg></button>`
      : '';
    const img = item.img ? `<img class="card__img" src="${esc(item.img)}" alt="${esc(item.title)}" loading="lazy" width="700" height="875">` : '';
    const compare = item.compare ? `<s class="price__compare">${esc(item.compare)}</s>` : '';
    const quick = item.available && item.single && item.variant
      ? `<form method="post" action="${esc((T.routes && T.routes.cartAdd || '/cart/add').replace(/\.js$/, ''))}" class="card__quick-form" data-product-form="card"><input type="hidden" name="id" value="${esc(item.variant)}"><input type="hidden" name="quantity" value="1"><button type="submit" class="btn btn--sm btn--full btn--light"><span>${esc(strings.quickAdd || 'Quick add')}</span></button></form>`
      : `<a href="${esc(item.url)}" class="btn btn--sm btn--full btn--light"><span>${esc(item.available ? strings.chooseOptions || 'Choose options' : strings.soldOut || 'Sold out')}</span></a>`;
    return `<li><div class="card"><div class="card__media">${img}${wish}<div class="card__quick">${quick}</div></div><div class="card__info"><h3 class="card__title"><a href="${esc(item.url)}" class="card__link">${esc(item.title)}</a></h3><div class="price${compare ? ' price--sale' : ''}"><span class="price__current">${esc(item.price)}</span>${compare}</div></div></div></li>`;
  }

  const Wish = {
    key: 'theme:wishlist',
    list() { return listStore.read(Wish.key); },
    has(h) { return Wish.list().some((x) => x.handle === h); },
    toggle(btn) {
      let item;
      try { item = JSON.parse(btn.dataset.wishItem); } catch (e) { return; }
      let list = Wish.list();
      const on = list.some((x) => x.handle === item.handle);
      list = on ? list.filter((x) => x.handle !== item.handle) : [item, ...list].slice(0, 60);
      listStore.write(Wish.key, list);
      toast(on ? strings.wishRemoved : strings.wishAdded);
      Wish.sync();
      Wish.page();
    },
    sync(scope = doc) {
      const set = new Set(Wish.list().map((x) => x.handle));
      $$('[data-wish]', scope).forEach((b) => b.setAttribute('aria-pressed', String(set.has(b.dataset.wish))));
      $$('[data-wish-count]').forEach((c) => { c.textContent = set.size; c.classList.toggle('is-empty', !set.size); });
    },
    page() {
      const grid = $('[data-wish-grid]');
      if (!grid) return;
      const list = Wish.list();
      grid.innerHTML = list.map(cardHtml).join('');
      const empty = $('[data-wish-empty]');
      if (empty) empty.hidden = list.length > 0;
      const clear = $('[data-wish-clear]');
      if (clear) clear.hidden = !list.length;
      Wish.sync(grid);
    }
  };
  doc.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wish]');
    if (btn) { e.preventDefault(); e.stopPropagation(); Wish.toggle(btn); return; }
    if (e.target.closest('[data-wish-clear]')) { listStore.write(Wish.key, []); Wish.sync(); Wish.page(); }
  }, true);

  const Recent = {
    key: 'theme:recent',
    remember(el) {
      if (!el || T.recentlyViewed === false) return;
      let item;
      try { item = JSON.parse(el.textContent); } catch (e) { return; }
      const list = listStore.read(Recent.key).filter((x) => x.handle !== item.handle);
      listStore.write(Recent.key, [item, ...list].slice(0, 12));
    },
    render(scope = doc) {
      $$('[data-recently-grid]', scope).forEach((grid) => {
        const limit = parseInt(grid.dataset.limit, 10) || 4;
        const list = listStore.read(Recent.key).filter((x) => x.handle !== grid.dataset.exclude).slice(0, limit);
        const sec = grid.closest('[data-recently-section]');
        if (!list.length) { if (sec) sec.hidden = true; return; }
        grid.innerHTML = list.map(cardHtml).join('');
        if (sec) sec.hidden = false;
        Wish.sync(grid);
      });
    }
  };

  /* ---------------------------------------------------------------- Reviews */
  function initReviews(scope = doc) {
    $$('[data-reviews]', scope).forEach((sec) => {
      if (sec.dataset.ready) return;
      sec.dataset.ready = '1';
      // Stars under the product title, worked out from this section when the product has no rating metafield.
      const tpl = $('[data-reviews-stars]', sec);
      const slot = $('[data-rating-slot]');
      if (tpl && slot) { slot.innerHTML = tpl.innerHTML; slot.hidden = false; }
      const toggle = $('[data-review-toggle]', sec);
      const form = $('[data-review-form]', sec);
      if (toggle && form) {
        toggle.addEventListener('click', () => {
          form.hidden = !form.hidden;
          toggle.setAttribute('aria-expanded', String(!form.hidden));
          if (!form.hidden) { const f = $('input:not([type="hidden"]):not([type="radio"]), textarea', form); f && f.focus({ preventScroll: true }); form.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }
        });
        if ($('[data-review-posted]', form) || $('.errors', form)) { form.hidden = false; toggle.setAttribute('aria-expanded', 'true'); }
      }
      const more = $('[data-reviews-more]', sec);
      if (more) {
        more.addEventListener('click', () => {
          const per = parseInt(sec.dataset.perPage, 10) || 6;
          const hidden = $$('[data-review-more][hidden]', sec);
          hidden.slice(0, per).forEach((li) => { li.hidden = false; });
          if (hidden.length <= per) more.hidden = true;
        });
      }
      const box = $('[data-review-lightbox]', sec);
      if (box && box.showModal) {
        sec.addEventListener('click', (e) => {
          const ph = e.target.closest('[data-review-photo]');
          if (ph) { const holder = $('[data-review-lightbox-img]', box); holder.innerHTML = ''; const im = new Image(); im.src = ph.dataset.reviewPhoto; im.alt = ''; holder.appendChild(im); box.showModal(); return; }
          if (e.target.closest('[data-review-lightbox-close]') || e.target === box) box.close();
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
            Wish.sync(el);
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
          const inst = window.ThemeScene.mount(c, { reduceMotion: reduce, intensity: c.dataset.intensity || 'normal', layout: c.dataset.layout || 'split' });
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

  /* ---------------------------------------------------------------- Offers: discount codes, bundles, first-order popup */
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  // Visiting /discount/CODE stores the code on the shopper's session so checkout applies it.
  function applyDiscount(code) {
    if (!code) return Promise.resolve();
    const root = (T.routes && T.routes.root) || '/';
    const base = /\/$/.test(root) ? root : root + '/';
    return fetch(`${base}discount/${encodeURIComponent(code)}`, { credentials: 'same-origin' }).catch(() => {});
  }

  function initQuantityBreaks(p) {
    const qb = $('[data-qbreaks]', p);
    if (!qb || qb.dataset.ready) return;
    qb.dataset.ready = '1';
    const form = doc.getElementById(qb.dataset.form);
    if (!form) return;
    let qty = $('input[name="quantity"]', form);
    if (qty) {
      const wrap = qty.closest('[data-qty]');
      if (wrap) wrap.hidden = true;
    } else {
      qty = doc.createElement('input');
      qty.type = 'hidden';
      qty.name = 'quantity';
      form.appendChild(qty);
    }
    const radios = $$('input[type="radio"]', qb);
    if (!radios.some((r) => r.checked) && radios[0]) radios[0].checked = true;
    const sync = () => {
      const r = radios.find((x) => x.checked);
      if (!r) return;
      qty.value = r.value;
      if (r.dataset.code) form.dataset.discount = r.dataset.code; else delete form.dataset.discount;
      radios.forEach((x) => x.closest('.qbreak').classList.toggle('is-selected', x === r));
    };
    const reprice = (v) => {
      radios.forEach((r) => {
        const row = r.closest('.qbreak');
        const q = parseInt(r.value, 10) || 1;
        const off = parseInt(r.dataset.off, 10) || 0;
        const full = v.price * q;
        const total = Math.floor((full * (100 - off)) / 100);
        const set = (sel, text) => { const el = $(sel, row); if (el) el.textContent = text; };
        set('[data-qb-total]', formatMoney(total));
        set('[data-qb-full]', formatMoney(full));
        set('[data-qb-each]', qb.dataset.each.replace('[price]', formatMoney(Math.floor(total / q))));
        set('[data-qb-save]', qb.dataset.save.replace('[amount]', formatMoney(full - total)).replace('[percent]', off));
      });
    };
    qb.addEventListener('change', sync);
    p.addEventListener('variant:change', (e) => { if (e.detail && e.detail.variant) reprice(e.detail.variant); });
    sync();
  }

  function initBundle(p) {
    const b = $('[data-bundle]', p);
    if (!b || b.dataset.ready || b.classList.contains('bundle--empty')) return;
    b.dataset.ready = '1';
    const rows = $$('.bundle__item', b);
    const off = parseInt(b.dataset.off, 10) || 0;
    const addBtn = $('[data-bundle-add]', b);
    const err = $('[data-bundle-error]', b);
    const variantOf = (row) => $('[data-bundle-variant]', row);
    const priceOf = (el) => parseInt(el.tagName === 'SELECT' ? el.selectedOptions[0].dataset.price : el.dataset.price, 10) || 0;
    const isOn = (row) => { const c = $('input[type="checkbox"]', row); return !c || c.checked; };
    const update = () => {
      let full = 0;
      let count = 0;
      rows.forEach((row) => {
        const price = priceOf(variantOf(row));
        $('[data-bundle-price]', row).textContent = formatMoney(price);
        row.classList.toggle('is-off', !isOn(row));
        if (isOn(row)) { full += price; count++; }
      });
      $('[data-bundle-total]', b).textContent = formatMoney(count > 1 ? Math.floor((full * (100 - off)) / 100) : full);
      const fullEl = $('[data-bundle-full]', b);
      if (fullEl) fullEl.hidden = count < 2;
      if (fullEl) fullEl.textContent = formatMoney(full);
      addBtn.disabled = count < 2;
    };
    b.addEventListener('change', update);
    p.addEventListener('variant:change', (e) => {
      const v = e.detail && e.detail.variant;
      const cur = $('[data-current]', b);
      if (v && cur) { cur.value = v.id; cur.dataset.price = v.price; }
      update();
    });
    addBtn.addEventListener('click', async () => {
      const items = rows.filter(isOn).map((row) => ({ id: parseInt(variantOf(row).value, 10), quantity: 1 }));
      addBtn.classList.add('is-loading');
      err.hidden = true;
      try {
        await applyDiscount(b.dataset.code);
        const res = await fetch(T.routes.cartAdd, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ items, sections: Cart.section, sections_url: window.location.pathname })
        });
        const data = await res.json();
        if (!res.ok || data.status) throw new Error(data.description || data.message || strings.cartError);
        if (Cart.enabled()) { Cart.render(data.sections && data.sections[Cart.section]); openDrawer('CartDrawer'); }
        else window.location.href = T.routes.cart;
      } catch (ex) {
        err.textContent = ex.message || strings.cartError;
        err.hidden = false;
      } finally {
        addBtn.classList.remove('is-loading');
      }
    });
    update();
  }

  const promo = { el: null, last: null };
  function promoStep(name) {
    $$('[data-promo-step]', promo.el).forEach((s) => { s.hidden = s.dataset.promoStep !== name; });
  }
  function openPromo() {
    const el = promo.el;
    if (!el || el.classList.contains('is-open')) return;
    promo.last = doc.activeElement;
    el.hidden = false;
    const teaser = $('[data-promo-teaser]');
    if (teaser) teaser.hidden = true;
    doc.documentElement.classList.add('promo-open');
    requestAnimationFrame(() => {
      el.classList.add('is-open');
      const panel = $('.promo__panel', el);
      if (panel) panel.focus({ preventScroll: true });
    });
  }
  function closePromo(remember = true) {
    const el = promo.el;
    if (!el || !el.classList.contains('is-open')) return;
    el.classList.remove('is-open');
    doc.documentElement.classList.remove('promo-open');
    setTimeout(() => { if (!el.classList.contains('is-open')) el.hidden = true; }, 450);
    if (remember && !(window.Shopify && window.Shopify.designMode)) store.set('promo:closed', String(Date.now()));
    const teaser = $('[data-promo-teaser]');
    if (teaser && el.dataset.teaser === 'true' && !store.get('promo:claimed')) teaser.hidden = false;
    if (promo.last && promo.last.focus) promo.last.focus({ preventScroll: true });
  }
  function initPromo(scope = doc) {
    const el = $('[data-promo]', scope);
    if (!el || el.dataset.ready) return;
    el.dataset.ready = '1';
    promo.el = el;
    const design = !!(window.Shopify && window.Shopify.designMode);
    const teaser = $('[data-promo-teaser]');
    const claimed = store.get('promo:claimed');
    const closedAt = parseInt(store.get('promo:closed') || '0', 10);
    const days = parseInt(el.dataset.days, 10) || 7;
    const snoozed = closedAt && Date.now() - closedAt < days * 864e5;

    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-promo-close]')) { e.preventDefault(); closePromo(); return; }
      if (e.target.closest('[data-promo-reveal]')) { promoStep('code'); store.set('promo:claimed', '1'); return; }
      const copy = e.target.closest('[data-promo-copy]');
      if (copy) {
        const code = $('[data-promo-code]', el).textContent.trim();
        const done = () => { const t = copy.textContent; copy.textContent = copy.dataset.copied; setTimeout(() => { copy.textContent = t; }, 1800); };
        if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, done); else done();
      }
    });
    el.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePromo(); });
    const form = $('[data-promo-form]', el);
    if (form) form.addEventListener('submit', () => store.set('promo:claimed', '1'));
    if (teaser) teaser.addEventListener('click', openPromo);

    if ($('[data-promo-posted]', el)) { promoStep('code'); openPromo(); return; }
    if (design) { if (el.dataset.editorPreview === 'true') openPromo(); return; }
    if (claimed) return;
    if (snoozed) { if (teaser && el.dataset.teaser === 'true') teaser.hidden = false; return; }

    const delay = (parseInt(el.dataset.delay, 10) || 0) * 1000;
    const show = () => {
      if ($('.drawer.is-open')) { setTimeout(show, 4000); return; }
      openPromo();
    };
    const trigger = el.dataset.trigger;
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (trigger === 'scroll') {
      const onScroll = () => {
        const max = doc.documentElement.scrollHeight - window.innerHeight;
        if (max <= 0 || window.scrollY / max > 0.5) { window.removeEventListener('scroll', onScroll); show(); }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    } else if (trigger === 'exit' && canHover) {
      const onLeave = (e) => { if (!e.relatedTarget && e.clientY <= 0) { doc.removeEventListener('mouseout', onLeave); show(); } };
      setTimeout(() => doc.addEventListener('mouseout', onLeave), 3000);
    } else if (trigger === 'exit') {
      // Phones have no cursor to leave the page, so a quick flick back up after reading counts as leaving.
      const start = Date.now();
      let deepest = 0;
      let samples = [];
      const onScroll = () => {
        const y = window.scrollY;
        const now = Date.now();
        deepest = Math.max(deepest, y);
        samples = samples.filter((s) => now - s.t < 350);
        samples.push({ y, t: now });
        const climbed = samples[0].y - y;
        const read = deepest > window.innerHeight * 0.8;
        if (now - start > 6000 && read && climbed > window.innerHeight * 0.45) { window.removeEventListener('scroll', onScroll); show(); }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      // Shoppers who switch apps and come back also get it once.
      const onVis = () => { if (doc.visibilityState === 'visible' && Date.now() - start > 15000) { doc.removeEventListener('visibilitychange', onVis); window.removeEventListener('scroll', onScroll); show(); } };
      doc.addEventListener('visibilitychange', onVis);
    } else {
      setTimeout(show, delay);
    }
  }

  doc.addEventListener('shopify:section:select', (e) => { if ($('[data-promo]', e.target)) { initPromo(e.target); openPromo(); } });
  doc.addEventListener('shopify:section:deselect', (e) => {
    const el = $('[data-promo]', e.target);
    if (el && el.dataset.editorPreview !== 'true') closePromo(false);
  });

  /* ---------------------------------------------------------------- Init */
  function initAll(scope = doc) {
    observe(scope);
    initMagnetic(scope);
    initTilt(scope);
    initParallax(scope);
    initPins(scope);
    initStacks(scope);
    initViews(scope);
    initScrub(scope);
    initMarquees(scope);
    initSpots(scope);
    initProducts(scope);
    initRecommendations(scope);
    initRotators(scope);
    initScenes(scope);
    initPromo(scope);
    initReviews(scope);
    Wish.sync(scope);
    Wish.page();
    Recent.render(scope);
  }

  setHeaderVars();
  initHeaderOverlay();
  onHeaderScroll();
  initAll();
  kick();
  window.addEventListener('load', () => { pins.forEach((el) => { if (el.hasAttribute('data-rail')) measureRail(el); }); kick(); }, { once: true });
  window.themeReady = true;
  window.ThemeUtils = { formatMoney, openDrawer, closeDrawer, toast, Cart };

  doc.addEventListener('shopify:section:load', (e) => {
    initAll(e.target);
    setHeaderVars();
    initHeaderOverlay();
    kick();
  });
  doc.addEventListener('shopify:section:unload', (e) => destroyScenes(e.target));
  doc.addEventListener('shopify:block:select', (e) => {
    $$('[data-reveal], [data-split]', e.target).forEach(finish);
    finish(e.target);
  });
})();
