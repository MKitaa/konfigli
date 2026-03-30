const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('nav-overlay');
const desktopLinks = document.querySelectorAll('.nav__desktop-links .nav__link');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

// Scrolled state
function updateNavState() {
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

// Open / close mobile menu
function openMenu() {
  mobileMenu?.classList.add('is-open');
  overlay?.classList.add('is-open');
  mobileMenu?.setAttribute('aria-hidden', 'false');
  navToggle?.classList.add('is-open');
  navToggle?.setAttribute('aria-expanded', 'true');
  navToggle?.setAttribute('aria-label', 'Zamknij menu');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu?.classList.remove('is-open');
  overlay?.classList.remove('is-open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  navToggle?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Otwórz menu');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
});

// Close on overlay click
overlay?.addEventListener('click', closeMenu);

// Close on mobile link click
mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Active section highlighting (desktop + mobile links)
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        allNavLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    }
  },
  { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));
