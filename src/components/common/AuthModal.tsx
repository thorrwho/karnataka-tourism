import React, { useState } from 'react';
import { X, User, Mail, Lock, Sparkles, Compass } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || (isSignUp ? 'New Traveller' : 'Aditi Rao');
    const finalEmail = email.trim() || 'traveller@karnataka-tourism.org';
    login(finalName, finalEmail);
  };

  const handleQuickDemoLogin = (demoName: string, demoEmail: string) => {
    login(demoName, demoEmail);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-elevated border border-forest-800/20 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-cream-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 mx-auto flex items-center justify-center mb-3 shadow-soft">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-2xl text-forest-900">
            {isSignUp ? 'Join Karnataka Tourism AI' : 'Welcome to Karnataka'}
          </h3>
          <p className="text-xs text-charcoal-500 mt-1">
            Save custom itineraries, bookmark hidden gems, and track your travels.
          </p>
        </div>

        {/* Quick Demo Mode Card */}
        <div className="mb-6 p-3.5 bg-forest-50 rounded-2xl border border-forest-200">
          <div className="text-[11px] font-bold text-forest-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Instant Demo Access (No password required)</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('Aditi Rao', 'aditi.travels@karnataka-tourism.org')}
              className="px-3 py-2 rounded-xl bg-white text-forest-900 border border-forest-200 hover:border-forest-600 text-xs font-semibold shadow-sm transition-all text-left"
            >
              <div className="font-bold">Aditi Rao</div>
              <div className="text-[10px] text-charcoal-500 truncate">Explorer (Demo)</div>
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('Karthik Hegde', 'karthik.hegde@karnataka-tourism.org')}
              className="px-3 py-2 rounded-xl bg-white text-forest-900 border border-forest-200 hover:border-forest-600 text-xs font-semibold shadow-sm transition-all text-left"
            >
              <div className="font-bold">Karthik Hegde</div>
              <div className="text-[10px] text-charcoal-500 truncate">Adventure Lead</div>
            </button>
          </div>
        </div>

        <div className="relative mb-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-charcoal-200" /></div>
          <span className="relative bg-white px-3 text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">
            Or sign in with email
          </span>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1">Your Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kulkarni"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs shadow-soft transition-all"
          >
            {isSignUp ? 'Create My Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-forest-800 hover:underline font-semibold"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'New traveller? Create an account'}
          </button>
        </div>

      </div>
    </div>
  );
};

