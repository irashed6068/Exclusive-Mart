import { Heart, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

interface WishlistProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Wishlist = ({ navigate }: WishlistProps) => {
  // Mock wishlist items (first 2 products)
  const wishlistItems = PRODUCTS.slice(0, 2);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">
        <div className="inline-flex p-12 bg-soft rounded-full text-gray-300">
          <Heart size={80} strokeWidth={1} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight">Nothing here yet.</h1>
          <p className="text-gray-500 max-w-md mx-auto">Save the items you love to your wishlist and we'll notify you when they're on sale.</p>
        </div>
        <Button size="lg" onClick={() => navigate('shop')} className="px-12">Browse Products</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-5xl font-black tracking-tighter uppercase">Wishlist</h1>
        <p className="text-gray-500 font-bold hidden md:block">Saved <span className="text-primary">{wishlistItems.length} ITEMS</span></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishlistItems.map(p => (
          <ProductCard key={p.id} product={p} navigate={navigate} />
        ))}
        {/* Placeholder for "Add more" */}
        <div 
          onClick={() => navigate('shop')}
          className="border-4 border-dashed border-soft rounded-3xl flex flex-col items-center justify-center space-y-4 p-12 text-gray-300 hover:border-accent/20 hover:text-accent transition-all cursor-pointer group"
        >
          <div className="p-4 bg-soft rounded-full group-hover:bg-accent/10"><Search size={32} /></div>
          <span className="font-black tracking-tighter uppercase">Find more items</span>
        </div>
      </div>

      {/* Recommendations */}
      <section className="mt-24 pt-24 border-t border-soft">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black tracking-tighter uppercase">Trending Now</h2>
          <Button variant="ghost" onClick={() => navigate('shop')}>Explore Store <ArrowRight size={18} className="ml-2" /></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(2, 6).map(p => (
            <ProductCard key={p.id} product={p} navigate={navigate} />
          ))}
        </div>
      </section>
    </div>
  );
};
