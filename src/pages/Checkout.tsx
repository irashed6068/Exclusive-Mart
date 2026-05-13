import { useState } from 'react';
import { CreditCard, Truck, ShieldCheck, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';

interface CheckoutProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Checkout = ({ navigate }: CheckoutProps) => {
  const { cartItems, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (isOrdered) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-10">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex p-8 bg-emerald/10 text-emerald rounded-full"
        >
          <CheckCircle2 size={100} strokeWidth={1} />
        </motion.div>
        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight">Order Confirmed!</h1>
          <p className="text-xl text-gray-500">Your order #EM-9824{Math.floor(Math.random() * 1000)} has been placed successfully.</p>
          <p className="text-gray-400 max-w-lg mx-auto">We've sent a confirmation email to you. Your premium items will be delivered within 3-5 business days.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => navigate('order-tracking')}>Track Order</Button>
          <Button size="lg" variant="secondary" onClick={() => navigate('home')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tighter uppercase">Checkout</h1>
          <p className="text-gray-500 font-medium">Finalize your premium experience.</p>
        </div>
        
        {/* Progress */}
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= s ? 'bg-primary text-white' : 'bg-soft text-gray-400'}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-8 h-1 ${step > s ? 'bg-primary' : 'bg-soft'}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          {/* Step 1: Shipping */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-soft p-3 rounded-2xl"><Truck size={24} /></div>
              <h3 className="text-2xl font-bold">Shipping Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Doe" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</label>
                <input type="text" className="w-full bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="123 Luxury Ave, Manhattan" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">City</label>
                <input type="text" className="w-full bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Postal Code</label>
                <input type="text" className="w-full bg-soft px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="10001" />
              </div>
            </div>
          </div>

          {/* Step 2: Payment */}
          <div className="space-y-8 pt-8 border-t border-soft">
            <div className="flex items-center space-x-3">
              <div className="bg-soft p-3 rounded-2xl"><CreditCard size={24} /></div>
              <h3 className="text-2xl font-bold">Payment Method</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Credit Card', 'PayPal', 'Apple Pay'].map((method) => (
                <button 
                  key={method}
                  className="flex items-center justify-between p-6 border-2 border-soft rounded-3xl hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <span className="font-bold text-sm tracking-tight">{method}</span>
                  <div className="h-5 w-5 rounded-full border-2 border-soft group-hover:border-accent" />
                </button>
              ))}
            </div>

            <div className="bg-soft p-8 rounded-[2.5rem] space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                <div className="relative">
                  <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="**** **** **** ****" />
                  <Lock size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Expiry</label>
                  <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="MM / YY" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">CVV</label>
                  <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="***" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <aside className="lg:col-span-4">
          <div className="bg-white border-2 border-soft rounded-[2.5rem] p-10 space-y-10 sticky top-28">
            <h2 className="text-3xl font-black tracking-tight">Your Order</h2>
            
            <div className="space-y-6 max-h-[300px] overflow-y-auto pr-4 no-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-20 h-24 rounded-2xl overflow-hidden bg-soft flex-shrink-0">
                    <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm leading-tight line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{item.quantity} x {formatPrice(item.price)}</p>
                  </div>
                  <span className="font-bold text-sm tracking-tight">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-soft space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-400">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-400">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
              <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                <h4 className="text-lg font-black tracking-tighter uppercase">Total</h4>
                <span className="text-3xl font-black">{formatPrice(total)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full text-xl h-20 shadow-2xl shadow-accent/20" variant="accent" onClick={handlePlaceOrder}>
              Complete Order
            </Button>
            
            <div className="flex items-center justify-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-emerald" />
              <span>100% Encrypted & Secure</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
