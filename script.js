const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const filterButtons = document.querySelectorAll('[data-filter]');
const workCards = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  workCards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

document.querySelectorAll('.faq button').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('article');
  const open = item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.querySelector('span').textContent = open ? '−' : '+';
}));

const contactDialog = document.querySelector('#contact-dialog');
let contactTrigger = null;
document.querySelectorAll('[data-contact-open]').forEach(button => {
  button.addEventListener('click', () => {
    contactTrigger = button;
    contactDialog.showModal();
    document.body.classList.add('contact-dialog-open');
  });
});
document.querySelector('.contact-dialog-close')?.addEventListener('click', () => contactDialog.close());
contactDialog?.addEventListener('click', event => {
  if (event.target === contactDialog) contactDialog.close();
});
contactDialog?.addEventListener('close', () => {
  document.body.classList.remove('contact-dialog-open');
  contactTrigger?.focus({ preventScroll: true });
});

const cursorLight = document.querySelector('[data-cursor-light]');
const canUseCursorLight = window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (cursorLight && canUseCursorLight) {
  window.addEventListener('pointermove', event => {
    cursorLight.style.transform = `translate3d(${event.clientX - 210}px, ${event.clientY - 210}px, 0)`;
    cursorLight.classList.add('active');
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cursorLight.classList.remove('active'));
}
