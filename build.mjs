// Gera o site estático em dist/. Sem dependências: só Node 18+.
// Uso: node build.mjs          (idiomas publicados em LANGS)
//      node build.mjs --all    (inclui rascunhos, para revisar localmente)

import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import pt from './src/content/pt.mjs';
import en from './src/content/en.mjs';

// Idiomas publicados. O português é o oficial; adicione 'en' quando a tradução for revisada.
const LANGS = ['pt'];

const SITE_URL = 'https://oikadata.com';
const WHATSAPP = 'https://wa.me/5551984955083';
const EMAIL = 'arthur@oikadata.com';
const PHONE = '+55 51 98495-5083';
const PHONE_HREF = 'tel:+5551984955083';
// Página de agendamento do Google Agenda (conversa de 30 min).
const SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wReDlH7REgMqcf81NIhnyqGiTiaosQn5eKUnTRKFS6sfwJwqc1BADtnez_FM-DS82tcpxsR5y';
// Umami Cloud (analytics sem cookies). Cole aqui o Website ID; vazio = sem analytics.
const UMAMI_WEBSITE_ID = '011eb189-d1ae-4ebd-9561-9499c22e3a82';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');
const ALL = { pt, en };
const langs = process.argv.includes('--all') ? Object.keys(ALL) : LANGS;
const year = new Date().getFullYear();

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Peças gráficas ----------

const SYMBOL_PATHS = [
  'M26.4,5.3 Q31,0 38,0L73,0 Q80,0 84.6,5.3L89.4,10.7 Q94,16 87,16L24,16 Q17,16 21.6,10.7 Z',
  'M4.5,32.6 Q7,25 15,25L96,25 Q104,25 106.1,32.7L106.9,35.3 Q109,43 101,43L9,43 Q1,43 3.5,35.4 Z',
  'M3.4,59 Q3,51 11,51L82,51 Q90,51 89.6,59L89.4,61 Q89,69 81,69L12,69 Q4,69 3.6,61 Z',
  'M20.7,84.5 Q18,78 25,78L66,78 Q73,78 71.8,84.9L71.2,88.1 Q70,95 63,95L32,95 Q25,95 22.3,88.5 Z',
];
const SYMBOL_LIGHT = ['#D3AEEE', '#B371E1', '#7E0ACB', '#C895E9'];
const SYMBOL_DARK = ['#572E73', '#8546B2', '#FFFFFF', '#653687'];

const symbol = (colors, cls = '') =>
  `<svg class="${cls}" viewBox="0 0 110 95" aria-hidden="true" focusable="false">${SYMBOL_PATHS.map(
    (d, i) => `<path d="${d}" fill="${colors[i]}"/>`
  ).join('')}</svg>`;

// Assinatura horizontal: símbolo + wordmark em texto (herda a Space Grotesk da página).
const logo = (variant) =>
  `<span class="logo logo--${variant}">${symbol(variant === 'dark' ? SYMBOL_DARK : SYMBOL_LIGHT, 'logo__symbol')}<span class="logo__word"><span>oika</span><span class="logo__data">data</span></span></span>`;

const WA_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>`;

const ARROW = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m0 0-6-6m6 6 6-6"/></svg>`;

const ARROW_RIGHT = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>`;

const CALENDAR_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 3v4m8-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>`;

// Atributos de evento do Umami: o nome do evento e onde o botão está na página.
const track = (event, place) => `data-umami-event="${event}" data-umami-event-local="${place}"`;

// Agendamento é a ação principal do site; o WhatsApp fica como contato secundário, no fim.
const scheduleButton = (label, place, extra = '') =>
  `<a class="btn btn--primary ${extra}" href="${SCHEDULE_URL}" target="_blank" rel="noopener" ${track('agenda', place)}>${CALENDAR_ICON}<span>${esc(label)}</span></a>`;

const waLink = (label, message, place) =>
  `<a href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${esc(label)}</a>`;

const sectionHead = (title, subtitle) => `
      <header class="section__head">
        <h2 class="section__title">${esc(title)}</h2>
        ${subtitle ? `<p class="section__sub">${esc(subtitle)}</p>` : ''}
      </header>`;

// ---------- Página ----------

