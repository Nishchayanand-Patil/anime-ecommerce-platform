import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setSubmitted(true);
    setError('');
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
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src="/logo.png" alt="OtakuVault" className="h-16 w-auto object-contain fallback-bg" onError={(e) => { e.currentTarget.style.display='none'; }} />
              <span className="font-display font-black text-3xl italic tracking-tighter uppercase text-white">OtakuVault</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-white mb-2">Reset Password</h1>
            <p className="text-text-secondary text-sm">
              {submitted ? "We've sent a link to reset your password" : "Enter your email associated with your account"}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          {submitted ? (
            <div className="space-y-6">
              <div className="p-4 bg-neon-purple/10 border border-neon-purple/20 rounded-xl text-center text-neon-purple font-medium">
                Check your inbox at {email}
              </div>
              <Link 
                to="/login"
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Sign In
              </Link>
            </div>
          ) : (
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

              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Recovery Link
              </button>
            </form>
          )}

          {!submitted && (
            <div className="mt-8 text-center bg-black">
              <Link to="/login" className="text-sm text-text-secondary hover:text-white transition-colors inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
