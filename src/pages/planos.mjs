// Página de planos. Conteúdo em `pages.planos` de src/content/xx.mjs.

import { esc, scheduleButton, sectionHead } from '../lib.mjs';

const list = (items, cls = 'bands-list bands-list--compact') =>
  `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

export default {
  id: 'planos',
  slug: { pt: 'planos', en: 'plans' },
  draft: true,
  render: (p) => `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero__title">${esc(p.hero.title)}</h1>
        <p class="page-hero__sub">${esc(p.hero.subtitle)}</p>
      </div>
    </section>

    <section class="section section--tight" id="sprint">
      <div class="container">
        <div class="sprint">
          <div class="sprint__main">
            <p class="sprint__tag">${esc(p.sprint.tag)}</p>
            <h2 class="sprint__name">${esc(p.sprint.name)}</h2>
            <p class="sprint__facts">${p.sprint.facts.map(esc).join('<span aria-hidden="true"> · </span>')}</p>
            <p class="sprint__text">${esc(p.sprint.text)}</p>
            ${scheduleButton(p.sprint.cta, 'planos-sprint')}
          </div>
          <div class="sprint__steps">
            <h3 class="layer__title">${esc(p.sprint.stepsTitle)}</h3>
            <ol>
              ${p.sprint.steps.map((s) => `<li><strong>${esc(s.when)}</strong><span>${esc(s.text)}</span></li>`).join('\n              ')}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="planos">
      <div class="container">
        ${sectionHead(p.plans.title, p.plans.subtitle)}
        <div class="plans">
          ${p.plans.items
            .map(
              (pl) => `<article class="plan${pl.featured ? ' plan--featured' : ''}">
            <p class="plan__tag">${esc(pl.tag)}</p>
            <h3 class="plan__name">${esc(pl.name)}</h3>
            <p class="plan__scope">${esc(pl.scope)}</p>
            <p class="plan__for">${esc(pl.for)}</p>
            ${list(pl.includes)}
            <p class="plan__pace">${esc(pl.pace)}</p>
          </article>`
            )
            .join('\n          ')}
        </div>
        <p class="plans__all"><strong>${esc(p.plans.allTitle)}</strong> ${esc(p.plans.all)}</p>
        <p class="plans__special">${esc(p.plans.special)}</p>
      </div>
    </section>

    <section class="section" id="comparacao">
      <div class="container">
        ${sectionHead(p.compare.title, p.compare.subtitle)}
        <table class="compare">
          <thead>
            <tr><td></td>${p.compare.columns.map((col, i) => `<th scope="col"${i === p.compare.columns.length - 1 ? ' class="compare__us"' : ''}>${esc(col)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${p.compare.rows
              .map(
                (r) => `<tr><th scope="row">${esc(r.label)}</th>${r.values
                  .map((v, i) => `<td data-label="${esc(p.compare.columns[i])}"${i === r.values.length - 1 ? ' class="compare__us"' : ''}>${esc(v)}</td>`)
                  .join('')}</tr>`
              )
              .join('\n            ')}
          </tbody>
        </table>
        <p class="compare__note">${esc(p.compare.note)}</p>
      </div>
    </section>

    <section class="section" id="sustentacao">
      <div class="container split">
        ${sectionHead(p.sustain.title, p.sustain.subtitle)}
        <div class="split__body">
          <div class="facts">
            ${p.sustain.items.map((i) => `<div class="facts__item"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`).join('\n            ')}
          </div>
          <p class="facts__when">${esc(p.sustain.when)}</p>
        </div>
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
