import { Search, MapPin, Package, ChevronRight, Clock, Truck, CheckCircle } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';

interface OrderTrackingProps {
  navigate: (page: Page) => void;
}

export const OrderTracking = ({ navigate }: OrderTrackingProps) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black tracking-tighter uppercase">Track Order</h1>
        <p className="text-gray-500 text-lg">Enter your details below to track your premium items in real-time.</p>
      </div>

      <div className="bg-soft p-10 rounded-[3rem] space-y-8 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order Number</label>
            <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="EM-98240" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
            <input type="email" className="w-full bg-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="john@example.com" />
          </div>
        </div>
        <Button size="lg" className="w-full">Track My Packages <Search size={18} className="ml-2" /></Button>
      </div>

      {/* Visual Tracking (Mock) */}
      <div className="border-2 border-soft rounded-[3rem] p-12 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6">
            <div className="p-5 bg-accent/10 text-accent rounded-3xl"><Package size={40} /></div>
            <div>
              <h4 className="text-2xl font-black tracking-tight">Order #EM-1902</h4>
              <p className="text-emerald font-bold tracking-widest uppercase text-xs">Currently in Transit</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estimated Arrival</p>
            <p className="text-2xl font-black">May 18, 2024</p>
          </div>
        </div>

        <div className="relative pt-12 pb-24">
          <div className="absolute top-[4.5rem] left-8 right-8 h-1 bg-soft rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-accent animate-pulse"></div>
          </div>
          <div className="flex justify-between relative z-10">
            {[
              { icon: CheckCircle, label: 'Confirmed', date: 'May 13', active: true },
              { icon: Package, label: 'Processed', date: 'May 14', active: true },
              { icon: Truck, label: 'Shipped', date: 'May 15', active: true },
              { icon: MapPin, label: 'Arrived', date: 'ETA May 18', active: false }
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <div className={`p-4 rounded-2xl border-4 border-white shadow-xl transition-all ${step.active ? 'bg-accent text-white' : 'bg-white text-gray-300'}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-center">
                    <p className={`font-bold text-sm ${step.active ? 'text-primary' : 'text-gray-400'}`}>{step.label}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{step.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-soft p-10 rounded-[2.5rem] space-y-6">
          <h5 className="font-bold tracking-tight text-lg">Detailed History</h5>
          <div className="space-y-6">
            {[
              { time: '10:45 AM', action: 'Package left local facility', location: 'New York, NY', icon: Clock },
              { time: 'Yesterday', action: 'Handed over to delivery partner', location: 'Jersey City, NJ', icon: Truck }
            ].map((log, i) => (
              <div key={i} className="flex items-start space-x-4 group">
                <div className="p-3 bg-white rounded-xl text-gray-400 group-hover:text-accent transition-colors"><log.icon size={18} /></div>
                <div>
                  <p className="font-bold text-sm">{log.action}</p>
                  <p className="text-xs text-gray-500">{log.location} • {log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
