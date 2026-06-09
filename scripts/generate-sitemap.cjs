const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://odontohub.app.br';
const TODAY = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'academy', priority: '0.9', changefreq: 'weekly' },
  { path: 'academy/embaixadores', priority: '0.8', changefreq: 'weekly' },
  { path: 'presets', priority: '0.8', changefreq: 'weekly' },
  { path: 'comparativo', priority: '0.8', changefreq: 'weekly' },
  { path: 'blog', priority: '0.9', changefreq: 'daily' }
];

// Fallback in case file read fails
let blogSlugs = [
  'o-que-e-clinical-clarity-system',
  'odontohub-vs-clinicorp-vs-simples-dental',
  'manifesto-fundador-odontologia-sufocada',
  'inteligencia-artificial-silencio-ativo',
  'metodo-preceptor-educacao-odontologica'
];

try {
  const blogFilePath = path.join(__dirname, '../src/pages/Blog.tsx');
  if (fs.existsSync(blogFilePath)) {
    const content = fs.readFileSync(blogFilePath, 'utf8');
    
    // Regex designed to parse: slug: 'slug-name'
    const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
    const foundSlugs = [];
    let match;
    
    while ((match = slugRegex.exec(content)) !== null) {
      if (!foundSlugs.includes(match[1])) {
        foundSlugs.push(match[1]);
      }
    }
    
    if (foundSlugs.length > 0) {
      blogSlugs = foundSlugs;
      console.log(`[Sitemap Generator] Sincronizado com sucesso! Encontrados ${blogSlugs.length} artigos no Blog.tsx.`);
    }
  }
} catch (error) {
  console.warn('[Sitemap Generator] Alerta ao carregar artigos dinamicamente, usando fallback estável:', error.message);
}

// Generate the sitemap elements
const urls = [];

// 1. Static Pages
staticRoutes.forEach(route => {
  const fullUrl = route.path ? `${BASE_URL}/${route.path}` : `${BASE_URL}/`;
  urls.push(`  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
});

// 2. Dynamic Blog Posts using url query param for indexing
blogSlugs.forEach(slug => {
  const fullUrl = `${BASE_URL}/blog?post=${slug}`;
  urls.push(`  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

// Combine into standard XML structure
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

// Ensure destination directories exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap
const outputPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXML, 'utf8');

console.log(`[Sitemap Generator] Sucesso! Sitemap gerado com ${urls.length} URLs em: ${outputPath}`);
