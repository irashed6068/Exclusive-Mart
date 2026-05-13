import { User, Package, Heart, Settings, LogOut, ChevronRight, TrendingUp } from 'lucide-react';
import { Page } from '../App';
import { Button } from '../components/common/Button';

interface AccountProps {
  navigate: (page: Page, params?: { id?: string }) => void;
}

export const Account = ({ navigate }: AccountProps) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'March 2023',
    orders: [
      { id: 'EM-1902', date: '2024-03-01', total: 1299, status: 'Delivered' },
      { id: 'EM-0821', date: '2024-01-15', total: 180, status: 'Delivered' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tighter uppercase">Dashboard</h1>
        <p className="text-gray-500">Welcome back, <span className="text-primary font-bold">{user.name}</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-white border-2 border-soft rounded-[2.5rem] p-8 space-y-2">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Package, label: 'My Orders', page: 'order-tracking' as Page },
              { icon: Heart, label: 'Wishlist', page: 'wishlist' as Page },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.page && navigate(item.page)}
                className={`w-full flex items-center space-x-4 p-4 rounded-2xl font-bold text-sm transition-all ${item.active ? 'bg-primary text-white' : 'hover:bg-soft text-gray-500'}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-8 mt-8 border-t border-soft">
              <button className="w-full flex items-center space-x-4 p-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all">
                <LogOut size={20} />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Total Spent', val: '$1,479.00', icon: TrendingUp, color: 'accent' },
              { label: 'Orders Placed', val: '02', icon: Package, color: 'luxury' },
              { label: 'Wishlist Items', val: '12', icon: Heart, color: 'red-500' }
            ].map((stat, i) => (
              <div key={i} className="bg-soft p-8 rounded-[2.5rem] space-y-4">
                <div className={`p-3 bg-white w-fit rounded-2xl shadow-sm text-${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black mt-1">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white border-2 border-soft rounded-[2.5rem] p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold tracking-tight">Recent Orders</h3>
              <Button variant="secondary" size="sm" onClick={() => navigate('order-tracking')}>View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-soft">
                    <th className="pb-4 px-2">Order ID</th>
                    <th className="pb-4 px-2">Date</th>
                    <th className="pb-4 px-2">Total</th>
                    <th className="pb-4 px-2">Status</th>
                    <th className="pb-4 px-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-soft">
                  {user.orders.map(order => (
                    <tr key={order.id} className="group">
                      <td className="py-6 px-2 font-bold text-sm tracking-tighter">{order.id}</td>
                      <td className="py-6 px-2 text-sm font-medium text-gray-500">{order.date}</td>
                      <td className="py-6 px-2 font-black text-sm">${order.total}</td>
                      <td className="py-6 px-2">
                        <span className="bg-emerald/10 text-emerald text-[10px] font-bold px-3 py-1 rounded-full">{order.status}</span>
                      </td>
                      <td className="py-6 px-2 text-right">
                        <button className="p-2 hover:bg-soft rounded-lg text-gray-400 transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
