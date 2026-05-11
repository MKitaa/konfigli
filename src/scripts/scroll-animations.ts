import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.innerWidth <= 900;

function showAllReveal() {
  document.querySelectorAll<HTMLElement>('.reveal, .reveal--scale').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.classList.add('is-visible');
  });
  document.querySelectorAll('[data-count-target]').forEach((el) => {
    el.textContent = el.getAttribute('data-count-target') || '0';
  });
  const timelineLine = document.querySelector<HTMLElement>('.timeline-line');
  if (timelineLine) timelineLine.style.transform = 'scaleY(1)';
}

// Mobile or reduced motion: show everything immediately, no animations
if (isMobile || prefersReducedMotion) {
  showAllReveal();
} else {
  // Desktop with animations
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const navEl = document.getElementById('nav');
          const navHeight = navEl ? navEl.offsetHeight : 72;
          const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
    }
  });

  ScrollTrigger.batch('.reveal:not(.reveal--scale)', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        onComplete: () => elements.forEach((el) => el.classList.add('is-visible')),
      });
    },
    start: 'top 88%',
    once: true,
  });

  ScrollTrigger.batch('.reveal--scale', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'back.out(1.4)',
        stagger: 0.2,
      });
    },
    start: 'top 88%',
    once: true,
  });

  const timelineLine = document.querySelector('.timeline-line');
  if (timelineLine) {
    gsap.to(timelineLine, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: timelineLine.parentElement,
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1,
      },
    });
  }

  document.querySelectorAll('[data-count-target]').forEach((el) => {
    const target = parseInt(el.getAttribute('data-count-target') || '0', 10);
    const obj = { value: 0 };
    ScrollTrigger.create({
      trigger: el.closest('.configurator__stats') || el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.value).toString(); },
        });
      },
    });
  });

  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card-3d').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const el = card as HTMLElement;
        const rect = el.getBoundingClientRect();
        const x = ((e as MouseEvent).clientX - rect.left) / rect.width * 100;
        const y = ((e as MouseEvent).clientY - rect.top) / rect.height * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }
}
