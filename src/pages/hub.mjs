// Proposta comercial do hub de dados da Oika (versão futura). Página oculta: noindex,
// fora do menu e do sitemap, sem links internos; só chega quem recebe o link.
// Só em português. Conteúdo em `pages.hub` de src/content/pt-hub.mjs.
// As ilustrações seguem o padrão da home (HTML/CSS, decorativas) e animam ao entrar na tela (public/hub.js).

import { ARROW, ARROW_RIGHT, SYMBOL_LIGHT, asset, esc, symbol, track } from '../lib.mjs';
import { WHATSAPP } from '../site.mjs';

const WA_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

const CHECK = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>`;

const SYNC = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4"/></svg>`;

const SEARCH = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></g></svg>`;

// Ícones das vantagens, no traço dos outros ícones do site.
const ICONS = {
  one: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/><path d="M10 9.5 12.5 8v8.5"/>',
  team: '<circle cx="9" cy="8.5" r="3"/><circle cx="16.5" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8M15 14.4c2.6-.4 4.8 1.2 5.5 4.1"/>',
  plug: '<path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0V7ZM12 16v5"/>',
  fast: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z"/>',
  flex: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</g></svg>`;

const waButton = (label, message, place, cls = 'btn--primary btn--lg') =>
  `<a class="btn ${cls}" href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${WA_ICON}<span>${esc(label)}</span></a>`;

// Símbolo da Oika com só as `n` faixas de baixo coloridas: mostra quanto cada plano empilha.
const planMark = (n) =>
  symbol(SYMBOL_LIGHT.map((c, i) => (i >= 4 - n ? c : 'rgba(23, 16, 30, 0.1)')), 'hub-plan__mark');

// ---------- Ilustrações ----------

const visuals = {
  // Fontes conectadas na plataforma, com monitoramento e as camadas de dados.
  sync: (v) => `<div class="vis-sync">
            <div class="vis-sync__head"><strong>${esc(v.title)}</strong><span><i></i>${esc(v.status)}</span></div>
            <ul class="vis-sync__rows">
              ${v.rows
                .map(
                  (r) => `<li${r.loading ? ' class="is-loading"' : ''}><span class="vis-sync__name">${esc(r.name)}</span><span class="vis-sync__note">${esc(r.note)}</span><span class="vis-sync__state">${r.loading ? SYNC : CHECK}</span></li>`
                )
                .join('')}
            </ul>
            <ol class="vis-sync__layers">${v.layers.map((l) => `<li>${esc(l)}</li>`).join(`<li class="vis-sync__arrow" aria-hidden="true">${ARROW_RIGHT}</li>`)}</ol>
          </div>`,

  // Painel com indicadores e a série dos últimos 12 meses (mesmo desenho da home).
  dashboard: (v) => `<div class="vis-dash">
            <div class="vis-dash__head"><strong>${esc(v.title)}</strong><span><i></i>${esc(v.updated)}</span></div>
            <dl class="vis-dash__kpis">
              ${v.kpis.map((k) => `<div><dt>${esc(k.label)}</dt><dd>${esc(k.value)}</dd><dd class="vis-dash__delta">${esc(k.delta)}</dd></div>`).join('')}
            </dl>
            <div class="vis-dash__chart hub-bars">
              ${v.bars.map((b, i) => `<i style="height:${b}%;--i:${i}"></i>`).join('')}
            </div>
          </div>`,

  // Janela do portal: menu, pergunta à IA e atalhos para painéis e análises.
  portal: (v) => `<div class="vis-portal">
            <div class="vis-portal__bar"><i></i><i></i><i></i><span>${esc(v.title)}</span></div>
            <div class="vis-portal__body">
              <ul class="vis-portal__menu">${v.menu.map((m, i) => `<li${i === v.menu.length - 1 ? ' class="is-active"' : ''}>${esc(m)}</li>`).join('')}</ul>
              <div class="vis-portal__main">
                <p class="vis-portal__ask">${SEARCH}<span class="vis-portal__typed">${esc(v.question)}</span></p>
                <div class="vis-portal__answer">${symbol(SYMBOL_LIGHT, 'vis-portal__avatar')}<p>${esc(v.answer)}</p></div>
                <ul class="vis-portal__tiles">${v.tiles.map((t) => `<li><small>${esc(t.kind)}</small>${esc(t.name)}</li>`).join('')}</ul>
              </div>
            </div>
          </div>`,

  // Time e IA em volta de uma entrega de 7 dias.
  team: (v) => `<div class="vis-team">
            <ul class="vis-team__roles">${v.roles.map((r, i) => `<li${i === v.roles.length - 1 ? ' class="is-ai"' : ''}>${i === v.roles.length - 1 ? symbol(SYMBOL_LIGHT, 'vis-team__symbol') : ''}${esc(r)}</li>`).join('')}</ul>
            <div class="vis-team__card">
              <p class="vis-team__title"><strong>${esc(v.title)}</strong><span>7 dias</span></p>
              <ol class="vis-team__days">
                ${v.days.map((d, i) => `<li style="--i:${i}"><i></i><span>D${i + 1}</span>${d ? `<small>${esc(d)}</small>` : ''}</li>`).join('')}
              </ol>
              <p class="vis-team__note">${CHECK}<span>${esc(v.note)}</span></p>
            </div>
          </div>`,
};

// Conector animado entre as colunas do fluxo.
const link = `<div class="hub-flow__link" aria-hidden="true"><i></i><i></i><i></i></div>`;

