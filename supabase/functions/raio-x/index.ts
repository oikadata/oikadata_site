// Edge Function do Raio-X de Dados.
// Rotas: POST /raio-x/salvar · POST /raio-x/enviar · GET /raio-x/resultado?t=<token>
//
// Variáveis (secrets do Supabase):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY   preenchidas automaticamente pelo Supabase
//   RAIO_X_ORIGENS     origens liberadas no CORS, separadas por vírgula (padrão: https://oikadata.com)
//   RAIO_X_DISCORD     webhook do Discord para avisar quando alguém conclui (opcional)
//
// Deploy: supabase functions deploy raio-x --no-verify-jwt
// (o site chama sem login; a proteção está na validação, no honeypot e no limite por IP)

import { createClient } from 'npm:@supabase/supabase-js@2';
import { criarServico } from '../_shared/raio-x/servico.mjs';

const TABELA = 'questionnaire_responses';
const db = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
  auth: { persistSession: false },
});

const falhou = (e: { message: string } | null) => {
  if (e) throw new Error(e.message);
};

const store = {
  async buscarSessao(id: string) {
    const { data, error } = await db.from(TABELA).select('*').eq('session_id', id).maybeSingle();
    falhou(error);
    return data;
  },
  async salvarParcial(row: Record<string, unknown>) {
    const { error } = await db.from(TABELA).upsert(row, { onConflict: 'session_id' });
    falhou(error);
  },
  async concluir(row: Record<string, unknown>) {
    const { error } = await db.from(TABELA).upsert(row, { onConflict: 'session_id' });
    falhou(error);
  },
  async buscarToken(token: string) {
    const { data, error } = await db.from(TABELA).select('*').eq('result_token', token).maybeSingle();
    falhou(error);
    return data;
  },
  async contarConcluidos(ip: string, desde: string) {
    const { count, error } = await db
      .from(TABELA)
      .select('id', { count: 'exact', head: true })
      .eq('ip', ip)
      .eq('status', 'completo')
      .gte('concluido_em', desde);
    falhou(error);
    return count ?? 0;
  },
};

// Aviso interno para os sócios. Não leva a categoria para fora do Supabase além do canal privado.
const discord = Deno.env.get('RAIO_X_DISCORD');
const notificar = discord
  ? async (row: Record<string, any>) => {
      const s = row.scores_json;
      await fetch(discord, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          content:
            `Raio-X concluído: **${row.empresa}** (${row.nome}, ${row.email})\n` +
            `Categoria: ${row.categoria} · prioridade ${row.prioridade} · nível ${s.nivel} · score ${s.geral}`,
        }),
      });
    }
  : undefined;

const tratar = criarServico({ store, notificar });

const origens = (Deno.env.get('RAIO_X_ORIGENS') || 'https://oikadata.com').split(',').map((o) => o.trim());

Deno.serve(async (req) => {
  const origem = req.headers.get('origin') || '';
  const cors = {
    'access-control-allow-origin': origens.includes(origem) ? origem : origens[0],
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    vary: 'origin',
  };
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

  const url = new URL(req.url);
  const rota = url.pathname.split('/').filter(Boolean).pop() || '';
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || null;
  let body = {};
  if (req.method === 'POST') {
    try {
      body = await req.json();
    } catch {
      return Response.json({ erro: 'JSON inválido' }, { status: 400, headers: cors });
    }
  }

  try {
    const res = await tratar({ method: req.method, rota, query: Object.fromEntries(url.searchParams), body, ip });
    return Response.json(res.body, { status: res.status, headers: cors });
  } catch (e) {
    console.error(e);
    return Response.json({ erro: 'erro interno' }, { status: 500, headers: cors });
  }
});
