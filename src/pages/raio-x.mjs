// Raio-X de Dados: apresentação e questionário. Conteúdo em `pages['raio-x']` (src/content/pt-raio-x.mjs).
// O questionário roda em public/raio-x.js; a página só entrega os textos e os códigos das opções.
// Pontos e regras de qualificação ficam no servidor (supabase/functions/_shared/raio-x/).

import { QUESTOES, VERSAO } from '../../supabase/functions/_shared/raio-x/questionario.mjs';
import { EMAILS_GRATUITOS } from '../../supabase/functions/_shared/raio-x/servico.mjs';
import { RAIO_X_API } from '../site.mjs';
import { asset, esc, sectionHead } from '../lib.mjs';

// JSON dentro de <script>: "</" vira "<\/" para não fechar a tag antes da hora.
export const jsonScript = (id, data) =>
  `<script type="application/json" id="${id}">${JSON.stringify(data).replace(/<\//g, '<\\/')}</script>`;

// Junta a definição das perguntas (códigos) com os textos. Falha o build se faltar algum texto.
function telas(p) {
  return QUESTOES.map((q) => {
    const t = p.questions[q.id];
    if (!t) throw new Error(`raio-x: falta o texto de ${q.id}`);
    const options = q.opcoes.map((code) => {
      if (!t.options[code]) throw new Error(`raio-x: falta o texto da opção ${q.id}.${code}`);
      const area = t.areas?.[code];
      return { code, label: t.options[code], area: area ? p.areaLabels[area] : null };
    });
    const tela = { id: q.id, type: q.tipo, title: t.title, help: t.help || null, options };
    if (q.tipo === 'escada') {
      tela.rows = q.linhas.map((id) => {
        if (!t.rows[id]) throw new Error(`raio-x: falta o texto da linha ${id}`);
        return { id, ...t.rows[id] };
      });
    }
    if (q.tipo === 'multipla') tela.max = q.max;
    if (q.aberta) tela.open = { id: q.aberta.id, when: q.aberta.quando || null, ...t.open };
    return tela;
  });
}

export default {
  id: 'raio-x',
  slug: 'raio-x',
  langs: ['pt'],
  cta: false,
  render: (p) => `
    <section class="page-hero rx-intro" data-rx-intro>
      <div class="container rx-intro__inner">
        <div>
          <h1 class="page-hero__title">${esc(p.intro.title)}</h1>
          <p class="page-hero__sub">${esc(p.intro.promise)}</p>
          <p class="rx-intro__facts">${p.intro.facts.map(esc).join('<span aria-hidden="true"> · </span>')}</p>
          <div class="rx-intro__actions">
            <button class="btn btn--primary btn--lg" type="button" data-rx-start data-resume="${esc(p.intro.resume)}">${esc(p.intro.start)}</button>
            <button class="btn btn--ghost btn--lg" type="button" data-rx-restart hidden>${esc(p.intro.restart)}</button>
          </div>
          <p class="rx-intro__note">${esc(p.intro.note)}</p>
          <p class="rx-intro__error" data-rx-unavailable hidden>${esc(p.ui.unavailable)}</p>
        </div>
        <div class="rx-intro__get">
          <h2 class="layer__title">${esc(p.intro.getTitle)}</h2>
          <ul class="bands-list bands-list--compact">
            ${p.intro.get.map((g) => `<li>${esc(g)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section" data-rx-intro>
      <div class="container">
        ${sectionHead(p.after.title, p.after.subtitle)}
        <ol class="steps steps--4">
          ${p.after.steps
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
      </div>
    </section>

    <section class="rx-app" id="rx-app" aria-live="polite" hidden></section>
    ${jsonScript('rx-data', {
      api: RAIO_X_API,
      version: VERSAO,
      screens: telas(p),
      contact: { ...p.contact, privacyHref: '/privacidade/' },
      freeEmailDomains: [...EMAILS_GRATUITOS],
      ui: p.ui,
      resultPath: '/raio-x/resultado/',
    })}
    <script type="module" src="${asset('/raio-x.js')}"></script>
`,
};
