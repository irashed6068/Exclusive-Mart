import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Page } from '../../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

export const Footer = ({ navigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', page: 'shop' as Page },
        { label: 'Best Sellers', page: 'shop' as Page },
        { label: 'Flash Deals', page: 'offers' as Page },
        { label: 'Browse All', page: 'shop' as Page },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', page: 'about' as Page },
        { label: 'Careers', page: 'about' as Page },
        { label: 'Blog', page: 'blog' as Page },
        { label: 'Contact', page: 'contact' as Page },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', page: 'faq' as Page },
        { label: 'Returns & Refunds', page: 'returns' as Page },
        { label: 'Order Tracking', page: 'order-tracking' as Page },
        { label: 'Shipping Info', page: 'faq' as Page },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <button 
            onClick={() => navigate('home')}
            className="text-2xl font-bold tracking-tighter"
          >
            EXCLUSIVE<span className="text-accent">MART</span>
          </button>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            The ultimate destination for premium retail products. 
            Quality curated, fast delivered, and always reliable.
          </p>
          <div className="flex space-x-4">
            <button className="p-2 bg-white/10 hover:bg-accent rounded-full transition-colors"><Facebook size={18} /></button>
            <button className="p-2 bg-white/10 hover:bg-accent rounded-full transition-colors"><Twitter size={18} /></button>
            <button className="p-2 bg-white/10 hover:bg-accent rounded-full transition-colors"><Instagram size={18} /></button>
            <button className="p-2 bg-white/10 hover:bg-accent rounded-full transition-colors"><Youtube size={18} /></button>
          </div>
        </div>

        {/* Links */}
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => navigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-xs text-center">
          © {currentYear} Exclusive Mart Retail. All rights reserved. Built for conversion.
        </p>
        <div className="flex space-x-6">
          <button onClick={() => navigate('privacy')} className="text-gray-400 hover:text-white text-xs">Privacy Policy</button>
          <button onClick={() => navigate('terms')} className="text-gray-400 hover:text-white text-xs">Terms of Service</button>
          <button onClick={() => navigate('returns')} className="text-gray-400 hover:text-white text-xs">Returns Policy</button>
        </div>
      </div>
    </footer>
  );
};
