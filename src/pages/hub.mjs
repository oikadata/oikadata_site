// Proposta comercial do hub de dados da Oika (versão futura). Página oculta: noindex,
// fora do menu e do sitemap, sem links internos; só chega quem recebe o link.
// Só em português. Conteúdo em `pages.hub` de src/content/pt-hub.mjs.

import { esc, track } from '../lib.mjs';
import { WHATSAPP } from '../site.mjs';

const WA_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

const CHECK = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>`;

const waButton = (label, message, place, cls = 'btn--primary btn--lg') =>
  `<a class="btn ${cls}" href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${WA_ICON}<span>${esc(label)}</span></a>`;

export default {
  id: 'hub',
  slug: 'hub-de-dados',
  langs: ['pt'],
  noindex: true,
  cta: false,
  render: (p) => `
    <section class="bf-hero">
      <div class="container bf-hero__inner">
        <p class="bf-tag"><span class="bf-tag__dot" aria-hidden="true"></span>${esc(p.hero.tag)}</p>
        <h1 class="bf-hero__title">${esc(p.hero.title)}</h1>
        <p class="bf-hero__sub">${esc(p.hero.subtitle)}</p>
        <ul class="bf-facts">
          ${p.hero.facts.map((f) => `<li><strong>${esc(f.value)}</strong><span>${esc(f.label)}</span></li>`).join('\n          ')}
        </ul>
        <div class="bf-hero__actions">
          ${waButton(p.hero.cta, p.whatsappMessage, 'hub-hero')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.stack.label)}</p>
          <h2 class="section__title">${esc(p.stack.title)}</h2>
          <p class="section__sub">${esc(p.stack.subtitle)}</p>
        </header>
        <div class="hub-stack">
          <ol class="hub-stack__items">
            ${p.stack.items
              .map(
                (it, i) => `<li class="hub-stack__item"><span class="hub-stack__n">${String(i + 1).padStart(2, '0')}</span><p class="hub-stack__kind">${esc(it.kind)}</p><h3 class="hub-stack__name">${esc(it.name)}</h3><p class="hub-stack__text">${esc(it.text)}</p></li>`
              )
              .join('\n            ')}
          </ol>
          <p class="hub-stack__price"><span>${esc(p.stack.price)}</span></p>
        </div>
      </div>
    </section>

    <section class="section bf-how">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.gains.label)}</p>
          <h2 class="section__title">${esc(p.gains.title)}</h2>
        </header>
        <ul class="hub-gains">
          ${p.gains.items.map((g) => `<li><strong>${esc(g.title)}</strong><span>${esc(g.text)}</span></li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="section" id="planos">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.plans.label)}</p>
          <h2 class="section__title">${esc(p.plans.title)}</h2>
          <p class="section__sub">${esc(p.plans.subtitle)}</p>
        </header>
        <div class="hub-plans">
          ${p.plans.items
            .map(
              (pl, i) => `<article class="hub-plan${pl.featured ? ' hub-plan--featured' : ''}">
            ${pl.featured ? `<p class="hub-plan__badge">${esc(p.plans.featured)}</p>` : ''}
            <span class="card__band card__band--${i + 1}" aria-hidden="true"></span>
            <h3 class="hub-plan__name">${esc(pl.name)}</h3>
            <p class="hub-plan__for">${esc(pl.for)}</p>
            ${pl.includes ? `<p class="hub-plan__includes">${esc(pl.includes)}</p>` : ''}
            <ul class="hub-plan__features">
              ${pl.features.map((f) => `<li>${CHECK}<span>${esc(f)}</span></li>`).join('\n              ')}
            </ul>
            <p class="hub-plan__price">${esc(p.plans.price)}</p>
            ${waButton(p.plans.cta, `${p.whatsappMessage} Tenho interesse no ${pl.name}.`, `hub-plano-${i + 1}`, pl.featured ? 'btn--primary' : 'btn--ghost hub-plan__btn')}
          </article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="cta bf-final" id="contato">
      <div class="container bf-final__inner">
        <h2 class="cta__title">${esc(p.final.title)}</h2>
        <p class="bf-final__sub">${esc(p.final.subtitle)}</p>
        ${waButton(p.final.cta, p.whatsappMessage, 'hub-final')}
      </div>
    </section>
`,
};
