import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  // Default reveal (fade + slide up)
  ScrollTrigger.batch('.reveal:not(.reveal--scale)', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        onComplete: () => {
          elements.forEach((el) => el.classList.add('is-visible'));
        },
      });
    },
    start: 'top 85%',
    once: true,
  });

  // Scale variant for testimonials
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
    start: 'top 85%',
    once: true,
  });

  // Timeline line grow
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

  // CountUp animation for [data-count-target] elements
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
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      },
    });
  });

  // Card 3D mouse tracking
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
} else {
  // Show all reveal elements immediately
  document.querySelectorAll('.reveal, .reveal--scale').forEach((el) => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });

  const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
  if (timelineLine) {
    timelineLine.style.transform = 'scaleY(1)';
  }

  // Set count targets to final value immediately
  document.querySelectorAll('[data-count-target]').forEach((el) => {
    const target = el.getAttribute('data-count-target') || '0';
    el.textContent = target;
  });
}
