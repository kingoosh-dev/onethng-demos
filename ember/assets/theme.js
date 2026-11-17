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
    // On phones the reopen tab waits until the shopper has scrolled past the first screen, so it never covers the hero.
    const first = $('main > .shopify-section:first-child');
    if (teaser && first && 'IntersectionObserver' in window) {
      new IntersectionObserver(([en]) => { root.classList.toggle('hero-in-view', en.isIntersecting && en.intersectionRatio > 0.35); }, { threshold: [0, 0.35, 0.6] }).observe(first);
    }

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


/* ---- premium: _shared.js */
/* Shared helpers for the premium sections: init on load and in the theme editor, money, add-to-cart into the drawer. */
(function () {
  var T = window.theme || {};
  var routes = T.routes || {};
  function U() { return window.ThemeUtils || {}; }
  window.Premium = {
    on: function (sel, init) {
      function run(scope) {
        (scope || document).querySelectorAll(sel).forEach(function (el) {
          if (el.dataset.pmReady) return; el.dataset.pmReady = '1';
          try { init(el); } catch (e) { console.error(e); }
        });
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { run(); });
      else run();
      document.addEventListener('shopify:section:load', function (e) { run(e.target); });
    },
    money: function (c) {
      var u = U();
      if (u.formatMoney) return u.formatMoney(c);
      return (Number(c || 0) / 100).toFixed(2);
    },
    // items: [{id, quantity}]. Opens the cart drawer when the theme uses one, otherwise goes to the cart.
    add: function (items, btn) {
      items = (items || []).filter(function (i) { return i && i.id; });
      if (!items.length) return Promise.resolve();
      var u = U(), C = u.Cart;
      if (btn) btn.classList.add('is-loading');
      var payload = { items: items };
      if (C && C.enabled && C.enabled()) { payload.sections = C.section; payload.sections_url = window.location.pathname; }
      return fetch(routes.cartAdd || '/cart/add.js', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload)
      }).then(function (r) { return r.json().then(function (d) { if (!r.ok || d.status) throw new Error(d.description || d.message || 'Could not add to cart'); return d; }); })
        .then(function (d) {
          if (C && C.enabled && C.enabled()) {
            C.render(d.sections && d.sections[C.section]);
            if (C.added) C.added(d.items && d.items[0] && d.items[0].product_title);
            if (u.openDrawer) u.openDrawer('CartDrawer');
          } else window.location.href = routes.cart || '/cart';
          return d;
        })
        .catch(function (e) { if (u.toast) u.toast(e.message); else alert(e.message); throw e; })
        .finally(function () { if (btn) btn.classList.remove('is-loading'); });
    },
    // Reads the JSON product data each premium section prints into <script type="application/json" data-pm-product>.
    data: function (el) {
      var s = el && el.querySelector('script[data-pm-product]');
      try { return s ? JSON.parse(s.textContent) : {}; } catch (e) { return {}; }
    }
  };
})();

/* ---- premium: before-after.js */
Premium.on('[data-pm-ba]', function (root) {
  var frame = root.querySelector('[data-frame]'), range = root.querySelector('[data-range]'), start = +range.value;
  function set(v) { frame.style.setProperty('--pos', v + '%'); }
  range.addEventListener('input', function () { frame.classList.remove('is-hint'); set(range.value); });
  range.addEventListener('pointerdown', function () { frame.classList.add('is-drag'); });
  window.addEventListener('pointerup', function () { frame.classList.remove('is-drag'); });
  // A one-off nudge when it first scrolls into view, so shoppers see it moves.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; io.disconnect();
      frame.classList.add('is-hint');
      setTimeout(function () { set(Math.min(85, start + 22)); }, 300);
      setTimeout(function () { set(Math.max(15, start - 18)); }, 1200);
      setTimeout(function () { set(start); }, 2100);
      setTimeout(function () { frame.classList.remove('is-hint'); }, 3000);
    }, { threshold: .5 });
    io.observe(frame);
  }
});

/* ---- premium: brew-picker.js */
Premium.on('[data-pm-brew]', function (root) {
  var tabs = [].slice.call(root.querySelectorAll('[data-tab]')), panels = [].slice.call(root.querySelectorAll('[data-panel]'));
  function pick(i) {
    tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i); });
    panels.forEach(function (p, k) { p.hidden = k !== i; });
    tabs[i].scrollIntoView && matchMedia('(max-width: 749px)').matches && tabs[i].parentNode.scrollTo({ left: tabs[i].offsetLeft - 40, behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { pick(i); });
    t.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { var j = (i + d + tabs.length) % tabs.length; pick(j); tabs[j].focus(); } });
  });
  panels.forEach(function (p) { var b = p.querySelector('[data-add]'); b.addEventListener('click', function () { var d = Premium.data(p); Premium.add([{ id: d.variant, quantity: 1 }], b); }); });
  document.addEventListener('shopify:block:select', function (e) { var i = tabs.indexOf(e.target); if (i > -1) pick(i); });
});

