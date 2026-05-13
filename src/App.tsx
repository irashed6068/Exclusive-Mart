/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Account } from './pages/Account';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { NotFound } from './pages/NotFound';
import { OrderTracking } from './pages/OrderTracking';
import { Wishlist } from './pages/Wishlist';
import { Offers } from './pages/Offers';
import { PrivacyPolicy, Terms, Returns } from './pages/Policies';
import { useCart } from './hooks/useCart';

export type Page = 
  | 'home' 
  | 'shop' 
  | 'product-detail' 
  | 'cart' 
  | 'checkout' 
  | 'account' 
  | 'blog' 
  | 'about' 
  | 'contact' 
  | 'faq' 
  | 'order-tracking' 
  | 'wishlist' 
  | 'offers'
  | 'privacy'
  | 'terms'
  | 'returns'
  | '404';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: Page, params?: { id?: string }) => {
    if (params?.id) setActiveProductId(params.id);
    setCurrentPage(page);
    setIsCartOpen(false);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'shop': return <Shop navigate={navigate} />;
      case 'product-detail': return <ProductDetail id={activeProductId} navigate={navigate} />;
      case 'cart': return <Cart navigate={navigate} />;
      case 'checkout': return <Checkout navigate={navigate} />;
      case 'account': return <Account navigate={navigate} />;
      case 'blog': return <Blog navigate={navigate} />;
      case 'about': return <About navigate={navigate} />;
      case 'contact': return <Contact navigate={navigate} />;
      case 'faq': return <FAQ navigate={navigate} />;
      case 'order-tracking': return <OrderTracking navigate={navigate} />;
      case 'wishlist': return <Wishlist navigate={navigate} />;
      case 'offers': return <Offers navigate={navigate} />;
      case 'privacy': return <PrivacyPolicy navigate={navigate} />;
      case 'terms': return <Terms navigate={navigate} />;
      case 'returns': return <Returns navigate={navigate} />;
      default: return <NotFound navigate={navigate} />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      navigate={navigate} 
      isCartOpen={isCartOpen} 
      setIsCartOpen={setIsCartOpen}
      toggleCart={toggleCart}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + (activeProductId || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
