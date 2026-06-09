export type Category = 
  | 'Hoodies' 
  | 'Oversized T-Shirts' 
  | 'Caps' 
  | 'Bottles' 
  | 'Posters' 
  | 'Metal Posters' 
  | 'Mouse Pads' 
  | 'Keychains' 
  | 'Figures' 
  | 'Manga';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  color?: string;
  imageUrl: string;
  galleryUrls: string[];
  specs: Record<string, string>;
  isNew?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
}
