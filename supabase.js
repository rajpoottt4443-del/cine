import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Apni Supabase URL aur Anon Key yahan dalein
const SUPABASE_URL = 'https://guofvbpjsdyngalozvvp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7vtoIBWTZ2yoacIqkoRQrQ_U2ckTE_g';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
