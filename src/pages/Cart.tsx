import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Page } from '../App';
import { Button } from '../components/common/Button';
import { useCart } from '../hooks/useCart';
import { formatPrice, cn } from '../lib/utils';

interface CartProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Cart = ({ navigate }: CartProps) => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">
        <div className="inline-flex p-12 bg-soft rounded-full text-gray-300">
          <ShoppingBag size={80} strokeWidth={1} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight">Your bag is empty</h1>
          <p className="text-gray-500 max-w-md mx-auto">Looks like you haven't added anything yet. Discover our latest collections and find something you love.</p>
        </div>
        <Button size="lg" onClick={() => navigate('shop')} className="px-12">Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-5xl font-black tracking-tighter">SHOPPING BAG</h1>
        <button 
          onClick={() => navigate('shop')}
          className="flex items-center space-x-2 text-gray-500 hover:text-accent font-bold text-sm transition-colors"
        >
          <ArrowLeft size={18} />
          <span>CONTINUE SHOPPING</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-8">
          {cartItems.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-3xl group"
            >
              <div className="flex items-center space-x-6 mb-6 sm:mb-0">
                <div 
                  className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden bg-soft flex-shrink-0 cursor-pointer"
                  onClick={() => navigate('product-detail', { id: item.id } as any)}
                >
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{item.category}</span>
                  <h3 
                    className="text-lg font-bold hover:text-accent transition-colors cursor-pointer"
                    onClick={() => navigate('product-detail', { id: item.id } as any)}
                  >
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-primary">{formatPrice(item.price)}</p>
                  
                  <div className="flex items-center space-x-1 pt-2">
                    <div className="bg-soft rounded-lg flex items-center p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded-md transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded-md transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end sm:space-x-12">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Subtotal</p>
                  <p className="text-xl font-black">{formatPrice(item.price * item.quantity)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="lg:col-span-4">
          <div className="bg-primary rounded-[2.5rem] p-10 text-white sticky top-28 space-y-10 shadow-2xl shadow-primary/20">
            <h2 className="text-3xl font-black tracking-tight">Summary</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-400">Order Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-400">Shipping Estimate</span>
                <span className={cn(shipping === 0 ? "text-emerald" : "")}>
                  {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-400">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <h4 className="text-lg font-bold">Total Amount</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Inc. VAT</p>
                </div>
                <span className="text-4xl font-black">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button size="lg" className="w-full text-lg h-16 py-0 uppercase" variant="accent" onClick={() => navigate('checkout')}>
                Checkout Now <ArrowRight size={20} className="ml-3" />
              </Button>
              <div className="flex items-center justify-center space-x-6 grayscale opacity-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="Paypal" />
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                Enjoy free shipping on orders over $150. Plus, 30 days hassle-free returns.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