/* ---- premium: burn-time.js */
Premium.on('[data-pm-burn]', function (root) {
  var range = root.querySelector('[data-range]'), wax = root.querySelector('[data-wax]'), pool = root.querySelector('[data-pool]'), wick = root.querySelector('[data-wick]');
  var H = +root.dataset.hours || 60, E = +root.dataset.evening || 3, add = root.querySelector('[data-add]');
  var d = add ? Premium.data(add.parentNode) : {}, TOP = 110, BOTTOM = 280;
  var oh = root.querySelector('[data-h]'), oe = root.querySelector('[data-e]'), op = root.querySelector('[data-p]');
  var ev = Math.max(1, Math.floor(H / E));
  op.textContent = d.price ? Premium.money(Math.round(d.price / ev)) : '—';
  function set(h) {
    var y = TOP + (BOTTOM - TOP) * (h / H);
    wax.setAttribute('y', y); pool.setAttribute('cy', y);
    wick.style.transform = 'translateY(' + (y - TOP) + 'px)';
    oh.textContent = h; oe.textContent = Math.floor(h / E);
    root.classList.toggle('is-out', h >= H);
  }
  range.addEventListener('input', function () { set(+range.value); });
  if (add) add.addEventListener('click', function () { Premium.add([{ id: d.variant, quantity: 1 }], add); });
  set(0);
  // Burn a little on first view so it's obvious it moves.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; io.disconnect();
      var target = Math.round(H * .35), v = 0, t = setInterval(function () { if (+range.value !== v) return clearInterval(t); v = Math.min(target, v + Math.max(1, Math.round(H / 60))); range.value = v; set(v); if (v >= target) clearInterval(t); }, 40);
    }, { threshold: .5 });
    io.observe(root);
  }
});

