-- Raio-X de Dados: respostas do questionário (oika-data-assessment-online.md, seção 9.1).
-- O site nunca acessa esta tabela direto: grava e lê só pela Edge Function `raio-x`,
-- que usa a chave de serviço. RLS ligado e sem políticas = nenhum acesso anônimo.

create table if not exists public.questionnaire_responses (
  id                      uuid primary key default gen_random_uuid(),
  session_id              text not null unique,
  questionnaire_version   text not null,
  status                  text not null default 'parcial' check (status in ('parcial', 'completo')),
  ultima_pergunta         text,

  respostas_json          jsonb not null default '{}'::jsonb,
  scores_json             jsonb,
  ia_dados_manual         boolean,
  inconsistencia_escada   boolean,
  categoria               text check (categoria in ('qualificado', 'revisao', 'nutricao')),
  prioridade              integer,

  nome                    text,
  email                   text,
  empresa                 text,
  cnpj                    text,
  whatsapp                text,
  email_generico          boolean,
  consent_json            jsonb,

  utm_json                jsonb not null default '{}'::jsonb,
  referrer                text,
  ip                      inet,

  observacoes_ia          jsonb,
  observacoes_origem      text check (observacoes_origem in ('ia', 'fallback')),
  prompt_version          text,

  result_token            text unique,
  result_token_expira_em  timestamptz,

  criado_em               timestamptz not null default now(),
  atualizado_em           timestamptz not null default now(),
  concluido_em            timestamptz
);

comment on table public.questionnaire_responses is 'Raio-X de Dados: respostas parciais e completas do questionário do site.';
comment on column public.questionnaire_responses.categoria is 'Qualificação interna. Nunca exibir ao respondente.';

create index if not exists questionnaire_responses_fila_idx
  on public.questionnaire_responses (categoria, prioridade desc, concluido_em desc)
  where status = 'completo';
create index if not exists questionnaire_responses_ip_idx
  on public.questionnaire_responses (ip, concluido_em)
  where status = 'completo';
create index if not exists questionnaire_responses_abandono_idx
  on public.questionnaire_responses (status, ultima_pergunta);

alter table public.questionnaire_responses enable row level security;
-- Defesa extra: os papéis públicos da API não têm nenhum privilégio na tabela.
revoke all on public.questionnaire_responses from anon, authenticated;

-- Respostas parciais sem contato são anônimas e são apagadas depois de 90 dias (seção 8).
create or replace function public.apagar_parciais_antigas() returns integer
language sql security definer set search_path = public as $$
  with apagadas as (
    delete from public.questionnaire_responses
    where status = 'parcial' and atualizado_em < now() - interval '90 days'
    returning 1
  )
  select count(*)::integer from apagadas;
$$;
revoke all on function public.apagar_parciais_antigas() from public, anon, authenticated;

-- Agenda a limpeza diária (pg_cron vem disponível nos projetos Supabase).
create extension if not exists pg_cron;
select cron.schedule('raio-x-apagar-parciais', '0 6 * * *', 'select public.apagar_parciais_antigas()');

-- Abandono por pergunta (critério de aceite 7): onde as sessões parciais param.
create or replace view public.raio_x_abandono with (security_invoker = true) as
  select ultima_pergunta, count(*) as sessoes
  from public.questionnaire_responses
  where status = 'parcial'
  group by ultima_pergunta
  order by sessoes desc;
revoke all on public.raio_x_abandono from anon, authenticated;
