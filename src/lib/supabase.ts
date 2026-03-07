import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sgqllgdhheoeddaarpnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNncWxsZ2RoaGVvZWRkYWFycG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODEyMTYsImV4cCI6MjA4NTk1NzIxNn0.qHuKklsvhCHVnKsdKEO8BPwkjaesTB7vsDZnoaK6cfo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
