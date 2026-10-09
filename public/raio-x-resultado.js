// Raio-X de Dados: página de resultado. Busca o resultado pelo token (?t=) e monta a página
// com a biblioteca de textos embutida em #rx-result-data. Sem dependências.
//
// As observações aqui são as pré-escritas (fallback da seção 7.2). Quando as observações por IA
// existirem, elas substituem estas.

const data = JSON.parse(document.getElementById('rx-result-data').textContent);
const root = document.getElementById('rx-result');
const statusEl = root.querySelector('[data-rx-status]');
const { ui } = data;

const h = (tag, attrs = {}, ...children) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === 'class') el.className = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) if (c != null && c !== false) el.append(c);
  return el;
};
const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
const track = (name, props) => {
  try {
    window.umami?.track(name, props);
  } catch {}
};
const faixa = (score) => (score <= 25 ? 0 : score <= 50 ? 1 : score <= 75 ? 2 : 3);
const block = (title, ...children) => h('section', { class: 'rx-r-block' }, h('h2', { class: 'rx-r-title' }, title), ...children);

function falha(msg, retake = true) {
  statusEl.replaceChildren(msg);
  if (retake) statusEl.after(h('p', {}, h('a', { class: 'btn btn--primary', href: data.retakeHref }, ui.retake)));
}

// Dimensões presentes no resultado (respostas da v2 não têm cultura), da mais fraca para a mais forte.
const DIMENSOES = ['integracao', 'confiabilidade', 'cultura', 'analitica'];
const dimensoesDe = (s) => DIMENSOES.filter((d) => typeof s[d] === 'number');
const maisFracas = (s) => [...dimensoesDe(s)].sort((a, b) => s[a] - s[b]);

// Observações pré-escritas: próximo degrau, primeira pergunta marcada, IA (quando a IA está
// à frente da base ou parada sobre uma base pronta) e a dimensão mais fraca. Três, sem repetir.
function observacoes(r) {
  const o = data.observations;
  const dims = maisFracas(r.scores);
  const candidatas = [
    o.steps[r.scores.degrau],
    r.perguntas[0] && o.questions[r.perguntas[0]],
    o.ai[r.scores.quadrante_ia],
    o.dimensions[dims[0]],
    ...r.perguntas.slice(1).map((p) => o.questions[p]),
    ...dims.slice(1).map((d) => o.dimensions[d]),
  ].filter(Boolean);
  return [...new Set(candidatas)].slice(0, 3);
}

// Áreas dos casos de uso: as das perguntas marcadas na pergunta 10, na ordem marcada, sem repetir.
function areasSugeridas(r) {
  const areas = [...new Set(r.perguntas.map((p) => data.questionAreas[p]).filter(Boolean))];
  return { areas: areas.length ? areas : data.defaultAreas, marcadas: areas.length > 0 };
}

// Como a Oika ajuda: as duas dimensões mais fracas e a IA quando ela pede ação.
function ajuda(r) {
  const s = r.scores;
  const itens = maisFracas(s)
    .slice(0, 2)
    .map((d) => data.help.dimensions[d]);
  if (data.help.ai[s.quadrante_ia]) itens.push(data.help.ai[s.quadrante_ia]);
  return itens;
}

