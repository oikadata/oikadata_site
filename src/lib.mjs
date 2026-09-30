// Peças compartilhadas entre as páginas: escape, ícones, logo, botões e cabeçalho de seção.

import { SCHEDULE_URL, WHATSAPP } from './site.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Peças gráficas ----------

const SYMBOL_PATHS = [
  'M26.4,5.3 Q31,0 38,0L73,0 Q80,0 84.6,5.3L89.4,10.7 Q94,16 87,16L24,16 Q17,16 21.6,10.7 Z',
  'M4.5,32.6 Q7,25 15,25L96,25 Q104,25 106.1,32.7L106.9,35.3 Q109,43 101,43L9,43 Q1,43 3.5,35.4 Z',
  'M3.4,59 Q3,51 11,51L82,51 Q90,51 89.6,59L89.4,61 Q89,69 81,69L12,69 Q4,69 3.6,61 Z',
  'M20.7,84.5 Q18,78 25,78L66,78 Q73,78 71.8,84.9L71.2,88.1 Q70,95 63,95L32,95 Q25,95 22.3,88.5 Z',
];
export const SYMBOL_LIGHT = ['#D3AEEE', '#B371E1', '#7E0ACB', '#C895E9'];
const SYMBOL_DARK = ['#572E73', '#8546B2', '#FFFFFF', '#653687'];

export const symbol = (colors, cls = '') =>
  `<svg class="${cls}" viewBox="0 0 110 95" aria-hidden="true" focusable="false">${SYMBOL_PATHS.map(
    (d, i) => `<path d="${d}" fill="${colors[i]}"/>`
  ).join('')}</svg>`;

// Assinatura horizontal: símbolo + wordmark em texto (herda a Space Grotesk da página).
export const logo = (variant) =>
  `<span class="logo logo--${variant}">${symbol(variant === 'dark' ? SYMBOL_DARK : SYMBOL_LIGHT, 'logo__symbol')}<span class="logo__word"><span>oika</span><span class="logo__data">data</span></span></span>`;

export const ARROW = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m0 0-6-6m6 6 6-6"/></svg>`;

export const ARROW_RIGHT = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>`;

const CALENDAR_ICON = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 3v4m8-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>`;

// ---------- Botões e links ----------

// Atributos de evento do Umami: o nome do evento e onde o botão está na página.
export const track = (event, place) => `data-umami-event="${event}" data-umami-event-local="${place}"`;

// Agendamento é a ação principal do site; o WhatsApp fica como contato secundário, no fim.
export const scheduleButton = (label, place, extra = '') =>
  `<a class="btn btn--primary ${extra}" href="${SCHEDULE_URL}" target="_blank" rel="noopener" ${track('agenda', place)}>${CALENDAR_ICON}<span>${esc(label)}</span></a>`;

export const waLink = (label, message, place) =>
  `<a href="${WHATSAPP}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" ${track('whatsapp', place)}>${esc(label)}</a>`;

export const sectionHead = (title, subtitle) => `
      <header class="section__head">
        <h2 class="section__title">${esc(title)}</h2>
        ${subtitle ? `<p class="section__sub">${esc(subtitle)}</p>` : ''}
      </header>`;
