// Por que a Oika: comparação com contratar uma pessoa e com consultoria por projeto.
// Conteúdo em `pages.porque` de src/content/xx.mjs.

import { ARROW_RIGHT, esc } from '../lib.mjs';

export default {
  id: 'porque',
  slug: { pt: 'por-que-a-oika', en: 'why-oika' },
  render: (p) => `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero__title">${esc(p.hero.title)}</h1>
        <p class="page-hero__sub">${esc(p.hero.subtitle)}</p>
      </div>
    </section>

    <section class="section section--tight" id="comparacao">
      <div class="container">
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
        <p class="work__plans"><a class="btn btn--ghost" href="${p.compare.plansHref}"><span>${esc(p.compare.plansLink)}</span>${ARROW_RIGHT}</a></p>
      </div>
    </section>

`,
};
