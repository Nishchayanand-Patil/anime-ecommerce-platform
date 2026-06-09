import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { LogOut, Package, Settings, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-10 border-b border-surface-border pb-6">
        <div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-text-secondary">Manage your account and view orders.</p>
        </div>
        <button 
          onClick={() => { logout(); navigate('/'); }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-surface border border-surface-border rounded-2xl p-6 text-center">
            <div className="w-24 h-24 bg-neon-purple/20 text-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-purple/30">
              <span className="font-display font-bold text-3xl">{user.fullName.charAt(0)}</span>
            </div>
            <h2 className="font-display font-bold text-xl text-white">{user.fullName}</h2>
            <p className="text-text-secondary">{user.email}</p>
          </div>
          
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 bg-neon-purple/10 text-neon-purple border border-neon-purple/20 rounded-lg font-medium transition-colors">
              <UserIcon className="w-5 h-5" /> Account Details
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white hover:bg-surface border border-transparent rounded-lg font-medium transition-colors">
              <Package className="w-5 h-5" /> Order History
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white hover:bg-surface border border-transparent rounded-lg font-medium transition-colors">
              <Settings className="w-5 h-5" /> Preferences
            </button>
          </nav>
        </div>

        <div className="md:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display font-bold text-2xl text-white mb-6">Account Details</h3>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.fullName}
                    className="w-full px-4 py-2.5 bg-background border border-surface-border rounded-lg text-white focus:outline-none focus:border-neon-purple transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full px-4 py-2.5 bg-background border border-surface-border rounded-lg text-text-secondary cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Shipping Address</label>
                <textarea
                  className="w-full px-4 py-2.5 bg-background border border-surface-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-neon-purple transition-colors resize-none h-24"
                  placeholder="Enter your shipping address"
                ></textarea>
              </div>
              
              <div className="flex justify-end pt-4">
                <button type="submit" className="px-6 py-2.5 bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8"
          >
             <h3 className="font-display font-bold text-2xl text-white mb-6">Recent Orders</h3>
             <div className="text-center py-12 border border-dashed border-surface-border rounded-xl">
               <Package className="w-10 h-10 text-text-secondary mx-auto mb-4 opacity-50" />
               <p className="text-text-secondary">You haven't placed any orders yet.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
