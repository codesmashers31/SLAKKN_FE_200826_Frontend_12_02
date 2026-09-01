const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const serviceButtons = document.querySelectorAll('.service-option');
const serviceSelect = document.querySelector('#service-select');
const showcase = document.querySelector('#solution-showcase');
const form = document.querySelector('#contact-form');
const notice = document.querySelector('#form-notice');

const solutionCopy = {
  'AI strategy & discovery': ['AI strategy & discovery', 'Turn a promising idea into a focused plan your whole team can believe in.'],
  'Intelligent experiences': ['Intelligent experiences', 'Create thoughtful customer moments that feel useful, timely and personal.'],
  'Workflow automation': ['Workflow automation', 'Free your team from repetitive work and make space for their best thinking.'],
  'Data & prediction': ['Data & prediction', 'See the signals hiding in your data and make your next decision with confidence.']
};

function setHeaderState() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  primaryNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  primaryNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

function selectService(service) {
  const [title, description] = solutionCopy[service];
  showcase.querySelector('h3').textContent = title;
  showcase.querySelector('p').textContent = description;
  serviceButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.service === service));
}

serviceButtons.forEach((button) => button.addEventListener('click', () => selectService(button.dataset.service)));
document.querySelector('[data-choose-current]').addEventListener('click', () => {
  const selected = document.querySelector('.service-option.is-active').dataset.service;
  serviceSelect.value = selected;
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => serviceSelect.focus(), 550);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    notice.textContent = 'A few details are still needed.';
    return;
  }
  const firstName = new FormData(form).get('name').trim().split(/\s+/)[0];
  notice.textContent = `Thanks, ${firstName}. Your message is captured in this demo—connect the form to an email service to send it live.`;
  form.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#current-year').textContent = new Date().getFullYear();