/* ---- premium: clothing-rail.js */
(function(){
  function init(root){
    if(!root || root.dataset.ocrReady) return; root.dataset.ocrReady='1';
    var track=root.querySelector('[data-ocr-track]'), nameEl=root.querySelector('[data-ocr-name]');
    var hint=nameEl.textContent, view=root.querySelector('[data-ocr-view]'), panel=view.querySelector('.ocr__panel');
    var items=[].slice.call(root.querySelectorAll('.ocr__item')), current=null, lastBtn=null;
    view.setAttribute('style',root.getAttribute('style')); view.classList.add('scheme-'+(root.className.match(/scheme-(\w+)/)||[,'default'])[1]); view.style.setProperty('--ocr-bg',getComputedStyle(root).backgroundColor); view.style.background='transparent'; document.body.appendChild(view); // escape overflow/transform parents, keep colours
    function front(it){
      if(current===it) return;
      if(current) current.classList.remove('is-front');
      current=it;
      if(it){ it.classList.add('is-front'); nameEl.textContent=it.dataset.title||''; }
      else nameEl.textContent=hint;
    }
    var wasFront=false, ptype='mouse';
    items.forEach(function(it){
      var btn=it.querySelector('.ocr__hang');
      it.addEventListener('pointerenter',function(e){ if(e.pointerType==='mouse'&&!swipe) front(it); });
      btn.addEventListener('pointerdown',function(e){ ptype=e.pointerType; wasFront=(current===it); });
      btn.addEventListener('focus',function(){ if(ptype==='mouse'||!btn.matches(':focus-visible')) return; front(it); });
      btn.addEventListener('keyup',function(e){ if(e.key==='Tab') front(it); });
      btn.addEventListener('click',function(e){
        if(swipe){
          if(current!==it){ track.scrollTo({left:it.offsetLeft+it.offsetWidth/2-track.clientWidth/2,behavior:'smooth'}); return; }
          open(it,btn); return;
        }
        var touchy=(ptype==='touch'||ptype==='pen') && e.detail>0;
        if(touchy && !wasFront){ front(it); it.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}); wasFront=true; return; }
        front(it); open(it,btn);
      });
    });
    track.addEventListener('pointerleave',function(e){ if(e.pointerType==='mouse'&&!swipe) front(null); });
    // Touch screens: the rail scrolls freely and whichever garment is in the middle turns to face the shopper.
    var swipe=matchMedia('(hover: none), (pointer: coarse)').matches, turn=parseFloat(getComputedStyle(root).getPropertyValue('--ocr-turn'))||60, ticking=false;
    function layout(){
      if(!swipe||!items.length) return;
      var slot=items[0].offsetWidth; root.style.setProperty('--ocr-pad',Math.max(16,(track.clientWidth-slot)/2)+'px'); paint();
    }
    function paint(){
      ticking=false; var mid=track.scrollLeft+track.clientWidth/2, best=null, bd=1e9, slot=items[0].offsetWidth||1;
      items.forEach(function(it){
        var d=(it.offsetLeft+it.offsetWidth/2-mid)/(slot*1.15), a=Math.min(1,Math.abs(d)), e=a*a*(3-2*a);
        var g=it.querySelector('.ocr__garment');
        g.style.setProperty('--r',(turn*e).toFixed(2)+'deg'); g.style.setProperty('--z',(30*(1-e)).toFixed(1)+'px');
        it.style.zIndex=String(100-Math.round(a*50));
        if(Math.abs(d)<bd){ bd=Math.abs(d); best=it; }
      });
      front(best);
    }
    if(swipe){
      root.classList.add('ocr--swipe');
      track.addEventListener('scroll',function(){ if(!ticking){ ticking=true; requestAnimationFrame(paint); } },{passive:true});
      addEventListener('resize',layout); layout();
      var start=items[Math.min(1,items.length-1)]; if(start) track.scrollLeft=start.offsetLeft+start.offsetWidth/2-track.clientWidth/2; paint();
    }
    function money(c){ if(window.ThemeUtils&&ThemeUtils.formatMoney) return ThemeUtils.formatMoney(c); try{ return new Intl.NumberFormat(document.documentElement.lang||undefined,{style:'currency',currency:(window.Shopify&&Shopify.currency&&Shopify.currency.active)||root.dataset.currency||'GBP'}).format(c/100);}catch(e){ return (c/100).toFixed(2);} }
    function open(it,btn){
      lastBtn=btn;
      var d={}; try{ d=JSON.parse(it.querySelector('script[type="application/json"]').textContent); }catch(e){}
      var src=it.querySelector('.ocr__garment img, .ocr__garment svg');
      view.querySelector('[data-ocr-big]').innerHTML='';
      var big=src?src.cloneNode(true):document.createElement('div');
      if(big.tagName==='IMG'&&d.large){ big.removeAttribute('srcset'); big.src=d.large; }
      view.querySelector('[data-ocr-big]').appendChild(big);
      view.querySelector('[data-ocr-vtag]').textContent=it.dataset.tag||'';
      view.querySelector('[data-ocr-vtitle]').textContent=it.dataset.title||'';
      var p=view.querySelector('[data-ocr-vprice]'); p.textContent=d.price!=null?money(d.price):'';
      if(d.compare&&d.compare>d.price){ var c=document.createElement('s'); c.textContent=money(d.compare); p.appendChild(c); }
      view.querySelector('[data-ocr-vdesc]').textContent=d.desc||'';
      var link=view.querySelector('[data-ocr-link]'); link.href=d.url||'#'; link.hidden=!d.url;
      var add=view.querySelector('[data-ocr-add]'), vid=view.querySelector('[data-ocr-variant]');
      vid.value=d.variant||''; add.disabled=!d.variant||d.available===false;
      add.textContent=d.available===false?add.dataset.sold||'Sold out':add.dataset.label||add.textContent;
      if(!add.dataset.label) add.dataset.label=add.textContent;
      add.closest('form').hidden=!d.variant;
      view.hidden=false;
      // fly the garment from the rail into the panel
      var from=src&&src.getBoundingClientRect(), fly=null;
      if(from && !matchMedia('(prefers-reduced-motion: reduce)').matches){
        fly=src.cloneNode(true); fly.classList.add('ocr__fly'); big.style.visibility='hidden';
        Object.assign(fly.style,{left:from.left+'px',top:from.top+'px',width:from.width+'px',height:from.height+'px'});
        document.body.appendChild(fly);
      }
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        view.classList.add('is-open'); panel.focus({preventScroll:true});
        if(fly){ var to=big.getBoundingClientRect(); Object.assign(fly.style,{left:to.left+'px',top:to.top+'px',width:to.width+'px',height:to.height+'px'});
          setTimeout(function(){ big.style.visibility=''; fly.remove(); },620); }
      }); });
      document.documentElement.style.overflow='hidden';
    }
    function close(){
      view.classList.remove('is-open'); document.documentElement.style.overflow='';
      setTimeout(function(){ view.hidden=true; },400); if(lastBtn) lastBtn.focus({preventScroll:true});
    }
    view.addEventListener('click',function(e){ if(e.target.closest('[data-ocr-close]')) close(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!view.hidden) close(); });
    view.querySelector('[data-ocr-form]').addEventListener('submit',function(e){
      var C=window.ThemeUtils&&ThemeUtils.Cart; if(!C) return; e.preventDefault();
      var add=view.querySelector('[data-ocr-add]'); add.classList.add('is-loading');
      C.add(e.target).then(function(){ close(); }).catch(function(){ e.target.submit(); }).finally(function(){ add.classList.remove('is-loading'); });
    });
    if(items[0] && root.closest('.shopify-design-mode, [data-shopify-editor-section]')){}
  }
  function all(){ document.querySelectorAll('[data-ocr]').forEach(init); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',all); else all();
  document.addEventListener('shopify:section:load',function(e){ var r=e.target.querySelector('[data-ocr]'); if(r) init(r); });
  document.addEventListener('shopify:block:select',function(e){ var it=e.target.closest('.ocr__item'); if(it){ var r=it.closest('[data-ocr]'); r&&r.querySelectorAll('.ocr__item').forEach(function(x){x.classList.toggle('is-front',x===it)}); } });
})();

