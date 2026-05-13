import { Compass, Ghost, Home, ArrowLeft } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';

export const NotFound = ({ navigate }: { navigate: (page: Page, params?: { id?: string }) => void }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-12">
        <div className="relative">
          <h1 className="text-[200px] font-black tracking-tighter text-soft leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 bg-white rounded-full shadow-2xl animate-bounce">
              <Ghost size={80} className="text-accent" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4 relative z-10">
          <h2 className="text-4xl font-black tracking-tight">OUT OF REACH.</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The page you're looking for has moved beyond our premium collection. Let's get you back to civilization.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('home')}>
            <Home size={20} className="mr-2" /> Back to Home
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('shop')}>
            <Compass size={20} className="mr-2" /> Explore Catalog
          </Button>
        </div>

        <button 
          onClick={() => window.history.back()}
          className="flex items-center justify-center space-x-2 text-gray-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};
