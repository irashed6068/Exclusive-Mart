import { ShoppingBag, Star, ArrowRight, ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { ProductCard } from '../components/common/ProductCard';
import { CATEGORIES, PRODUCTS, REVIEWS } from '../data/mockData';
import { useCart } from '../hooks/useCart';
import { cn } from '../lib/utils';

interface HomeProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Home = ({ navigate }: HomeProps) => {
  const { addToCart } = useCart();
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  const flashDeals = PRODUCTS.filter(p => p.isFlashDeal);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 px-6 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>SPECIAL SUMMER COLLECTION 2024</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Premium Items.<br />
              <span className="text-gray-400">Smarter Prices.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience the next generation of retail. Curated products from top brands worldwide, delivered directly to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={() => navigate('shop')} className="shadow-2xl shadow-primary/20">
                Explore Collection <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('offers')}>
                Flash Deals
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="w-px h-10 bg-soft"></div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-soft shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop" 
                alt="Featured Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg">AeroStride Pro</h4>
                  <p className="text-accent font-bold">$180.00</p>
                </div>
                <Button size="sm" onClick={() => navigate('product-detail', { id: '2' })}>View Details</Button>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 glass p-5 rounded-2xl shadow-xl hidden xl:block"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-emerald/10 p-2 rounded-full text-emerald"><ShieldCheck size={24} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Verified Quality</p>
                  <p className="font-bold text-sm">100% Genuine Prods</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-2xl hidden xl:block border border-soft"
            >
              <div className="flex items-center space-x-3 text-primary">
                <ShoppingBag size={24} className="text-accent" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Stock Status</p>
                  <p className="font-bold text-sm">Fast Selling Out</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
          {[
            { icon: Truck, title: 'Free Delivery', desc: 'On orders over $150' },
            { icon: ShieldCheck, title: 'Secure Payment', desc: '100% Secure Checkout' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '30-day money back' },
            { icon: Clock, title: '24/7 Support', desc: 'Dedicated help center' }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/10 rounded-xl">
                <item.icon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Curated Categories</h2>
            <p className="text-gray-500 max-w-md">Discover our expertly curated collections tailored for every facet of your modern lifestyle.</p>
          </div>
          <Button variant="ghost" onClick={() => navigate('shop')}>
            Explore All <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -10 }}
              onClick={() => navigate('shop')}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Best Sellers</h2>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon">
                <ArrowRight size={20} className="rotate-180" />
              </Button>
              <Button variant="primary" size="icon">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                navigate={navigate} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals / Urgency */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-luxury/20 blur-[100px]"></div>
          
          <div className="relative z-10 space-y-8 lg:w-1/2">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse">LIMITED TIME OFFER</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Mega Flash Sale.<br />
              <span className="text-accent">Up to 60% OFF.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Don't miss our biggest sale of the season. Premium essentials at prices that won't last long.
            </p>
            
            <div className="flex space-x-4">
              {[
                { val: '08', label: 'Hrs' },
                { val: '45', label: 'Min' },
                { val: '23', label: 'Sec' }
              ].map((time, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl w-20 text-center">
                  <div className="text-2xl font-bold text-white">{time.val}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">{time.label}</div>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="accent" onClick={() => navigate('shop')}>
              Shop the Sale Now
            </Button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {flashDeals.map(product => (
              <div key={product.id} className="bg-white rounded-3xl p-4 shadow-2xl scale-95 hover:scale-100 transition-transform">
                <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover rounded-2xl mb-4" />
                <h4 className="font-bold text-sm truncate">{product.name}</h4>
                <p className="text-red-500 font-black text-lg">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Shoppers Worldwide</h2>
          <p className="text-gray-500">Over 50,000 verified users trust Exclusive Mart for their premium needs.</p>
        </div>

        <div className="flex animate-scroll space-x-8 no-scrollbar overflow-x-auto pb-8">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="min-w-[400px] bg-soft p-8 rounded-3xl shadow-sm border border-transparent hover:border-accent/10 transition-all">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className={cn("fill-luxury", j >= review.rating && "text-gray-300 fill-transparent")} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.userName} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{review.userName}</h4>
                  <p className="text-xs text-gray-400">Verified Purchase • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold tracking-tighter">Stay Ahead of the Curve</h2>
          <p className="text-gray-500 text-lg">Subscribe to get early access to drops, exclusive discounts, and premium shopping tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            <Button size="lg" className="sm:w-32">Subscribe</Button>
          </form>
          <p className="text-[10px] text-gray-400">By subscribing, you agree to our Terms and conditions.</p>
        </div>
      </section>
    </div>
  );
};
