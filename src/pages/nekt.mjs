// Landing oculta da parceria Oika + Nekt (Black Friday da Nekt).
// Fica fora do menu e do sitemap, com noindex: só chega quem recebe o link.
// Conteúdo em `pages.nekt` de src/content/xx.mjs.

import { esc, logo, scheduleButton } from '../lib.mjs';

// Marca da Nekt em texto enquanto não temos o arquivo oficial do logo.
const nektMark = `<span class="bf-nekt" aria-label="Nekt">nekt</span>`;

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
          ${scheduleButton(p.hero.cta, 'nekt-hero', 'btn--lg')}
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
        ${scheduleButton(p.final.cta, 'nekt-final', 'btn--lg')}
      </div>
    </section>
`,
};
