// Configuração geral do site: endereços, contatos e integrações.

export const SITE_URL = 'https://oikadata.com';
export const WHATSAPP = 'https://wa.me/5551984955083';
export const EMAIL = 'comercial@oikadata.com';
export const PHONE = '+55 51 98495-5083';
export const PHONE_HREF = 'tel:+5551984955083';
// Página de agendamento do Google Agenda (conversa de 30 min).
export const SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wReDlH7REgMqcf81NIhnyqGiTiaosQn5eKUnTRKFS6sfwJwqc1BADtnez_FM-DS82tcpxsR5y';
// Umami Cloud (analytics sem cookies). Cole aqui o Website ID; vazio = sem analytics.
export const UMAMI_WEBSITE_ID = '011eb189-d1ae-4ebd-9561-9499c22e3a82';

// Endereço da Edge Function do Raio-X (https://<projeto>.supabase.co/functions/v1/raio-x).
// Para testar localmente: RAIO_X_API=http://localhost:8787 node build.mjs --all
export const RAIO_X_API = process.env.RAIO_X_API || 'https://fnzfapjsiiakfgqexbhv.supabase.co/functions/v1/raio-x';
