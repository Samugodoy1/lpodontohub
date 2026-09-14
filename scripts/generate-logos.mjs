import fs from 'node:fs';
import opentype from 'opentype.js';

const SEMI = '/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf';
const REG = '/usr/share/fonts/truetype/macos/Inter-Regular.ttf';

function loadFont(file) {
  const buf = fs.readFileSync(file);
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}
const OUT = new URL('../public/brand/', import.meta.url);

const SIZE = 52;
const HUB_TRACK = -1.6;
const AC_TRACK = -1.2;
const GAP = 14;

function drawText(font, text, x, y, fontSize, letterSpacing) {
  const scale = fontSize / font.unitsPerEm;
  const glyphs = [...text].map((ch) => font.charToGlyph(ch));
  let cursor = x;
  const ds = [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < glyphs.length; i += 1) {
    const glyph = glyphs[i];
    const path = glyph.getPath(cursor, y, fontSize);
    const d = path.toPathData(2);
    if (d) ds.push(d);
    const bb = path.getBoundingBox();
    if (Number.isFinite(bb.x1)) {
      minX = Math.min(minX, bb.x1);
      minY = Math.min(minY, bb.y1);
      maxX = Math.max(maxX, bb.x2);
      maxY = Math.max(maxY, bb.y2);
    }
    let adv = glyph.advanceWidth * scale + letterSpacing;
    if (i < glyphs.length - 1) {
      try {
        adv += font.getKerningValue(glyph, glyphs[i + 1]) * scale;
      } catch {
        /* Inter lookups that opentype.js cannot parse */
      }
    }
    cursor += adv;
  }

  return { d: ds.join(' '), minX, minY, maxX, maxY, cursor };
}

function writeSvg(filename, parts) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const part of parts) {
    minX = Math.min(minX, part.minX);
    minY = Math.min(minY, part.minY);
    maxX = Math.max(maxX, part.maxX);
    maxY = Math.max(maxY, part.maxY);
  }
  const padX = 4;
  const padY = 8;
  const x = minX - padX;
  const y = minY - padY;
  const w = maxX - minX + padX * 2;
  const h = maxY - minY + padY * 2;
  const paths = parts
    .map((part) => `  <path d="${part.d}" fill="${part.fill}"/>`)
    .join('\n');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}" fill="none">
${paths}
</svg>
`;
  fs.writeFileSync(new URL(filename, OUT), svg);
  console.log(filename, `${Math.round(w)}×${Math.round(h)}`);
}

const semi = loadFont(SEMI);
const reg = loadFont(REG);
const y = 0;
const hub = drawText(semi, 'OdontoHub', 0, y, SIZE, HUB_TRACK);
const academy = drawText(reg, 'Academy', hub.cursor + GAP, y, SIZE, AC_TRACK);

writeSvg('logo-odontohub.svg', [{ ...hub, fill: '#1d1d1f' }]);
writeSvg('logo-odontohub-white.svg', [{ ...hub, fill: '#f5f5f7' }]);
writeSvg('logo-academy.svg', [
  { ...hub, fill: '#1d1d1f' },
  { ...academy, fill: '#FF6B2C' },
]);
writeSvg('logo-academy-white.svg', [
  { ...hub, fill: '#f5f5f7' },
  { ...academy, fill: 'rgba(255,255,255,0.55)' },
]);
