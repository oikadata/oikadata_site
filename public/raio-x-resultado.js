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

function falha(msg, retake = true) {
  statusEl.replaceChildren(msg);
  if (retake) statusEl.after(h('p', {}, h('a', { class: 'btn btn--primary', href: data.retakeHref }, ui.retake)));
}

// Observações pré-escritas: próximo degrau, primeira pergunta marcada, IA (quando a IA está
// à frente da base ou parada sobre uma base pronta) e a dimensão mais fraca. Três, sem repetir.
function observacoes(r) {
  const o = data.observations;
  const dims = ['integracao', 'confiabilidade', 'analitica'].sort((a, b) => r.scores[a] - r.scores[b]);
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

function render(r) {
  const s = r.scores;
  const level = data.levels[s.nivel];
  const step = data.steps[s.degrau];
  const degrauIdx = data.ladder.findIndex((l) => l.id === s.degrau); // -1 = antes do descritivo
  const link = location.href;

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

  const ladder = h(
    'section',
    { class: 'rx-r-block' },
    h('h2', { class: 'rx-r-title' }, ui.ladderTitle),
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

  const dims = h(
    'section',
    { class: 'rx-r-block' },
    h('h2', { class: 'rx-r-title' }, ui.dimensionsTitle),
    h(
      'div',
      { class: 'rx-dims' },
      ['integracao', 'confiabilidade', 'analitica'].map((k) => {
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

  const quad = data.quadrants[s.quadrante_ia];
  const cell = (id) => h('div', { class: `rx-matrix__cell${id === s.quadrante_ia ? ' is-current' : ''}` }, data.quadrants[id].title);
  const ai = h(
    'section',
    { class: 'rx-r-block rx-ai' },
    h('h2', { class: 'rx-r-title' }, ui.aiTitle),
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

  const obs = observacoes(r);
  track('observations_loaded', { origem: 'fallback' });
  const observations = h(
    'section',
    { class: 'rx-r-block' },
    h('h2', { class: 'rx-r-title' }, ui.observationsTitle),
    h(
      'div',
      { class: 'rx-obs' },
      obs.map((o) =>
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

  const start = h('section', { class: 'rx-r-block' }, h('h2', { class: 'rx-r-title' }, ui.startTitle), h('p', { class: 'rx-r-lead' }, level.start));

  const cta = data.cta[r.cta] || data.cta.explorar;
  const ctaEl = h(
    'section',
    { class: 'rx-r-cta' },
    h('h2', { class: 'cta__title' }, cta.title),
    h('p', {}, cta.text),
    r.cta === 'agendar'
      ? h('a', { class: 'btn btn--primary btn--lg', href: data.schedule, target: '_blank', rel: 'noopener', 'data-umami-event': 'agenda', 'data-umami-event-local': 'raio-x-resultado', onclick: () => track('cta_clicked', { cta: r.cta }) }, cta.button)
      : null,
    r.cta === 'explorar'
      ? h('ul', { class: 'rx-r-cta__links' }, cta.links.map((l) => h('li', {}, h('a', { href: l.href, onclick: () => track('cta_clicked', { cta: r.cta }) }, l.label))))
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

  root.replaceChildren(h('div', { class: 'container rx-r' }, header, ladder, dims, ai, observations, start, ctaEl, save));
}

// ---------- Carregamento ----------

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
