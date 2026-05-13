import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../../App';
import { cn } from '../../lib/utils';

interface HeaderProps {
  navigate: (page: Page, params?: { id?: string }) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ navigate, cartCount, onCartClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Offers', page: 'offers' },
    { label: 'Blog', page: 'blog' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-3 glass shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => navigate('home')}
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
        >
          EXCLUSIVE<span className="text-accent">MART</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.page)}
              className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-soft rounded-full transition-colors hidden md:block">
            <Search size={20} />
          </button>
          <button 
            onClick={() => navigate('wishlist')}
            className="p-2 hover:bg-soft rounded-full transition-colors hidden md:block"
          >
            <Heart size={20} />
          </button>
          <button 
            onClick={() => navigate('account')}
            className="p-2 hover:bg-soft rounded-full transition-colors hidden md:block"
          >
            <User size={20} />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 hover:bg-soft rounded-full transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2 hover:bg-soft rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[64px] bg-white z-40 md:hidden p-8 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  navigate(link.page);
                  setIsMenuOpen(false);
                }}
                className="text-2xl font-bold text-left border-b border-soft pb-4"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <button 
                onClick={() => { navigate('account'); setIsMenuOpen(false); }}
                className="flex items-center space-x-3 text-lg font-medium"
              >
                <User size={20} /> <span>Account</span>
              </button>
              <button 
                onClick={() => { navigate('wishlist'); setIsMenuOpen(false); }}
                className="flex items-center space-x-3 text-lg font-medium"
              >
                <Heart size={20} /> <span>Wishlist</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
