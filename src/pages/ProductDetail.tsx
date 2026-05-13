import { useState } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, Heart, Share2, ChevronRight, Check, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, REVIEWS } from '../data/mockData';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { formatPrice, cn } from '../lib/utils';
import { useCart } from '../hooks/useCart';
import { ProductCard } from '../components/common/ProductCard';

interface ProductDetailProps {
  id: string | null;
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const ProductDetail = ({ id, navigate }: ProductDetailProps) => {
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.variants?.size?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants?.color?.[0]);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Maybe show a success message or open cart drawer
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-12">
        <button onClick={() => navigate('home')} className="hover:text-accent font-medium">Home</button>
        <ChevronRight size={12} />
        <button onClick={() => navigate('shop')} className="hover:text-accent font-medium capitalize">{product.category}</button>
        <ChevronRight size={12} />
        <span className="font-bold text-primary truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Product Images */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-soft rounded-3xl overflow-hidden relative"
          >
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.isBestSeller && (
              <span className="absolute top-6 left-6 bg-luxury text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">BEST SELLER</span>
            )}
          </motion.div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "aspect-square rounded-2xl overflow-hidden border-2 transition-all p-1",
                  activeImage === i ? "border-accent bg-accent/5" : "border-transparent bg-soft"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover rounded-xl" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-luxury">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm font-bold">{product.rating} ({product.reviewsCount} Reviews)</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 bg-soft hover:bg-accent/10 hover:text-accent rounded-full transition-colors"><Heart size={20} /></button>
                <button className="p-3 bg-soft hover:bg-accent/10 hover:text-accent rounded-full transition-colors"><Share2 size={20} /></button>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">{product.name}</h1>
            <div className="flex items-end space-x-4">
              <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through mb-1">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

          <div className="space-y-8">
            {/* Variants */}
            {product.variants?.color && (
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Color: <span className="text-primary">{selectedColor}</span></h4>
                <div className="flex flex-wrap gap-3">
                  {product.variants.color.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 p-1 transition-all",
                        selectedColor === color ? "border-accent" : "border-transparent"
                      )}
                    >
                      <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-[10px] text-white">
                        {selectedColor === color && <Check size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.variants?.size && (
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Select Size</h4>
                <div className="flex flex-wrap gap-3">
                  {product.variants.size.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[50px] px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all",
                        selectedSize === size ? "border-accent bg-accent/5 text-accent" : "border-soft bg-soft text-gray-500 hover:border-gray-300"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center bg-soft rounded-2xl p-1 h-14 w-full sm:w-36 justify-between">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-white rounded-xl transition-all"
                >
                  <Minus size={18} />
                </button>
                <span className="font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-white rounded-xl transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
              <Button size="lg" className="h-14 flex-grow text-lg shadow-xl shadow-accent/20" variant="accent" onClick={handleAddToCart}>
                <ShoppingBag size={20} className="mr-3" /> Add to Bag
              </Button>
            </div>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-soft">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald/10 text-emerald rounded-lg"><Truck size={20} /></div>
              <span className="text-sm font-medium">Fast Global Delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-luxury/10 text-luxury rounded-lg"><RotateCcw size={20} /></div>
              <span className="text-sm font-medium">30 Days Returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 text-accent rounded-lg"><ShieldCheck size={20} /></div>
              <span className="text-sm font-medium">Safe & Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-24">
        <div className="flex border-b border-soft mb-12 overflow-x-auto no-scrollbar">
          {[
            { id: 'desc', label: 'Description' },
            { id: 'specs', label: 'Specifications' },
            { id: 'reviews', label: `Reviews (${product.reviewsCount})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "pb-6 px-8 text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap border-b-2",
                activeTab === tab.id ? "border-accent text-accent" : "border-transparent text-gray-400 hover:text-primary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          {activeTab === 'desc' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Uncompromising Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every {product.name} is meticulously crafted to meet our rigorous standards of excellence. 
                  We believe that luxury lies in the details, which is why we spend thousands of hours refining 
                  the materials, the ergonomics, and the overall user experience.
                </p>
                <ul className="space-y-4">
                  {product.features?.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-600">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={product.images[1] || product.images[0]} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
              {product.specs ? Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-4 border-b border-soft gap-2">
                  <span className="font-bold text-gray-500 uppercase tracking-widest text-xs">{key}</span>
                  <span className="text-lg font-medium">{value}</span>
                </div>
              )) : <p className="text-center text-gray-500 py-12">No specific technical data available for this item.</p>}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-12 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="bg-soft p-12 rounded-3xl text-center space-y-4 md:w-1/3">
                  <h3 className="text-6xl font-black">{product.rating}</h3>
                  <div className="flex justify-center text-luxury">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                  </div>
                  <p className="font-bold text-gray-500">Based on {product.reviewsCount} Reviews</p>
                  <Button variant="primary" className="w-full">Write a Review</Button>
                </div>
                <div className="flex-grow space-y-8 w-full">
                  {REVIEWS.map(review => (
                    <div key={review.id} className="border-b border-soft pb-8 last:border-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <img src={review.avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <h4 className="font-bold text-sm tracking-tight">{review.userName}</h4>
                            {review.verified && <span className="text-[10px] uppercase font-bold text-emerald tracking-widest flex items-center"><Check size={10} className="mr-1" /> Verified Purchase</span>}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                      </div>
                      <div className="flex text-luxury mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />)}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Suggested Products */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black tracking-tight">You Might Also Like</h2>
          <Button variant="ghost" onClick={() => navigate('shop')}>View More</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} navigate={navigate} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};
