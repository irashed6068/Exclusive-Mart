import { Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { cn, formatPrice } from '../../lib/utils';
import { Page } from '../../App';

interface ProductCardProps {
  product: Product;
  navigate: (page: Page, params?: { id?: string }) => void;
  onAddToCart?: (product: Product, quantity?: number) => void;
  className?: string;
}

export const ProductCard = ({ product, navigate, onAddToCart, className }: ProductCardProps) => {
  const isDiscounted = product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500", className)}
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden bg-soft cursor-pointer"
        onClick={() => navigate('product-detail', { id: product.id })}
      >
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">NEW</span>
          )}
          {product.isFlashDeal && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">FLASH DEAL</span>
          )}
          {isDiscounted && (
            <span className="bg-emerald text-white text-[10px] font-bold px-2 py-1 rounded-full">
              -{Math.round((1 - product.price / product.originalPrice!) * 100)}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button 
            className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            title="Wishlist"
          >
            <Heart size={20} />
          </button>
          <button 
            className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
            title="Quick View"
            onClick={(e) => {
              e.stopPropagation();
              navigate('product-detail', { id: product.id });
            }}
          >
            <Eye size={20} />
          </button>
          <button 
            className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150"
            title="Add to Cart"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(product);
            }}
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center space-x-1 mb-2">
          <Star size={12} className="text-luxury fill-luxury" />
          <span className="text-[10px] font-bold text-gray-500">{product.rating} ({product.reviewsCount} reviews)</span>
        </div>
        
        <h3 
          className="font-bold text-lg mb-1 truncate hover:text-accent transition-colors cursor-pointer"
          onClick={() => navigate('product-detail', { id: product.id })}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">{formatPrice(product.price)}</span>
          {isDiscounted && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice!)}</span>
          )}
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(product);
          }}
          className="w-full mt-4 py-3 bg-soft hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-xl transition-all duration-300 uppercase tracking-widest"
        >
          Add to bag
        </button>
      </div>
    </motion.div>
  );
};
