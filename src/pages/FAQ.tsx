import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast is delivery?",
      a: "Standard shipping takes 3-5 business days. Express shipping (available at checkout) delivers within 24-48 hours globally. Orders over $150 qualify for free express shipping."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your premium purchase, we'll provide a free returns label and a full refund or exchange."
    },
    {
      q: "Are the products authentic?",
      a: "Absolutely. Every item on Exclusive Mart is sourced directly from manufacturers or authorized distributors. We guarantee 100% authenticity on all products, backed by our Verified Quality certificate."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship to over 120 countries worldwide. We handle all customs and duties upfront, so there are no surprises when your package arrives."
    },
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you'll receive a tracking link via email. You can also track your order directly on our 'Order Tracking' page using your order ID."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black tracking-tighter uppercase">Support Center</h1>
        <p className="text-xl text-gray-500">Find answers to the most common questions from our community.</p>
      </div>

      <div className="relative max-w-xl mx-auto mb-12">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search for a topic..." 
          className="w-full bg-soft px-16 py-5 rounded-[2rem] outline-none focus:ring-2 focus:ring-accent transition-all font-medium"
        />
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border-2 border-soft rounded-[2rem] overflow-hidden transition-all">
            <button 
              onClick={() => setActiveId(activeId === i ? null : i)}
              className="w-full flex items-center justify-between p-8 text-left group"
            >
              <h3 className={cn("text-xl font-bold tracking-tight transition-colors", activeId === i ? "text-accent" : "group-hover:text-accent")}>{faq.q}</h3>
              <ChevronDown size={24} className={cn("transition-transform duration-300", activeId === i ? "rotate-180 text-accent" : "text-gray-300")} />
            </button>
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 px-8",
                activeId === i ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-gray-500 leading-relaxed text-lg">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-[3rem] p-12 text-center text-white space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Still have questions?</h3>
        <p className="text-gray-400 max-w-md mx-auto">Our premium support team is available 24/7 to help you with anything you need.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-colors">Chat with us</button>
          <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">Email Support</button>
        </div>
      </div>
    </div>
  );
};
