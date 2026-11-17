/* Swatches (2.3.0): availability on the product page swatches, and image preview on product card swatches.
   Loaded only when the variant picker uses the Swatches style or card swatches are switched on.
   Variant changes themselves are still handled by theme.js: swatches use the same radio inputs as the pills. */
(() => {
  'use strict';
  if (window.__themeSwatches) return;
  window.__themeSwatches = true;

  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));

  /* ---------------------------------------------------------------- Product page: mark values that can't be bought */
  function initPicker(picker) {
    if (picker.dataset.swatchReady) return;
    const holder = picker.closest('[data-product]');
    const jsonEl = holder && $('[data-product-json]', holder);
    if (!jsonEl) return;
    picker.dataset.swatchReady = '1';
    let product;
    try { product = JSON.parse(jsonEl.textContent); } catch (e) { return; }
    const sets = $$('fieldset', picker);
    const soldOut = picker.dataset.unavailable || '[value]';

    const update = () => {
      const selected = sets.map((fs) => { const c = $('input:checked', fs); return c ? c.value : null; });
      sets.forEach((fs, i) => {
        $$('[data-swatch-input]', fs).forEach((input) => {
          const ok = product.variants.some((v) => v.available && v.options[i] === input.value
            && v.options.every((o, j) => j === i || selected[j] == null || o === selected[j]));
          const label = input.closest('label');
          label.classList.toggle('is-unavailable', !ok);
          const text = $('[data-swatch-label]', label);
          if (text) text.textContent = ok ? text.dataset.name : soldOut.replace('[value]', text.dataset.name);
        });
      });
    };
    picker.addEventListener('change', update);
    update();
  }

  /* ---------------------------------------------------------------- Product cards: preview the variant image */
  function initCards(scope = doc) {
    $$('[data-card-swatches]', scope).forEach((row) => {
      if (row.dataset.ready) return;
      row.dataset.ready = '1';
      const card = row.closest('.card');
      const img = card && $('.card__img:not(.card__img--2)', card);
      if (!img) return;
      const original = { src: img.getAttribute('src'), srcset: img.getAttribute('srcset') };
      const show = (sw) => {
        if (!sw.dataset.img) return;
        img.removeAttribute('srcset');
        img.src = sw.dataset.img;
        card.classList.add('is-swatch-preview');
      };
      const reset = () => {
        if (!card.classList.contains('is-swatch-preview')) return;
        img.src = original.src;
        if (original.srcset) img.setAttribute('srcset', original.srcset);
        card.classList.remove('is-swatch-preview');
      };
      $$('[data-card-swatch]', row).forEach((sw) => {
        sw.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') show(sw); });
        sw.addEventListener('focus', () => show(sw));
      });
      row.addEventListener('pointerleave', reset);
      row.addEventListener('focusout', (e) => { if (!row.contains(e.relatedTarget)) reset(); });
    });
  }

  function init(scope = doc) {
    $$('[data-swatch-picker]', scope).forEach(initPicker);
    initCards(scope);
  }

  // Cards also arrive later: recommendations, load more and the theme editor.
  let queued = false;
  new MutationObserver((list) => {
    if (queued) return;
    const hit = list.some((m) => Array.from(m.addedNodes).some((n) => n.nodeType === 1 && (n.matches('[data-card-swatches], [data-swatch-picker]') || n.querySelector('[data-card-swatches], [data-swatch-picker]'))));
    if (!hit) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; init(); });
  }).observe(doc.body, { childList: true, subtree: true });

  doc.addEventListener('shopify:section:load', (e) => init(e.target));
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', () => init()); else init();
})();
