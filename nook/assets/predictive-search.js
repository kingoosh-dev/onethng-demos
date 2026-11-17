/* Live search suggestions (2.3.0). Loaded only when "Show live search suggestions" is on in the Header section.
   The search form is unchanged: Enter with nothing highlighted still goes to the full search page. */
(() => {
  'use strict';
  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));

  function init(box) {
    if (!box || box.dataset.ready) return;
    const input = doc.getElementById(box.dataset.input);
    const list = $('[data-predictive-list]', box);
    const status = $('[data-predictive-status]', box);
    if (!input || !list) return;
    box.dataset.ready = '1';

    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-controls', list.id);
    input.setAttribute('aria-expanded', 'false');

    const cache = new Map();
    let controller = null;
    let timer = null;
    let active = -1;
    const options = () => $$('[role="option"]', list);

    const close = () => {
      box.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      active = -1;
    };
    const open = () => {
      box.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    };
    const highlight = (i) => {
      const opts = options();
      if (!opts.length) return;
      active = (i + opts.length) % opts.length;
      opts.forEach((o, n) => { o.setAttribute('aria-selected', String(n === active)); o.classList.toggle('is-active', n === active); });
      const el = opts[active];
      input.setAttribute('aria-activedescendant', el.id);
      el.scrollIntoView({ block: 'nearest' });
    };
    const show = (html) => {
      const res = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-ps-results]');
      if (!res) { close(); return; }
      list.innerHTML = res.innerHTML;
      active = -1;
      input.removeAttribute('aria-activedescendant');
      if (status) status.textContent = res.dataset.psStatus || '';
      open();
    };

    const search = (q) => {
      if (cache.has(q)) { show(cache.get(q)); return; }
      if (controller) controller.abort();
      controller = 'AbortController' in window ? new AbortController() : null;
      const params = new URLSearchParams({ q, section_id: 'predictive-search' });
      params.set('resources[type]', 'product,collection,page,article,query');
      params.set('resources[limit]', '6');
      params.set('resources[limit_scope]', 'each');
      params.set('resources[options][unavailable_products]', 'last');
      box.setAttribute('aria-busy', 'true');
      fetch(`${box.dataset.url}?${params.toString()}`, controller ? { signal: controller.signal } : {})
        .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
        .then((html) => {
          cache.set(q, html);
          if (input.value.trim() === q) show(html);
        })
        .catch(() => { /* aborted or offline: the normal search still works */ })
        .finally(() => box.removeAttribute('aria-busy'));
    };

    input.addEventListener('input', () => {
      clearTimeout(timer);
      const q = input.value.trim();
      if (q.length < 2) { close(); return; }
      timer = setTimeout(() => search(q), 220);
    });
    input.addEventListener('focus', () => { if (input.value.trim().length >= 2 && list.children.length) open(); });

    input.addEventListener('keydown', (e) => {
      if (box.hidden) {
        if (e.key === 'ArrowDown' && list.children.length && input.value.trim().length >= 2) { e.preventDefault(); open(); highlight(0); }
        return;
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); highlight(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active - 1); }
      else if (e.key === 'Home' && active > -1) { e.preventDefault(); highlight(0); }
      else if (e.key === 'End' && active > -1) { e.preventDefault(); highlight(options().length - 1); }
      else if (e.key === 'Enter' && active > -1) {
        const link = $('a', options()[active]);
        if (link) { e.preventDefault(); window.location.href = link.href; }
      } else if (e.key === 'Escape') {
        // First Escape closes the suggestions; the next one closes the search box as before.
        e.stopPropagation();
        close();
      }
    });

    list.addEventListener('mousemove', (e) => {
      const opt = e.target.closest('[role="option"]');
      if (!opt) return;
      const i = options().indexOf(opt);
      if (i !== active) {
        options().forEach((o, n) => { o.setAttribute('aria-selected', String(n === i)); o.classList.toggle('is-active', n === i); });
        active = i;
        input.setAttribute('aria-activedescendant', opt.id);
      }
    });

    // Close when the search box itself closes.
    const modal = box.closest('[data-search-modal]');
    if (modal) new MutationObserver(() => { if (modal.hidden) close(); }).observe(modal, { attributes: true, attributeFilter: ['hidden'] });
  }

  const run = () => $$('[data-predictive]').forEach(init);
  doc.addEventListener('shopify:section:load', run);
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', run); else run();
})();
