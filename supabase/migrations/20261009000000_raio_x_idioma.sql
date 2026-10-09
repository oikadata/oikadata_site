-- Raio-X de Dados: idioma em que a pessoa respondeu (pt ou en), para o contato comercial.
alter table public.questionnaire_responses
  add column if not exists idioma text not null default 'pt' check (idioma in ('pt', 'en'));
