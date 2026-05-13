import { ReactNode } from 'react';
import { Shield } from 'lucide-react';

const PolicyLayout = ({ title, date, children }: { title: string; date: string; children: ReactNode }) => (
  <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">
    <div className="space-y-4">
      <div className="p-4 bg-soft rounded-2xl w-fit text-accent mb-4">
        <Shield size={32} />
      </div>
      <h1 className="text-5xl font-black tracking-tighter uppercase">{title}</h1>
      <p className="text-gray-400 font-bold tracking-widest text-xs">LAST UPDATED: {date}</p>
    </div>
    <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
      {children}
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <PolicyLayout title="Privacy Policy" date="MARCH 15, 2024">
    <p>At Exclusive Mart, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
    
    <h3 className="text-xl font-bold text-primary">1. Information Collection</h3>
    <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact support. This includes name, email, billing address, and payment information.</p>
    
    <h3 className="text-xl font-bold text-primary">2. Use of Information</h3>
    <p>We use the information we collect to process your orders, communicate with you about your account, and provide you with personalized shopping experiences and marketing communications (if opted in).</p>
    
    <h3 className="text-xl font-bold text-primary">3. Data Protection</h3>
    <p>We implement industry-standard security measures, including SSL encryption and secure payment gateways, to ensure your sensitive data remains private and protected at all times.</p>
    
    <h3 className="text-xl font-bold text-primary">4. Cookies</h3>
    <p>We use cookies and similar technologies to track activity on our service and hold certain information to improve your browsing experience.</p>
  </PolicyLayout>
);

export const Terms = () => (
  <PolicyLayout title="Terms & Conditions" date="MARCH 15, 2024">
    <p>By using the Exclusive Mart website, you agree to comply with and be bound by the following terms and conditions of use.</p>
    
    <h3 className="text-xl font-bold text-primary">1. Use of Website</h3>
    <p>The content of this website is for your general information and use only. It is subject to change without notice.</p>
    
    <h3 className="text-xl font-bold text-primary">2. Product Availability</h3>
    <p>While we strive for accuracy, some products may be unavailable or have limited quantities. We reserve the right to limit sales of our products to any person or region.</p>
    
    <h3 className="text-xl font-bold text-primary">3. User Conduct</h3>
    <p>You agree not to use our website for any unlawful purpose or in any way that interrupts our service to other users.</p>
  </PolicyLayout>
);

export const Returns = () => (
  <PolicyLayout title="Returns & Refunds" date="MARCH 15, 2024">
    <p>We want you to be 100% satisfied with your premium purchase. If not, our returns process is designed to be frictionless.</p>
    
    <h3 className="text-xl font-bold text-primary">1. Return Window</h3>
    <p>You have 30 days from the date of delivery to initiate a return for a full refund or exchange.</p>
    
    <h3 className="text-xl font-bold text-primary">2. Condition of Items</h3>
    <p>Items must be returned in their original packaging, unused, and with all original tags attached to qualify for a full refund.</p>
    
    <h3 className="text-xl font-bold text-primary">3. Refund Process</h3>
    <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. Approved refunds are processed within 3-5 business days.</p>
  </PolicyLayout>
);
