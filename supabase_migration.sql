-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- DROP TABLES to ensure clean slate (Fixes potential type mismatches like ARRAY vs JSONB)
DROP TABLE IF EXISTS site_settings;
DROP TABLE IF EXISTS distributors;
DROP TABLE IF EXISTS benefits;
DROP TABLE IF EXISTS products;

-- Products Table
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    features JSONB,
    nutritional JSONB,
    image_color TEXT,
    packaging_type TEXT,
    shelf_life TEXT,
    is_new BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Benefits Table
CREATE TABLE benefits (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT NOT NULL,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Distributors Table
CREATE TABLE distributors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site Settings Table (for global constants)
CREATE TABLE site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE benefits ENABLE ROW LEVEL SECURITY;
ALTER TABLE distributors ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Create Policies (Allow Public Read, Private Write)
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON benefits FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON distributors FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON site_settings FOR SELECT USING (true);

-- Initial Data Seeding
-- Products
INSERT INTO products (id, name, category, description, features, nutritional, image_color, packaging_type, shelf_life) VALUES
('lactokiana-arroz', 'Lactokiana Arroz', 'Consumo Masivo', 'Alimento a base de carbohidratos y proteínas con sabor a vainilla. Un abrazo nutritivo ideal para el crecimiento de los niños y el bienestar de los adultos.', '["Enriquecido con Vitaminas", "Fácil digestión", "Rendimiento: 1 vaso = 50g"]', '{"calories": "195 kcal / 50g", "protein": "6.5g / 50g", "vitamins": ["Vitamina A", "Vitamina D", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)", "B12"], "minerals": ["Calcio", "Hierro", "Zinc", "Fósforo"]}', 'bg-yellow-100', 'Bolsa 1kg / 500g', '12 meses'),
('lactokiana-maiz', 'Lactokiana Maíz Plus+', 'Consumo Masivo', 'Mezcla nutritiva a base de maíz y soya con un suave toque de vainilla. Energía sana y deliciosa para compartir en familia.', '["Contiene Leche", "Fuente de Proteína Vegetal"]', '{"calories": "195 kcal / 50g", "protein": "7.25g / 50g", "vitamins": ["Vitamina A", "Vitamina C", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"], "minerals": ["Calcio", "Fósforo", "Hierro", "Potasio"]}', 'bg-orange-100', 'Bolsa 1kg', '12 meses'),
('merengon-fresa', 'Merengón Fresa', 'Consumo Masivo', 'Bebida instantánea con el dulce sabor de la fresa. Lista para disfrutar, fortificada con el cariño que merecen los pequeños de la casa.', '["Sabor Intenso", "Instantáneo", "Fortificado"]', '{"protein": "9g / 100g", "vitamins": ["Complejo B"], "minerals": ["Calcio", "Hierro"]}', 'bg-pink-200', 'Bolsa 400g', '12 meses'),
('choco-k', 'Choco K', 'Consumo Masivo', 'Bebida instantánea a base de cacao y leche. El compañero perfecto para desayunos llenos de alegría y energía.', '["Contiene Leche y Azúcar", "Frío o Caliente", "Energía para la mañana"]', '{"protein": "8g / 100g", "vitamins": ["Vitamina A", "Vitamina D"], "minerals": ["Calcio"]}', 'bg-amber-800', 'Bolsa 500g', '12 meses'),
('chi-cha', 'Chi Cha', 'Consumo Masivo', 'Mezcla para preparar la tradicional chicha de arroz venezolana. Cremosa, dulce y con ese sabor a hogar que nos une.', '["Espesa y Cremosa", "Con Canela", "Rinde más"]', '{"protein": "7g / 100g", "vitamins": ["Vitamina D", "Vitamina A", "Vitamina C"], "minerals": ["Calcio", "Fósforo"]}', 'bg-blue-100', 'Bolsa 500g', '12 meses'),
('bokaditos', 'Bokaditos', 'Snacks y Complementos', 'Expandido de maíz y arroz horneado, relleno con auténtica pasta de maní. Un gustico saludable hecho con dedicación.', '["Relleno de Maní Real", "Horneado", "Sin grasas trans"]', '{"calories": "170 kcal / 35g", "protein": "4.0g / 35g", "vitamins": ["Vitamina A", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"], "minerals": ["Calcio", "Hierro"]}', 'bg-yellow-400', 'Empaque 35g', '6 meses'),
('harina-arroz-precocida', 'Harina de Arroz Precocida', 'Harinas Industriales', 'Ingrediente noble y versátil. La base perfecta para crear alimentos suaves y digestivos, desde papillas hasta bebidas.', '["100% Natural", "Alta absorción", "Hipoalergénica"]', '{"calories": "366 Kcal", "protein": "Max 6%", "vitamins": ["Niacina (B3)", "Ácido Fólico (B9)"], "minerals": ["Potasio", "Fósforo"]}', 'bg-gray-100', 'Saco 35kg', '12 meses'),
('harina-maiz', 'Harina de Maíz Kiana', 'Harinas Industriales', 'Maíz seleccionado y molido con esmero. La materia prima esencial que garantiza calidad y color en sus preparaciones.', '["Color Amarillo Intenso", "Granulometría uniforme"]', '{"calories": "370 Kcal", "protein": "5-6%", "vitamins": [], "minerals": ["Magnesio", "Potasio"]}', 'bg-yellow-300', 'Saco 35kg', '12 meses')
ON CONFLICT (id) DO NOTHING;

-- Benefits
INSERT INTO benefits (title, description, icon, "order") VALUES
('Alta Rotación', 'Productos amados por las familias venezolanas, diseñados para estar poco tiempo en el anaquel y mucho tiempo en la mesa.', 'TrendingUp', 1),
('Seguridad Alimentaria', 'Procesos rigurosos y estandarizados que garantizan la inocuidad, pureza y calidad sanitaria en cada uno de nuestros empaques.', 'Award', 2),
('Nutrición con Cariño', 'Formulamos cada producto pensando en el bienestar, fortificándolos para nutrir el futuro de Venezuela.', 'Heart', 3),
('Desde el Corazón del País', 'Ubicados estratégicamente en Calabozo, llevamos nuestros alimentos a cada rincón de la nación con eficiencia.', 'Truck', 4);

-- Distributors
INSERT INTO distributors (name, location, type, "order") VALUES
('Makro Comercializadora', 'Nacional', 'Mayorista', 1),
('Supermercados Luxor', 'Centro', 'Supermercado', 2),
('Central Madeirense', 'Nacional', 'Supermercado', 3),
('Organización Naciones Unidas (WFP)', 'Internacional', 'Institucional', 4),
('Red de Distribución Los Llanos', 'Guárico', 'Mayorista', 5),
('Automercados Plaza''s', 'Caracas', 'Supermercado', 6);

-- Settings
INSERT INTO site_settings (key, value, description) VALUES
('whatsapp_number', '584243533131', 'Official WhatsApp contact number');
