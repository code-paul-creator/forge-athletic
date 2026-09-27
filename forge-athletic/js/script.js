document.getElementById('year').textContent = new Date().getFullYear();

// header shadow/border on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// join form — client-side only (no backend wired up)
const form = document.getElementById('joinForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  if (!name || !phone) {
    status.textContent = 'Add your name and phone number so a coach can reach you.';
    return;
  }
  status.textContent = `Thanks, ${name.split(' ')[0]} — a coach will call ${phone} today.`;
  form.reset();
});
