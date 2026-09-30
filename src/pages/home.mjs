// Página inicial (Soluções). Conteúdo em `pages.home` de src/content/xx.mjs.

import { ARROW, ARROW_RIGHT, SYMBOL_LIGHT, esc, scheduleButton, sectionHead, symbol } from '../lib.mjs';

export default {
  id: 'home',
  slug: '',
  render: (p, c) => `
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
        <div class="split__body">
        <div class="problem">
          <ul class="bands-list">
            ${p.problem.symptoms.map((s) => `<li>${esc(s)}</li>`).join('\n            ')}
          </ul>
        </div>
        </div>
      </div>
    </section>

    <section class="section" id="entrega">
      <div class="container">
        ${sectionHead(p.delivery.title, p.delivery.subtitle)}
        <div class="usecases">
          ${p.delivery.groups
            .map(
              (g, i) => `<div class="usecases__group">
            <h3 class="usecases__title"><span class="card__band card__band--${i + 1}" aria-hidden="true"></span>${esc(g.title)}</h3>
            <ul class="usecases__list">
              ${g.cases
                .map(
                  (u) => `<li class="usecase">
                <strong class="usecase__name">${esc(u.name)}</strong>
                <span class="usecase__question">${esc(u.question)}</span>
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

    <section class="section" id="como-entregamos">
      <div class="container">
        ${sectionHead(p.how.title, p.how.subtitle)}
        <h3 class="layer__title">${esc(p.how.productsTitle)}</h3>
        <div class="cards cards--3">
          ${p.how.products
            .map(
              (p, i) => `<article class="card">
            <span class="card__band card__band--${(i % 3) + 1}" aria-hidden="true"></span>
            <h4 class="card__title">${esc(p.title)}</h4>
            <p>${esc(p.text)}</p>
          </article>`
            )
            .join('\n          ')}
        </div>
        <h3 class="layer__title layer__title--base">${esc(p.how.teamTitle)}</h3>
        <ul class="base">
          ${p.how.team.map((t) => `<li><strong>${esc(t.title)}</strong><span>${esc(t.text)}</span></li>`).join('\n          ')}
        </ul>
        <dl class="numbers">
          ${p.how.numbers
            .map((x) => `<div class="numbers__item"><dt>${esc(x.value)}</dt><dd>${esc(x.text)}</dd></div>`)
            .join('\n          ')}
        </dl>
      </div>
    </section>

    <section class="section" id="por-que-agora">
      <div class="container">
        ${sectionHead(p.whyNow.title)}
        <div class="why">
          <div class="why__text">
            <p class="lead">${esc(p.whyNow.text)}</p>
            <blockquote class="quote">${esc(p.whyNow.quote)}</blockquote>
          </div>
          <figure class="map">
            <figcaption class="label">${esc(p.whyNow.mapTitle)}</figcaption>
            <ol class="map__layers">
              ${p.whyNow.layers
                .map((l) => `<li><strong>${esc(l.title)}</strong><span>${esc(l.text)}</span></li>`)
                .join('\n              ')}
            </ol>
            <p class="map__feeds-label">${ARROW}<span>${esc(p.whyNow.feedsLabel)}</span></p>
            <ul class="map__feeds">
              ${p.whyNow.feeds.map((f) => `<li>${esc(f)}</li>`).join('\n              ')}
            </ul>
          </figure>
        </div>
        <div class="stat">
          <p class="stat__value"><span class="stat__from">${esc(p.whyNow.stat.from)}</span><span class="stat__arrow" aria-hidden="true">→</span><span class="stat__to">${esc(p.whyNow.stat.to)}</span></p>
          <div class="stat__body">
            <p class="stat__text">${esc(p.whyNow.stat.text)}</p>
            <p class="stat__note">${esc(p.whyNow.stat.note)} <a href="${p.whyNow.stat.href}" target="_blank" rel="noopener">${esc(p.whyNow.stat.linkLabel)}</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="como-comecamos">
      <div class="container">
        ${sectionHead(p.start.title)}
        <ol class="steps">
          ${p.start.steps
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
        <div class="needs">
          <h3 class="needs__title">${esc(p.start.needsTitle)}</h3>
          <ul class="bands-list bands-list--compact">
            ${p.start.needs.map((x) => `<li>${esc(x)}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="inline-cta">
          <p>${esc(p.start.ctaText)}</p>
          ${scheduleButton(c.ui.schedule, 'como-comecamos')}
        </div>
      </div>
    </section>

`,
};
