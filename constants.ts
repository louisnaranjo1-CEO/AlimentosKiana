import { Product, ProductCategory, Distributor } from './types';

export const WHATSAPP_NUMBER = "584243533131"; // From PDF

export const DISTRIBUTORS: Distributor[] = [
  { name: "Makro Comercializadora", location: "Nacional", type: "Mayorista" },
  { name: "Supermercados Luxor", location: "Centro", type: "Supermercado" },
  { name: "Central Madeirense", location: "Nacional", type: "Supermercado" },
  { name: "Organización Naciones Unidas (WFP)", location: "Internacional", type: "Institucional" },
  { name: "Red de Distribución Los Llanos", location: "Guárico", type: "Mayorista" },
  { name: "Automercados Plaza's", location: "Caracas", type: "Supermercado" },
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
    packagingType: "Bolsa 1kg",
    shelfLife: "12 meses"
  },
  {
    id: "merengon-fresa",
    name: "Merengón Fresa",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea con el dulce sabor de la fresa. Lista para disfrutar, fortificada con el cariño que merecen los pequeños de la casa.",
    features: ["Sabor Intenso", "Instantáneo", "Fortificado"],
    nutritional: {
      protein: "9g / 100g",
      vitamins: ["Complejo B"],
      minerals: ["Calcio", "Hierro"]
    },
    imageColor: "bg-pink-200",
    packagingType: "Bolsa 400g",
    shelfLife: "12 meses"
  },
  {
    id: "choco-k",
    name: "Choco K",
    category: ProductCategory.CONSUMER,
    description: "Bebida instantánea a base de cacao y leche. El compañero perfecto para desayunos llenos de alegría y energía.",
    features: ["Contiene Leche y Azúcar", "Frío o Caliente", "Energía para la mañana"],
    nutritional: {
      protein: "8g / 100g",
      vitamins: ["Vitamina A", "Vitamina D"],
      minerals: ["Calcio"]
    },
    imageColor: "bg-amber-800",
    packagingType: "Bolsa 500g",
    shelfLife: "12 meses"
  },
  {
    id: "chi-cha",
    name: "Chi Cha",
    category: ProductCategory.CONSUMER,
    description: "Mezcla para preparar la tradicional chicha de arroz venezolana. Cremosa, dulce y con ese sabor a hogar que nos une.",
    features: ["Espesa y Cremosa", "Con Canela", "Rinde más"],
    nutritional: {
      protein: "7g / 100g",
      vitamins: ["Vitamina D", "Vitamina A", "Vitamina C"],
      minerals: ["Calcio", "Fósforo"]
    },
    imageColor: "bg-blue-100",
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
    packagingType: "Empaque 35g",
    shelfLife: "6 meses"
  },
  // INDUSTRIALES
  {
    id: "harina-arroz-precocida",
    name: "Harina de Arroz Precocida",
    category: ProductCategory.INDUSTRIAL,
    description: "Ingrediente noble y versátil. La base perfecta para crear alimentos suaves y digestivos, desde papillas hasta bebidas.",
    features: ["100% Natural", "Alta absorción", "Hipoalergénica"],
    nutritional: {
      calories: "366 Kcal",
      protein: "Max 6%",
      vitamins: ["Niacina (B3)", "Ácido Fólico (B9)"],
      minerals: ["Potasio", "Fósforo"]
    },
    imageColor: "bg-gray-100",
    packagingType: "Saco 35kg",
    shelfLife: "12 meses"
  },
  {
    id: "harina-maiz",
    name: "Harina de Maíz Kiana",
    category: ProductCategory.INDUSTRIAL,
    description: "Maíz seleccionado y molido con esmero. La materia prima esencial que garantiza calidad y color en sus preparaciones.",
    features: ["Color Amarillo Intenso", "Granulometría uniforme"],
    nutritional: {
      calories: "370 Kcal",
      protein: "5-6%",
      vitamins: [],
      minerals: ["Magnesio", "Potasio"]
    },
    imageColor: "bg-yellow-300",
    packagingType: "Saco 35kg",
    shelfLife: "12 meses"
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