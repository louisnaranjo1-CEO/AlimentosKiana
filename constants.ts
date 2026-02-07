import { Product, ProductCategory, Distributor } from './types';

export const WHATSAPP_NUMBER = "584243533131"; // From PDF

export const DISTRIBUTORS: Distributor[] = [
  {
    name: "Red Vital",
    location: "Nacional",
    type: "Supermercado",
    logoUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/red%20vital.png"
  },
  {
    name: "Hiperlider",
    location: "Nacional",
    type: "Supermercado",
    logoUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/hiperlider.png"
  }
];

export const ORGANIZATION_TYPES = [
  "Supermercado / Retail",
  "Distribuidora Mayorista",
  "Comedor / Institucional",
  "Industria (Materia Prima)",
  "Fundación ONG",
  "Institución Gubernamental",
  "Otro"
];

// Data real de geografía venezolana
export const VENEZUELA_LOCATIONS: Record<string, string[]> = {
  "Amazonas": ["Puerto Ayacucho", "La Esmeralda", "San Fernando de Atabapo"],
  "Anzoátegui": ["Barcelona", "Puerto La Cruz", "Lechería", "Guanta", "El Tigre", "Anaco", "Cantaura"],
  "Apure": ["San Fernando de Apure", "Achaguas", "Biruaca", "Guasdualito"],
  "Aragua": ["Maracay", "Turmero", "La Victoria", "Cagua", "El Limón", "Palo Negro", "San Mateo"],
  "Barinas": ["Barinas", "Barinitas", "Socopó", "Santa Bárbara"],
  "Bolívar": ["Ciudad Bolívar", "Ciudad Guayana (Puerto Ordaz/San Félix)", "Upata", "Caicara del Orinoco"],
  "Carabobo": ["Valencia", "Puerto Cabello", "Guacara", "Naguanagua", "San Diego", "Tocuyito", "Mariara"],
  "Cojedes": ["San Carlos", "Tinaquillo", "Tinaco"],
  "Delta Amacuro": ["Tucupita", "Pedernales"],
  "Distrito Capital": ["Caracas", "El Junquito"],
  "Falcón": ["Coro", "Punto Fijo", "Chichiriviche", "Tucacas", "Dabajuro"],
  "Guárico": ["San Juan de los Morros", "Calabozo", "Valle de la Pascua", "Zaraza", "Altagracia de Orituco"],
  "La Guaira": ["La Guaira", "Maiquetía", "Catia La Mar", "Caraballeda", "Naiguatá"],
  "Lara": ["Barquisimeto", "Cabudare", "Carora", "El Tocuyo", "Quíbor"],
  "Mérida": ["Mérida", "El Vigía", "Ejido", "Tovar"],
  "Miranda": ["Los Teques", "Guarenas", "Guatire", "Charallave", "Cúa", "San Antonio de los Altos", "Higuerote"],
  "Monagas": ["Maturín", "Punta de Mata", "Caripe"],
  "Nueva Esparta": ["Porlamar", "La Asunción", "Pampatar", "Juan Griego"],
  "Portuguesa": ["Guanare", "Acarigua", "Araure", "Turén"],
  "Sucre": ["Cumaná", "Carúpano", "Güiria"],
  "Táchira": ["San Cristóbal", "Táriba", "Rubio", "San Antonio del Táchira", "La Grita"],
  "Trujillo": ["Trujillo", "Valera", "Boconó", "Betijoque"],
  "Yaracuy": ["San Felipe", "Yaritagua", "Chivacoa", "Nirgua"],
  "Zulia": ["Maracaibo", "San Francisco", "Cabimas", "Ciudad Ojeda", "Santa Bárbara del Zulia", "Machiques"]
};