/* ---- premium: exploded-view.js */
Premium.on('[data-pm-explode]', function (root) {
  var track = root.querySelector('[data-track]'), layers = [].slice.call(root.querySelectorAll('[data-layer]')), items = [].slice.call(root.querySelectorAll('[data-item]'));
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(function (i) { i.classList.add('is-on'); }); return; }
  var n = layers.length, ticking = false;
  function run() {
    ticking = false;
    var r = track.getBoundingClientRect(), total = r.height - innerHeight;
    var t = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    // 0 to .55: lift apart; .55 to .85: hold while each layer is highlighted; .85 to 1: click back together.
    var p = t < .55 ? t / .55 : t < .85 ? 1 : 1 - (t - .85) / .15;
    p = 1 - Math.pow(1 - p, 3);
    root.style.setProperty('--p', p.toFixed(3));
    var active = t < .2 ? -1 : Math.min(n - 1, Math.floor((t - .2) / .65 * n));
    layers.forEach(function (l, i) { l.classList.toggle('is-on', i === active); });
    items.forEach(function (l, i) { l.classList.toggle('is-on', i === active || (t >= .85 && true)); });
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  addEventListener('resize', run); run();
  document.addEventListener('shopify:block:select', function (e) {
    var i = items.indexOf(e.target); if (i < 0) return;
    var r = track.getBoundingClientRect(), total = r.height - innerHeight;
    scrollTo({ top: scrollY + r.top + total * (.2 + (i + .5) / n * .65), behavior: 'smooth' });
  });
});

