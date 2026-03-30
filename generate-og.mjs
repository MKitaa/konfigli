/**
 * OG Image generator — run once: node generate-og.mjs
 * Outputs: public/images/og-image.png (1200×630)
 */

import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Isometric cube coordinates (proper proportions) ────────────
// edge = 145px, center at (930, 310)
// X-axis: (cos30°, sin30°) * edge = (125.6, 72.5)
// Y-axis: (-cos30°, sin30°) * edge = (-125.6, 72.5)
// Z-axis: (0, -1) * edge = (0, -145)
const cx = 930;
const edge = 145;
const ex = Math.round(edge * Math.cos(Math.PI / 6)); // 125
const ey = Math.round(edge * Math.sin(Math.PI / 6)); // 72
const ez = edge; // 145

// Base Y for the cube's "equator" (where X and Y axes meet)
const cy = 330;

// Top face vertices (rhombus, wide & shallow — correct isometric)
const T  = `${cx},${cy - ey}`;           // top
const R  = `${cx + ex},${cy}`;           // right
const B  = `${cx},${cy + ey}`;           // bottom
const L  = `${cx - ex},${cy}`;           // left

// Lower edge of cube (drop straight down by ez)
const RB = `${cx + ex},${cy + ez}`;
const BB = `${cx},${cy + ey + ez}`;
const LB = `${cx - ex},${cy + ez}`;

const svgStr = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <!-- Radial glow left -->
    <radialGradient id="glowL" cx="25%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#161616" stop-opacity="0"/>
    </radialGradient>
    <!-- Radial glow right -->
    <radialGradient id="glowR" cx="80%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#161616" stop-opacity="0"/>
    </radialGradient>
    <!-- Cube face gradients -->
    <linearGradient id="faceTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#f97316" stop-opacity="0.08"/>
    </linearGradient>
    <linearGradient id="faceRight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#f97316" stop-opacity="0.02"/>
    </linearGradient>
    <linearGradient id="faceLeft" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#f97316" stop-opacity="0.01"/>
    </linearGradient>
    <!-- Clip path to prevent content bleed -->
    <clipPath id="frame">
      <rect x="0" y="0" width="1200" height="630" rx="0"/>
    </clipPath>
  </defs>

  <!-- ── Background ── -->
  <rect width="1200" height="630" fill="#161616"/>
  <rect width="1200" height="630" fill="url(#glowL)"/>
  <rect width="1200" height="630" fill="url(#glowR)"/>

  <!-- ── Subtle dot grid (right side) ── -->
  <g opacity="0.06" clip-path="url(#frame)">
    ${Array.from({length: 12}, (_, row) =>
      Array.from({length: 14}, (_, col) =>
        `<circle cx="${660 + col * 46}" cy="${40 + row * 50}" r="1.5" fill="#f97316"/>`
      ).join('')
    ).join('')}
  </g>

  <!-- ── Divider line between text and cube area ── -->
  <line x1="660" y1="60" x2="660" y2="570" stroke="#292524" stroke-width="1"/>

  <!-- ── Right panel accent line ── -->
  <line x1="660" y1="60" x2="1160" y2="60" stroke="#292524" stroke-width="1"/>
  <line x1="660" y1="570" x2="1160" y2="570" stroke="#292524" stroke-width="1"/>
  <line x1="1160" y1="60" x2="1160" y2="570" stroke="#292524" stroke-width="1"/>

  <!-- ── Outer frame ── -->
  <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#292524" stroke-width="1" rx="12"/>

  <!-- ── 3D Isometric cube ── -->
  <!-- Top face -->
  <polygon points="${T} ${R} ${B} ${L}"
    fill="url(#faceTop)" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.7"/>
  <!-- Right face -->
  <polygon points="${R} ${RB} ${BB} ${B}"
    fill="url(#faceRight)" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.5"/>
  <!-- Left face -->
  <polygon points="${L} ${B} ${BB} ${LB}"
    fill="url(#faceLeft)" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.35"/>

  <!-- Cube vertical center dashed line (top to bottom) -->
  <line x1="${cx}" y1="${cy - ey}" x2="${cx}" y2="${cy + ey + ez}"
    stroke="#f97316" stroke-width="0.75" stroke-opacity="0.25" stroke-dasharray="4 4"/>

  <!-- ── Outer echo cube (larger, subtle wireframe) ── -->
  <polygon points="${cx},${cy - ey - 38}  ${cx + ex + 33},${cy - 33}  ${cx},${cy + ey + 38}  ${cx - ex - 33},${cy - 33}"
    fill="none" stroke="#f97316" stroke-width="0.5" stroke-opacity="0.10"/>

  <!-- ── Small label pill ── -->
  <rect x="60" y="70" width="192" height="34" rx="17"
    fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.28)" stroke-width="1"/>
  <text x="156" y="92"
    font-family="Arial, Helvetica, sans-serif"
    font-size="13" font-weight="700" fill="#f97316"
    text-anchor="middle" letter-spacing="0.8">KONFIGURATOR 3D</text>

  <!-- ── Main headline ── -->
  <text x="60" y="210"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="68" font-weight="700" fill="#f5f5f4" letter-spacing="-2">Twoi klienci</text>
  <text x="60" y="293"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="68" font-weight="700" fill="#f5f5f4" letter-spacing="-2">konfigurują.</text>
  <text x="60" y="376"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="68" font-weight="700" fill="#f97316" letter-spacing="-2">Ty sprzedajesz.</text>

  <!-- ── Separator line ── -->
  <line x1="60" y1="415" x2="240" y2="415"
    stroke="#f97316" stroke-width="1.5" stroke-opacity="0.4"/>

  <!-- ── Subtext ── -->
  <text x="60" y="450"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20" fill="#a8a29e" letter-spacing="-0.3">Konfiguratory 3D dla producentów garaży,</text>
  <text x="60" y="476"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20" fill="#a8a29e" letter-spacing="-0.3">hal stalowych i konstrukcji stalowych.</text>

  <!-- ── Three key stats ── -->
  <g transform="translate(60, 520)">
    <!-- Stat 1 -->
    <text x="0" y="0"
      font-family="Georgia, serif" font-size="26" font-weight="700" fill="#f97316">24/7</text>
    <text x="0" y="20"
      font-family="Arial, sans-serif" font-size="13" fill="#78716c">zapytania</text>

    <!-- Stat 2 -->
    <text x="120" y="0"
      font-family="Georgia, serif" font-size="26" font-weight="700" fill="#f97316">24h</text>
    <text x="120" y="20"
      font-family="Arial, sans-serif" font-size="13" fill="#78716c">wycena gratis</text>

    <!-- Stat 3 -->
    <text x="260" y="0"
      font-family="Georgia, serif" font-size="26" font-weight="700" fill="#f97316">3</text>
    <text x="260" y="20"
      font-family="Arial, sans-serif" font-size="13" fill="#78716c">wdrożenia</text>
  </g>

  <!-- ── Bottom URL / brand ── -->
  <text x="60" y="600"
    font-family="Arial, Helvetica, sans-serif"
    font-size="15" fill="#78716c" letter-spacing="0.5">konfigli.pl</text>

  <!-- ── Logo text top-right of cube panel ── -->
  <text x="910" y="555"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="18" font-weight="700" fill="#78716c" text-anchor="middle" letter-spacing="2">KONFIGLI</text>
</svg>
`.trim();

// Output path
const outDir = join(__dirname, 'public', 'images');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'og-image.png');

await sharp(Buffer.from(svgStr))
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(outPath);

console.log(`✓ OG image generated: ${outPath}`);
