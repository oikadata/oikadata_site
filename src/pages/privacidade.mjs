// Política de Privacidade. Conteúdo em `pages.privacidade` (src/content/pt-privacidade.mjs).

import { esc } from '../lib.mjs';

export default {
  id: 'privacidade',
  slug: 'privacidade',
  langs: ['pt'],
  cta: false,
  render: (p) => `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero__title">${esc(p.title)}</h1>
        <p class="page-hero__sub">${esc(p.updated)}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container prose">
        <p class="lead">${esc(p.intro)}</p>
        ${p.sections
          .map(
            (s) => `<h2>${esc(s.title)}</h2>
        ${(s.paragraphs || []).map((t) => `<p>${esc(t)}</p>`).join('\n        ')}
        ${s.items ? `<ul class="bands-list bands-list--compact">${s.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}`
          )
          .join('\n        ')}
      </div>
    </section>

`,
};
