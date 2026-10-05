// Servidor local do Raio-X, com as mesmas regras da Edge Function e armazenamento em memória.
// Serve para testar o questionário sem o Supabase.
//
//   node dev/raio-x-api.mjs                         (API em http://localhost:8787)
//   RAIO_X_API=http://localhost:8787 node build.mjs --all
//   python3 -m http.server 4321 -d dist             (site em http://localhost:4321/raio-x/)

import { createServer } from 'node:http';
import { criarServico, storeMemoria } from '../supabase/functions/_shared/raio-x/servico.mjs';

const PORTA = Number(process.env.PORT || 8787);
const store = storeMemoria();
const tratar = criarServico({
  store,
  limitePorHora: 1000,
  notificar: async (row) => console.log(`concluído: ${row.empresa} · ${row.categoria} · prioridade ${row.prioridade}`),
});

createServer(async (req, res) => {
  const cors = {
    'access-control-allow-origin': req.headers.origin || '*',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
  };
  if (req.method === 'OPTIONS') return res.writeHead(204, cors).end();
  const url = new URL(req.url, `http://localhost:${PORTA}`);
  let body = {};
  if (req.method === 'POST') {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    try {
      body = JSON.parse(Buffer.concat(chunks).toString() || '{}');
    } catch {
      return res.writeHead(400, { ...cors, 'content-type': 'application/json' }).end('{"erro":"JSON inválido"}');
    }
  }
  const rota = url.pathname.split('/').filter(Boolean).pop() || '';
  const r = await tratar({ method: req.method, rota, query: Object.fromEntries(url.searchParams), body, ip: '127.0.0.1' });
  if (req.method === 'POST' && rota === 'salvar') console.log(`autosave: ${body.session_id} → ${body.ultima_pergunta}`);
  res.writeHead(r.status, { ...cors, 'content-type': 'application/json' }).end(JSON.stringify(r.body));
}).listen(PORTA, () => console.log(`Raio-X API local em http://localhost:${PORTA}`));
