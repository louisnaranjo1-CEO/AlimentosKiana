import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://fqpwkgrmifvfogxdzxaq.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcHdrZ3JtaWZ2Zm9neGR6eGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxOTA1MDAsImV4cCI6MjA4Mzc2NjUwMH0.OJLtuzQz6ce5eRZtzosKhNDzkVONI-0RjJh1nKmJQxM';

export const isSupabaseConfigured = true; // Always true now with fallbacks

// We export a placeholder or the real client. 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
