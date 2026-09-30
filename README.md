# Site Oika Data

Site institucional estático (HTML + CSS, sem framework). O conteúdo vem de `Deck Comercial/site-conteudo.md`.

## Estrutura

```
build.mjs            gera o site em dist/ (sem dependências, só Node)
src/content/pt.mjs   todo o texto em português (oficial)
src/content/en.mjs   tradução para inglês (rascunho, ainda não publicada)
public/              arquivos copiados como estão: CSS, JS, fontes, imagens, _headers
dist/                resultado da build (não vai para o git)
```

## Editar um texto

1. Altere o texto em `src/content/pt.mjs`.
2. Rode `node build.mjs`.
3. Veja o resultado localmente: `npx serve dist` ou `python3 -m http.server 4321 -d dist` e abra http://localhost:4321.
4. Faça commit e push no `main`: o GitHub Actions gera e publica o site sozinho.

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

O site usa o [Umami Cloud](https://cloud.umami.is), sem cookies. Para ligar, cole o Website ID em `UMAMI_WEBSITE_ID` no `build.mjs`; vazio, o script não entra na página.

Eventos registrados (propriedade `local` indica onde o botão fica: `topo`, `hero`, `contato`, `rodape`):

- `whatsapp`: clique em qualquer botão de WhatsApp
- `agenda`: clique em "Agendar"
- `email` e `telefone`: cliques no rodapé

As mensagens pré-preenchidas do WhatsApp (`whatsappMessage` em `src/content/pt.mjs`) mudam conforme o botão: pela mensagem que chega dá para saber se a pessoa clicou no topo/hero ou no CTA final.

## Monitoramento

`.github/workflows/site-monitor.yml` verifica a cada ~15 minutos se `oikadata.com` responde e se o certificado é válido, e avisa no Discord (secret `DISCORD_WEBHOOK_URL`).

## Pendências (não preencher sem confirmação)

- Política de privacidade e termos.
- Logos de clientes (hoje só texto: "Experiência em fintech, mercado imobiliário e operações internacionais").
- Seções que ficaram fora desta versão: cases, valor por segmento, custo relativo e time.
