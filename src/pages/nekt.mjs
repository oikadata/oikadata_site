// Landing oculta da parceria Oika + Nekt (Black Friday da Nekt).
// Fica fora do menu e do sitemap, com noindex: só chega quem recebe o link.
// Conteúdo em `pages.nekt` de src/content/xx.mjs.

import { ARROW_RIGHT, asset, esc, logo, track } from '../lib.mjs';
import { WHATSAPP } from '../site.mjs';

// Logo da Nekt em versão clara (texto branco, ponto verde) para o fundo escuro.
const nektMark = `<img class="bf-nekt" src="${asset('/img/nekt-white.png')}" alt="Nekt" width="449" height="138">`;

const WA_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

const CHECK = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>`;

// Botão principal: WhatsApp com mensagem pronta, para sabermos que veio da parceria.
const waButton = (label, message, place) =>
  `<a class="btn btn--primary btn--lg" href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${WA_ICON}<span>${esc(label)}</span></a>`;

// Um passo do fluxo Fontes → Nekt → Oika → Seu time. Nekt e Oika aparecem com a marca;
// os pontos que correm entre os passos são só CSS (e param com prefers-reduced-motion).
const flowNode = (n, i) => {
  const mark = n.brand === 'nekt' ? nektMark.replace('bf-nekt', 'bf-nekt bf-flow__mark') : n.brand === 'oika' ? logo('dark') : '';
  const head = mark ? `<p class="bf-flow__brand" aria-label="${esc(n.name)}">${mark}</p>` : `<p class="bf-flow__name">${esc(n.name)}</p>`;
  return `<li class="bf-flow__node${n.brand ? ` bf-flow__node--${n.brand}` : ''}" style="--i:${i}">${head}<p class="bf-flow__text">${esc(n.text)}</p><ul class="bf-flow__tags">${n.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></li>`;
};

// Chamada de nota de rodapé (¹, ²...), com o texto da nota no fim da página.
const noteRef = (n) => `<sup class="bf-star">${n}</sup>`;

const lockup = (p) => `<p class="bf-lockup" aria-label="${esc(p.hero.partnership)}">${logo('dark')}<span class="bf-lockup__plus" aria-hidden="true">+</span>${nektMark}</p>`;

export default {
  id: 'nekt',
  slug: { pt: 'parceria-nekt', en: 'nekt-partnership' },
  noindex: true,
  cta: false,
  render: (p) => `
    <section class="bf-hero">
      <div class="container bf-hero__inner">
        ${lockup(p)}
        <p class="bf-tag"><span class="bf-tag__dot" aria-hidden="true"></span>${esc(p.hero.tag)}</p>
        <h1 class="bf-hero__title">${esc(p.hero.title)}</h1>
        <p class="bf-hero__sub">${esc(p.hero.subtitle)}</p>
        <ul class="bf-facts">
          ${p.hero.facts.map((f) => `<li${f.label ? '' : ' class="bf-facts__solo"'}><strong>${esc(f.value)}${f.note ? noteRef(f.note) : ''}</strong>${f.label ? `<span>${esc(f.label)}</span>` : ''}</li>`).join('\n          ')}
        </ul>
        <div class="bf-hero__actions">
          ${waButton(p.hero.cta, p.whatsappMessage, 'nekt-hero')}
          <p class="bf-free">${CHECK}<span>${esc(p.hero.commitment)}</span></p>
        </div>
      </div>
    </section>

    <section class="section bf-how">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.how.label)}</p>
          <h2 class="section__title">${esc(p.how.title)}</h2>
        </header>
        <ol class="bf-steps">
          ${p.how.steps.map((s, i) => `<li><span class="bf-steps__n">${String(i + 1).padStart(2, '0')}</span><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></li>`).join('\n          ')}
        </ol>
        <div class="bf-incl">
          <p class="bf-incl__label">${esc(p.how.includedLabel)}</p>
          <ul>
            ${p.how.included.map((x) => `<li>${CHECK}<span>${esc(x)}</span></li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__head">
          <p class="label">${esc(p.why.label)}</p>
          <h2 class="section__title">${esc(p.why.title)}</h2>
          <p class="section__sub">${esc(p.why.subtitle)}</p>
        </header>
        <ol class="bf-flow">
          ${p.why.flow.map(flowNode).join('\n          ')}
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="bf-price">
          <div class="bf-price__intro">
            <p class="label label--dark">${esc(p.pricing.label)}</p>
            <h2 class="bf-price__title">${esc(p.pricing.title)}</h2>
            <p class="bf-price__text">${esc(p.pricing.text)}</p>
          </div>
          <div class="bf-price__box">
            <p class="bf-price__from">${esc(p.pricing.from)}</p>
            <p class="bf-price__value">${esc(p.pricing.price)}</p>
            <p class="bf-price__per">${esc(p.pricing.per)}</p>
            ${waButton(p.pricing.cta, p.whatsappMessage, 'nekt-planos')}
            <p class="bf-free bf-free--box">${CHECK}<span>${esc(p.pricing.commitment)}</span></p>
            <a class="bf-compare" href="${p.pricing.compareHref}"><span>${esc(p.pricing.compare)}</span>${ARROW_RIGHT}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container bf-about">
        <header class="section__head">
          <p class="label">${esc(p.about.label)}</p>
          <h2 class="section__title">${esc(p.about.title)}</h2>
          <p class="section__sub">${esc(p.about.subtitle)}</p>
        </header>
        <ul class="base">
          ${p.about.points.map((x) => `<li><strong>${esc(x.title)}</strong><span>${esc(x.text)}</span></li>`).join('\n          ')}
        </ul>
        <p class="work__plans"><a class="btn btn--ghost" href="${p.about.href}"><span>${esc(p.about.link)}</span>${ARROW_RIGHT}</a></p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="bf-rules">
          <h2 class="bf-rules__title">${esc(p.rules.title)}</h2>
          <ul>
            ${p.rules.items.map((r) => `<li>${esc(r)}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>

    <section class="cta bf-final" id="contato">
      <div class="container bf-final__inner">
        ${lockup(p)}
        <h2 class="cta__title">${esc(p.final.title)}</h2>
        <p class="bf-final__sub">${esc(p.final.subtitle)}</p>
        ${waButton(p.final.cta, p.whatsappMessage, 'nekt-final')}
        <ol class="bf-notes">
          ${p.hero.footnotes.map((n, i) => `<li><sup>${i + 1}</sup>${esc(n)}</li>`).join('\n          ')}
        </ol>
      </div>
    </section>
`,
};
