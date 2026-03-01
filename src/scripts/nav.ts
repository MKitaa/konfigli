// Nav scroll behavior
const nav = document.getElementById('nav');
const navToggle = nav?.querySelector('.nav__toggle');
const navMenu = nav?.querySelector('.nav__menu');
const navLinks = nav?.querySelectorAll('.nav__link');

// Scrolled state
let lastScroll = 0;

function updateNavState() {
  if (!nav) return;
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }

  lastScroll = scrollY;
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

// Mobile toggle
navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('is-open');
  navMenu?.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute(
    'aria-label',
    isOpen ? 'Zamknij menu' : 'Otwórz menu'
  );

  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks?.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('is-open');
    navMenu?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks?.forEach((link) => {
          const href = link.getAttribute('href');
          link.classList.toggle('is-active', href === `#${id}`);
        });
      }
    }
  },
  {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));
