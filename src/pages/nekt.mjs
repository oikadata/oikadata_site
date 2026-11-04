// Landing oculta da parceria Oika + Nekt (Black Friday da Nekt).
// Fica fora do menu e do sitemap, com noindex: só chega quem recebe o link.
// Conteúdo em `pages.nekt` de src/content/xx.mjs.

import { asset, esc, logo, track } from '../lib.mjs';
import { WHATSAPP } from '../site.mjs';

// Logo da Nekt em versão clara (texto branco, ponto verde) para o fundo escuro.
const nektMark = `<img class="bf-nekt" src="${asset('/img/nekt-white.png')}" alt="Nekt" width="449" height="138">`;

const WA_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

// Botão principal: WhatsApp com mensagem pronta, para sabermos que veio da parceria.
const waButton = (label, message, place) =>
  `<a class="btn btn--primary btn--lg" href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${WA_ICON}<span>${esc(label)}</span></a>`;

const lockup = (p) => `<p class="bf-lockup" aria-label="${esc(p.hero.partnership)}">${logo('dark')}<span class="bf-lockup__plus" aria-hidden="true">+</span>${nektMark}</p>`;

export default {
  id: 'nekt',
  slug: { pt: 'parceria-nekt', en: 'nekt-partnership' },
  noindex: true,
  cta: false,
  render: (p) => `
    <section class="bf-hero">
      <div class="container bf-hero__inner">
        ${lockup(p)}
        <p class="bf-tag"><span class="bf-tag__dot" aria-hidden="true"></span>${esc(p.hero.tag)}</p>
        <h1 class="bf-hero__title">${esc(p.hero.title)}</h1>
        <p class="bf-hero__sub">${esc(p.hero.subtitle)}</p>
        <ul class="bf-facts">
          ${p.hero.facts.map((f) => `<li><strong>${esc(f.value)}</strong><span>${esc(f.label)}</span></li>`).join('\n          ')}
        </ul>
        <div class="bf-hero__actions">
          ${waButton(p.hero.cta, p.whatsappMessage, 'nekt-hero')}
          <p class="bf-hero__note">${esc(p.hero.note)}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.included.label)}</p>
          <h2 class="section__title">${esc(p.included.title)}</h2>
          <p class="section__sub">${esc(p.included.subtitle)}</p>
        </header>
        <div class="cards bf-cards">
          ${p.included.items
            .map(
              (it, i) => `<article class="card"><span class="card__band card__band--${i + 1}" aria-hidden="true"></span><h3 class="card__title">${esc(it.title)}</h3><p>${esc(it.text)}</p></article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section bf-how">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.how.label)}</p>
          <h2 class="section__title">${esc(p.how.title)}</h2>
        </header>
        <ol class="bf-steps">
          ${p.how.steps.map((s, i) => `<li><span class="bf-steps__n">${String(i + 1).padStart(2, '0')}</span><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></li>`).join('\n          ')}
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.segments.label)}</p>
          <h2 class="section__title">${esc(p.segments.title)}</h2>
          <p class="section__sub">${esc(p.segments.subtitle)}</p>
        </header>
        <div class="cards--2">
          ${p.segments.items
            .map(
              (s) => `<article class="card"><h3 class="card__title">${esc(s.name)}</h3><ul class="bf-ideas">${s.ideas.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="bf-rules">
          <h2 class="bf-rules__title">${esc(p.rules.title)}</h2>
          <ul>
            ${p.rules.items.map((r) => `<li>${esc(r)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>

    <section class="cta bf-final" id="contato">
      <div class="container bf-final__inner">
        ${lockup(p)}
        <h2 class="cta__title">${esc(p.final.title)}</h2>
        <p class="bf-final__sub">${esc(p.final.subtitle)}</p>
        ${waButton(p.final.cta, p.whatsappMessage, 'nekt-final')}
      </div>
    </section>
`,
};
