// Global floating particles — subtle background animation
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileDevice = window.innerWidth <= 768;
if (!prefersReducedMotion && !isMobileDevice) {
  const canvas = document.createElement('canvas');
  canvas.id = 'global-particles';
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.2;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d')!;
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 12 : 25;

  interface Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    o: number;
  }

  let w = 0;
  let h = 0;
  const dots: Dot[] = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < count; i++) {
    dots.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.4 + 0.1,
    });
  }

  function getAccentColor(): string {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'light' ? '234, 88, 12' : '249, 115, 22';
  }

  let animId: number;

  function draw() {
    animId = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, w, h);
    const rgb = getAccentColor();

    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < 0) d.x = w;
      if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h;
      if (d.y > h) d.y = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, ${d.o})`;
      ctx.fill();
    }
  }

  draw();

  document.addEventListener(
    'astro:before-swap',
    () => cancelAnimationFrame(animId),
    { once: true },
  );
}
