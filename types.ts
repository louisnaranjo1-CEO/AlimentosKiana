export interface NutritionalInfo {
  protein?: string;
  calories?: string;
  carbs?: string;
  iron?: string;
  vitamins?: string[];
  minerals?: string[];
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
  imageColor: string; // Placeholder for image dominant color
  imageUrl?: string;
  packagingType: string;
  shelfLife: string;
  isNew?: boolean;
}

export interface Distributor {
  name: string;
  location: string;
  type: 'Supermercado' | 'Mayorista' | 'Institucional';
  logoUrl?: string;
}