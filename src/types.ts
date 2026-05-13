export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
  variants?: {
    size?: string[];
    color?: string[];
  };
  features?: string[];
  specs?: Record<string, string>;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