/* ---- premium: fit-finder.js */
Premium.on('[data-pm-fit]', function (root) {
  var sizes = [].slice.call(root.querySelectorAll('[data-size]'));
  var h = root.querySelector('[data-in="h"]'), w = root.querySelector('[data-in="w"]');
  var oh = root.querySelector('[data-out="h"]'), ow = root.querySelector('[data-out="w"]');
  var ans = root.querySelector('[data-answer]'), note = root.querySelector('[data-note]');
  var between = ''; try { between = JSON.parse(root.querySelector('[data-strings]').textContent); } catch (e) {}
  var units = root.dataset.units || 'metric', last = '';
  function fmtH(cm) { if (units === 'metric') return cm + ' cm'; var inch = Math.round(cm / 2.54); return Math.floor(inch / 12) + '′' + (inch % 12) + '″'; }
  function fmtW(kg) { if (units === 'metric') return kg + ' kg'; var lb = Math.round(kg * 2.20462); return Math.floor(lb / 14) + ' st ' + (lb % 14) + ' lb'; }
  function idx(v, key) { for (var i = 0; i < sizes.length; i++) if (v <= +sizes[i].dataset[key]) return i; return sizes.length - 1; }
  function run() {
    oh.textContent = fmtH(+h.value); ow.textContent = fmtW(+w.value);
    if (!sizes.length) return;
    var ih = idx(+h.value, 'h'), iw = idx(+w.value, 'w');
    var pref = +(root.querySelector('input[type=radio]:checked') || { value: 0 }).value;
    var base = Math.max(ih, iw), pick = Math.min(sizes.length - 1, Math.max(0, base + pref));
    sizes.forEach(function (s, i) { s.classList.toggle('is-match', i === pick); s.classList.toggle('is-near', i !== pick && Math.abs(i - pick) === 1 && ih !== iw && (i === ih || i === iw)); });
    var label = sizes[pick].textContent.trim();
    if (label !== last) { ans.textContent = label; ans.classList.remove('is-pop'); void ans.offsetWidth; ans.classList.add('is-pop'); last = label; }
    note.textContent = ih !== iw && pref === 0 ? between : '';
  }
  root.querySelectorAll('[data-unit]').forEach(function (b) {
    b.setAttribute('aria-pressed', b.dataset.unit === units);
    b.addEventListener('click', function () { units = b.dataset.unit; root.querySelectorAll('[data-unit]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); run(); });
  });
  root.addEventListener('input', run); root.addEventListener('change', run);
  run();
});

/* ---- premium: flavour-map.js */
Premium.on('[data-pm-map]', function (root) {
  var pts = [].slice.call(root.querySelectorAll('[data-pt]')), cards = [].slice.call(root.querySelectorAll('[data-card]'));
  function pick(i, scroll) {
    pts.forEach(function (p, k) { p.classList.toggle('is-on', k === i); p.setAttribute('aria-pressed', k === i); });
    cards.forEach(function (c, k) { c.hidden = k !== i; });
    if (scroll && matchMedia('(max-width: 989px)').matches) { var r = cards[i].getBoundingClientRect(); if (r.top > innerHeight - 120) cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  }
  pts.forEach(function (p, i) { p.addEventListener('click', function () { pick(i, true); }); p.addEventListener('mouseenter', function () { if (matchMedia('(hover: hover)').matches) pick(i); }); });
  cards.forEach(function (c) { var b = c.querySelector('[data-add]'); b.addEventListener('click', function () { var d = Premium.data(c); Premium.add([{ id: d.variant, quantity: 1 }], b); }); });
  document.addEventListener('shopify:block:select', function (e) { var i = pts.indexOf(e.target); if (i > -1) pick(i); });
  if (pts.length) pick(0);
});

/* ---- premium: growth-guide.js */
Premium.on('[data-pm-grow]', function (root) {
  var sizes = [].slice.call(root.querySelectorAll('[data-from]')), age = root.querySelector('[data-age]');
  var out = root.querySelector('[data-age-out]'), now = root.querySelector('[data-now]'), next = root.querySelector('[data-next]'), until = root.querySelector('[data-until]');
  var t = {}; try { t = JSON.parse(root.querySelector('[data-strings]').textContent); } catch (e) {}
  function m(n) { return n + ' ' + (n === 1 ? t.month : t.months); }
  function run() {
    var a = +age.value, hit = -1;
    out.textContent = m(a);
    sizes.forEach(function (s, i) { if (hit < 0 && a >= +s.dataset.from && a < +s.dataset.to) hit = i; });
    if (hit < 0 && sizes.length && a >= +sizes[sizes.length - 1].dataset.from) hit = sizes.length - 1;
    sizes.forEach(function (s, i) { s.classList.toggle('is-now', i === hit); s.classList.toggle('is-next', i === hit + 1); });
    if (hit < 0) { now.textContent = t.none || '—'; next.textContent = '—'; until.textContent = ''; return; }
    now.textContent = sizes[hit].querySelector('.pm-grow__label').textContent;
    until.textContent = (t.until || '').replace('[age]', m(+sizes[hit].dataset.to));
    next.textContent = sizes[hit + 1] ? sizes[hit + 1].querySelector('.pm-grow__label').textContent : now.textContent;
  }
  age.addEventListener('input', run); run();
});

/* ---- premium: nutrition-label.js */
Premium.on('[data-pm-label]', function (root) {
  var panel = root.querySelector('[data-panel]'), buy = root.querySelector('[data-buy]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { root.classList.add('is-in'); io.disconnect(); } }, { threshold: .3 });
    io.observe(panel);
  } else root.classList.add('is-in');
  if (window.Shopify && Shopify.designMode) root.classList.add('is-in');
  if (buy) buy.addEventListener('submit', function (e) {
    e.preventDefault(); var d = Premium.data(buy);
    Premium.add([{ id: d.variant, quantity: 1 }], buy.querySelector('.btn'));
  });
});

/* ---- premium: pet-picker.js */
Premium.on('[data-pm-pet]', function (root) {
  var opts = [].slice.call(root.querySelectorAll('[data-pet]')), sets = [].slice.call(root.querySelectorAll('[data-set]')), key = root.dataset.key;
  function pick(i, save) {
    opts.forEach(function (o, k) { o.setAttribute('aria-selected', k === i); });
    sets.forEach(function (s, k) { s.hidden = k !== i; if (k === i) s.querySelectorAll('.pm-pet__card').forEach(function (c) { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }); });
    if (save) try { localStorage.setItem(key, i); } catch (e) {}
  }
  opts.forEach(function (o, i) { o.addEventListener('click', function () { pick(i, true); }); });
  var saved = -1; try { saved = +localStorage.getItem(key); } catch (e) {}
  if (saved > 0 && saved < opts.length) pick(saved, false);
  document.addEventListener('shopify:block:select', function (e) { var i = opts.indexOf(e.target); if (i > -1) pick(i, false); });
});

/* ---- premium: routine-builder.js */
Premium.on('[data-pm-routine]', function (root) {
  var steps = [].slice.call(root.querySelectorAll('[data-when]')), tabs = [].slice.call(root.querySelectorAll('[data-tab]'));
  var glider = root.querySelector('.pm-routine__glider'), tabBox = root.querySelector('.pm-routine__tabs');
  var total = root.querySelector('[data-total]'), was = root.querySelector('[data-was]'), count = root.querySelector('[data-count]'), add = root.querySelector('[data-add]');
  var t = {}; try { t = JSON.parse(root.querySelector('[data-strings]').textContent); } catch (e) {}
  var data = steps.map(function (s) { return Premium.data(s); }), when = 'am';
  function chosen() { return steps.filter(function (s, i) { var c = s.querySelector('[data-check]'); return !s.hidden && c && c.checked && data[i].variant; }); }
  function sum() {
    var on = chosen(), v = 0;
    on.forEach(function (s) { v += data[steps.indexOf(s)].price; });
    steps.forEach(function (s) { var c = s.querySelector('[data-check]'); s.classList.toggle('is-off', !(c && c.checked)); });
    var d = +t.discount || 0, full = on.length && on.length === steps.filter(function (s, i) { return !s.hidden && data[i].variant; }).length;
    total.textContent = Premium.money(d && full ? Math.round(v * (100 - d) / 100) : v);
    was.hidden = !(d && full); was.textContent = Premium.money(v);
    count.textContent = (t.count || '[count]').replace('[count]', on.length);
    add.disabled = !on.length;
  }
  function show(w) {
    when = w; var n = 0;
    tabs.forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === w); if (b.dataset.tab === w) { glider.style.setProperty('--gx', (b.offsetLeft - 5) + 'px'); glider.style.setProperty('--gw', b.offsetWidth + 'px'); } });
    steps.forEach(function (s) {
      var on = s.dataset.when === 'both' || s.dataset.when === w;
      s.hidden = !on;
      if (on) { n++; s.querySelector('[data-n]').textContent = n; s.style.setProperty('--i', n); s.style.animation = 'none'; void s.offsetWidth; s.style.animation = ''; }
    });
    sum();
  }
  tabs.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.tab); }); });
  root.addEventListener('change', sum);
  add.addEventListener('click', function () { Premium.add(chosen().map(function (s) { return { id: data[steps.indexOf(s)].variant, quantity: 1 }; }), add); });
  show('am');
  if (window.ResizeObserver) new ResizeObserver(function () { show(when); }).observe(tabBox);
});

