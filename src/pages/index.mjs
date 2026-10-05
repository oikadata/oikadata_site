// Páginas do site, na ordem em que aparecem no sitemap.
// Cada página tem: id (chave do conteúdo em `pages`), slug (parte da URL; '' é a raiz)
// e render(p, c), que devolve o HTML das seções. Opcional: draft: true (só gera com --all)
// e cta: false (sem a chamada final de agendamento), langs: ['pt'] (só nesses idiomas)
// e noindex: true (fora do Google e do sitemap).

import home from './home.mjs';
import planos from './planos.mjs';
import porque from './porque.mjs';
import privacidade from './privacidade.mjs';
import raioX from './raio-x.mjs';
import raioXResultado from './raio-x-resultado.mjs';

export default [home, planos, porque, raioX, raioXResultado, privacidade];
