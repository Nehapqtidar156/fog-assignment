export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  discount?: number;
}

export interface FilterOptions {
  brands: string[];
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
}

export interface SortOption {
  field: 'name' | 'price';
  direction: 'asc' | 'desc';
}