/* ---- premium: scent-wheel.js */
Premium.on('[data-pm-wheel]', function (root) {
  var svg = root.querySelector('[data-svg]'), wheel = root.querySelector('[data-wheel]'), labels = [].slice.call(root.querySelectorAll('[data-labels] span'));
  var results = [].slice.call(root.querySelectorAll('[data-result]')), n = results.length, rot = 0, spinning = false;
  if (!n) return;
  var seg = 360 / n, NS = 'http://www.w3.org/2000/svg';
  function pt(a, r) { a = (a - 90) * Math.PI / 180; return (r * Math.cos(a)).toFixed(2) + ' ' + (r * Math.sin(a)).toFixed(2); }
  labels.forEach(function (l, i) {
    var a0 = i * seg, a1 = a0 + seg, p = document.createElementNS(NS, 'path');
    p.setAttribute('d', n === 1 ? 'M0 -96 A96 96 0 1 1 -0.01 -96z' : 'M0 0 L' + pt(a0, 96) + ' A96 96 0 ' + (seg > 180 ? 1 : 0) + ' 1 ' + pt(a1, 96) + 'z');
    p.setAttribute('fill', l.style.getPropertyValue('--c'));
    p.addEventListener('click', function () { land(i, false); });
    svg.appendChild(p);
    l.style.setProperty('--a', (a0 + seg / 2 - 90) + 'deg');
  });
  function show(i) {
    results.forEach(function (r, k) { r.hidden = k !== i; });
  }
  // Rotate so slice i sits under the pointer at the top.
  function land(i, big) {
    if (spinning) return;
    var target = -(i * seg + seg / 2), cur = rot % 360;
    var delta = ((target - cur) % 360 + 360) % 360;
    if (big) delta += 360 * (4 + Math.floor(Math.random() * 2)); else if (delta > 180) delta -= 360;
    rot += delta; spinning = big;
    wheel.style.setProperty('--rot', rot + 'deg');
    if (big) setTimeout(function () { spinning = false; show(i); var r = results[i].getBoundingClientRect(); if (r.top < 60 || r.bottom > innerHeight) results[i].scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 3600); else show(i);
  }
  root.querySelector('[data-spin]').addEventListener('click', function () {
    var cur = results.findIndex(function (r) { return !r.hidden; }), i;
    do { i = Math.floor(Math.random() * n); } while (n > 1 && i === cur);
    land(i, true);
  });
  results.forEach(function (r) {
    var b = r.querySelector('[data-add]');
    b.addEventListener('click', function () { var d = Premium.data(r); Premium.add([{ id: d.variant, quantity: 1 }], b); });
  });
  document.addEventListener('shopify:block:select', function (e) { var i = results.indexOf(e.target); if (i > -1) land(i, false); });
  wheel.classList.add('no-anim'); land(0, false); void wheel.offsetWidth; wheel.classList.remove('no-anim');
});

/* ---- premium: shop-the-look.js */
Premium.on('[data-pm-look]', function (root) {
  var stage = root.querySelector('.pm-look__stage'), pop = root.querySelector('[data-pop]');
  var dots = [].slice.call(root.querySelectorAll('[data-spot]')), items = [].slice.call(root.querySelectorAll('[data-item]'));
  var total = root.querySelector('[data-total]'), addAll = root.querySelector('[data-add-all]'), active = -1;
  var data = items.map(function (it) { return Premium.data(it); });
  function sum() {
    var t = 0, n = 0;
    items.forEach(function (it, i) { var c = it.querySelector('[data-check]'); if (c && c.checked && data[i].variant) { t += data[i].price; n++; } });
    if (total) total.textContent = Premium.money(t);
    if (addAll) addAll.disabled = n === 0;
  }
  function show(i) {
    if (i === active) i = -1;
    active = i;
    root.classList.toggle('has-active', i > -1);
    dots.forEach(function (d, j) { d.classList.toggle('is-active', j === i); d.setAttribute('aria-expanded', j === i); });
    items.forEach(function (d, j) { d.classList.toggle('is-active', j === i); });
    if (i < 0) { pop.hidden = true; return; }
    var d = data[i] || {}, dot = dots[i], x = parseFloat(dot.style.getPropertyValue('--x')), y = parseFloat(dot.style.getPropertyValue('--y'));
    var img = root.querySelector('[data-item="' + i + '"] .pm-look__thumb').innerHTML;
    pop.querySelector('[data-pop-img]').innerHTML = img;
    pop.querySelector('[data-pop-title]').textContent = d.variant ? d.title : root.querySelector('[data-item="' + i + '"] .pm-look__title').textContent;
    pop.querySelector('[data-pop-price]').textContent = d.variant ? Premium.money(d.price) : '';
    var link = pop.querySelector('[data-pop-link]'); link.href = d.url || '#'; link.hidden = !d.url;
    pop.hidden = false;
    // Keep the card inside the photo: beside the dot where there is room, otherwise clamped within the edges.
    var W = stage.clientWidth, H = stage.clientHeight, pw = pop.offsetWidth, ph = pop.offsetHeight, px = x / 100 * W, py = y / 100 * H;
    var left = px + 26 + pw <= W - 8 ? px + 26 : (px - 26 - pw >= 8 ? px - 26 - pw : Math.min(Math.max(8, px - pw / 2), W - pw - 8));
    var top = (left > px - 26 && left < px + 26 - pw) ? py + 30 : py - ph / 2;
    if (left <= px && left + pw >= px) top = py + 30 + ph > H - 8 ? py - 30 - ph : py + 30;
    pop.style.left = left + 'px'; pop.style.right = '';
    pop.style.top = Math.min(Math.max(8, top), H - ph - 8) + 'px';
  }
  dots.forEach(function (d, i) { d.addEventListener('click', function (e) { e.stopPropagation(); show(i); }); });
  items.forEach(function (it, i) {
    it.addEventListener('mouseenter', function () { if (matchMedia('(hover: hover)').matches && active !== i) show(i); });
    var c = it.querySelector('[data-check]'); if (c) c.addEventListener('change', sum);
  });
  stage.addEventListener('click', function (e) { if (!e.target.closest('[data-pop]')) show(-1); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && active > -1) show(-1); });
  if (addAll) addAll.addEventListener('click', function () {
    var list = [];
    items.forEach(function (it, i) { var c = it.querySelector('[data-check]'); if (c && c.checked && data[i].variant) list.push({ id: data[i].variant, quantity: 1 }); });
    Premium.add(list, addAll);
  });
  sum();
  document.addEventListener('shopify:block:select', function (e) { var i = dots.indexOf(e.target); if (i > -1) { active = -1; show(i); } });
});

