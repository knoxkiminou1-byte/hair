const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
let lastFocused = null;

function closeMenu() {
  if (!menu) return;
  menu.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  lastFocused?.focus?.();
}

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      lastFocused = document.activeElement;
      document.body.style.overflow = 'hidden';
      const firstLink = menu.querySelector('a');
      firstLink?.focus();
    } else {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
    if (e.key === 'Tab' && menu.classList.contains('open')) {
      const focusables = [...menu.querySelectorAll('a,button')];
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
}

const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
});

const revealElements = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealElements.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const floatBtn = document.querySelector('.floating-book');
window.addEventListener('scroll', () => {
  if (!floatBtn) return;
  floatBtn.classList.toggle('show', window.scrollY > 360);
});

const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
const chips = [...document.querySelectorAll('.chip')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const tag = chip.dataset.filter;
    galleryItems.forEach((item) => {
      item.style.display = (tag === 'all' || item.dataset.tag === tag) ? '' : 'none';
    });
  });
});

const lightbox = document.querySelector('.lightbox');
if (lightbox && galleryItems.length) {
  const img = lightbox.querySelector('img');
  let index = 0;
  const visibleItems = () => galleryItems.filter((i) => i.style.display !== 'none');

  function openAt(i) {
    const items = visibleItems();
    if (!items.length) return;
    index = (i + items.length) % items.length;
    const current = items[index];
    img.src = current.querySelector('img').src;
    img.alt = current.querySelector('img').alt;
    lightbox.classList.add('open');
  }
  galleryItems.forEach((item) => item.addEventListener('click', () => {
    const items = visibleItems();
    openAt(items.indexOf(item));
  }));
  lightbox.querySelector('.close').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.querySelector('.next').addEventListener('click', () => openAt(index + 1));
  lightbox.querySelector('.prev').addEventListener('click', () => openAt(index - 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowRight') openAt(index + 1);
    if (e.key === 'ArrowLeft') openAt(index - 1);
  });
}

const bookingForm = document.querySelector('[data-booking-form]');
const newsletterForm = document.querySelector('[data-newsletter-form]');
const toast = document.querySelector('.toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Demo booking submitted! We\'ll contact you soon.');
  bookingForm.reset();
});
newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Thanks for joining our (demo) newsletter!');
  newsletterForm.reset();
});
