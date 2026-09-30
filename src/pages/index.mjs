// Páginas do site, na ordem em que aparecem no sitemap.
// Cada página tem: id (chave do conteúdo em `pages`), slug (parte da URL; '' é a raiz)
// e render(p, c), que devolve o HTML das seções. Opcional: draft: true (só gera com --all)
// e cta: false (sem a chamada final de agendamento).

import home from './home.mjs';
import planos from './planos.mjs';

export default [home, planos];
