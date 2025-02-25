import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iclowxuvwjndlhvnrkab.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbG93eHV2d2puZGxodm5ya2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDY0ODgsImV4cCI6MjA1NTk4MjQ4OH0.F6jWBqKKKVYENfKVn-6Y38FOMOH9yl1bnRkMnZp5hpA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
