import { toBlob } from 'html-to-image';

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2500);
}

function filenameFromHref(href: string) {
  return href.split('/').pop()?.split('?')[0] || 'arquivo';
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

let cachedInterCss: string | undefined;

async function interFontEmbedCSS() {
  if (cachedInterCss) return cachedInterCss;
  const faces: { href: string; unicode: string }[] = [
    {
      href: '/fonts/inter-latin.woff2',
      unicode:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    {
      href: '/fonts/inter-latin-ext.woff2',
      unicode:
        'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
  ];
  const parts = await Promise.all(
    faces.map(async ({ href, unicode }) => {
      const res = await fetch(href, { cache: 'force-cache' });
      if (!res.ok) return '';
      const b64 = arrayBufferToBase64(await res.arrayBuffer());
      return `@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2');unicode-range:${unicode};}`;
    }),
  );
  cachedInterCss = parts.filter(Boolean).join('\n');
  return cachedInterCss;
}

async function waitForImages(node: HTMLElement) {
  const imgs = Array.from(node.querySelectorAll('img'));
  await Promise.all(
    imgs.map(async (img) => {
      if (img.complete && img.naturalWidth > 0) return;
      try {
        await img.decode();
      } catch {
        await new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        });
      }
    }),
  );
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('image'));
    img.src = src;
  });
}

function viewBoxSize(svg: string): { w: number; h: number } {
  const raw = svg.match(/viewBox=["']([^"']+)["']/)?.[1];
  if (!raw) return { w: 64, h: 64 };
  const parts = raw.trim().split(/[\s,]+/).map(Number);
  return { w: parts[2] || 64, h: parts[3] || 64 };
}

export async function downloadHref(href: string, filename?: string) {
  const res = await fetch(href, { cache: 'reload' });
  if (!res.ok) throw new Error('download');
  const type = href.endsWith('.svg') ? 'image/svg+xml' : res.headers.get('content-type') || 'application/octet-stream';
  saveBlob(new Blob([await res.arrayBuffer()], { type }), filename ?? filenameFromHref(href));
}

export async function downloadNode(
  node: HTMLElement | null,
  filename: string,
  options?: { width?: number; height?: number; minEdge?: number },
) {
  if (!node) throw new Error('download');
  const srcW = node.offsetWidth;
  const srcH = node.offsetHeight;
  if (srcW < 2 || srcH < 2) throw new Error('download');

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      /* ignore */
    }
  }
  await waitForImages(node);

  const minEdge = options?.minEdge ?? 1080;
  const targetW = options?.width ?? Math.max(minEdge, Math.round(srcW));
  const targetH = options?.height ?? Math.round((targetW * srcH) / srcW);
  const scale = targetW / srcW;
  const fontEmbedCSS = await interFontEmbedCSS();
  const backgroundColor = getComputedStyle(node).backgroundColor || undefined;

  const capture = (extra: Parameters<typeof toBlob>[1]) =>
    toBlob(node, {
      cacheBust: true,
      pixelRatio: 1,
      skipAutoScale: true,
      width: targetW,
      height: targetH,
      canvasWidth: targetW,
      canvasHeight: targetH,
      backgroundColor,
      fontEmbedCSS,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${srcW}px`,
        height: `${srcH}px`,
        borderRadius: '0px',
        boxShadow: 'none',
        margin: '0px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
      },
      ...extra,
    });

  let blob = await capture({});
  if (!blob) blob = await capture({ skipFonts: true, fontEmbedCSS: undefined });
  if (!blob) throw new Error('download');
  saveBlob(blob, filename);
}

export async function downloadSvgAsPng(
  href: string,
  filename: string,
  options?: { width?: number; background?: string; pad?: number },
) {
  const res = await fetch(href, { cache: 'reload' });
  if (!res.ok) throw new Error('download');
  let svg = await res.text();
  svg = svg.replace(/currentColor/g, options?.background === '#000000' ? '#f5f5f7' : '#1d1d1f');
  const { w, h } = viewBoxSize(svg);
  const isWide = w >= h * 2;
  const targetW = options?.width ?? (isWide ? 2400 : 1024);
  const targetH = Math.max(1, Math.round((targetW * h) / w));
  svg = svg.replace(/<svg\b([^>]*)>/, (_full, attrs: string) => {
    const cleaned = String(attrs)
      .replace(/\s(width|height)=["'][^"']*["']/g, '')
      .trim();
    return `<svg ${cleaned} width="${targetW}" height="${targetH}">`;
  });

  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
  try {
    const img = await loadImage(url);
    const pad = options?.pad ?? 0;
    const canvas = document.createElement('canvas');
    canvas.width = targetW + pad * 2;
    canvas.height = targetH + pad * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('download');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    if (options?.background) {
      ctx.fillStyle = options.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(img, pad, pad, targetW, targetH);
    const png = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!png) throw new Error('download');
    saveBlob(png, filename);
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function downloadSolidPng(hex: string, filename: string, size = 1080) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('download');
  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, size, size);
  const png = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (!png) throw new Error('download');
  saveBlob(png, filename);
}
