import { createClient } from '@supabase/supabase-js';

// Intentamos obtener las variables de entorno de forma segura
let supabaseUrl = '';
let supabaseAnonKey = '';

try {
    supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
    supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
} catch (e) {
    console.warn('Vite environmental variables not found, using fallbacks');
}

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('ALERTA: Faltan las variables de entorno de Supabase. El formulario de contacto y el catálogo dinámico podrían no funcionar.');
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
