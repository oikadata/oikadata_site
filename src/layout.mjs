// Moldura comum a todas as páginas: <head>, topo com menu, chamada final de agendamento e rodapé.
// O miolo de cada página vem de src/pages/.

import { EMAIL, PHONE, PHONE_HREF, SITE_URL, UMAMI_WEBSITE_ID } from './site.mjs';
import { asset, esc, logo, scheduleButton, track, waLink } from './lib.mjs';

const year = new Date().getFullYear();

// Chamada final, igual em todas as páginas (a página pode desligar com `cta: false`).
const ctaSection = (c) => `    <section class="cta" id="contato">
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
`;

/**
 * @param {object} o
 * @param {object} o.c          conteúdo do idioma (src/content/xx.mjs)
 * @param {object} o.meta       { title, description, ogTitle? } da página
 * @param {string} o.path       caminho da página neste idioma (ex.: /planos/)
 * @param {Array}  o.alternates [{ lang, path }] da mesma página em cada idioma publicado
 * @param {object} [o.langLink] { lang, path } da mesma página no outro idioma
 * @param {Array}  o.nav        [{ href, label, current }]
 * @param {string} o.body       HTML das seções da página
 * @param {boolean} o.cta       inclui a chamada final
 */
export function layout({ c, meta, path, alternates, langLink, nav, body, cta }) {
  const url = SITE_URL + path;
  const alternateTags =
    alternates.length > 1
      ? alternates
          .map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${SITE_URL}${a.path}">`)
          .join('\n  ') + `\n  <link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternates[0].path}">`
      : '';
  // Seletor PT | EN: o idioma atual em destaque e o outro como link (português sempre primeiro).
  const code = (lang) => lang.slice(0, 2).toUpperCase();
  const langTag = langLink
    ? `<div class="lang-switch" role="group" aria-label="${esc(c.ui.langGroupLabel)}">${[
        { lang: c.lang, html: `<span class="lang-switch__item is-current" aria-current="true">${code(c.lang)}</span>` },
        {
          lang: langLink.lang,
          html: `<a class="lang-switch__item" href="${langLink.path}" hreflang="${langLink.lang}" lang="${langLink.lang}" aria-label="${esc(c.ui.langSwitchLabel)}">${code(langLink.lang)}</a>`,
        },
      ]
        .sort((a, b) => (a.lang.startsWith('pt') ? -1 : b.lang.startsWith('pt') ? 1 : 0))
        .map((x) => x.html)
        .join('')}</div>`
    : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Oika Data',
    url: SITE_URL,
    logo: `${SITE_URL}/img/favicon.svg`,
    image: `${SITE_URL}/img/og.png`,
    description: meta.description,
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
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <link rel="canonical" href="${url}">${meta.noindex ? '\n  <meta name="robots" content="noindex">' : ''}
  ${alternateTags}
  <meta name="theme-color" content="#F7F5F9">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Oika Data">
  <meta property="og:title" content="${esc(meta.ogTitle || meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE_URL}/img/og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${c.lang.replace('-', '_')}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
  <link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${asset('/styles.css')}">
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
          ${nav.map((i) => `<li><a href="${i.href}"${i.current ? ' aria-current="page"' : ''}>${esc(i.label)}</a></li>`).join('\n          ')}
        </ul>
      </nav>
      <div class="topbar__actions">
        ${langTag}
        ${scheduleButton(c.ui.scheduleShort, 'topo', 'btn--sm')}
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" data-open="${esc(c.ui.menu)}" data-close="${esc(c.ui.close)}">
          <span class="menu-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="sr-only">${esc(c.ui.menu)}</span>
        </button>
      </div>
    </div>
  </header>

  <main id="conteudo">
${body}${cta ? ctaSection(c) : ''}
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
      <p class="footer__year">© ${year} Oika Data${c.footer.privacy ? ` · <a href="${c.footer.privacy.href}">${esc(c.footer.privacy.label)}</a>` : ''}</p>
    </div>
  </footer>

  <script src="${asset('/main.js')}" defer></script>
</body>
</html>
`;
}
