import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useStore } from '../store';
import { motion } from 'motion/react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useStore(state => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    login({ id: '1', email, fullName: 'Demo User' });
    navigate('/profile');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-surface border border-surface-border rounded-2xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src="/logo.png" alt="OtakuVault" className="h-16 w-auto object-contain fallback-bg" onError={(e) => { e.currentTarget.style.display='none'; }} />
              <span className="font-display font-black text-3xl italic tracking-tighter uppercase text-white">OtakuVault</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-text-secondary text-sm">Sign in to access your vault.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-text-secondary" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-surface-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-neon-purple transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-text-secondary">Password</label>
                <Link to="/forgot-password" className="text-xs text-neon-purple hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text-secondary" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-background border border-surface-border rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-neon-purple transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-text-secondary">
            Don't have an account?{' '}
            <Link to="/signup" className="text-neon-purple hover:underline font-medium">Create one</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
