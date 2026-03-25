// Theme toggle — persists choice in localStorage
const STORAGE_KEY = 'konfigli-theme';

function getPreferredTheme(): string {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
}

// Apply immediately
applyTheme(getPreferredTheme());

// Toggle button
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}
