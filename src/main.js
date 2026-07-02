/* main.js — gallery scroll-reveal + lightbox */

(function () {
  // ── Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.photo-item').forEach(el => io.observe(el));

  // ── Lightbox
  const lb = document.querySelector('.lightbox');
  if (!lb) return;

  const lbImg     = lb.querySelector('img');
  const lbCounter = lb.querySelector('.lightbox-counter');
  const lbClose   = lb.querySelector('.lightbox-close');
  const lbPrev    = lb.querySelector('.lightbox-prev');
  const lbNext    = lb.querySelector('.lightbox-next');
  let idx = 0;

  function items() { return document.querySelectorAll('.photo-item'); }

  function open(i) {
    idx = i;
    const all = items();
    lbImg.src = '';
    lbImg.src = all[i].dataset.full;
    lbCounter.textContent = (i + 1) + ' / ' + all.length;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function go(dir) {
    const all = items();
    idx = (idx + dir + all.length) % all.length;
    lbImg.src = '';
    lbImg.src = all[idx].dataset.full;
    lbCounter.textContent = (idx + 1) + ' / ' + all.length;
  }

  items().forEach((el, i) => el.addEventListener('click', () => open(i)));
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => go(-1));
  lbNext.addEventListener('click', () => go(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   go(-1);
    if (e.key === 'ArrowRight')  go(1);
  });

  // Swipe support
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX = null;
  });
})();
