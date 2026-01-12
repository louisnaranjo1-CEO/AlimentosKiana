-- Clean existing products to avoid duplicates during re-seeding
TRUNCATE products;

INSERT INTO products (id, name, category, description, features, nutritional, image_color, packaging_type, shelf_life)
VALUES
(
    'lactokiana-arroz',
    'Lactokiana Arroz',
    'Consumo Masivo',
    'Alimento a base de carbohidratos y proteínas con sabor a vainilla. Un abrazo nutritivo ideal para el crecimiento de los niños y el bienestar de los adultos.',
    ARRAY['Enriquecido con Vitaminas', 'Fácil digestión', 'Rendimiento: 1 vaso = 50g'],
    '{"calories": "195 kcal / 50g", "protein": "6.5g / 50g", "vitamins": ["Vitamina A", "Vitamina D", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)", "B12"], "minerals": ["Calcio", "Hierro", "Zinc", "Fósforo"]}'::jsonb,
    'bg-yellow-100',
    'Bolsa 1kg / 500g',
    '12 meses'
),
(
    'lactokiana-maiz',
    'Lactokiana Maíz Plus+',
    'Consumo Masivo',
    'Mezcla nutritiva a base de maíz y soya con un suave toque de vainilla. Energía sana y deliciosa para compartir en familia.',
    ARRAY['Contiene Leche', 'Fuente de Proteína Vegetal'],
    '{"calories": "195 kcal / 50g", "protein": "7.25g / 50g", "vitamins": ["Vitamina A", "Vitamina C", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"], "minerals": ["Calcio", "Fósforo", "Hierro", "Potasio"]}'::jsonb,
    'bg-orange-100',
    'Bolsa 1kg',
    '12 meses'
),
(
    'merengon-fresa',
    'Merengón Fresa',
    'Consumo Masivo',
    'Bebida instantánea con el dulce sabor de la fresa. Lista para disfrutar, fortificada con el cariño que merecen los pequeños de la casa.',
    ARRAY['Sabor Intenso', 'Instantáneo', 'Fortificado'],
    '{"protein": "9g / 100g", "vitamins": ["Complejo B"], "minerals": ["Calcio", "Hierro"]}'::jsonb,
    'bg-pink-200',
    'Bolsa 400g',
    '12 meses'
),
(
    'merengon-mantecado',
    'Merengón Mantecado',
    'Consumo Masivo',
    'Mezcla instantánea para preparar una deliciosa bebida con sabor a mantecado. ¡Ya contiene azúcar! Solo agrega agua o leche.',
    ARRAY['Contiene Azúcar', 'Sabor Clásico', 'Mezcla y Listo'],
    '{"calories": "380 kcal / 100g", "protein": "8g / 100g", "vitamins": ["Vitamina A", "Vitamina D"], "minerals": ["Calcio"]}'::jsonb,
    'bg-yellow-200',
    'Bolsa 400g',
    '12 meses'
),
(
    'merengon-chocolate',
    'Merengón Chocolate',
    'Consumo Masivo',
    'La energía del chocolate en una bebida instantánea y nutritiva. ¡Ya viene con azúcar! Ideal para la merienda.',
    ARRAY['Sabor a Chocolate', 'Contiene Azúcar', 'Energía Instantánea'],
    '{"calories": "370 kcal / 100g", "protein": "7g / 100g", "vitamins": ["Vitamina A", "Vitamina D"], "minerals": ["Calcio"]}'::jsonb,
    'bg-brown-100',
    'Bolsa 400g',
    '12 meses'
),
(
    'betsy',
    'Betsy Crema de Arroz',
    'Consumo Masivo',
    'Crema de arroz instantánea enriquecida. Suave, digestiva y fortificada con vitaminas y minerales esenciales para el desarrollo.',
    ARRAY['Con Vitaminas y Minerales', 'Fácil Digestión', 'Instantánea'],
    '{"calories": "Unknown", "protein": "7g / 100g", "vitamins": ["Vitamina A", "Vitamina C", "Vitamina D", "Complejo B"], "minerals": ["Hierro", "Calcio", "Zinc"]}'::jsonb,
    'bg-green-50',
    'Bolsa 500g',
    '12 meses'
),
(
    'fororo-kiana',
    'Fororo Kiana',
    'Consumo Masivo',
    'Harina de maíz tostado tradicional. El sabor de siempre con la calidad Kiana. Perfecto para atoles calientes y nutritivos.',
    ARRAY['Maíz Tostado', 'Tradición Venezolana', 'Energía Natural'],
    '{"calories": "Unknown", "protein": "7g / 100g", "vitamins": ["Vitamina A", "Vitamina D", "Complejo B"], "minerals": ["Hierro"]}'::jsonb,
    'bg-orange-50',
    'Bolsa 500g',
    '12 meses'
),
(
    'choco-k',
    'Choco K',
    'Consumo Masivo',
    'Bebida instantánea a base de cacao y leche. El compañero perfecto para desayunos llenos de alegría y energía.',
    ARRAY['Contiene Leche y Azúcar', 'Frío o Caliente', 'Energía para la mañana'],
    '{"protein": "8g / 100g", "vitamins": ["Vitamina A", "Vitamina D"], "minerals": ["Calcio"]}'::jsonb,
    'bg-amber-800',
    'Bolsa 500g',
    '12 meses'
),
(
    'chi-cha',
    'Chi Cha',
    'Consumo Masivo',
    'Mezcla para preparar la tradicional chicha de arroz venezolana. Cremosa, dulce y con ese sabor a hogar que nos une.',
    ARRAY['Espesa y Cremosa', 'Con Canela', 'Rinde más'],
    '{"protein": "7g / 100g", "vitamins": ["Vitamina D", "Vitamina A", "Vitamina C"], "minerals": ["Calcio", "Fósforo"]}'::jsonb,
    'bg-blue-100',
    'Bolsa 500g',
    '12 meses'
),
(
    'rico-cereal',
    'Rico Cereal',
    'Consumo Masivo',
    'Cereal de arroz fortificado, especialmente formulado para la alimentación complementaria de bebés a partir de los 6 meses.',
    ARRAY['Arroz Fortificado', 'Sin Gluten', 'Fácil Digestión'],
    '{"calories": "380 kcal / 100g", "protein": "14g / 100g", "vitamins": ["Vitamina A", "Vitamina C", "Hierro"], "minerals": ["Zinc", "Calcio"]}'::jsonb,
    'bg-blue-50',
    'Bolsa 500g',
    '12 meses'
),
(
    'bokaditos',
    'Bokaditos',
    'Snacks y Complementos',
    'Expandido de maíz y arroz horneado, relleno con auténtica pasta de maní. Un gustico saludable hecho con dedicación.',
    ARRAY['Relleno de Maní Real', 'Horneado', 'Sin grasas trans'],
    '{"calories": "170 kcal / 35g", "protein": "4.0g / 35g", "vitamins": ["Vitamina A", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"], "minerals": ["Calcio", "Hierro"]}'::jsonb,
    'bg-yellow-400',
    'Empaque 35g',
    '6 meses'
),
(
    'harina-arroz-precocida',
    'Harina de Arroz Precocida',
    'Harinas Industriales',
    'Ingrediente noble y versátil. La base perfecta para crear alimentos suaves y digestivos, desde papillas hasta bebidas.',
    ARRAY['100% Natural', 'Alta absorción', 'Hipoalergénica'],
    '{"calories": "366 Kcal", "protein": "Max 6%", "vitamins": ["Niacina (B3)", "Ácido Fólico (B9)"], "minerals": ["Potasio", "Fósforo"]}'::jsonb,
    'bg-gray-100',
    'Saco 35kg',
    '12 meses'
),
(
    'harina-maiz',
    'Harina de Maíz Kiana',
    'Harinas Industriales',
    'Maíz seleccionado y molido con esmero. La materia prima esencial que garantiza calidad y color en sus preparaciones.',
    ARRAY['Color Amarillo Intenso', 'Granulometría uniforme'],
    '{"calories": "370 Kcal", "protein": "5-6%", "vitamins": [], "minerals": ["Magnesio", "Potasio"]}'::jsonb,
    'bg-yellow-300',
    'Saco 35kg',
    '12 meses'
);
