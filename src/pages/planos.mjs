// Página de planos. Conteúdo em `pages.planos` de src/content/xx.mjs.

import { ARROW_RIGHT, SYMBOL_LIGHT, esc, scheduleButton, sectionHead, symbol } from '../lib.mjs';

const CHECK = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>`;
const CROSS = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="m7 7 10 10M17 7 7 17"/></svg>`;

// Etapa do ciclo: Sprint, Expansão ou Sustentação.
const stage = (s, cls) => `<div class="stage ${cls}">
            <p class="stage__when">${esc(s.when)}</p>
            <h3 class="stage__name">${esc(s.name)}</h3>
            <p class="stage__text">${esc(s.text)}</p>
            <p class="stage__price">${esc(s.price)}</p>
          </div>`;

// Célula da tabela: true (incluso), false (não incluso) ou um texto curto.
const cell = (v, pl) =>
  v === true
    ? `<span class="tick tick--yes">${CHECK}<span class="sr-only">${esc(pl.yes)}</span></span>`
    : v === false
      ? `<span class="tick tick--no">${CROSS}<span class="sr-only">${esc(pl.no)}</span></span>`
      : `<span class="tick__text">${esc(v)}</span>`;

export default {
  id: 'planos',
  slug: { pt: 'planos', en: 'plans' },
  render: (p) => `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero__title">${esc(p.hero.title)}</h1>
        <p class="page-hero__sub">${esc(p.hero.subtitle)}</p>
      </div>
    </section>

    <section class="section section--tight" id="ciclo">
      <div class="container">
        <div class="cycle">
          ${stage(p.cycle.sprint, 'stage--sprint')}
          <span class="cycle__enter" aria-hidden="true">${ARROW_RIGHT}</span>
          <div class="loop">
            <svg class="loop__arc loop__arc--left" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M60 80 C 4 80, 4 20, 60 20"/></svg>
            <svg class="loop__arc loop__arc--right" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 20 C 56 20, 56 80, 0 80"/></svg>
            <span class="loop__head loop__head--left" aria-hidden="true"></span>
            <span class="loop__head loop__head--right" aria-hidden="true"></span>
            ${stage(p.cycle.expand, 'stage--expand')}
            <div class="loop__middle">
              <span class="loop__turn loop__turn--up">↑ ${esc(p.cycle.toExpand)}</span>
              <span class="loop__center">${symbol(SYMBOL_LIGHT, 'loop__symbol')}${esc(p.cycle.center)}</span>
              <span class="loop__turn loop__turn--down">${esc(p.cycle.toSustain)} ↓</span>
            </div>
            ${stage(p.cycle.sustain, 'stage--sustain')}
          </div>
        </div>
        <p class="cycle__cta">${scheduleButton(p.hero.cta, 'planos-ciclo')}</p>
      </div>
    </section>

    <section class="section" id="planos">
      <div class="container">
        ${sectionHead(p.plans.title, p.plans.subtitle)}
        <table class="matrix">
          <thead>
            <tr>
              <td class="matrix__corner">${esc(p.plans.featureLabel)}</td>
              ${p.plans.columns
                .map(
                  (col) => `<th scope="col"${col.featured ? ' class="is-featured"' : ''}>
                <span class="matrix__name">${esc(col.name)}</span>
                <span class="matrix__scope">${esc(col.scope)}</span>
                <span class="matrix__for">${esc(col.for)}</span>
              </th>`
                )
                .join('')}
            </tr>
          </thead>
          ${p.plans.groups
            .map(
              (g) => `<tbody>
            <tr class="matrix__group"><th scope="rowgroup" colspan="4">${esc(g.title)}</th></tr>
            ${g.rows
              .map(
                (r) => `<tr><th scope="row">${esc(r.label)}</th>${r.values
                  .map(
                    (v, i) =>
                      `<td data-label="${esc(p.plans.columns[i].name)}"${p.plans.columns[i].featured ? ' class="is-featured"' : ''}>${cell(v, p.plans)}</td>`
                  )
                  .join('')}</tr>`
              )
              .join('\n            ')}
          </tbody>`
            )
            .join('\n          ')}
        </table>
        <p class="plans__special">${esc(p.plans.special)}</p>
      </div>
    </section>

    <section class="section" id="add-ons">
      <div class="container">
        ${sectionHead(p.addons.title, p.addons.subtitle)}
        <div class="cards cards--2">
          ${p.addons.items
            .map(
              (a, i) => `<article class="card">
            <span class="card__band card__band--${i + 1}" aria-hidden="true"></span>
            <h3 class="card__title">${esc(a.title)}</h3>
            <p>${esc(a.text)}</p>
          </article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

`,
};