/* ---- premium: spin-360.js */
Premium.on('[data-pm-spin]', function (root) {
  var view = root.querySelector('[data-view]'), frames = [].slice.call(root.querySelectorAll('img[data-frame]')), add = root.querySelector('[data-add]');
  var n = frames.length, pos = 0, auto = root.dataset.auto === 'true' && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (add) add.addEventListener('click', function () { var d = Premium.data(add.parentNode); Premium.add([{ id: d.variant, quantity: 1 }], add); });
  if (root.querySelector('model-viewer')) {
    if (window.Shopify && Shopify.loadFeatures) Shopify.loadFeatures([{ name: 'model-viewer-ui', version: '1.0' }, { name: 'shopify-xr', version: '1.0' }], function () {});
    view.addEventListener('pointerdown', function () { root.classList.add('is-used'); });
    return;
  }
  var single = n <= 1; if (single) view.classList.add('is-single');
  var img = single ? (frames[0] || view.querySelector('.pm-spin__frame')) : null;
  // Photo sequence: pos is in frame steps. One photo: pos is a gentle tilt in degrees.
  function draw() {
    if (single) {
      var ry = Math.max(-18, Math.min(18, Math.sin(pos * Math.PI / 180) * 18));
      if (img) { img.style.setProperty('--ry', ry.toFixed(2) + 'deg'); img.style.setProperty('--rx', (Math.cos(pos * Math.PI / 90) * 3).toFixed(2) + 'deg'); }
      view.style.setProperty('--shine', (ry * 1.6).toFixed(1) + '%'); return;
    }
    var k = ((Math.round(pos) % n) + n) % n;
    frames.forEach(function (f, i) { f.classList.toggle('is-on', i === k); });
  }
  var dragging = false, x0 = 0, p0 = 0, timer = null, last = 0;
  function tick(t) { if (!auto || dragging) return; if (last) pos += (t - last) * (single ? .03 : n / 6000); last = t; draw(); timer = requestAnimationFrame(tick); }
  function stop() { auto = false; cancelAnimationFrame(timer); root.classList.add('is-used'); }
  view.addEventListener('pointerdown', function (e) { stop(); dragging = true; x0 = e.clientX; p0 = pos; view.classList.add('is-drag'); view.setPointerCapture(e.pointerId); });
  view.addEventListener('pointermove', function (e) { if (!dragging) return; pos = p0 + (e.clientX - x0) * (single ? .6 : n / view.clientWidth); draw(); });
  view.addEventListener('pointerup', function () { dragging = false; view.classList.remove('is-drag'); });
  view.addEventListener('pointercancel', function () { dragging = false; view.classList.remove('is-drag'); });
  view.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { stop(); pos += (e.key === 'ArrowRight' ? 1 : -1) * (single ? 15 : 1); draw(); e.preventDefault(); } });
  draw();
  if (auto && 'IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting && auto) { last = 0; timer = requestAnimationFrame(tick); } else cancelAnimationFrame(timer); }).observe(view);
});

