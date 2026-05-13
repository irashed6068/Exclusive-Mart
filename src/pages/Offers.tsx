import { Timer, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

interface OffersProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Offers = ({ navigate }: OffersProps) => {
  const flashDeals = PRODUCTS.filter(p => p.isFlashDeal);
  const discounted = PRODUCTS.filter(p => p.originalPrice && !p.isFlashDeal);

  return (
    <div className="space-y-24 pb-24">
      {/* Banner */}
      <section className="bg-red-500 py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full font-black text-xs tracking-widest">
            <Timer size={16} /> <span>ENDING SOON</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Flash Sale</h1>
          <p className="text-xl font-medium opacity-90">Grab the most wanted premium items before they're gone forever.</p>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="max-w-7x mx-auto px-6">
        <div className="flex items-center space-x-3 mb-12">
          <Zap className="text-red-500" size={32} />
          <h2 className="text-3xl font-black uppercase tracking-tight">Active Flash Deals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flashDeals.map(p => (
            <ProductCard key={p.id} product={p} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Featured Discounts */}
      <section className="bg-soft py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <Sparkles className="text-luxury" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tight">Season Highlights</h2>
            </div>
            <Button variant="ghost" onClick={() => navigate('shop')}>Browse All Discounts</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounted.map(p => (
              <ProductCard key={p.id} product={p} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Loyalty */}
      <section className="max-w-4xl mx-auto px-6 text-center bg-primary rounded-[3rem] p-16 text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent"></div>
        <h2 className="text-4xl font-black tracking-tighter uppercase relative z-10">Want First Access?</h2>
        <p className="text-gray-400 text-lg relative z-10">Sign up for Exclusive Mart rewards and get notified 24h before our biggest sales start.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl outline-none focus:border-accent w-full sm:w-80"
          />
          <Button variant="accent" size="lg">Unlock Early Access</Button>
        </div>
      </section>
    </div>
  );
};
