// Página inicial (Soluções). Conteúdo em `pages.home` de src/content/xx.mjs.

import { ARROW, ARROW_RIGHT, SYMBOL_LIGHT, esc, scheduleButton, sectionHead, symbol } from '../lib.mjs';

// ---------- Ilustrações da proposta de valor ----------
// Desenhadas em HTML/CSS com a identidade da Oika, sem print de produto. São decorativas (aria-hidden):
// o texto ao lado já diz tudo. Os textos de exemplo ficam em `value.pillars[].visual` no conteúdo.

const visuals = {
  // As áreas entram numa base única, e tudo o que a empresa usa sai dela.
  hub: (v) => `<div class="vis-hub">
            <div class="vis-hub__col vis-hub__col--in">
              <p class="vis-hub__cap">${esc(v.sourcesLabel)}</p>
              <ul class="vis-hub__list">${v.sources.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
            </div>
            <svg class="vis-hub__lines" viewBox="0 0 40 200" preserveAspectRatio="none" focusable="false">
              ${[44, 92, 140, 188].map((y) => `<path d="M0 ${y} C 24 ${y}, 16 116, 40 116"/>`).join('')}
            </svg>
            <div class="vis-hub__core">
              ${symbol(SYMBOL_LIGHT, 'vis-hub__symbol')}
              <p class="vis-hub__label">${esc(v.label)}</p>
              <p class="vis-hub__value">${esc(v.value)}</p>
              <p class="vis-hub__note">${esc(v.note)}</p>
            </div>
            <svg class="vis-hub__lines" viewBox="0 0 40 200" preserveAspectRatio="none" focusable="false">
              ${[44, 92, 140, 188].map((y) => `<path d="M0 116 C 24 116, 16 ${y}, 40 ${y}"/>`).join('')}
            </svg>
            <div class="vis-hub__col vis-hub__col--out">
              <p class="vis-hub__cap">${esc(v.consumersLabel)}</p>
              <ul class="vis-hub__list">${v.consumers.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
            </div>
          </div>`,

  // Pergunta em linguagem natural e resposta com os números da empresa.
  chat: (v) => `<div class="vis-chat">
            <p class="vis-chat__q">${esc(v.question)}</p>
            <div class="vis-chat__a">
              ${symbol(SYMBOL_LIGHT, 'vis-chat__avatar')}
              <div class="vis-chat__body">
                <p>${esc(v.answer)}</p>
                <ul class="vis-chat__rows">
                  ${v.rows
                    .map(
                      (r) =>
                        `<li><span class="vis-chat__who">${esc(r.label)}${r.reason ? `<small>${esc(r.reason)}</small>` : ''}</span><span class="vis-chat__bar"><i style="width:${r.size}%"></i></span><strong>${esc(r.value)}</strong></li>`
                    )
                    .join('')}
                </ul>
                <p class="vis-chat__next">${ARROW_RIGHT}${esc(v.next)}</p>
              </div>
            </div>
          </div>`,

  // Painel com indicadores e a série dos últimos 12 meses.
  dashboard: (v) => `<div class="vis-dash">
            <div class="vis-dash__head"><strong>${esc(v.title)}</strong><span><i></i>${esc(v.updated)}</span></div>
            <dl class="vis-dash__kpis">
              ${v.kpis.map((k) => `<div><dt>${esc(k.label)}</dt><dd>${esc(k.value)}</dd><dd class="vis-dash__delta">${esc(k.delta)}</dd></div>`).join('')}
            </dl>
            <div class="vis-dash__chart">
              ${v.bars.map((b) => `<i style="height:${b}%"></i>`).join('')}
            </div>
          </div>`,

  // Lista de clientes com segmento, risco previsto e ação sugerida.
  model: (v) => `<div class="vis-model">
            <p class="vis-model__title">${esc(v.title)}</p>
            <div class="vis-model__cols">${v.columns.map((c) => `<span>${esc(c)}</span>`).join('')}</div>
            <ul>
              ${v.rows
                .map(
                  (r) => `<li class="${r.risk >= 70 ? 'is-high' : r.risk >= 40 ? 'is-mid' : 'is-low'}">
                <span class="vis-model__name">${esc(r.name)}<small>${esc(r.action)}</small></span>
                <span class="vis-model__seg">${esc(r.segment)}</span>
                <span class="vis-model__risk"><span class="vis-model__meter"><i style="width:${r.risk}%"></i></span>${r.risk}%</span>
              </li>`
                )
                .join('')}
            </ul>
          </div>`,
};

