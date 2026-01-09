import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fqmdiiznzepcgytrqqnj.supabase.co';
// Nota: Se houver erros de 401 Unauthorized, verifique se esta chave é a 'anon' / 'public' nas configurações do projeto API.
const SUPABASE_ANON_KEY = 'sb_publishable_4I_vWNym51Wqp7mcSxy3hQ_bKyaffmP';

// Trim whitespace to prevent copy-paste errors
export const supabase = createClient(
  SUPABASE_URL.trim(), 
  SUPABASE_ANON_KEY.trim(), 
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);