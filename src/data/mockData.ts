import { Product, Category, Review } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Next-gen gadgets for a smarter life.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Elevate your style with premium wear.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Curated essentials for your living space.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'The final touch to your look.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ProVision 4K Smart TV',
    description: 'Experience true immersion with our flagship 4K display. Featuring OLED technology and Dolby Atmos sound.',
    price: 1299,
    originalPrice: 1599,
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 124,
    stock: 15,
    isBestSeller: true,
    features: ['4K Ultra HD', 'HDR10+', 'Built-in Voice Assistant', '120Hz Refresh Rate'],
    specs: { 'Resolution': '3840 x 2160', 'Panel': 'OLED', 'HDMI': '4 Ports' }
  },
  {
    id: '2',
    name: 'AeroStride Premium Sneakers',
    description: 'Engineering meets elegance. Lightweight, breathable, and designed for ultimate performance and style.',
    price: 180,
    category: 'fashion',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 450,
    stock: 50,
    isNew: true,
    variants: { size: ['7', '8', '9', '10', '11'], color: ['Red', 'Black', 'White'] }
  },
  {
    id: '3',
    name: 'Lumix Ergonomic Office Chair',
    description: 'Reimagine your workspace. Designed for long hours of comfort with premium lumbar support and breathable mesh.',
    price: 350,
    originalPrice: 450,
    category: 'home',
    images: [
      'https://images.unsplash.com/photo-1505797149-43b0001ef2f6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviewsCount: 89,
    stock: 20,
    isFlashDeal: true,
    features: ['Adjustable Height', '360 Swing', 'Premium Mesh', 'Lumbar Support']
  },
  {
    id: '4',
    name: 'Nebula Wireless Headphones',
    description: 'Silence the world. Experience pure sound with advanced active noise cancellation and 40-hour battery life.',
    price: 299,
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviewsCount: 215,
    stock: 35,
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Zenith Minimalist Watch',
    description: 'Timeless elegance for the modern professional. Sapphire glass and premium Italian leather strap.',
    price: 220,
    originalPrice: 280,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 67,
    stock: 12,
    isNew: true
  },
  {
    id: '6',
    name: 'Luxe Cotton Essential Tee',
    description: 'The foundation of a great wardrobe. 100% organic cotton, tailored for a perfect fit.',
    price: 45,
    category: 'fashion',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.5,
    reviewsCount: 102,
    stock: 100,
    variants: { size: ['S', 'M', 'L', 'XL'], color: ['White', 'Navy', 'Grey'] }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Sarah Jenkins',
    rating: 5,
    comment: 'The quality of the ProVision Smart TV is absolutely stunning. Best purchase this year!',
    date: '2024-03-15',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 'r2',
    userName: 'Michael Chen',
    rating: 5,
    comment: 'Super fast delivery and the AeroStride sneakers are extremely comfortable. Highly recommend!',
    date: '2024-03-10',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 'r3',
    userName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great chair, fits my home office perfectly. Assembly took a bit of time but worth it.',
    date: '2024-03-05',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];
