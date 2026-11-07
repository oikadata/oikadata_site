// Custo de contratar um profissional de dados CLT x Oika. Página oculta (noindex, fora do menu),
// usada a partir da landing da parceria Nekt. Conteúdo em `pages.custo` de src/content/xx-custo.mjs.

import { ARROW_RIGHT, esc } from '../lib.mjs';

export default {
  id: 'custo',
  slug: { pt: 'custo-time-de-dados', en: 'data-team-cost' },
  noindex: true,
  render: (p) => `
    <section class="page-hero">
      <div class="container">
        <p class="label">${esc(p.hero.label)}</p>
        <h1 class="page-hero__title">${esc(p.hero.title)}</h1>
        <p class="page-hero__sub">${esc(p.hero.subtitle)}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="cost-totals">
          ${p.totals
            .map(
              (t, i) => `<article class="cost-total${i === p.totals.length - 1 ? ' cost-total--us' : ''}">
            <p class="cost-total__name">${esc(t.name)}</p>
            <p class="cost-total__value"><span class="cost-total__prefix">${esc(t.prefix)}</span>${esc(t.value)}<span class="cost-total__per">${esc(t.per)}</span></p>
            <p class="cost-total__what">${esc(t.what)}</p>
          </article>`
            )
            .join('\n          ')}
        </div>

        <table class="compare cost-table">
          <thead>
            <tr><td></td>${p.table.columns.map((col, i) => `<th scope="col"${i === p.table.columns.length - 1 ? ' class="compare__us"' : ''}>${esc(col)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${p.table.rows
              .map(
                (r) => `<tr><th scope="row">${esc(r.label)}</th>${r.values
                  .map((v, i) => `<td data-label="${esc(p.table.columns[i])}"${i === r.values.length - 1 ? ' class="compare__us"' : ''}>${esc(v)}</td>`)
                  .join('')}</tr>`
              )
              .join('\n            ')}
          </tbody>
        </table>
        <p class="compare__note">${esc(p.table.note)}</p>
        <p class="work__plans"><a class="btn btn--ghost" href="${p.back.href}"><span>${esc(p.back.label)}</span>${ARROW_RIGHT}</a></p>
      </div>
    </section>

`,
};
