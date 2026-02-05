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
('merengon-fresa', 'Merengón Fresa', 'Consumo Masivo', 'Bebida instantánea con el dulce sabor de la fresa. Lista para disfrutar, fortificada con el cariño que merecen los pequeños de la casa. Contiene azúcar.', '["Contiene Azúcar", "Sabor Intenso", "Instantáneo", "Fortificado"]', '{"protein": "9g", "vitamins": ["Complejo B"], "minerals": ["Calcio", "Hierro"]}', 'bg-pink-200', 'Bolsa 400g', '12 meses'),
('merengon-mantecado', 'Merengón Mantecado', 'Consumo Masivo', 'Mezcla instantánea para preparar bebida sabor a mantecado. Contiene azúcar.', '["Contiene Azúcar", "Mezcla y Listo", "Instantáneo"]', '{"calories": "380 kcal", "protein": "8g", "carbs": "86g"}', 'bg-yellow-50', 'Bolsa 400g', '12 meses'),
('merengon-chocolate', 'Merengón Chocolate', 'Consumo Masivo', 'Mezcla instantánea para preparar bebida sabor a chocolate. Contiene azúcar.', '["Contiene Azúcar", "Sabor a Cacao", "Instantáneo"]', '{"calories": "370 kcal", "protein": "7g", "carbs": "86g"}', 'bg-amber-100', 'Bolsa 400g', '12 meses'),
('rico-cereal', 'Rico Cereal Arroz', 'Consumo Masivo', 'Línea de cereales infantiles. Alimento instantáneo especial para bebés a partir de los 6 meses. Enriquecido con vitaminas y minerales.', '["Especial para bebés", "Desde los 6 meses", "Instantáneo", "Fortificado"]', '{"protein": "14g", "vitamins": ["A", "C", "B1", "B2", "B3", "B6", "B9", "B12", "D", "K"], "minerals": ["Hierro", "Calcio", "Fósforo", "Zinc"]}', 'bg-blue-50', 'Bolsa 500g', '12 meses'),
('rica-avena-vainilla', 'Rica Avena Vainilla', 'Consumo Masivo', 'Bebida instantánea a base de avena y sólidos lácteos. Contiene leche y azúcar.', '["Contiene Leche y Azúcar", "Instantáneo", "Fácil de preparar"]', '{"protein": "14g", "vitamins": ["A"], "minerals": ["Calcio", "Fósforo"]}', 'bg-blue-100', 'Bolsa 500g', '12 meses'),
('rica-avena-fresa', 'Rica Avena Fresa', 'Consumo Masivo', 'Bebida instantánea a base de avena y sólidos lácteos con sabor a fresa. Contiene leche y azúcar.', '["Contiene Leche y Azúcar", "Instantáneo", "Sabor a Fresa"]', '{"protein": "14g", "vitamins": ["A"], "minerals": ["Calcio", "Fósforo"]}', 'bg-pink-100', 'Bolsa 400g', '12 meses'),
('fororo', 'Fororo', 'Consumo Masivo', 'Harina de maíz tostado. Bebida nutritiva a base de maíz seleccionado, enriquecida con vitaminas y minerales.', '["100% Maíz", "Enriquecido", "Instantáneo"]', '{"protein": "14g", "vitamins": ["A", "C", "B1", "B2", "B3", "B6", "B9", "B12", "D"], "minerals": ["Hierro", "Calcio", "Fósforo", "Zinc"]}', 'bg-orange-200', 'Bolsa 500g', '12 meses'),
('betsy', 'Betsy', 'Consumo Masivo', 'Crema de arroz instantánea enriquecida para los más pequeños. Bebida nutritiva a base de arroz, mezcla y listo.', '["Con Vitaminas", "Rápida preparación", "Hipoalergénico"]', '{"protein": "7g", "vitamins": ["A", "C", "B1", "B2", "B3", "B9", "B12", "D"], "minerals": ["Hierro"]}', 'bg-green-100', 'Bolsa 500g', '12 meses'),
('bokaditos', 'Bokaditos', 'Snacks y Complementos', 'Expandido de maíz y arroz horneado, relleno con auténtica pasta de maní. Un gustico saludable hecho con dedicación.', '["Relleno de Maní Real", "Horneado", "Sin grasas trans"]', '{"calories": "170 kcal / 35g", "protein": "4.0g / 35g", "vitamins": ["Vitamina A", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"], "minerals": ["Calcio", "Hierro"]}', 'bg-yellow-400', 'Empaque 35g', '6 meses'),
('harina-arroz-precocida', 'Harina de Arroz Precocida', 'Harinas Industriales', 'Uso previsto: Base para papillas, bebidas y repostería. Materia prima de alta calidad. Caducidad: 6 meses.', '["100% Natural", "Alta absorción", "Hipoalergénica"]', '{"calories": "366 Kcal", "protein": "Max 6%", "vitamins": ["Niacina (B3)", "Ácido Fólico (B9)"], "minerals": ["Potasio", "Fósforo"]}', 'bg-gray-100', 'Saco 35kg', '6 meses'),
('harina-maiz', 'Harina de Maíz Kiana', 'Harinas Industriales', 'Uso previsto: Materia prima esencial para la industria alimentaria. Garantiza calidad y color. Caducidad: 6 meses.', '["Color Amarillo Intenso", "Granulometría uniforme"]', '{"calories": "370 Kcal", "protein": "5-6%", "vitamins": [], "minerals": ["Magnesio", "Potasio"]}', 'bg-yellow-300', 'Saco 35kg', '6 meses')
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
