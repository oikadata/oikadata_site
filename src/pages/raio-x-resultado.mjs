// Raio-X de Dados: página de resultado (/raio-x/resultado/?t=<token>).
// O resultado vem da Edge Function; os textos da biblioteca (seção 7.4) vão embutidos na página.

import { RAIO_X_API, SCHEDULE_URL } from '../site.mjs';
import { asset, esc } from '../lib.mjs';
import { jsonScript } from './raio-x.mjs';

export default {
  id: 'raio-x-resultado',
  slug: 'raio-x/resultado',
  langs: ['pt'],
  cta: false,
  noindex: true,
  render: (p) => `
    <section class="rx-result" id="rx-result" aria-live="polite">
      <div class="container">
        <p class="rx-result__status" data-rx-status>${esc(p.ui.loading)}</p>
      </div>
    </section>
    ${jsonScript('rx-result-data', {
      api: RAIO_X_API,
      schedule: SCHEDULE_URL,
      retakeHref: '/raio-x/',
      ui: p.ui,
      ladder: p.ladder,
      levels: p.levels,
      steps: p.steps,
      dimensions: p.dimensions,
      quadrants: p.quadrants,
      aiManualNote: p.aiManualNote,
      observations: p.observations,
      cta: p.cta,
    })}
    <script type="module" src="${asset('/raio-x-resultado.js')}"></script>
`,
};
