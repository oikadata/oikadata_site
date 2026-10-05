// Raio-X de Dados: questionário (uma pergunta por tela). Sem dependências.
// Lê os textos e os códigos de #rx-data; grava parcial a cada resposta e conclui na API.
// O score e a qualificação são calculados no servidor.

const data = JSON.parse(document.getElementById('rx-data').textContent);
const app = document.getElementById('rx-app');
const intro = document.querySelectorAll('[data-rx-intro]');
const startBtn = document.querySelector('[data-rx-start]');
const restartBtn = document.querySelector('[data-rx-restart]');
const unavailable = document.querySelector('[data-rx-unavailable]');
const { screens, ui, contact } = data;
const TOTAL = screens.length;
const KEY = 'oika:raio-x';

// ---------- Utilidades ----------

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
    window.umami?.track(name, { versao: data.version, ...props });
  } catch {}
};
const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || null;
  } catch {
    return null;
  }
};
const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
};
const novaSessao = () => (crypto.randomUUID ? crypto.randomUUID().replace(/-/g, '') : String(Date.now()) + Math.random().toString(36).slice(2));

function utmAtual() {
  const q = new URLSearchParams(location.search);
  const utm = {};
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) if (q.get(k)) utm[k] = q.get(k);
  return utm;
}

function cnpjValido(v) {
  const d = String(v).replace(/\D/g, '');
  if (d.length !== 14 || /^(\d)\1+$/.test(d)) return false;
  const dv = (base) => {
    let soma = 0;
    let peso = base.length - 7;
    for (const n of base) {
      soma += Number(n) * peso--;
      if (peso < 2) peso = 9;
    }
    const r = soma % 11;
    return r < 2 ? 0 : 11 - r;
  };
  const d1 = dv(d.slice(0, 12));
  return d.endsWith(`${d1}${dv(d.slice(0, 12) + d1)}`);
}

// ---------- Estado ----------

let autoAdvance = false;
app.addEventListener('pointerdown', () => (autoAdvance = true), true);

let state = load();
const fresh = () => ({ session: novaSessao(), step: 0, answers: {}, utm: utmAtual(), referrer: document.referrer || '' });

// Autosave no servidor (para medir abandono). Falha em silêncio: o progresso também fica no navegador.
let saveTimer;
function autosave(ultima) {
  save();
  if (!data.api) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fetch(`${data.api}/salvar`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ session_id: state.session, ultima_pergunta: ultima, respostas: state.answers, utm: state.utm, referrer: state.referrer }),
    }).catch(() => {});
  }, 250);
}

// ---------- Telas ----------