function render(r) {
  const s = r.scores;
  const level = data.levels[s.nivel];
  const step = data.steps[s.degrau];
  const degrauIdx = data.ladder.findIndex((l) => l.id === s.degrau); // -1 = antes do descritivo
  const link = location.href;

  // ---------- Cabeçalho ----------
  const header = h(
    'header',
    { class: 'rx-r-head' },
    h(
      'div',
      { class: 'rx-r-head__text' },
      h('p', { class: 'rx-r-eyebrow' }, ui.eyebrow, r.empresa ? ` · ${r.empresa}` : ''),
      h('h1', { class: 'page-hero__title' }, level.name),
      h('p', { class: 'rx-r-level' }, fmt(ui.levelLabel, { n: s.nivel })),
      h('p', { class: 'page-hero__sub' }, level.summary)
    ),
    h(
      'div',
      { class: 'rx-r-score', role: 'img', 'aria-label': `${ui.scoreLabel}: ${s.geral} de 100` },
      h('span', { class: 'rx-r-score__ring' }),
      h('p', { class: 'rx-r-score__value' }, String(s.geral), h('span', {}, '/100')),
      h('p', { class: 'rx-r-score__label' }, ui.scoreLabel)
    )
  );
  // Anel do score (só números: seguro para innerHTML)
  const c = 2 * Math.PI * 52;
  header.querySelector('.rx-r-score__ring').innerHTML = `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--surface)" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="var(--primary)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(c * s.geral) / 100} ${c}" transform="rotate(-90 60 60)"/></svg>`;

  // ---------- Observações ----------
  track('observations_loaded', { origem: 'fallback' });
  const observations = block(
    ui.observationsTitle,
    h(
      'div',
      { class: 'rx-obs' },
      observacoes(r).map((o) =>
        h(
          'article',
          { class: 'rx-obs__card' },
          h('h3', {}, o.title),
          h('p', {}, o.text),
          h('p', { class: 'rx-obs__why' }, h('strong', {}, `${ui.observationsWhy}: `), o.why),
          h('p', { class: 'rx-obs__q' }, h('span', {}, ui.observationsQuestion), o.question)
        )
      )
    )
  );

  // ---------- Escada ----------
  const ladder = block(
    ui.ladderTitle,
    h(
      'ol',
      { class: 'rx-ladder-viz' },
      data.ladder.map((l, i) =>
        h(
          'li',
          { class: `rx-ladder-viz__step${i <= degrauIdx ? ' is-done' : ''}${i === degrauIdx ? ' is-current' : ''}${i === degrauIdx + 1 ? ' is-next' : ''}` },
          h('span', { class: 'rx-ladder-viz__name' }, l.name),
          h('strong', {}, l.question),
          i === degrauIdx ? h('span', { class: 'rx-ladder-viz__here' }, ui.ladderYouAreHere) : null
        )
      )
    ),
    h('p', { class: 'rx-r-lead' }, h('strong', {}, `${step.name}: `), step.summary),
    h('p', { class: 'rx-r-next' }, step.next)
  );

  // ---------- Dimensões ----------
  const dims = block(
    ui.dimensionsTitle,
    h(
      'div',
      { class: 'rx-dims' },
      dimensoesDe(s).map((k) => {
        const d = data.dimensions[k];
        return h(
          'div',
          { class: 'rx-dim' },
          h('div', { class: 'rx-dim__head' }, h('strong', {}, d.name), h('span', {}, `${s[k]}/100`)),
          h('div', { class: 'rx-dim__bar', role: 'img', 'aria-label': `${d.name}: ${s[k]} de 100` }, h('span', { style: `width:${Math.max(s[k], 2)}%` })),
          h('p', { class: 'rx-dim__q' }, d.question),
          h('p', {}, d.bands[faixa(s[k])])
        );
      })
    )
  );

  // ---------- Prontidão para IA ----------
  const quad = data.quadrants[s.quadrante_ia];
  const cell = (id) => h('div', { class: `rx-matrix__cell${id === s.quadrante_ia ? ' is-current' : ''}` }, data.quadrants[id].title);
  const ai = block(
    ui.aiTitle,
    h(
      'div',
      { class: 'rx-ai__grid' },
      h(
        'div',
        { class: 'rx-matrix', role: 'img', 'aria-label': `${ui.aiTitle}: ${quad.title}` },
        h('span', { class: 'rx-matrix__axis rx-matrix__axis--y' }, ui.aiAxisUse),
        h('span', { class: 'rx-matrix__row-label' }, ui.aiContext),
        cell('ia_a_frente'),
        cell('ia_com_contexto'),
        h('span', { class: 'rx-matrix__row-label' }, ui.aiNoContext),
        cell('primeiro_base'),
        cell('base_pronta'),
        h('span'),
        h('span', { class: 'rx-matrix__col-label' }, ui.aiBaseWeak),
        h('span', { class: 'rx-matrix__col-label' }, ui.aiBaseSolid),
        h('span', { class: 'rx-matrix__axis rx-matrix__axis--x' }, ui.aiAxisBase)
      ),
      h('div', {}, h('h3', { class: 'rx-ai__title' }, quad.title), h('p', {}, quad.text), r.ia_dados_manual ? h('p', { class: 'rx-ai__note' }, data.aiManualNote) : null)
    )
  );

  // ---------- Casos de uso sugeridos ----------
  const { areas, marcadas } = areasSugeridas(r);
  const useCases = block(
    ui.useCasesTitle,
    h('p', { class: 'rx-r-sub' }, marcadas ? ui.useCasesSub : ui.useCasesSubDefault),
    h(
      'div',
      { class: 'rx-uc' },
      areas.map((a) =>
        h(
          'article',
          { class: 'rx-uc__card' },
          h('h3', {}, data.areaLabels[a]),
          h('ul', { class: 'bands-list bands-list--compact' }, data.useCases[a].map((u) => h('li', {}, u)))
        )
      )
    )
  );

  // ---------- Roteiro: por onde começar ----------
  const primeiroCaso = data.useCases[areas[0]][0];
  const roadmap = block(
    ui.roadmapTitle,
    h('p', { class: 'rx-r-lead' }, level.start),
    h(
      'ol',
      { class: 'rx-roadmap' },
      data.roadmap.map((st, i) =>
        h(
          'li',
          { class: `rx-roadmap__step${i === data.roadmap.length - 1 ? ' rx-roadmap__step--cycle' : ''}` },
          h('span', { class: 'rx-roadmap__n', 'aria-hidden': 'true' }, i === data.roadmap.length - 1 ? '↻' : String(i + 1)),
          h('p', { class: 'rx-roadmap__when' }, st.when),
          h('h3', {}, st.title),
          h('p', {}, fmt(st.text, { caso: primeiroCaso }))
        )
      )
    ),
    h('p', { class: 'rx-r-next' }, ui.roadmapCycle)
  );

  // ---------- Como a Oika ajuda ----------
  const help = block(
    ui.helpTitle,
    h('p', { class: 'rx-r-lead' }, data.help.intro),
    h('ul', { class: 'rx-help' }, ajuda(r).map((t) => h('li', {}, t))),
    h('p', { class: 'rx-help__closing' }, data.help.closing)
  );

  // ---------- Chamada final: agendar ----------
  const cta = data.cta[r.cta] || data.cta.explorar;
  const ctaEl = h(
    'section',
    { class: 'rx-r-cta' },
    h('h2', { class: 'cta__title' }, cta.title),
    h('p', {}, cta.text),
    h(
      'a',
      {
        class: 'btn btn--primary btn--lg',
        href: data.schedule,
        target: '_blank',
        rel: 'noopener',
        'data-umami-event': 'agenda',
        'data-umami-event-local': 'raio-x-resultado',
        onclick: () => track('cta_clicked', { cta: r.cta }),
      },
      data.cta.button
    ),
    cta.links
      ? h(
          'div',
          { class: 'rx-r-cta__more' },
          h('p', {}, cta.linksTitle),
          h('ul', { class: 'rx-r-cta__links' }, cta.links.map((l) => h('li', {}, h('a', { href: l.href }, l.label))))
        )
      : null
  );

  const copy = h(
    'button',
    {
      class: 'btn btn--ghost',
      type: 'button',
      onclick: async () => {
        try {
          await navigator.clipboard.writeText(link);
          copy.textContent = ui.copied;
        } catch {}
      },
    },
    ui.copyLink
  );
  const save = h('p', { class: 'rx-r-save' }, ui.saveLink, ' ', copy);

  root.replaceChildren(h('div', { class: 'container rx-r' }, header, observations, ladder, dims, ai, useCases, roadmap, help, ctaEl, save));
}

// ---------- Carregamento ----------

// O seletor de idioma leva o mesmo resultado para o outro idioma (mantém o ?t=).
const outroIdioma = document.querySelector('a.lang-switch__item');
if (outroIdioma && location.search) outroIdioma.href = outroIdioma.getAttribute('href') + location.search;

const token = new URLSearchParams(location.search).get('t');
if (!token || !data.api) {
  falha(ui.notFound);
} else {
  fetch(`${data.api}/resultado?t=${encodeURIComponent(token)}`)
    .then(async (res) => {
      if (res.status === 404) return falha(ui.notFound);
      if (res.status === 410) return falha(ui.expired);
      if (!res.ok) return falha(ui.error, false);
      const { resultado } = await res.json();
      render(resultado);
      track('result_viewed', { cta: resultado.cta });
    })
    .catch(() => falha(ui.error, false));
}
