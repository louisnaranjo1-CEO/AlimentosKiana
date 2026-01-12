export interface NutritionalInfo {
  protein?: string;
  calories?: string;
  vitamins: string[];
  minerals: string[];
}

export interface PricingInfo {
  pricePerUnit: number;
  pricePerBulto: number;
  unitsPerBulto: number;
  ivaPercent: number; // 0.16 usually
  pvmp?: number; // Sugerido
}


export enum ProductCategory {
  INDUSTRIAL = "Harinas Industriales",
  CONSUMER = "Consumo Masivo",
  SNACKS = "Snacks y Complementos"
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  nutritional: NutritionalInfo;
  image?: string;
  imageColor: string; // Placeholder for image dominant color
  packagingType: string;
  shelfLife: string;
  isNew?: boolean;
  pricing?: PricingInfo;
}


export interface Distributor {
  name: string;
  location: string;
  type: 'Supermercado' | 'Mayorista' | 'Institucional';
}