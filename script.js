/* ============================================================
   SANTANA MEDIA — SCRIPT
   ============================================================ */

(function () {
  'use strict';

  // ============ NAVBAR SCROLL STATE ============
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============ MOBILE MENU ============
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    const toggle = () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    };
    hamburger.addEventListener('click', toggle);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  // ============ REVEAL ON SCROLL ============
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ============================================================
  // ADAPTIVE GALLERY BUILDER
  // ============================================================
  // Pages can declare a gallery by placing a <div id="gallery"
  // data-images='[...JSON array of {src, caption?}...]'></div>.
  // We probe each image's natural dimensions, classify orientation,
  // and lay them out in cinematic rows that NEVER crop, stretch
  // or distort — each frame's container takes the image's true
  // aspect-ratio.

  function classify(ratio) {
    if (!ratio) return 'unknown';
    if (ratio > 1.7) return 'ultrawide';
    if (ratio > 1.15) return 'landscape';
    if (ratio > 0.85) return 'square';
    return 'portrait';
  }

  function probe(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ src, ratio: img.naturalWidth / img.naturalHeight });
      img.onerror = () => resolve({ src, ratio: 1.5 });
      img.src = src;
    });
  }

  function buildLayout(imgs) {
    const rows = [];
    let i = 0;
    while (i < imgs.length) {
      const a = imgs[i];
      const b = imgs[i + 1];
      const c = imgs[i + 2];
      const oa = classify(a.ratio);
      const ob = b ? classify(b.ratio) : null;
      const oc = c ? classify(c.ratio) : null;

      // Ultrawide → solo full width
      if (oa === 'ultrawide') {
        rows.push({ kind: 'solo-wide', items: [a] });
        i += 1;
        continue;
      }
      // Two portraits side-by-side
      if (oa === 'portrait' && ob === 'portrait') {
        rows.push({ kind: 'pair-portrait', items: [a, b] });
        i += 2;
        continue;
      }
      // Portrait + landscape asymmetric
      if (oa === 'portrait' && (ob === 'landscape' || ob === 'square')) {
        rows.push({ kind: 'asym', flipped: false, items: [a, b] });
        i += 2;
        continue;
      }
      if ((oa === 'landscape' || oa === 'square') && ob === 'portrait') {
        rows.push({ kind: 'asym', flipped: true, items: [a, b] });
        i += 2;
        continue;
      }
      // Two landscapes — stack solo each
      if (oa === 'landscape' && ob === 'landscape') {
        rows.push({ kind: 'solo-landscape', items: [a] });
        rows.push({ kind: 'solo-landscape', items: [b] });
        i += 2;
        continue;
      }
      // Triple squares
      if (oa === 'square' && ob === 'square' && oc === 'square') {
        rows.push({ kind: 'triple', items: [a, b, c] });
        i += 3;
        continue;
      }
      // Default solo
      rows.push({
        kind: (oa === 'landscape' || oa === 'square' || oa === 'ultrawide') ? 'solo-landscape' : 'solo-portrait',
        items: [a]
      });
      i += 1;
    }
    return rows;
  }

  function makeFrame(item, globalIndex) {
    const frame = document.createElement('div');
    frame.className = 'g-frame';
    frame.style.aspectRatio = item.ratio || 1.5;
    frame.dataset.index = globalIndex;
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => {
      img.classList.add('loaded');
      frame.classList.add('loaded');
    });
    img.addEventListener('error', () => {
      frame.classList.add('loaded');
    });
    frame.appendChild(img);
    frame.addEventListener('click', () => openLightbox(globalIndex));
    return frame;
  }

  function renderGallery(container, imgs) {
    container.innerHTML = '';
    const rows = buildLayout(imgs);
    let runningIndex = 0;
    rows.forEach((row, ri) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'g-row g-' + row.kind + (row.flipped ? ' flipped' : '');
      // Reveal animation per row
      rowEl.classList.add('reveal');

      row.items.forEach((item) => {
        const idx = imgs.indexOf(item);
        const frame = makeFrame(item, idx);
        rowEl.appendChild(frame);
      });
      container.appendChild(rowEl);
      runningIndex += row.items.length;
    });
    // Re-observe new reveal elements
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
      container.querySelectorAll('.reveal').forEach(el => io2.observe(el));
    }
  }

  // ============ LIGHTBOX ============
  let lbImages = [];
  let lbIndex = 0;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  function openLightbox(index) {
    if (!lb) return;
    lbIndex = index;
    updateLightbox();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
  function updateLightbox() {
    if (!lbImg || !lbImages.length) return;
    const item = lbImages[lbIndex];
    lbImg.src = item.src;
    if (lbCounter) {
      lbCounter.textContent =
        String(lbIndex + 1).padStart(2, '0') + ' / ' +
        String(lbImages.length).padStart(2, '0');
    }
  }
  function nextImage() {
    if (!lbImages.length) return;
    lbIndex = (lbIndex + 1) % lbImages.length;
    updateLightbox();
  }
  function prevImage() {
    if (!lbImages.length) return;
    lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
    updateLightbox();
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
  if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // ============ INIT GALLERY (if present) ============
  const galleryEl = document.getElementById('gallery');
  if (galleryEl) {
    const slug = galleryEl.getAttribute('data-category');
    if (slug && window.GALLERY_CONFIG && window.GALLERY_CONFIG[slug]) {
      const cfg = window.GALLERY_CONFIG[slug];
      const baseUrl = `../images/${slug}/`;
      const imgs = cfg.images.map(filename => ({ src: baseUrl + filename }));
      if (imgs.length) {
        Promise.all(imgs.map(item => probe(item.src).then(r => Object.assign({}, item, { ratio: r.ratio }))))
          .then((withRatios) => {
            lbImages = withRatios;
            renderGallery(galleryEl, withRatios);
          });
      }
    }
  }

  // ============ SMOOTH IN-PAGE ANCHOR SCROLL FIX ============
  // (default smooth scroll-behavior is fine; nothing more needed)

})();
