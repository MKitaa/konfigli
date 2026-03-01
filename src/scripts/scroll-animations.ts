import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  // Reveal animations for .reveal elements
  ScrollTrigger.batch('.reveal', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
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
  document.querySelectorAll('.reveal').forEach((el) => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });

  const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
  if (timelineLine) {
    timelineLine.style.transform = 'scaleY(1)';
  }
}
