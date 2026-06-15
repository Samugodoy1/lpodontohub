const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://www.odontohub.app.br';
const TODAY = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'academy', priority: '0.9', changefreq: 'weekly' },
  { path: 'academy/embaixadores', priority: '0.8', changefreq: 'weekly' },
  { path: 'presets', priority: '0.8', changefreq: 'weekly' },
  { path: 'comparativo', priority: '0.8', changefreq: 'weekly' },
  { path: 'blog', priority: '0.9', changefreq: 'daily' },
  
  // CATEGORIA 1 - ALTA INTENÇÃO DE COMPRA
  { path: 'software-odontologico', priority: '0.9', changefreq: 'weekly' },
  { path: 'melhor-software-odontologico', priority: '0.9', changefreq: 'weekly' },
  { path: 'software-odontologico-autonomo', priority: '0.9', changefreq: 'weekly' },
  { path: 'software-odontologico-para-recem-formados', priority: '0.9', changefreq: 'weekly' },
  { path: 'software-odontologico-para-clinica-pequena', priority: '0.9', changefreq: 'weekly' },
  { path: 'sistema-odontologico-online', priority: '0.9', changefreq: 'weekly' },
  { path: 'agenda-odontologica-online', priority: '0.9', changefreq: 'weekly' },
  { path: 'controle-de-pacientes-odontologia', priority: '0.9', changefreq: 'weekly' },
  { path: 'prontuario-odontologico-digital', priority: '0.9', changefreq: 'weekly' },
  { path: 'software-odontologico-simples', priority: '0.9', changefreq: 'weekly' },

  // CATEGORIA 2 - COMPARATIVOS
  { path: 'software-odontologico-gratis-vs-pago', priority: '0.8', changefreq: 'weekly' },
  { path: 'planilha-vs-software-odontologico', priority: '0.8', changefreq: 'weekly' },
  { path: 'agenda-de-papel-vs-agenda-digital', priority: '0.8', changefreq: 'weekly' },
  { path: 'prontuario-fisico-vs-digital', priority: '0.8', changefreq: 'weekly' },
  { path: 'odontohub-vs-software-odontologico-tradicional', priority: '0.8', changefreq: 'weekly' },
  { path: 'melhor-agenda-para-dentistas', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-escolher-um-software-odontologico', priority: '0.8', changefreq: 'weekly' },
  { path: 'sistemas-odontologicos-mais-usados', priority: '0.8', changefreq: 'weekly' },
  { path: 'software-odontologico-para-quem-trabalha-sozinho', priority: '0.8', changefreq: 'weekly' },
  { path: 'alternativas-aos-softwares-odontologicos-complexos', priority: '0.8', changefreq: 'weekly' },

  // CATEGORIA 3 - DORES REAIS
  { path: 'como-organizar-pacientes-sem-secretaria', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-evitar-pacientes-esquecidos', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-controlar-retornos-odontologicos', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-reduzir-faltas-na-agenda', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-confirmar-consultas-odontologicas', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-organizar-uma-clinica-sozinho', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-acompanhar-tratamentos-em-andamento', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-recuperar-pacientes-inativos', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-reduzir-a-carga-mental-da-clinica', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-ter-controle-da-rotina-odontologica', priority: '0.8', changefreq: 'weekly' },

  // CATEGORIA 4 - GESTÃO
  { path: 'gestao-para-dentistas-iniciantes', priority: '0.8', changefreq: 'weekly' },
  { path: 'organizacao-da-clinica-odontologica', priority: '0.8', changefreq: 'weekly' },
  { path: 'fluxo-de-pacientes-odontologia', priority: '0.8', changefreq: 'weekly' },
  { path: 'produtividade-para-dentistas', priority: '0.8', changefreq: 'weekly' },
  { path: 'gestao-de-agenda-odontologica', priority: '0.8', changefreq: 'weekly' },
  { path: 'indicadores-de-clinica-odontologica', priority: '0.8', changefreq: 'weekly' },
  { path: 'rotina-de-dentista-autonomo', priority: '0.8', changefreq: 'weekly' },
  { path: 'administracao-de-consultorio-odontologico', priority: '0.8', changefreq: 'weekly' },
  { path: 'gestao-de-pacientes-odontologia', priority: '0.8', changefreq: 'weekly' },
  { path: 'experiencia-do-paciente-na-odontologia', priority: '0.8', changefreq: 'weekly' },

  // ANTIGOS COMPATIBILIZADOS
  { path: 'sistemas-para-dentista', priority: '0.8', changefreq: 'weekly' },
  { path: 'app-para-estudante-de-odontologia', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-organizar-retornos-de-pacientes', priority: '0.8', changefreq: 'weekly' },
  { path: 'como-administrar-clinica-sem-secretaria', priority: '0.8', changefreq: 'weekly' },
  { path: 'agenda-odontologica-recem-formados', priority: '0.8', changefreq: 'weekly' }
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
