/* Siddhesh Salunke — Portfolio interactions */

(() => {
  // ---------- Custom cursor ----------
  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');
  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    const animate = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();

    const interactives = 'a, button, .work__card, .contact__link, .btn, .patent__link';
    document.querySelectorAll(interactives).forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  }

  // ---------- Mobile nav ----------
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // ---------- Reveal on scroll ----------
  const targets = document.querySelectorAll(
    '.section, .work__card, .timeline__item, .metric, .contact__link, .press'
  );
  targets.forEach((t) => t.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('is-in'));
  }

  // ---------- Active section in nav (subtle) ----------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav a');

  if ('IntersectionObserver' in window && sections.length) {
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((a) => {
            const matches = a.getAttribute('href') === `#${id}`;
            a.style.color = matches ? 'var(--cyan)' : '';
          });
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => sio.observe(s));
  }
})();
