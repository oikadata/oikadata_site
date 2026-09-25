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
4. Faça commit e push: o Cloudflare publica sozinho.

## Publicar a versão em inglês

1. Revise `src/content/en.mjs`.
2. Em `build.mjs`, troque `const LANGS = ['pt']` por `const LANGS = ['pt', 'en']`.
3. O site passa a ter `/en/`, o botão PT/EN no topo e as tags `hreflang`.

Para revisar o inglês localmente antes de publicar: `node build.mjs --all` e abra http://localhost:4321/en/.

## Deploy no Cloudflare Pages

Configuração do projeto (Workers & Pages → Create → Pages → Connect to Git):

| Campo | Valor |
|---|---|
| Framework preset | None |
| Build command | `node build.mjs` |
| Build output directory | `dist` |

Depois, em **Custom domains**, adicione `oikadata.com` (e `www.oikadata.com`, se quiser redirecionar).

Para ter métricas de acesso sem cookies (sem banner de LGPD), ative **Web Analytics** no projeto do Pages.

## Pendências (não preencher sem confirmação)

- Política de privacidade e termos.
- Logos de clientes (hoje só texto: "Experiência em fintech, mercado imobiliário e operações internacionais").
- Seções que ficaram fora desta versão: cases, valor por segmento, custo relativo e time.
