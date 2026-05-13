import { Home, ShoppingBag, Heart, User, Search } from 'lucide-react';
import { Page } from '../../App';
import { cn } from '../../lib/utils';

interface MobileNavProps {
  navigate: (page: Page) => void;
  currentPage: Page;
  cartCount: number;
  onCartClick: () => void;
}

export const MobileNav = ({ navigate, currentPage, cartCount, onCartClick }: MobileNavProps) => {
  const tabs = [
    { icon: Home, label: 'Home', page: 'home' as Page },
    { icon: Search, label: 'Explore', page: 'shop' as Page },
    { icon: ShoppingBag, label: 'Cart', page: 'cart' as Page, badge: cartCount },
    { icon: Heart, label: 'Wishlist', page: 'wishlist' as Page },
    { icon: User, label: 'Profile', page: 'account' as Page },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-soft md:hidden glass pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.page;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.label}
              onClick={tab.page === 'cart' ? onCartClick : () => navigate(tab.page)}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 relative w-full h-full",
                isActive ? "text-accent" : "text-gray-400"
              )}
            >
              <Icon size={20} className={cn("transition-transform", isActive && "scale-110")} />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="absolute top-2 right-1/2 translate-x-4 bg-accent text-white text-[8px] font-bold h-3 w-3 flex items-center justify-center rounded-full">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
