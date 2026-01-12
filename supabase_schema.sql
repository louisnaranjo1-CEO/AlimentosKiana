-- TABLA PARA MENSAJES DE CONTACTO
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    contact_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    company_name TEXT NOT NULL,
    rif TEXT NOT NULL,
    organization_type TEXT NOT NULL,
    state TEXT NOT NULL,
    city TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- TABLA PARA PRODUCTOS (Opcional si decides manejarlos desde la DB)
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    features TEXT[], -- Array de strings
    nutritional JSONB, -- Objeto JSON para info nutricional
    image_color TEXT,
    packaging_type TEXT,
    shelf_life TEXT,
    is_new BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar RLS (Row Level Security) - IMPORTANTE
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserciones públicas en Contactos
CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Políticas para permitir lectura pública en Productos
CREATE POLICY "Allow public read" ON products FOR SELECT USING (true);