function shell(content, { progressLabel, ratio, onBack }) {
  return h(
    'div',
    { class: 'container rx-app__inner' },
    h(
      'div',
      { class: 'rx-progress' },
      h('div', { class: 'rx-progress__bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(ratio * 100), 'aria-label': progressLabel }, h('span', { style: `width:${Math.round(ratio * 100)}%` })),
      h('div', { class: 'rx-progress__row' }, onBack ? h('button', { class: 'rx-back', type: 'button', onclick: onBack }, `← ${ui.back}`) : h('span'), h('span', { class: 'rx-progress__label' }, progressLabel))
    ),
    content
  );
}

function render() {
  app.replaceChildren();
  if (state.step >= TOTAL) return renderContact();
  const s = screens[state.step];
  track('question_viewed', { id: s.id });
  const view = s.type === 'escada' ? renderLadder(s) : s.type === 'multipla' ? renderMulti(s) : renderSingle(s);
  app.append(
    shell(view, {
      progressLabel: fmt(ui.progress, { n: state.step + 1, total: TOTAL }),
      ratio: state.step / TOTAL,
      onBack: state.step > 0 ? () => go(state.step - 1) : null,
    })
  );
  focusTitle();
}

function focusTitle() {
  const t = app.querySelector('.rx-q__title');
  if (t) t.focus({ preventScroll: true });
  window.scrollTo({ top: app.offsetTop - 80, behavior: 'smooth' });
}

function go(step) {
  state.step = step;
  save();
  render();
}

function answered(id) {
  track('question_answered', { id });
  autosave(id);
  go(state.step + 1);
}

const head = (s) => [
  h('h2', { class: 'rx-q__title', id: `t-${s.id}`, tabindex: '-1' }, s.title),
  s.help ? h('p', { class: 'rx-q__help' }, s.help) : null,
];

function renderSingle(s) {
  const current = state.answers[s.id];
  const openInput = s.open
    ? h('input', { class: 'rx-input', type: 'text', id: s.open.id, maxlength: 120, placeholder: s.open.placeholder, value: state.answers[s.open.id] || '', 'aria-label': s.open.label })
    : null;
  const openWrap = s.open ? h('div', { class: 'rx-open', hidden: current !== s.open.when }, h('label', { for: s.open.id }, s.open.label), openInput) : null;
  // "Continuar" aparece quando já há resposta (ao voltar) ou quando a escolha pede o campo aberto.
  const next = h('button', { class: 'btn btn--primary', type: 'button', hidden: !current, onclick: () => (s.open && state.answers[s.id] === s.open.when ? finishOpen() : answered(s.id)) }, ui.next);

  function finishOpen() {
    const v = openInput.value.trim();
    if (v) state.answers[s.open.id] = v;
    else delete state.answers[s.open.id];
    answered(s.id);
  }

  const options = s.options.map((o, i) =>
    h(
      'label',
      { class: 'rx-option' },
      h('input', {
        type: 'radio',
        name: s.id,
        value: o.code,
        checked: current === o.code,
        onchange: () => {
          state.answers[s.id] = o.code;
          if (s.open && o.code === s.open.when) {
            openWrap.hidden = false;
            next.hidden = false;
            save();
            openInput.focus();
            return;
          }
          if (s.open) {
            delete state.answers[s.open.id];
            openWrap.hidden = true;
          }
          save();
          next.hidden = false;
          // Avança sozinho com clique, toque ou tecla 1–9; com as setas do teclado, só seleciona.
          if (autoAdvance) setTimeout(() => answered(s.id), 180);
          autoAdvance = false;
        },
      }),
      h('span', { class: 'rx-option__key', 'aria-hidden': 'true' }, String(i + 1)),
      h('span', { class: 'rx-option__label' }, o.label)
    )
  );
  if (openInput) openInput.addEventListener('keydown', (e) => e.key === 'Enter' && finishOpen());
  return h(
    'div',
    { class: 'rx-q' },
    ...head(s),
    h('fieldset', { class: 'rx-options', 'aria-labelledby': `t-${s.id}` }, h('legend', { class: 'sr-only' }, s.title), ...options),
    openWrap,
    h('div', { class: 'rx-q__actions' }, next),
    h('p', { class: 'rx-q__hint' }, ui.keyboardHint)
  );
}

function renderLadder(s) {
  const next = h('button', { class: 'btn btn--primary', type: 'button', disabled: !s.rows.every((r) => state.answers[r.id]), onclick: () => answered(s.id) }, ui.next);
  const rows = s.rows.map((r) =>
    h(
      'fieldset',
      { class: 'rx-ladder__row' },
      // A legenda (para leitores de tela) fica escondida; o rótulo visível é um div, que se encaixa no grid.
      h('legend', { class: 'sr-only' }, `${r.label} ${r.example}`),
      h('div', { class: 'rx-ladder__label', 'aria-hidden': 'true' }, h('strong', {}, r.label), h('span', {}, r.example)),
      h(
        'div',
        { class: 'rx-ladder__options' },
        s.options.map((o) =>
          h(
            'label',
            { class: 'rx-chip' },
            h('input', {
              type: 'radio',
              name: r.id,
              value: o.code,
              checked: state.answers[r.id] === o.code,
              onchange: () => {
                state.answers[r.id] = o.code;
                save();
                next.disabled = !s.rows.every((x) => state.answers[x.id]);
              },
            }),
            h('span', {}, o.label)
          )
        )
      )
    )
  );
  const el = h('div', { class: 'rx-q' }, ...head(s), h('div', { class: 'rx-ladder' }, rows), h('div', { class: 'rx-q__actions' }, next));
  return el;
}

function renderMulti(s) {
  const chosen = new Set(state.answers[s.id] || []);
  const boxes = [];
  const sync = () => {
    for (const b of boxes) b.disabled = !b.checked && chosen.size >= s.max;
    state.answers[s.id] = [...chosen];
    save();
  };
  const options = s.options.map((o, i) => {
    const input = h('input', {
      type: 'checkbox',
      name: s.id,
      value: o.code,
      checked: chosen.has(o.code),
      onchange: (e) => {
        if (e.target.checked) chosen.add(o.code);
        else chosen.delete(o.code);
        sync();
      },
    });
    boxes.push(input);
    return h('label', { class: 'rx-option rx-option--check' }, input, h('span', { class: 'rx-option__key', 'aria-hidden': 'true' }, String(i + 1)), h('span', { class: 'rx-option__label' }, o.label));
  });
  const open = h('textarea', { class: 'rx-input', id: s.open.id, rows: 2, maxlength: 400, placeholder: s.open.placeholder }, state.answers[s.open.id] || '');
  sync();
  return h(
    'div',
    { class: 'rx-q' },
    ...head(s),
    h('p', { class: 'rx-q__help' }, fmt(ui.chooseUpTo, { max: s.max })),
    h('fieldset', { class: 'rx-options', 'aria-labelledby': `t-${s.id}` }, h('legend', { class: 'sr-only' }, s.title), ...options),
    h('div', { class: 'rx-open' }, h('label', { for: s.open.id }, s.open.label), open),
    h(
      'div',
      { class: 'rx-q__actions' },
      h('button', {
        class: 'btn btn--primary',
        type: 'button',
        onclick: () => {
          const v = open.value.trim();
          if (v) state.answers[s.open.id] = v;
          else delete state.answers[s.open.id];
          answered(s.id);
        },
      }, ui.next)
    )
  );
}

// ---------- Contato ----------

function renderContact() {
  track('contact_viewed');
  autosave('contato');
  const f = contact.fields;
  const field = (id, { required }) => {
    const cfg = f[id];
    const input = h('input', {
      class: 'rx-input',
      id: `c-${id}`,
      name: id,
      type: cfg.type || 'text',
      autocomplete: cfg.autocomplete,
      inputmode: cfg.inputmode,
      required,
      maxlength: 160,
      value: state.contact?.[id] || '',
      'aria-describedby': `e-${id}${cfg.help ? ` h-${id}` : ''}`,
    });
    return h(
      'div',
      { class: 'rx-field' },
      h('label', { for: `c-${id}` }, cfg.label, required ? null : h('span', { class: 'rx-field__opt' }, ` (${ui.optional})`)),
      input,
      cfg.help ? h('p', { class: 'rx-field__help', id: `h-${id}` }, cfg.help) : null,
      h('p', { class: 'rx-field__error', id: `e-${id}`, 'aria-live': 'polite' })
    );
  };
  const consent = h('input', { type: 'checkbox', id: 'c-consent', name: 'consent' });
  const newsletter = h('input', { type: 'checkbox', id: 'c-newsletter', name: 'newsletter' });
  const status = h('p', { class: 'rx-form__status', 'aria-live': 'assertive' });
  const submit = h('button', { class: 'btn btn--primary btn--lg', type: 'submit' }, ui.submit);
  const form = h(
    'form',
    { class: 'rx-form', novalidate: true, onsubmit: (e) => send(e) },
    h('div', { class: 'rx-form__grid' }, field('nome', { required: true }), field('email', { required: true }), field('empresa', { required: true }), field('cnpj', { required: false }), field('whatsapp', { required: false })),
    // Honeypot: escondido de pessoas; robôs costumam preencher.
    h('div', { class: 'rx-hp', 'aria-hidden': 'true' }, h('label', { for: 'c-website' }, 'Website'), h('input', { id: 'c-website', name: 'website', type: 'text', tabindex: '-1', autocomplete: 'off' })),
    h(
      'div',
      { class: 'rx-consent' },
      h('label', { class: 'rx-check' }, consent, h('span', {}, contact.consent, ' ', h('a', { href: contact.privacyHref, target: '_blank', rel: 'noopener' }, contact.privacyLabel), '.')),
      h('p', { class: 'rx-field__error', id: 'e-consent', 'aria-live': 'polite' }),
      h('label', { class: 'rx-check' }, newsletter, h('span', {}, contact.newsletter))
    ),
    h('div', { class: 'rx-q__actions' }, submit),
    status
  );

  function erro(id, msg) {
    const el = form.querySelector(`#e-${id}`);
    el.textContent = msg || '';
    const input = form.querySelector(`#c-${id}`);
    if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  async function send(e) {
    e.preventDefault();
    const v = (id) => form.elements[id].value.trim();
    state.contact = { nome: v('nome'), email: v('email'), empresa: v('empresa'), cnpj: v('cnpj'), whatsapp: v('whatsapp') };
    save();
    const ok = [
      erro('nome', v('nome') ? '' : ui.errorRequired),
      erro('email', !v('email') ? ui.errorRequired : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v('email')) ? '' : ui.errorEmail),
      erro('empresa', v('empresa') ? '' : ui.errorRequired),
      erro('cnpj', !v('cnpj') || cnpjValido(v('cnpj')) ? '' : ui.errorCnpj),
      erro('consent', consent.checked ? '' : ui.errorConsent),
    ].every(Boolean);
    if (!ok) {
      form.querySelector('[aria-invalid="true"], #c-consent:not(:checked)')?.focus();
      return;
    }
    submit.disabled = true;
    status.textContent = ui.sending;
    try {
      const res = await fetch(`${data.api}/enviar`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          session_id: state.session,
          respostas: state.answers,
          contato: state.contact,
          consentimento: { diagnostico: true, newsletter: newsletter.checked },
          utm: state.utm,
          referrer: state.referrer,
          website: form.elements.website.value,
        }),
      });
      const body = await res.json();
      if (!res.ok || !body.token) throw new Error(body.erro || res.status);
      track('contact_submitted');
      try {
        localStorage.removeItem(KEY);
        localStorage.setItem(`${KEY}:ultimo`, body.token);
      } catch {}
      location.href = `${data.resultPath}?t=${encodeURIComponent(body.token)}`;
    } catch {
      submit.disabled = false;
      status.textContent = ui.errorSend;
    }
  }

  app.append(
    shell(
      h('div', { class: 'rx-q' }, h('h2', { class: 'rx-q__title', tabindex: '-1' }, contact.title), h('p', { class: 'rx-q__help' }, contact.help), form),
      { progressLabel: ui.contactProgress, ratio: 1, onBack: () => go(TOTAL - 1) }
    )
  );
  focusTitle();
}

