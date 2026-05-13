import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileNav } from './MobileNav';
import { CartDrawer } from './CartDrawer';
import { Page } from '../../App';
import { useCart } from '../../hooks/useCart';

interface LayoutProps {
  children: ReactNode;
  currentPage: Page;
  navigate: (page: Page, params?: { id?: string }) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toggleCart: () => void;
}

export const Layout = ({ children, currentPage, navigate, isCartOpen, setIsCartOpen, toggleCart }: LayoutProps) => {
  const { totalItems } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header navigate={navigate} cartCount={totalItems} onCartClick={toggleCart} />
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        {children}
      </main>
      <Footer navigate={navigate} />
      <MobileNav navigate={navigate} currentPage={currentPage} cartCount={totalItems} onCartClick={toggleCart} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} navigate={navigate} />
    </div>
  );
};