/* ---- premium: stack-builder.js */
Premium.on('[data-pm-stack]', function (root) {
  var goals = [].slice.call(root.querySelectorAll('[data-goal]')), sets = [].slice.call(root.querySelectorAll('[data-set]'));
  var layers = root.querySelector('[data-layers]'), label = root.querySelector('[data-fill-label]');
  var total = root.querySelector('[data-total]'), was = root.querySelector('[data-was]'), add = root.querySelector('[data-add]');
  var t = {}; try { t = JSON.parse(root.querySelector('[data-strings]').textContent); } catch (e) {}
  var NS = 'http://www.w3.org/2000/svg', TOP = 96, BOTTOM = 315, current = [];
  root.querySelector('.pm-stack__goals').style.setProperty('--n', goals.length);
  function shade(hex, k) { // lighten (k>0) or darken (k<0) a #rrggbb colour
    var n = parseInt((hex || '#888888').slice(1), 16), r = n >> 16, g = n >> 8 & 255, b = n & 255;
    var f = function (c) { return Math.round(k > 0 ? c + (255 - c) * k : c * (1 + k)); };
    return 'rgb(' + f(r) + ',' + f(g) + ',' + f(b) + ')';
  }
  function fill(i) {
    var set = sets[i], items = [].slice.call(set.querySelectorAll('.pm-stack__item')), color = goals[i].style.getPropertyValue('--g').trim();
    current = items.map(function (it) { return Premium.data(it); }).filter(function (d) { return d.variant; });
    var n = items.length, h = n ? (BOTTOM - TOP - 20) / n : 0;
    layers.innerHTML = '';
    items.forEach(function (it, k) {
      var c = shade(color, k % 2 ? .35 * (k / Math.max(n - 1, 1)) + .15 : -.12 + .3 * (k / Math.max(n - 1, 1)));
      it.style.setProperty('--c', c);
      var g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'pm-stack__layer');
      var r = document.createElementNS(NS, 'rect'); r.setAttribute('x', 0); r.setAttribute('width', 200); r.setAttribute('fill', c);
      r.setAttribute('y', BOTTOM); r.setAttribute('height', 0);
      g.appendChild(r); layers.appendChild(g);
      setTimeout(function () { r.setAttribute('y', BOTTOM - h * (k + 1)); r.setAttribute('height', h + 1); }, 120 + k * 260);
      if (k === n - 1) {
        var w = document.createElementNS(NS, 'path'); w.setAttribute('class', 'pm-stack__wave'); w.setAttribute('fill', c);
        var y = BOTTOM - h * n; w.setAttribute('d', 'M0 ' + (y + 1) + ' q 15 -8 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 V ' + (y + 6) + ' H 0 z');
        w.style.opacity = 0; g.appendChild(w); setTimeout(function () { w.style.opacity = 1; }, 120 + k * 260 + 600);
      }
    });
    label.textContent = (t.fill || '').replace('[count]', n);
    var v = 0; current.forEach(function (d) { v += d.price; });
    var d = +t.discount || 0;
    total.textContent = Premium.money(d ? Math.round(v * (100 - d) / 100) : v);
    was.hidden = !d || !v; was.textContent = Premium.money(v);
    add.disabled = !current.length;
  }
  function pick(i) {
    goals.forEach(function (g, k) { g.setAttribute('aria-selected', k === i); });
    sets.forEach(function (s, k) { s.hidden = k !== i; if (k === i) s.querySelectorAll('.pm-stack__item').forEach(function (x) { x.style.animation = 'none'; void x.offsetWidth; x.style.animation = ''; }); });
    fill(i);
  }
  goals.forEach(function (g, i) { g.addEventListener('click', function () { pick(i); }); });
  add.addEventListener('click', function () { Premium.add(current.map(function (d) { return { id: d.variant, quantity: 1 }; }), add); });
  document.addEventListener('shopify:block:select', function (e) { var i = goals.indexOf(e.target); if (i > -1) pick(i); });
  if (goals.length) pick(0);
});

/* ---- premium: style-switcher.js */
Premium.on('[data-pm-style]', function (root) {
  var sws = [].slice.call(root.querySelectorAll('[data-opt]')), slides = [].slice.call(root.querySelectorAll('[data-slide]'));
  var infos = [].slice.call(root.querySelectorAll('[data-info]')), name = root.querySelector('[data-name]'), media = root.querySelector('.pm-style__media');
  function pick(i) {
    sws.forEach(function (b, k) { b.setAttribute('aria-checked', k === i); });
    slides.forEach(function (sl, k) { sl.classList.toggle('is-on', k === i); });
    infos.forEach(function (x, k) { x.hidden = k !== i; });
    name.textContent = sws[i].getAttribute('aria-label');
    media.classList.remove('is-flash'); void media.offsetWidth; media.classList.add('is-flash');
  }
  sws.forEach(function (b, i) {
    b.addEventListener('click', function () { pick(i); });
    b.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0; if (d) { e.preventDefault(); var j = (i + d + sws.length) % sws.length; pick(j); sws[j].focus(); } });
  });
  infos.forEach(function (x) { var b = x.querySelector('[data-add]'); b.addEventListener('click', function () { var d = Premium.data(x); Premium.add([{ id: d.variant, quantity: 1 }], b); }); });
  document.addEventListener('shopify:block:select', function (e) { var i = sws.indexOf(e.target); if (i > -1) pick(i); });
});