export default {
  id: 'hub',
  slug: 'hub-de-dados',
  langs: ['pt'],
  noindex: true,
  cta: false,
  render: (p) => `
    <section class="hero hub-hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <p class="hub-tag"><span class="hub-tag__dot" aria-hidden="true"></span>${esc(p.hero.tag)}</p>
          <h1 class="hero__title">${esc(p.hero.title)}</h1>
          <p class="hero__sub">${esc(p.hero.subtitle)}</p>
          <ul class="hub-facts">
            ${p.hero.facts.map((f) => `<li><strong>${esc(f.value)}</strong><span>${esc(f.label)}</span></li>`).join('\n            ')}
          </ul>
          <div class="hero__ctas">
            ${waButton(p.hero.cta, p.whatsappMessage, 'hub-hero')}
            <a class="btn btn--ghost btn--lg" href="#planos"><span>${esc(p.hero.secondary)}</span>${ARROW}</a>
          </div>
        </div>
        <div class="hub-layers" data-reveal>
          <ul class="hub-layers__list">
            ${p.hero.layers.map((l, i) => `<li class="hub-layer hub-layer--${i + 1}" style="--i:${i}"><strong>${esc(l.name)}</strong><span>${esc(l.tool)}</span></li>`).join('\n            ')}
          </ul>
          <p class="hub-layers__price"><span>${esc(p.hero.price)}</span></p>
        </div>
      </div>
    </section>

    <section class="section hub-flow-section">
      <div class="container">
        <header class="section__head">
          <p class="label label--dark">${esc(p.flow.label)}</p>
          <h2 class="section__title">${esc(p.flow.title)}</h2>
          <p class="section__sub">${esc(p.flow.subtitle)}</p>
        </header>
        <div class="hub-flow" aria-hidden="true" data-reveal>
          <div class="hub-flow__col">
            <p class="hub-flow__head">${esc(p.flow.sources.title)}</p>
            <ul class="hub-flow__chips">${p.flow.sources.items.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
          </div>
          ${link}
          <div class="hub-flow__col">
            <p class="hub-flow__head">${esc(p.flow.platform.title)}</p>
            <div class="hub-flow__core">${symbol(SYMBOL_LIGHT, 'hub-flow__symbol')}<strong>${esc(p.flow.platform.name)}</strong><span>${esc(p.flow.platform.text)}</span></div>
          </div>
          ${link}
          <div class="hub-flow__col">
            <p class="hub-flow__head">${esc(p.flow.outputs.title)}</p>
            <ul class="hub-flow__outs">${p.flow.outputs.items.map((o) => `<li><strong>${esc(o.name)}</strong><span>${esc(o.text)}</span></li>`).join('')}</ul>
          </div>
          ${link}
          <div class="hub-flow__col">
            <p class="hub-flow__head">${esc(p.flow.areas.title)}</p>
            <ul class="hub-flow__chips hub-flow__chips--areas">${p.flow.areas.items.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
          </div>
          <p class="hub-flow__team"><span class="hub-flow__pulse"></span>${esc(p.flow.team)}</p>
          <p class="hub-flow__price">${esc(p.flow.price)}</p>
        </div>
      </div>
    </section>

    <section class="section value">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.stack.label)}</p>
          <h2 class="section__title">${esc(p.stack.title)}</h2>
          <p class="section__sub">${esc(p.stack.subtitle)}</p>
        </header>
        <div class="pillars">
          ${p.stack.items
            .map(
              (v, i) => `<article class="pillar${i % 2 ? ' pillar--flip' : ''}">
            <div class="pillar__text">
              <p class="pillar__tag"><span class="card__band card__band--${(i % 3) + 1}" aria-hidden="true"></span>${esc(v.tag)}</p>
              <h3 class="pillar__title">${esc(v.title)}</h3>
              <p class="pillar__body">${esc(v.text)}</p>
            </div>
            <div class="pillar__art" aria-hidden="true" data-reveal>
          ${visuals[v.visual.type](v.visual)}
            </div>
          </article>`
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section bf-how">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.compare.label)}</p>
          <h2 class="section__title">${esc(p.compare.title)}</h2>
        </header>
        <div class="hub-vs" data-reveal>
          <div class="hub-vs__side hub-vs__side--before">
            <p class="hub-vs__name">${esc(p.compare.before.name)}</p>
            <ul class="hub-vs__pieces" aria-hidden="true">${p.compare.before.pieces.map((x, i) => `<li style="--i:${i}"><strong>${esc(x)}</strong><span>${esc(p.compare.before.each)}</span></li>`).join('')}</ul>
            <p class="hub-vs__result">${esc(p.compare.before.result)}</p>
          </div>
          <span class="hub-vs__arrow" aria-hidden="true">${ARROW_RIGHT}</span>
          <div class="hub-vs__side hub-vs__side--after">
            <p class="hub-vs__name">${esc(p.compare.after.name)}</p>
            <div class="hub-vs__one" aria-hidden="true">${symbol(SYMBOL_LIGHT, 'hub-vs__symbol')}<strong>${esc(p.compare.after.title)}</strong><span>${p.compare.before.pieces.map(esc).join(' · ')}</span></div>
            <p class="hub-vs__result">${esc(p.compare.after.result)}</p>
          </div>
        </div>
        <ul class="hub-gains">
          ${p.compare.items.map((g) => `<li><span class="hub-gains__icon">${icon(g.icon)}</span><strong>${esc(g.title)}</strong><span>${esc(g.text)}</span></li>`).join('\n          ')}
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
            ${planMark(i + 2)}
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
    <script src="${asset('/hub.js')}" defer></script>
`,
};