export const PRODUCTS: Product[] = [
  // CONSUMO MASIVO
  {
    id: "lactokiana-arroz",
    name: "Lactokiana Arroz",
    category: ProductCategory.CONSUMER,
    description: "Alimento a base de carbohidratos y proteínas con sabor a vainilla. Un abrazo nutritivo ideal para el crecimiento de los niños y el bienestar de los adultos.",
    features: ["Enriquecido con Vitaminas", "Fácil digestión", "Rendimiento: 1 vaso = 50g"],
    nutritional: {
      calories: "195 kcal / 50g",
      protein: "6.5g / 50g",
      vitamins: ["Vitamina A", "Vitamina D", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)", "B12"],
      minerals: ["Calcio", "Hierro", "Zinc", "Fósforo"]
    },
    imageColor: "bg-yellow-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Lactokiana%20Front.png",
    packagingType: "Bolsa 1kg / 500g",
    shelfLife: "12 meses"
  },
  {
    id: "lactokiana-maiz",
    name: "Lactokiana Maíz Plus+",
    category: ProductCategory.CONSUMER,
    description: "Mezcla nutritiva a base de maíz y soya con un suave toque de vainilla. Energía sana y deliciosa para compartir en familia.",
    features: ["Contiene Leche", "Fuente de Proteína Vegetal"],
    nutritional: {
      calories: "195 kcal / 50g",
      protein: "7.25g / 50g",
      vitamins: ["Vitamina A", "Vitamina C", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"],
      minerals: ["Calcio", "Fósforo", "Hierro", "Potasio"]
    },
    imageColor: "bg-orange-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Lactokiana%20Maiz%20front.png",
    packagingType: "Bolsa 1kg",
    shelfLife: "12 meses"
  },
  {
    id: "merengon-fresa",
    name: "Merengón Fresa",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea con el dulce sabor de la fresa. Lista para disfrutar, hecha con el cariño que merecen los pequeños de la casa. Contiene azúcar.",
    features: ["Contiene Azúcar", "Sabor Intenso", "Instantáneo"],
    nutritional: {
      calories: "370 kcal",
      protein: "9g",
      carbs: "84g"
    },
    imageColor: "bg-pink-200",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/2%20(2).png",
    packagingType: "Bolsa 400g",
    shelfLife: "12 meses"
  },
  {
    id: "merengon-mantecado",
    name: "Merengón Mantecado",
    category: ProductCategory.CONSUMER,
    description: "Mezcla instantánea para preparar bebida sabor a mantecado. Contiene azúcar.",
    features: ["Contiene Azúcar", "Mezcla y Listo", "Instantáneo"],
    nutritional: {
      calories: "380 kcal",
      protein: "8g",
      carbs: "86g"
    },
    imageColor: "bg-yellow-50",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/1%20(2).png",
    packagingType: "Bolsa 400g",
    shelfLife: "12 meses"
  },
  {
    id: "merengon-chocolate",
    name: "Merengón Chocolate",
    category: ProductCategory.CONSUMER,
    description: "Mezcla instantánea para preparar bebida sabor a chocolate. Contiene azúcar.",
    features: ["Contiene Azúcar", "Sabor a Cacao", "Instantáneo"],
    nutritional: {
      calories: "370 kcal",
      protein: "7g",
      carbs: "86g"
    },
    imageColor: "bg-amber-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/3%20(1).png",
    packagingType: "Bolsa 400g",
    shelfLife: "12 meses"
  },
  {
    id: "rico-cereal",
    name: "Rico Cereal Arroz",
    category: ProductCategory.CONSUMER,
    description: "Línea de cereales infantiles. Alimento instantáneo especial para bebés a partir de los 6 meses. Enriquecido con vitaminas y minerales.",
    features: ["Especial para bebés", "Desde los 6 meses", "Instantáneo"],
    nutritional: {
      protein: "14g",
      vitamins: ["A", "C", "B1", "B2", "B3", "B6", "B9", "B12", "D", "K"],
      minerals: ["Hierro", "Calcio", "Fósforo", "Zinc"]
    },
    imageColor: "bg-blue-50",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Rico%20Cereal%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "rica-avena-vainilla",
    name: "Rica Avena Vainilla",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea a base de avena y sólidos lácteos. Contiene leche y azúcar.",
    features: ["Contiene Leche y Azúcar", "Instantáneo", "Fácil de preparar"],
    nutritional: {
      protein: "14g",
      vitamins: ["A"],
      minerals: ["Calcio", "Fósforo"]
    },
    imageColor: "bg-blue-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Rica%20Avena%20vainilla%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "rica-avena-fresa",
    name: "Rica Avena Fresa",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea a base de avena y sólidos lácteos con sabor a fresa. Contiene leche y azúcar.",
    features: ["Contiene Leche y Azúcar", "Instantáneo", "Sabor a Fresa"],
    nutritional: {
      protein: "14g",
      vitamins: ["A"],
      minerals: ["Calcio", "Fósforo"]
    },
    imageColor: "bg-pink-100",
    packagingType: "Bolsa 400g",
    shelfLife: "12 meses"
  },
  {
    id: "fororo",
    name: "Fororo",
    category: ProductCategory.CONSUMER,
    description: "Harina de maíz tostado. Bebida nutritiva a base de maíz seleccionado, enriquecida con vitaminas y minerales.",
    features: ["100% Maíz", "Enriquecido", "Instantáneo"],
    nutritional: {
      protein: "14g",
      vitamins: ["A", "C", "B1", "B2", "B3", "B6", "B9", "B12", "D"],
      minerals: ["Hierro", "Calcio", "Fósforo", "Zinc"]
    },
    imageColor: "bg-orange-200",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Fororo%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "betsy",
    name: "Betsy",
    category: ProductCategory.CONSUMER,
    description: "Crema de arroz instantánea enriquecida para los más pequeños. Bebida nutritiva a base de arroz, mezcla y listo.",
    features: ["Con Vitaminas", "Rápida preparación", "Hipoalergénico"],
    nutritional: {
      protein: "7g",
      vitamins: ["A", "C", "B1", "B2", "B3", "B9", "B12", "D"],
      minerals: ["Hierro"]
    },
    imageColor: "bg-green-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Betsy%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "chicha",
    name: "ChiCha",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea a base de arroz y leche, con el tradicional sabor venezolano. Dulce, espesa y nutritiva.",
    features: ["Sabor Tradicional", "Instantáneo"],
    nutritional: {
      protein: "5g",
      vitamins: ["A", "D"],
      minerals: ["Calcio"]
    },
    imageColor: "bg-red-100",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Chicha%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "choco-k",
    name: "Choco K",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea a base de cacao y leche. El compañero perfecto para desayunos llenos de alegría y energía.",
    features: ["Contiene Leche y Azúcar", "Frío o Caliente", "Energía Instantánea"],
    nutritional: {
      protein: "8g",
      vitamins: ["A", "D"],
      minerals: ["Calcio"]
    },
    imageColor: "bg-amber-800",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/ChocoK%20front.png",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  // SNACKS
  {
    id: "bokaditos",
    name: "Bokaditos",
    category: ProductCategory.SNACKS,
    description: "Expandido de maíz y arroz horneado, relleno con auténtica pasta de maní. Un gustico saludable hecho con dedicación.",
    features: ["Relleno de Maní Real", "Horneado", "Sin grasas trans"],
    nutritional: {
      calories: "170 kcal / 35g",
      protein: "4.0g / 35g",
      vitamins: ["Vitamina A", "Tiamina (B1)", "Riboflavina (B2)", "Niacina (B3)", "Piridoxina (B6)"],
      minerals: ["Calcio", "Hierro"]
    },
    imageColor: "bg-yellow-400",
    imageUrl: "https://fqpwkgrmifvfogxdzxaq.supabase.co/storage/v1/object/public/Kiana%20productos/Bokaditos%20mini-bag.png",
    packagingType: "Empaque 35g",
    shelfLife: "6 meses"
  },
  // INDUSTRIALES
  {
    id: "harina-arroz-precocida",
    name: "Harina de Arroz Precocida",
    category: ProductCategory.INDUSTRIAL,
    description: "Uso previsto: Base para papillas, bebidas y repostería. Materia prima de alta calidad. Caducidad: 6 meses.",
    features: ["100% Natural", "Alta absorción", "Hipoalergénica"],
    nutritional: {
      calories: "366 Kcal",
      protein: "Max 6%",
      vitamins: ["Niacina (B3)", "Ácido Fólico (B9)"],
      minerals: ["Potasio", "Fósforo"]
    },
    imageColor: "bg-gray-100",
    packagingType: "Saco 35kg",
    shelfLife: "6 meses"
  },
  {
    id: "harina-maiz",
    name: "Harina de Maíz Kiana",
    category: ProductCategory.INDUSTRIAL,
    description: "Uso previsto: Materia prima esencial para la industria alimentaria. Garantiza calidad y color. Caducidad: 6 meses.",
    features: ["Color Amarillo Intenso", "Granulometría uniforme"],
    nutritional: {
      calories: "370 Kcal",
      protein: "5-6%",
      vitamins: [],
      minerals: ["Magnesio", "Potasio"]
    },
    imageColor: "bg-yellow-300",
    packagingType: "Saco 35kg",
    shelfLife: "6 meses"
  }
];

export const BENEFITS = [
  {
    title: "Alta Rotación",
    description: "Productos amados por las familias venezolanas, diseñados para estar poco tiempo en el anaquel y mucho tiempo en la mesa.",
    icon: "TrendingUp"
  },
  {
    title: "Seguridad Alimentaria",
    description: "Procesos rigurosos y estandarizados que garantizan la inocuidad, pureza y calidad sanitaria en cada uno de nuestros empaques.",
    icon: "Award"
  },
  {
    title: "Nutrición con Cariño",
    description: "Formulamos cada producto pensando en el bienestar, fortificándolos para nutrir el futuro de Venezuela.",
    icon: "Heart"
  },
  {
    title: "Desde el Corazón del País",
    description: "Ubicados estratégicamente en Calabozo, llevamos nuestros alimentos a cada rincón de la nación con eficiencia.",
    icon: "Truck"
  }
];