import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Compass, Search, MapPin, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  const quickPills = [
    { name: 'Hampi', category: 'Heritage' },
    { name: 'Coorg', category: 'Hills & Coffee' },
    { name: 'Gokarna', category: 'Beaches' },
    { name: 'Badami', category: 'Cave Temples' },
    { name: 'Dandeli', category: 'River Rafting' },
  ];

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-forest-950 text-cream-50 py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Image with Parallax Vibe & Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=2000&q=85"
          alt="Karnataka Heritage Landscape"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform motion-safe:animate-pulse duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-900/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Initiative Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/80 border border-gold-400/40 text-gold-300 text-xs font-semibold backdrop-blur-md shadow-card">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Official AI Smart Travel Platform • Government Initiative Prototype</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight">
            Discover Karnataka, <br className="hidden sm:inline" />
            <span className="text-gold-400 italic font-serif">Your Way.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-cream-200/90 font-light leading-relaxed">
            From ancient kingdoms to misty mountains, plan unforgettable journeys across Karnataka with the power of AI.
          </p>
        </div>

        {/* Destination Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative flex items-center shadow-elevated rounded-2xl sm:rounded-full bg-white p-2 sm:p-2.5 border border-forest-600/30">
            <div className="pl-3 text-forest-800 shrink-0">
              <Search className="w-5 h-5 text-forest-700" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations (e.g., Hampi, Coorg, Gokarna, Jog Falls)..."
              className="w-full px-3 py-2 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-soft"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Search Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-cream-300/80 font-medium">Trending:</span>
            {quickPills.map((pill) => (
              <button
                key={pill.name}
                type="button"
                onClick={() => navigate(`/explore?search=${encodeURIComponent(pill.name)}`)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 backdrop-blur-sm border border-white/15 transition-all text-xs flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>{pill.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/planner')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl sm:rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-sm tracking-wide shadow-card hover:scale-105 transition-all flex items-center justify-center gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-forest-900" />
            <span>Plan with AI Planner</span>
          </button>

          <button
            onClick={() => navigate('/explore')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl sm:rounded-full bg-white/10 hover:bg-white/20 text-cream-50 font-semibold text-sm backdrop-blur-md border border-white/25 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Explore All 24+ Destinations</span>
          </button>
        </div>

      </div>

    </div>
  );
};

