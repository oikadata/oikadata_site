# Site Oika Data

Site institucional estático (HTML + CSS, sem framework). O conteúdo vem de `Deck Comercial/site-conteudo.md`.

## Estrutura

```
build.mjs              gera o site em dist/ (sem dependências, só Node)
src/site.mjs           endereços, contatos, agenda e Umami
src/lib.mjs            peças compartilhadas: ícones, logo, botões, cabeçalho de seção
src/layout.mjs         moldura comum a todas as páginas: <head>, topo, chamada final e rodapé
src/pages/index.mjs    lista de páginas do site
src/pages/home.mjs     página inicial (Soluções)
src/pages/planos.mjs   planos: ciclo de trabalho, tabela comparativa e add-ons
src/pages/porque.mjs   por que a Oika: comparação com contratar e com consultoria
src/content/pt.mjs     todo o texto em português (oficial)
src/content/en.mjs     tradução para inglês (rascunho, ainda não publicada)
public/                arquivos copiados como estão: CSS, JS, fontes, imagens, _headers
dist/                  resultado da build (não vai para o git)
```

Nos arquivos de conteúdo, o que é comum a todas as páginas (menu, chamada final, rodapé) fica no topo, e o texto de cada página fica em `pages.<id>`.

## Editar um texto

1. Altere o texto em `src/content/pt.mjs`.
2. Rode `node build.mjs`.
3. Veja o resultado localmente: `npx serve dist` ou `python3 -m http.server 4321 -d dist` e abra http://localhost:4321.
4. Faça commit e push no `main`: o GitHub Actions gera e publica o site sozinho.

## Criar uma página nova

Exemplo: uma página de planos em `/planos/`.

1. Crie `src/pages/planos.mjs`:

   ```js
   import { esc, sectionHead } from '../lib.mjs';

   export default {
     id: 'planos',
     slug: 'planos',          // ou { pt: 'planos', en: 'plans' }
     draft: true,             // só aparece com `node build.mjs --all`; tire quando for publicar
     render: (p, c) => `
       <section class="section">
         <div class="container">
           ${sectionHead(p.title, p.subtitle)}
         </div>
       </section>
   `,
   };
   ```

2. Registre em `src/pages/index.mjs`: `import planos from './planos.mjs';` e acrescente `planos` na lista.
3. Em `src/content/pt.mjs` (e `en.mjs`), acrescente o texto em `pages.planos`, com pelo menos `meta: { title, description }`.
4. Para aparecer no menu, acrescente `{ page: 'planos', label: 'Planos' }` em `nav`.
5. Rode `node build.mjs --all` e abra http://localhost:4321/planos/.

A chamada final de agendamento e o rodapé entram sozinhos. Para uma página sem a chamada final, use `cta: false`. Páginas em rascunho não entram no menu, no sitemap nem no site publicado.

## Publicar a versão em inglês

1. Revise `src/content/en.mjs`.
2. Em `build.mjs`, troque `const LANGS = ['pt']` por `const LANGS = ['pt', 'en']`.
3. O site passa a ter `/en/`, o botão PT/EN no topo e as tags `hreflang`.

Para revisar o inglês localmente antes de publicar: `node build.mjs --all` e abra http://localhost:4321/en/.

## Deploy (GitHub Pages)

O site é publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml`: a cada push no `main`, ele roda `node build.mjs` e publica a pasta `dist/`.

- Em **Settings → Pages → Build and deployment**, a *Source* deve ser **GitHub Actions**.
- O domínio `oikadata.com` vem do arquivo `CNAME` e fica em **Settings → Pages → Custom domain**. O DNS passa pelo Cloudflare.
- O arquivo `public/_headers` só vale no Cloudflare Pages; o GitHub Pages o ignora.

## Analytics

O site usa o [Umami Cloud](https://cloud.umami.is), sem cookies. Para ligar, cole o Website ID em `UMAMI_WEBSITE_ID` no `src/site.mjs`; vazio, o script não entra na página.

Eventos registrados (propriedade `local` indica onde o link fica: `topo`, `hero`, `contato`, `rodape`, `planos-ciclo`):

- `agenda`: clique em qualquer botão de agendamento
- `whatsapp`: clique nos links de WhatsApp (chamada final e rodapé)
- `email` e `telefone`: cliques nos links de contato

O WhatsApp abre com uma mensagem pronta (`whatsappMessage` em `src/content/pt.mjs`), que mostra que o contato veio do site. De qual botão veio, o Umami registra na propriedade `local`.

## Monitoramento

`.github/workflows/site-monitor.yml` verifica a cada ~15 minutos se `oikadata.com` responde e se o certificado é válido, e avisa no Discord (secret `DISCORD_WEBHOOK_URL`).

## Pendências (não preencher sem confirmação)

- Política de privacidade e termos.
- Logos de clientes (hoje só texto: "Experiência em fintech, mercado imobiliário e operações internacionais").
- Seções que ficaram fora desta versão: cases, valor por segmento, custo relativo e time.
