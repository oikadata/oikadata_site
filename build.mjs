// Gera o site estático em dist/. Sem dependências: só Node 18+.
// Uso: node build.mjs          (idiomas e páginas publicados)
//      node build.mjs --all    (inclui rascunhos, para revisar localmente)
//
// Estrutura:
//   src/site.mjs       endereços, contatos e integrações
//   src/lib.mjs        peças compartilhadas (ícones, logo, botões)
//   src/layout.mjs     moldura comum: <head>, topo, chamada final e rodapé
//   src/pages/         uma página por arquivo, registradas em src/pages/index.mjs
//   src/content/       textos por idioma; os de cada página ficam em `pages.<id>`

import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import pt from './src/content/pt.mjs';
import en from './src/content/en.mjs';
import PAGES from './src/pages/index.mjs';
import { SITE_URL } from './src/site.mjs';
import { layout } from './src/layout.mjs';
import { asset, logo } from './src/lib.mjs';

// Idiomas publicados. O português é o oficial; adicione 'en' quando a tradução for revisada.
const LANGS = ['pt'];

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');
const ALL = { pt, en };
const drafts = process.argv.includes('--all');
const langs = drafts ? Object.keys(ALL) : LANGS;
const pages = PAGES.filter((pg) => drafts || !pg.draft);
// Idiomas em que a página existe: todos os gerados, ou só os de `langs: ['pt']`.
const langsOf = (pg) => langs.filter((l) => !pg.langs || pg.langs.includes(l));

// Caminho de uma página num idioma: /, /planos/, /en/, /en/plans/...
// O slug pode ser um texto (igual em todos os idiomas) ou { pt: 'planos', en: 'plans' }.
const pathOf = (pg, l) => {
  const slug = typeof pg.slug === 'string' ? pg.slug : pg.slug[l];
  return ALL[l].path + (slug ? `${slug}/` : '');
};

// Menu do idioma: cada item aponta para o id de uma página; páginas em rascunho ficam de fora.
const navFor = (l, current) =>
  ALL[l].nav
    .map((item) => ({ item, pg: pages.find((pg) => pg.id === item.page) }))
    .filter(({ pg }) => pg && langsOf(pg).includes(l))
    .map(({ item, pg }) => ({ href: pathOf(pg, l), label: item.label, current: pg === current }));

function notFound(c) {
  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Página não encontrada | Oika Data</title>
  <meta name="robots" content="noindex">
  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${asset('/styles.css')}">
</head>
<body class="notfound">
  <main class="container notfound__inner">
    <a href="/" aria-label="Oika Data">${logo('light')}</a>
    <h1 class="section__title">Esta página não existe</h1>
    <p class="lead">O caminho mais curto para voltar é por aqui.</p>
    <p><a class="btn btn--primary" href="/">Ir para o início</a></p>
  </main>
</body>
</html>
`;
}

// ---------- Build ----------

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(join(ROOT, 'public'), DIST, { recursive: true });

const urls = [];
for (const pg of pages) {
  const pgLangs = langsOf(pg);
  const alternates = pgLangs.map((l) => ({ lang: ALL[l].lang, path: pathOf(pg, l) }));
  for (const l of pgLangs) {
    const c = ALL[l];
    const p = c.pages[pg.id];
    if (!p) throw new Error(`Falta o conteúdo de "${pg.id}" em src/content/${l}.mjs (pages.${pg.id})`);
    const other = pgLangs.find((x) => x !== l);
    const path = pathOf(pg, l);
    const html = layout({
      c,
      meta: { ...p.meta, noindex: pg.noindex },
      path,
      alternates,
      langLink: other ? { lang: ALL[other].lang, path: pathOf(pg, other) } : null,
      nav: navFor(l, pg),
      body: pg.render(p, c),
      cta: pg.cta !== false,
    });
    const dir = join(DIST, path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    if (!pg.noindex) urls.push(SITE_URL + path);
  }
}
writeFileSync(join(DIST, '404.html'), notFound(pt));

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`
);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Site gerado em dist/ (${langs.join(', ')}): ${pages.map((pg) => pg.id).join(', ')}`);
