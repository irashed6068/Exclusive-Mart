import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid, List as ListIcon, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { useCart } from '../hooks/useCart';
import { cn } from '../lib/utils';

interface ShopProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Shop = ({ navigate }: ShopProps) => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
        <button onClick={() => navigate('home')} className="hover:text-accent">Home</button>
        <ChevronRight size={12} />
        <span className="font-bold text-primary">Shop</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tighter">THE CATALOG</h1>
          <p className="text-gray-500">Discover {filteredProducts.length} premium products selected for you.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group flex-grow md:flex-grow-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search products..."
              className="bg-soft border border-transparent focus:border-accent/20 focus:ring-4 focus:ring-accent/5 outline-none px-12 py-3 rounded-xl w-full md:w-64 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="secondary" size="icon" onClick={() => setIsFilterOpen(true)} className="md:hidden">
            <SlidersHorizontal size={20} />
          </Button>
          <div className="hidden md:flex bg-soft rounded-xl p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn("p-2 rounded-lg transition-all", viewMode === 'grid' ? "bg-white shadow-sm text-accent" : "text-gray-400")}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn("p-2 rounded-lg transition-all", viewMode === 'list' ? "bg-white shadow-sm text-accent" : "text-gray-400")}
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Categories</h3>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={cn("text-sm text-left hover:text-accent transition-colors", !selectedCategory ? "text-accent font-bold" : "text-gray-500")}
              >
                All Products
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn("text-sm text-left hover:text-accent transition-colors", selectedCategory === cat.id ? "text-accent font-bold" : "text-gray-500")}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg">Sort By</h3>
            <select 
              className="bg-soft w-full px-4 py-3 rounded-xl outline-none border-r-8 border-transparent text-sm font-medium"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="p-8 bg-primary rounded-3xl text-white space-y-6">
            <h4 className="font-bold">Member Exclusive</h4>
            <p className="text-xs text-gray-400 leading-relaxed">Join Exclusive Mart rewards and get 15% off your first order.</p>
            <Button variant="accent" size="sm" className="w-full">Sign Up Free</Button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className={cn(
              "grid gap-8",
              viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            )}>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  navigate={navigate}
                  onAddToCart={addToCart}
                  className={viewMode === 'list' ? "flex flex-row aspect-auto" : ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
              <div className="inline-flex p-6 bg-soft rounded-full text-gray-300">
                <Search size={48} />
              </div>
              <h3 className="text-2xl font-bold">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
              <Button variant="secondary" onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] p-8 space-y-12 overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-lg">Category</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => { setSelectedCategory(null); setIsFilterOpen(false); }}
                    className={cn("px-4 py-3 rounded-xl text-xs font-bold border transition-all", !selectedCategory ? "bg-primary text-white border-primary" : "bg-soft border-transparent")}
                  >
                    All
                  </button>
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }}
                      className={cn("px-4 py-3 rounded-xl text-xs font-bold border transition-all", selectedCategory === cat.id ? "bg-primary text-white border-primary" : "bg-soft border-transparent")}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-lg">Sort By</h3>
                <div className="flex flex-col space-y-2">
                  {[
                    { val: 'featured', label: 'Featured' },
                    { val: 'price-low', label: 'Price: Low to High' },
                    { val: 'price-high', label: 'Price: High to Low' },
                    { val: 'rating', label: 'Top Rated' }
                  ].map(opt => (
                    <button 
                      key={opt.val}
                      onClick={() => { setSortBy(opt.val); setIsFilterOpen(false); }}
                      className={cn("text-left py-2 border-b border-soft text-sm px-1", sortBy === opt.val ? "text-accent font-bold" : "text-gray-500")}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button size="lg" className="w-full" onClick={() => setIsFilterOpen(false)}>Show Results</Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
