/* Load more / infinite scroll for collections (2.3.0). Loaded only when the Product grid uses one of those options.
   - Fetches the next real page and appends its products, so filters and sorting carry over in the page URL.
   - The page links stay in the HTML for search engines; they're only hidden from view here.
   - Coming back from a product puts shoppers back where they were, with the products they'd loaded. */
(() => {
  'use strict';
  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));
  const session = {
    get(k) { try { return JSON.parse(window.sessionStorage.getItem(k) || 'null'); } catch (e) { return null; } },
    set(k, v) { try { window.sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage full or blocked */ } },
    drop(k) { try { window.sessionStorage.removeItem(k); } catch (e) { /* storage blocked */ } }
  };
  const navType = () => { const e = performance.getEntriesByType && performance.getEntriesByType('navigation')[0]; return e ? e.type : ''; };

  function wishSync(scope) {
    let list = [];
    try { list = JSON.parse(window.localStorage.getItem('theme:wishlist') || '[]'); } catch (e) { /* storage blocked */ }
    const set = new Set(list.map((x) => x.handle));
    $$('[data-wish]', scope).forEach((b) => b.setAttribute('aria-pressed', String(set.has(b.dataset.wish))));
  }

  function init(box) {
    if (box.dataset.ready) return;
    const section = box.closest('.shopify-section') || doc;
    const grid = $('[data-load-grid]', section);
    if (!grid) return;
    box.dataset.ready = '1';
    const btn = $('[data-load-more-btn]', box);
    const countEl = $('[data-load-more-count]', box);
    const bar = $('[data-load-more-bar]', box);
    const pages = $('.pagination', section);
    const nav = pages ? pages.closest('nav') : null;
    if (nav) nav.hidden = true;
    box.classList.add('is-js');

    const key = `loadmore:${window.location.pathname}${window.location.search}`;
    const total = parseInt(box.dataset.total, 10) || 0;
    let next = box.dataset.next || '';
    let seen = parseInt(box.dataset.seen, 10) || 0;
    let added = '';
    let loading = false;

    const paint = () => {
      if (countEl) countEl.textContent = box.dataset.text.replace('[shown]', seen).replace('[total]', total);
      if (bar) bar.style.setProperty('--p', `${total ? Math.min(100, Math.round((seen * 100) / total)) : 100}%`);
      if (btn) {
        btn.hidden = !next;
        if (next) btn.href = next;
      }
    };
    const save = () => { if (added) session.set(key, { added, next, seen, y: window.scrollY }); };
    const append = (html) => {
      const tpl = doc.createElement('template');
      tpl.innerHTML = html;
      const items = Array.from(tpl.content.children);
      items.forEach((li) => { li.classList.add('is-in'); $$('[data-reveal]', li).forEach((x) => x.classList.add('is-in')); });
      grid.append(...items);
      wishSync(grid);
      return items;
    };

    async function load(fromButton) {
      if (loading || !next) return;
      loading = true;
      box.setAttribute('aria-busy', 'true');
      const label = btn ? btn.textContent : '';
      if (btn) { btn.classList.add('is-loading'); btn.textContent = btn.dataset.loading || label; }
      try {
        const res = await fetch(next);
        if (!res.ok) throw new Error(String(res.status));
        const page = new DOMParser().parseFromString(await res.text(), 'text/html');
        const fresh = $('[data-load-grid]', page);
        const freshBox = $('[data-load-more]', page);
        const html = fresh ? Array.from(fresh.children).map((li) => li.outerHTML).join('') : '';
        const items = append(html);
        added += html;
        seen += items.length;
        next = freshBox ? freshBox.dataset.next || '' : '';
        save();
        if (fromButton) {
          const link = items[0] && $('a[href]', items[0]);
          if (link) link.focus({ preventScroll: true });
        }
      } catch (err) {
        // Fall back to the real next page.
        if (fromButton && next) window.location.href = next;
      } finally {
        loading = false;
        box.removeAttribute('aria-busy');
        if (btn) { btn.classList.remove('is-loading'); btn.textContent = label; }
        paint();
        if (box.dataset.loadMore === 'infinite') queueMicrotask(checkNear);
      }
    }

    // Restore what was loaded when the shopper comes back with the browser's Back button.
    const saved = session.get(key);
    if (saved && navType() === 'back_forward' && saved.added) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      added = saved.added;
      append(saved.added);
      next = saved.next;
      seen = saved.seen;
      const y = saved.y || 0;
      const go = () => window.scrollTo(0, y);
      requestAnimationFrame(() => requestAnimationFrame(go));
      window.addEventListener('load', go, { once: true });
    } else {
      session.drop(key);
    }
    paint();

    if (btn) btn.addEventListener('click', (e) => { e.preventDefault(); load(true); });
    window.addEventListener('pagehide', save);
    grid.addEventListener('click', (e) => { if (e.target.closest('a[href]')) save(); });

    function checkNear() {
      if (!next || loading) return;
      const r = box.getBoundingClientRect();
      if (r.top < window.innerHeight + 600) load(false);
    }
    if (box.dataset.loadMore === 'infinite' && 'IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { if (entries.some((en) => en.isIntersecting)) load(false); }, { rootMargin: '0px 0px 600px 0px' }).observe(box);
    }
  }

  const run = (scope = doc) => $$('[data-load-more]', scope).forEach(init);
  doc.addEventListener('shopify:section:load', (e) => run(e.target));
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', () => run()); else run();
})();