// ---------- Teclado: 1–9 escolhe, Enter continua ----------

document.addEventListener('keydown', (e) => {
  if (app.hidden || e.altKey || e.ctrlKey || e.metaKey) return;
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' && document.activeElement.type !== 'radio' && document.activeElement.type !== 'checkbox') return;
  if (tag === 'TEXTAREA') return;
  if (/^[1-9]$/.test(e.key)) {
    const input = app.querySelectorAll('.rx-options input')[Number(e.key) - 1];
    if (input && !input.disabled) {
      e.preventDefault();
      autoAdvance = true;
      input.click();
    }
  } else if (e.key === 'Enter') {
    const next = app.querySelector('.rx-q__actions .btn:not([hidden]):not([disabled])');
    if (next && next.type === 'button') {
      e.preventDefault();
      next.click();
    }
  }
});

// ---------- Início ----------

function start(reset) {
  if (!data.api) {
    unavailable.hidden = false;
    return;
  }
  if (reset || !state) state = fresh();
  save();
  track('assessment_started', { retomada: !reset && state.step > 0 });
  intro.forEach((el) => (el.hidden = true));
  app.hidden = false;
  render();
}

if (state && (state.step > 0 || Object.keys(state.answers).length)) {
  startBtn.textContent = startBtn.dataset.resume || startBtn.textContent;
  restartBtn.hidden = false;
}
startBtn.addEventListener('click', () => start(false));
restartBtn.addEventListener('click', () => start(true));
