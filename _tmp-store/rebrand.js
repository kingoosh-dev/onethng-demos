/* One Thng rebrand: 3D card stage driven by scroll, tilt cards, step line. No dependencies. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var smooth = function (t) { t = clamp(t, 0, 1); return t * t * t * (t * (t * 6 - 15) + 10); };

  function Stage(root) {
    var sticky = root.querySelector('.rb-stage__sticky');
    var group = root.querySelector('[data-rb-cards]');
    var cards = [].slice.call(root.querySelectorAll('[data-rb-card]'));
    var layers = [].slice.call(root.querySelectorAll('[data-rb-panel]'));
    var rail = [].slice.call(root.querySelectorAll('.rb-rail__item'));
    var n = cards.length, states = n + 2;
    if (!n) return;
    var colors = cards.map(function (c) { return c.style.getPropertyValue('--c') || ''; });
    var W = 0, H = 0, wide = true, cw = 0, ch = 0, top = 0, range = 1, heroB = 0, endB = 0, hdr = 68, panT = 0;
    var bottomOf = function (sel) { var el = root.querySelector(sel); return el ? el.offsetTop + el.offsetHeight : 0; };
    var cur = 0, target = 0, mx = 0, my = 0, tmx = 0, tmy = 0, visible = false, raf = 0, lastActive = -1;

    root.classList.add('is-live');

    function measure() {
      W = sticky.clientWidth; H = sticky.clientHeight; wide = W >= 900;
      cw = wide ? clamp(Math.min(W * 0.125, H * 0.25), 110, 230) : clamp(Math.min(W * 0.27, H * 0.155), 78, 150);
      ch = cw * 1266 / 585;
      heroB = bottomOf('.rb-hero .rb-actions'); endB = bottomOf('.rb-panel--end .rb-actions');
      hdr = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 68;
      panT = H;
      [].forEach.call(root.querySelectorAll('.rb-panel:not(.rb-panel--end) .rb-panel__body'), function (b) { panT = Math.min(panT, b.offsetTop); });
      root.style.setProperty('--cw', cw.toFixed(1) + 'px');
      var r = root.getBoundingClientRect();
      top = r.top + window.pageYOffset; range = Math.max(1, root.offsetHeight - window.innerHeight);
    }

    // Where card i sits in a given state. x/y/z in px from the stage centre.
    function pose(state, i) {
      var m = (n - 1) / 2, d = i - m, a = Math.abs(d);
      if (state === 0) { // hero fan, squeezed so any number of cards spans the same width as five
        if (n > 5) { d = d * 4 / (n - 1); a = Math.abs(d); }
        return wide
          ? { x: W * 0.23 + d * cw * 0.66, y: H * 0.03 + a * a * 9, z: -a * 110, ry: -d * 13 - 10, rx: 5, rz: d * 3.2, s: 1, o: 1, lab: 0, glow: 0.3 }
          : (function () { var s0 = clamp((H - heroB - 20) / ch, 0.5, 1); return { x: d * cw * 0.62 * s0, y: H / 2 - ch * s0 / 2 - 8 + a * a * 5, z: -a * 90, ry: -d * 14, rx: 8, rz: d * 3.5, s: s0, o: 1, lab: 0, glow: 0.28 }; })();
      }
      if (state === n + 1) { // bundle line-up
        var fit = wide ? Math.min(1.15, (W * 0.8) / (cw * (n * 1.14)), (H * 0.33) / ch) : Math.min(1.2, (W * 0.94) / (cw * (n * 0.72)), (H * 0.4) / ch);
        return wide
          ? { x: d * cw * 1.14 * fit, y: H * 0.5 - (ch * fit) / 2 - 52, z: -a * 40, ry: -d * 7, rx: 4, rz: 0, s: fit, o: 1, lab: 1, glow: 0.4 }
          : (function () { var f2 = clamp(Math.min(fit, (H - endB - 22) / ch), 0.5, 1.2), dn = n > 5 ? d * 4 / (n - 1) : d, an = Math.abs(dn); return { x: d * cw * 0.7 * f2, y: H / 2 - ch * f2 / 2 - 10 + an * an * 5, z: -an * 70, ry: -dn * 12, rx: 8, rz: dn * 2.5, s: f2, o: 1, lab: 0, glow: 0.34 }; })();
      }
      var f = state - 1, k = i - f, ak = Math.abs(k); // focus on card f
      if (wide) {
        var fs = Math.min(2.4, (H * 0.74) / ch), fx = W * 0.2;
        if (k === 0) return { x: fx, y: H * 0.035, z: 140, ry: -16, rx: 4, rz: 0, s: fs, o: 1, lab: 0, glow: 0.62 };
        return { x: fx + (k > 0 ? 1 : -1) * (cw * fs * 0.62 + (ak - 1) * cw * 0.8), y: H * 0.035, z: -420 - ak * 200, ry: -k * 16 - 16, rx: 4, rz: 0, s: fs * 0.82, o: clamp(0.5 - ak * 0.14, 0, 1), lab: 0, glow: 0.1 };
      }
      var room = panT - hdr - 20, ms = clamp(Math.min(2.6, room / ch), 0.7, 2.6), fy = (hdr + 6 + panT) / 2 - H / 2;
      if (k === 0) return { x: 0, y: fy, z: 120, ry: -10, rx: 4, rz: 0, s: ms, o: 1, lab: 0, glow: 0.6 };
      return { x: (k > 0 ? 1 : -1) * (cw * ms * 0.74 + (ak - 1) * cw * 0.9), y: fy, z: -380 - ak * 200, ry: -k * 22, rx: 4, rz: 0, s: ms * 0.8, o: clamp(0.5 - ak * 0.16, 0, 1), lab: 0, glow: 0.1 };
    }

    function render(time) {
      var t = cur * (states - 1), a = Math.min(states - 2, Math.floor(t)), f = t - a;
      var e = smooth((f - 0.22) / 0.56), te = a + e; // hold on each state, glide between
      var active = Math.round(te);
      var keys = ['x', 'y', 'z', 'ry', 'rx', 'rz', 's', 'o', 'lab', 'glow'];
      for (var i = 0; i < n; i++) {
        var p = pose(a, i), q = pose(a + 1, i), v = {};
        for (var j = 0; j < keys.length; j++) v[keys[j]] = lerp(p[keys[j]], q[keys[j]], e);
        var bob = Math.sin(time / 1400 + i * 1.3) * 7, swing = Math.sin(e * Math.PI) * -22 * (i % 2 ? 1 : -0.6);
        var ry = v.ry + swing + Math.sin(time / 2100 + i) * 2.2;
        cards[i].style.transform = 'translate(-50%,-50%) translate3d(' + v.x.toFixed(1) + 'px,' + (v.y + bob).toFixed(1) + 'px,' + v.z.toFixed(1) + 'px) rotateX(' + v.rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) rotateZ(' + v.rz.toFixed(2) + 'deg) scale(' + v.s.toFixed(3) + ')';
        cards[i].style.opacity = v.o.toFixed(3);
        cards[i].style.zIndex = String(Math.round(1000 + v.z));
        cards[i].style.setProperty('--lab', v.lab.toFixed(2));
        cards[i].style.setProperty('--glow', v.glow.toFixed(2));
        cards[i].style.setProperty('--gx', (50 + ry * 2.2 + mx * 30).toFixed(1) + '%');
      }
      group.style.transform = 'rotateY(' + (mx * 5).toFixed(2) + 'deg) rotateX(' + (-my * 4).toFixed(2) + 'deg)';
      for (var l = 0; l < layers.length; l++) {
        var s = +layers[l].getAttribute('data-rb-panel'), dist = te - s, op = clamp(1 - Math.abs(dist) * 2.6, 0, 1);
        layers[l].style.opacity = op.toFixed(3);
        layers[l].style.transform = 'translate3d(0,' + (-dist * 46).toFixed(1) + 'px,0)';
        layers[l].classList.toggle('is-on', op > 0.01);
        layers[l].classList.toggle('is-active', s === active);
      }
      if (active !== lastActive) {
        lastActive = active;
        for (var r = 0; r < rail.length; r++) rail[r].classList.toggle('is-active', r === active - 1);
        var c = colors[active - 1];
        if (c) root.style.setProperty('--stage-c', c); else root.style.removeProperty('--stage-c');
        try { root.dispatchEvent(new CustomEvent('rb:state', { detail: { active: active, states: states } })); } catch (err) {}
      }
      root.classList.toggle('is-scrolling', cur > 0.012);
      root.classList.toggle('is-end', te > states - 1.6);
    }

    function tick(time) {
      raf = 0;
      target = clamp((window.pageYOffset - top) / range, 0, 1);
      cur = Math.abs(target - cur) < 0.0002 ? target : lerp(cur, target, 0.11);
      mx = lerp(mx, tmx, 0.06); my = lerp(my, tmy, 0.06);
      render(time || 0);
      if (visible) raf = requestAnimationFrame(tick);
    }
    function start() { if (!raf) raf = requestAnimationFrame(tick); }

    function goTo(state) {
      measure();
      var y = state === 0 ? 0 : top + range * (state / (states - 1));
      if (window.lenis && window.lenis.scrollTo) window.lenis.scrollTo(y, { duration: 1.4 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    }
    [].forEach.call(root.querySelectorAll('[data-rb-goto]'), function (el) {
      el.addEventListener('click', function (ev) { ev.preventDefault(); goTo(+el.getAttribute('data-rb-goto')); });
    });
    root.addEventListener('pointermove', function (ev) {
      if (ev.pointerType === 'touch') return;
      tmx = (ev.clientX / window.innerWidth - 0.5) * 2; tmy = (ev.clientY / window.innerHeight - 0.5) * 2;
    });

    measure();
    cur = target = clamp((window.pageYOffset - top) / range, 0, 1);
    render(0);
    window.addEventListener('resize', function () { measure(); start(); });
    window.addEventListener('load', measure);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); }, { rootMargin: '200px' }).observe(root);
    } else { visible = true; start(); }
    root.__rb = { set: function (p) { cur = target = p; render(0); }, states: states, goTo: goTo };
    if (window.location.hash === '#rb-themes') {
      requestAnimationFrame(function () { measure(); window.scrollTo(0, top + range * (1 / (states - 1))); });
    }
  }

  function tilt(el) {
    if (reduce || !window.matchMedia('(hover: hover)').matches) return;
    el.addEventListener('pointermove', function (ev) {
      var r = el.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
      el.style.setProperty('--ry', ((x - 0.5) * 9).toFixed(2) + 'deg');
      el.style.setProperty('--rx', ((0.5 - y) * 9).toFixed(2) + 'deg');
      el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      el.style.setProperty('--lit', '1');
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--lit', '0');
    });
  }

  function lines(list) {
    var els = [].slice.call(list);
    if (!els.length) return;
    var on = false;
    var upd = function () {
      on = false;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--line', clamp((window.innerHeight * 0.7 - r.top) / Math.max(1, r.height), 0, 1).toFixed(3));
      });
    };
    window.addEventListener('scroll', function () { if (!on) { on = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  // Fallback reveal in case the theme's own reveal script is off.
  function reveals() {
    var els = [].slice.call(document.querySelectorAll('.rb-section [data-reveal]'));
    if (!els.length || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // Bottom tab bar: keep its height in a CSS variable, and on the homepage follow the 3D stage.
  function tabs() {
    var bar = document.querySelector('[data-rb-tabs]');
    if (!bar) return;
    var setH = function () {
      var h = window.getComputedStyle(bar).display === 'none' ? 0 : bar.offsetHeight;
      document.documentElement.style.setProperty('--rb-tabs-h', h + 'px');
    };
    setH();
    if (!bar.__rb) { bar.__rb = 1; window.addEventListener('resize', setH); }
    var stage = document.querySelector('[data-rb-stage]');
    if (!stage || stage.__rbTabs) return;
    stage.__rbTabs = 1;
    var all = [].slice.call(bar.querySelectorAll('.rb-tab'));
    var home = bar.querySelector('[data-stage="0"]'), themes = bar.querySelector('[data-stage="1"]');
    var act = 0, inStage = true;
    var paint = function () {
      var t = inStage && act >= 1 && themes ? themes : home;
      if (!t) return;
      all.forEach(function (x) { var on = x === t; x.classList.toggle('is-active', on); if (on) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current'); });
    };
    stage.addEventListener('rb:state', function (e) { act = e.detail.active; paint(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { inStage = en[0].isIntersecting; paint(); }, { rootMargin: '0px 0px -50% 0px' }).observe(stage);
    }
    [].forEach.call(bar.querySelectorAll('[data-stage]'), function (el) {
      el.addEventListener('click', function (ev) {
        if (!stage.__rb || !stage.__rb.goTo) return;
        ev.preventDefault();
        stage.__rb.goTo(+el.getAttribute('data-stage'));
      });
    });
  }

  function init() {
    tabs();
    if (!reduce) [].forEach.call(document.querySelectorAll('[data-rb-stage]'), function (el) { if (!el.__rb) Stage(el); });
    [].forEach.call(document.querySelectorAll('[data-rb-tilt]'), tilt);
    lines(document.querySelectorAll('[data-rb-line]'));
    reveals();
    tabs();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', init);
})();
