import { motion } from 'motion/react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { ArrowRight, Star, Quote } from 'lucide-react';

interface AboutProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const About = ({ navigate }: AboutProps) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 space-y-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white"
          >
            REDEFINING RETAIL.
          </motion.h1>
          <p className="text-xl text-gray-300 font-medium">Curating the world's most premium brands for the modern visionary.</p>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Our Heritage</span>
          <h2 className="text-5xl font-black tracking-tighter leading-tight">Born from a passion for quality over quantity.</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Exclusive Mart started in 2023 with a simple realization: the internet is full of "stuff," but it's harder than ever to find genuine excellence. 
            We built a platform that filters out the noise, presenting only the products that meet our uncompromising standards for design, durability, and ethics.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-4xl font-black">2023</h4>
              <p className="text-gray-400 font-medium uppercase text-[10px] tracking-widest mt-2">Established</p>
            </div>
            <div>
              <h4 className="text-4xl font-black">1.2M+</h4>
              <p className="text-gray-400 font-medium uppercase text-[10px] tracking-widest mt-2">Items Shipped</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute -bottom-12 -left-12 p-8 bg-luxury text-white rounded-3xl shadow-2xl max-w-xs space-y-4">
            <Quote size={32} className="opacity-50" />
            <p className="text-lg font-bold">"We don't just sell products. We curate lifestyles that inspire the next generation."</p>
            <p className="text-xs font-medium uppercase tracking-widest">— EM CEO</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Our Core Pillars</h2>
            <p className="text-gray-500">The values that drive every decision we make at Exclusive Mart.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Zero Compromise', desc: 'If it\'s on our site, it\'s been tested rigorously. We only work with manufacturers who share our obsession with perfection.' },
              { title: 'Transparent Progress', desc: 'From our supply chain to our pricing, we believe in radical honesty. You deserve to know what you\'re buying.' },
              { title: 'Future Centric', desc: 'Sustainability isn\'t a buzzword here. Every parcel is shipped in carbon-neutral packaging by 2025.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                <div className="text-accent text-3xl font-black mb-6">0{i+1}.</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-5xl font-black tracking-tighter">Ready to experience the difference?</h2>
        <Button size="lg" className="px-12" onClick={() => navigate('shop')}>Join the Movement <ArrowRight size={20} className="ml-2" /></Button>
      </section>
    </div>
  );
};
