import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../hooks/useCart';
import { formatPrice, cn } from '../../lib/utils';
import { Button } from '../common/Button';
import { Page } from '../../App';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (page: Page) => void;
}

export const CartDrawer = ({ isOpen, onClose, navigate }: CartDrawerProps) => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-soft flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={24} />
                <h2 className="text-2xl font-black tracking-tighter uppercase">Your Bag</h2>
                <span className="bg-soft px-2 py-0.5 rounded-lg text-xs font-bold">{cartItems.length}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-soft rounded-full transition-colors"><X size={24} /></button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-6 group">
                    <div className="w-24 h-32 rounded-2xl overflow-hidden bg-soft flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm tracking-tight leading-tight line-clamp-2">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-gray-500">{formatPrice(item.price)}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="bg-soft rounded-lg flex items-center p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-md transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-md transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-black text-sm">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="p-8 bg-soft rounded-full text-gray-300"><ShoppingBag size={64} strokeWidth={1} /></div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">Bag is empty</h3>
                    <p className="text-sm text-gray-500">Add some premium items to get started.</p>
                  </div>
                  <Button variant="primary" onClick={() => { onClose(); navigate('shop'); }}>Explore Shop</Button>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t border-soft space-y-6 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                    <span>Shipping</span>
                    <span className="text-emerald font-bold">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <h4 className="text-xl font-black tracking-tighter uppercase">Total</h4>
                    <span className="text-2xl font-black">{formatPrice(subtotal)}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="w-full h-16 py-0 font-black uppercase tracking-widest text-base" onClick={() => { onClose(); navigate('checkout'); }}>
                    Checkout <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full py-0 grayscale font-bold text-gray-400" onClick={() => { onClose(); navigate('cart'); }}>
                    View Full Bag
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
