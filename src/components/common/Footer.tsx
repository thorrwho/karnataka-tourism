import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PhoneCall, ShieldCheck, Heart, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('Dhanyavadagalu! Thank you for subscribing to Karnataka Travel Digest.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-forest-950 text-cream-100 pt-16 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-gold-400 border border-gold-400/30">
                <span className="font-serif font-black text-lg">KA</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-cream-50">Karnataka Tourism AI</span>
                <p className="text-xs text-gold-400">One State. Many Worlds. 💛❤️</p>
              </div>
            </div>
            
            <p className="text-sm text-cream-300 leading-relaxed max-w-sm">
              An intelligent, student-led digital tourism initiative dedicated to promoting Karnataka’s rich civilizational heritage, pristine Western Ghats biodiversity, coastal wonderlands, and authentic regional cuisines through modern AI.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-cream-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Tourist Helpline: <strong className="text-cream-100">1363</strong> (Toll-Free within India)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Responsible Travel Charter & Leave No Trace Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">Destinations</h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><Link to="/explore?category=Heritage" className="hover:text-gold-400 transition-colors">UNESCO & Heritage</Link></li>
              <li><Link to="/explore?category=Hill+Station" className="hover:text-gold-400 transition-colors">Misty Hill Stations</Link></li>
              <li><Link to="/explore?category=Beach" className="hover:text-gold-400 transition-colors">Coastal Karavali & Beaches</Link></li>
              <li><Link to="/explore?category=Nature+%26+Wildlife" className="hover:text-gold-400 transition-colors">Wildlife & Tiger Reserves</Link></li>
              <li><Link to="/hidden-gems" className="hover:text-gold-400 transition-colors">Offbeat Hidden Gems</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">Experiences & Tools</h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><Link to="/planner" className="hover:text-gold-400 transition-colors flex items-center gap-1"><Sparkles className="w-3 h-3 text-gold-400" /> AI Itinerary Planner</Link></li>
              <li><Link to="/food" className="hover:text-gold-400 transition-colors">Regional Food Trails</Link></li>
              <li><Link to="/heritage" className="hover:text-gold-400 transition-colors">Art Forms & Yakshagana</Link></li>
              <li><Link to="/map" className="hover:text-gold-400 transition-colors">Interactive Tourism Map</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About the Initiative</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">Travel Digest</h4>
            <p className="text-xs text-cream-300 leading-relaxed">
              Receive curated seasonal Karnataka itineraries, festival alerts, and hidden waterfalls guide.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-3 pr-10 py-2 rounded-lg bg-forest-900 border border-forest-700 text-xs text-cream-100 placeholder-forest-400 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 p-1.5 rounded-md bg-gold-400 text-forest-950 hover:bg-gold-300 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-cream-400 block">No spam. Only authentic travel inspiration.</span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Karnataka Tourism AI Platform. Developed as a Student-Led Tourism Promotion Initiative.</p>
          <div className="flex items-center gap-1 text-cream-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>for the magnificent land of Karnataka</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