export default {
  id: 'home',
  slug: '',
  render: (p) => `
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <h1 class="hero__title">${esc(p.hero.title)}</h1>
          <p class="hero__sub">${esc(p.hero.subtitle)}</p>
          <p class="hero__support">${esc(p.hero.support)}</p>
          <div class="hero__ctas">
            ${scheduleButton(p.hero.ctaPrimary, 'hero', 'btn--lg')}
            <a class="btn btn--ghost btn--lg" href="#entrega"><span>${esc(p.hero.ctaSecondary)}</span>${ARROW}</a>
          </div>
        </div>
        <div class="hero__art" aria-hidden="true">${symbol(SYMBOL_LIGHT, 'hero__symbol')}</div>
      </div>
    </section>

    <section class="section" id="problema">
      <div class="container split">
        ${sectionHead(p.problem.title)}
        <div class="split__body problem">
          <ul class="bands-list">
            ${p.problem.symptoms.map((s) => `<li>${esc(s)}</li>`).join('\n            ')}
          </ul>
          <div class="stat">
            <p class="stat__value"><span class="stat__from">${esc(p.problem.stat.from)}</span><span class="stat__arrow" aria-hidden="true">→</span><span class="stat__to">${esc(p.problem.stat.to)}</span></p>
            <div class="stat__body">
              <p class="stat__text">${esc(p.problem.stat.text)}</p>
              <p class="stat__note">${esc(p.problem.stat.note)} <a href="${p.problem.stat.href}" target="_blank" rel="noopener">${esc(p.problem.stat.linkLabel)}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section value" id="entrega">
      <div class="container">
        ${sectionHead(p.value.title, p.value.subtitle)}
        <div class="pillars">
          ${p.value.pillars
            .map(
              (v, i) => `<article class="pillar${i % 2 ? ' pillar--flip' : ''}">
            <div class="pillar__text">
              <p class="pillar__tag"><span class="card__band card__band--${(i % 3) + 1}" aria-hidden="true"></span>${esc(v.tag)}</p>
              <h3 class="pillar__title">${esc(v.title)}</h3>
              <p class="pillar__body">${esc(v.text)}</p>
            </div>
            <div class="pillar__art" aria-hidden="true">
          ${visuals[v.visual.type](v.visual)}
            </div>
          </article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section" id="casos">
      <div class="container">
        ${sectionHead(p.cases.title, p.cases.subtitle)}
        <div class="usecases">
          ${p.cases.groups
            .map(
              (g, i) => `<div class="usecases__group">
            <h3 class="usecases__title"><span class="card__band card__band--${i + 1}" aria-hidden="true"></span>${esc(g.title)}</h3>
            <ul class="usecases__list">
              ${g.cases
                .map(
                  (u) => `<li class="usecase">
                <strong class="usecase__name">${esc(u.name)}</strong>
                <span class="usecase__result">${ARROW_RIGHT}${esc(u.result)}</span>
              </li>`
                )
                .join('\n              ')}
            </ul>
          </div>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section" id="como-trabalhamos">
      <div class="container">
        ${sectionHead(p.work.title, p.work.subtitle)}
        <ol class="steps">
          ${p.work.steps
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
        <h3 class="layer__title layer__title--base">${esc(p.work.teamTitle)}</h3>
        <ul class="base">
          ${p.work.team.map((t) => `<li><strong>${esc(t.title)}</strong><span>${esc(t.text)}</span></li>`).join('\n          ')}
        </ul>
        <div class="needs">
          <h3 class="needs__title">${esc(p.work.needsTitle)}</h3>
          <ul class="bands-list bands-list--compact">
            ${p.work.needs.map((x) => `<li>${esc(x)}</li>`).join('\n            ')}
          </ul>
        </div>
        <p class="work__plans"><a class="btn btn--ghost" href="${p.work.plansHref}"><span>${esc(p.work.plansLink)}</span>${ARROW_RIGHT}</a></p>
      </div>
    </section>

`,
};
