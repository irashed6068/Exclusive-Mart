import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';

interface ContactProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Contact = ({ navigate }: ContactProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-black tracking-tighter uppercase">Get in Touch</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Have a question about a product, order, or just want to say hi? 
              Our premium support team is ready to assist you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-8 bg-soft rounded-3xl group hover:bg-accent/5 transition-colors cursor-pointer">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm"><Phone size={24} /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                <p className="text-xl font-bold text-primary">+1 (888) 420-5555</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-8 bg-soft rounded-3xl group hover:bg-accent/5 transition-colors cursor-pointer">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm"><Mail size={24} /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                <p className="text-xl font-bold text-primary">support@exclusivemart.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-8 bg-soft rounded-3xl group hover:bg-accent/5 transition-colors cursor-pointer">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm"><MapPin size={24} /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global HQ</p>
                <p className="text-xl font-bold text-primary">Manhattan, NY • 10001</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=agent${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500">Live agents available <span className="text-emerald font-bold">Online Now</span></p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-primary rounded-[3.5rem] p-12 lg:p-16 text-white space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px]"></div>
          
          <div className="space-y-2 relative z-10">
            <h2 className="text-3xl font-bold uppercase tracking-tight">Send a Message</h2>
            <p className="text-gray-400">Response time usually under 2 hours.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-accent transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-accent transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                <option className="bg-primary">General Inquiry</option>
                <option className="bg-primary">Order Status</option>
                <option className="bg-primary">Partnership</option>
                <option className="bg-primary">Press</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-accent transition-all resize-none" placeholder="Tell us how we can help..." />
            </div>
            <Button size="lg" variant="accent" className="w-full h-16 text-lg font-black uppercase">
              Send Message <Send size={20} className="ml-2" />
            </Button>
          </form>

          <button className="flex items-center justify-center space-x-3 w-full text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={18} />
            <span>Start Live Chat instead</span>
          </button>
        </div>
      </div>
    </div>
  );
};