function page(c) {
  const others = langs.filter((l) => ALL[l] !== c).map((l) => ALL[l]);
  const url = SITE_URL + c.path;
  const alternates =
    langs.length > 1
      ? langs
          .map((l) => `<link rel="alternate" hreflang="${ALL[l].lang}" href="${SITE_URL}${ALL[l].path}">`)
          .join('\n  ') + `\n  <link rel="alternate" hreflang="x-default" href="${SITE_URL}/">`
      : '';
  const langLink = others[0]
    ? `<a class="lang" href="${others[0].path}" hreflang="${others[0].lang}" lang="${others[0].lang}" aria-label="${esc(c.ui.langSwitchLabel)}">${esc(c.ui.langSwitch)}</a>`
    : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Oika Data',
    url: SITE_URL,
    logo: `${SITE_URL}/img/favicon.svg`,
    image: `${SITE_URL}/img/og.png`,
    description: c.meta.description,
    email: EMAIL,
    telephone: '+5551984955083',
    slogan: c.footer.slogan,
    areaServed: 'BR',
  };


  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(c.meta.title)}</title>
  <meta name="description" content="${esc(c.meta.description)}">
  <link rel="canonical" href="${url}">
  ${alternates}
  <meta name="theme-color" content="#F7F5F9">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Oika Data">
  <meta property="og:title" content="${esc(c.hero.title)}">
  <meta property="og:description" content="${esc(c.meta.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE_URL}/img/og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${c.lang.replace('-', '_')}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
  <link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/styles.css">
  ${UMAMI_WEBSITE_ID ? `<script defer src="https://cloud.umami.is/script.js" data-website-id="${UMAMI_WEBSITE_ID}"></script>` : ''}
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#conteudo">${esc(c.ui.skip)}</a>

  <header class="topbar" id="topo">
    <div class="container topbar__inner">
      <a class="topbar__brand" href="${c.path}" aria-label="Oika Data">${logo('light')}</a>
      <nav class="nav" id="nav" aria-label="${esc(c.ui.navLabel)}">
        <ul>
          ${c.nav.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join('\n          ')}
        </ul>
      </nav>
      <div class="topbar__actions">
        ${langLink}
        ${scheduleButton(c.ui.scheduleShort, 'topo', 'btn--sm')}
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" data-open="${esc(c.ui.menu)}" data-close="${esc(c.ui.close)}">
          <span class="menu-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="sr-only">${esc(c.ui.menu)}</span>
        </button>
      </div>
    </div>
  </header>

  <main id="conteudo">

    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <h1 class="hero__title">${esc(c.hero.title)}</h1>
          <p class="hero__sub">${esc(c.hero.subtitle)}</p>
          <p class="hero__support">${esc(c.hero.support)}</p>
          <div class="hero__ctas">
            ${scheduleButton(c.hero.ctaPrimary, 'hero', 'btn--lg')}
            <a class="btn btn--ghost btn--lg" href="#entrega"><span>${esc(c.hero.ctaSecondary)}</span>${ARROW}</a>
          </div>
        </div>
        <div class="hero__art" aria-hidden="true">${symbol(SYMBOL_LIGHT, 'hero__symbol')}</div>
      </div>
    </section>

    <section class="section" id="problema">
      <div class="container split">
        ${sectionHead(c.problem.title)}
        <div class="split__body">
        <div class="problem">
          <ul class="sources" aria-label="${esc(c.problem.label)}">
            ${c.problem.sources.map((s) => `<li>${esc(s)}</li>`).join('\n            ')}
          </ul>
          <ul class="bands-list">
            ${c.problem.symptoms.map((s) => `<li>${esc(s)}</li>`).join('\n            ')}
          </ul>
        </div>
        </div>
      </div>
    </section>

    <section class="section" id="entrega">
      <div class="container">
        ${sectionHead(c.delivery.title, c.delivery.subtitle)}
        <div class="usecases">
          ${c.delivery.groups
            .map(
              (g, i) => `<div class="usecases__group">
            <h3 class="usecases__title"><span class="card__band card__band--${i + 1}" aria-hidden="true"></span>${esc(g.title)}</h3>
            <ul class="usecases__list">
              ${g.cases
                .map(
                  (u) => `<li class="usecase">
                <strong class="usecase__name">${esc(u.name)}</strong>
                <span class="usecase__question">${esc(u.question)}</span>
                <span class="usecase__result">${ARROW_RIGHT}${esc(u.result)}</span>
              </li>`
                )
                .join('\n              ')}
            </ul>
          </div>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section" id="como-entregamos">
      <div class="container">
        ${sectionHead(c.how.title, c.how.subtitle)}
        <h3 class="layer__title">${esc(c.how.productsTitle)}</h3>
        <div class="cards cards--3">
          ${c.how.products
            .map(
              (p, i) => `<article class="card">
            <span class="card__band card__band--${i + 1}" aria-hidden="true"></span>
            <h4 class="card__title">${esc(p.title)}</h4>
            <p>${esc(p.text)}</p>
          </article>`
            )
            .join('\n          ')}
        </div>
        <h3 class="layer__title layer__title--base">${esc(c.how.teamTitle)}</h3>
        <ul class="base">
          ${c.how.team.map((t) => `<li><strong>${esc(t.title)}</strong><span>${esc(t.text)}</span></li>`).join('\n          ')}
        </ul>
        <dl class="numbers">
          ${c.how.numbers
            .map((x) => `<div class="numbers__item"><dt>${esc(x.value)}</dt><dd>${esc(x.text)}</dd></div>`)
            .join('\n          ')}
        </dl>
      </div>
    </section>

    <section class="section" id="por-que-agora">
      <div class="container">
        ${sectionHead(c.whyNow.title)}
        <div class="why">
          <div class="why__text">
            <p class="lead">${esc(c.whyNow.text)}</p>
            <blockquote class="quote">${esc(c.whyNow.quote)}</blockquote>
          </div>
          <figure class="map">
            <figcaption class="label">${esc(c.whyNow.mapTitle)}</figcaption>
            <ol class="map__layers">
              ${c.whyNow.layers
                .map((l) => `<li><strong>${esc(l.title)}</strong><span>${esc(l.text)}</span></li>`)
                .join('\n              ')}
            </ol>
            <p class="map__feeds-label">${ARROW}<span>${esc(c.whyNow.feedsLabel)}</span></p>
            <ul class="map__feeds">
              ${c.whyNow.feeds.map((f) => `<li>${esc(f)}</li>`).join('\n              ')}
            </ul>
          </figure>
        </div>
        <div class="stat">
          <p class="stat__value"><span class="stat__from">${esc(c.whyNow.stat.from)}</span><span class="stat__arrow" aria-hidden="true">→</span><span class="stat__to">${esc(c.whyNow.stat.to)}</span></p>
          <div class="stat__body">
            <p class="stat__text">${esc(c.whyNow.stat.text)}</p>
            <p class="stat__note">${esc(c.whyNow.stat.note)} <a href="${c.whyNow.stat.href}" target="_blank" rel="noopener">${esc(c.whyNow.stat.linkLabel)}</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="como-comecamos">
      <div class="container">
        ${sectionHead(c.start.title)}
        <ol class="steps">
          ${c.start.steps
            .map(
              (s, i) => `<li class="step${i === 0 ? ' step--active' : ''}">
            <span class="step__bar" aria-hidden="true"></span>
            <p class="step__when">${esc(s.when)}</p>
            <h3 class="step__name">${esc(s.name)}</h3>
            <p>${esc(s.text)}</p>
          </li>`
            )
            .join('\n          ')}
        </ol>
        <div class="needs">
          <h3 class="needs__title">${esc(c.start.needsTitle)}</h3>
          <ul class="bands-list bands-list--compact">
            ${c.start.needs.map((x) => `<li>${esc(x)}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="inline-cta">
          <p>${esc(c.start.ctaText)}</p>
          ${scheduleButton(c.ui.schedule, 'como-comecamos')}
        </div>
      </div>
    </section>

    <section class="cta" id="contato">
      <div class="container cta__inner">
        <div class="cta__main">
          <h2 class="cta__title">${esc(c.cta.title)}</h2>
          <p class="cta__support">${c.cta.support.map(esc).join('<span aria-hidden="true"> · </span>')}</p>
          ${scheduleButton(c.cta.button, 'contato', 'btn--lg')}
          <p class="cta__alt">${esc(c.cta.alt)} ${waLink(c.cta.whatsapp, c.ui.whatsappMessage, 'contato')} ${esc(c.cta.or)} <a href="mailto:${EMAIL}" ${track('email', 'contato')}>${EMAIL}</a>.</p>
        </div>
        <div class="cta__how">
          <p class="label label--dark">${esc(c.cta.howTitle)}</p>
          <ol>
            ${c.cta.how.map((h) => `<li>${esc(h)}</li>`).join('\n            ')}
          </ol>
        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        ${logo('dark')}
        <p class="footer__slogan">${esc(c.footer.slogan)}</p>
      </div>
      <ul class="footer__contact">
        <li>${waLink(c.footer.whatsapp, c.ui.whatsappMessage, 'rodape')}</li>
        <li><a href="mailto:${EMAIL}" ${track('email', 'rodape')}>${EMAIL}</a></li>
        <li><a href="${PHONE_HREF}" ${track('telefone', 'rodape')}>${PHONE}</a></li>
        <li><a href="${SITE_URL}">oikadata.com</a></li>
      </ul>
      <p class="footer__year">© ${year} Oika Data</p>
    </div>
  </footer>

  <script src="/main.js" defer></script>
</body>
</html>
`;
}

function notFound(c) {
  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Página não encontrada | Oika Data</title>
  <meta name="robots" content="noindex">
  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
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

for (const l of langs) {
  const c = ALL[l];
  const dir = join(DIST, c.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(c));
}
writeFileSync(join(DIST, '404.html'), notFound(pt));

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${langs.map((l) => `  <url><loc>${SITE_URL}${ALL[l].path}</loc></url>`).join('\n')}
</urlset>
`
);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Site gerado em dist/ (${langs.join(', ')})`);
