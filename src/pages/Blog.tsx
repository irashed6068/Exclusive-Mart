import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';

interface BlogProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Blog = ({ navigate }: BlogProps) => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Minimalist Living in 2024',
      excerpt: 'Discover how stripping back your lifestyle can lead to greater focus and productivity.',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop',
      date: 'March 15, 2024',
      author: 'Aiden Vance',
      category: 'Lifestyle'
    },
    {
      id: 2,
      title: 'Why Premium Quality Matters More Than Ever',
      excerpt: 'In a world of fast fashion and disposable tech, we explore why investing in longevity is the ultimate flex.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
      date: 'March 12, 2024',
      author: 'Elena Rossi',
      category: 'Fashion'
    },
    {
      id: 3,
      title: 'Smart Home Gadgets: Are They Worth It?',
      excerpt: 'We review the top 5 smart gadgets that actually solve problems instead of creating them.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
      date: 'March 10, 2024',
      author: 'Marcus Wright',
      category: 'Tech'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">Exclusives & Insights</span>
          <h1 className="text-6xl font-black tracking-tighter uppercase">The Journal</h1>
          <p className="text-gray-500 text-lg max-w-lg">Curated stories on lifestyle, technology, and the art of premium shopping.</p>
        </div>
        <div className="flex bg-soft rounded-2xl p-1">
          {['Latest', 'Trending', 'Curated'].map(t => (
            <button key={t} className="px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all last:bg-white last:shadow-sm">
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center space-x-4 text-[10px] font-bold text-accent uppercase tracking-widest">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed">{post.excerpt}</p>
                <button className="flex items-center space-x-2 font-bold text-sm uppercase tracking-widest border-b-2 border-primary pb-1 group-hover:border-accent transition-colors">
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-12">
          {/* Trending */}
          <div className="bg-soft p-10 rounded-[2.5rem] space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-black uppercase tracking-tight text-xl">Hot Topics</h3>
              <TrendingUp size={20} className="text-accent" />
            </div>
            <div className="space-y-6">
              {[
                'Sustainability in 2024',
                'Best Tech for Remote Work',
                'Minimalist Wardrobe Guide',
                'Home Decor Trends'
              ].map((topic, i) => (
                <button key={i} className="flex items-center space-x-4 text-left group w-full">
                  <span className="text-2xl font-black text-gray-200 group-hover:text-accent transition-colors">0{i+1}.</span>
                  <span className="font-bold text-sm hover:text-accent transition-colors">{topic}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ad/CTA */}
          <div className="bg-primary p-12 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-luxury/20 blur-[60px]"></div>
            <h4 className="text-2xl font-black tracking-tight">Become an Insider</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Join 20,000+ readers who get our weekly digest on the future of retail and design.</p>
            <Button size="lg" className="w-full" variant="accent">Subscribe Free</Button>
          </div>
        </aside>
      </div>
    </div>
  );
};
