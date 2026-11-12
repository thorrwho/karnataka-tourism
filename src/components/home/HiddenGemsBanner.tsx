import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gem, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const HiddenGemsBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-forest-900 border border-forest-700 shadow-elevated">
          
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80"
              alt="Hidden Western Ghats Gems"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900/90 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl text-cream-50 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold border border-gold-400/30">
              <Gem className="w-3.5 h-3.5 text-gold-400" />
              <span>Sustainable Offbeat Tourism</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Escape the Crowds: <br />
              <span className="text-gold-400 italic">Hidden Gems of Karnataka</span>
            </h2>

            <p className="text-sm sm:text-base text-cream-200 leading-relaxed font-light">
              Beyond the popular tourist circuits lie solitary limestone monoliths, emerald backwater islands, and secluded waterfalls where nature reigns in absolute peace. Discover how to explore responsibly while supporting rural communities.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-cream-300">
              <span className="px-2.5 py-1 rounded-lg bg-forest-800/80 border border-forest-700">✦ Yana Rocks</span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-800/80 border border-forest-700">✦ Vibhooti Falls</span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-800/80 border border-forest-700">✦ Honnemaradu</span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-800/80 border border-forest-700">✦ Maravanthe Coast</span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/hidden-gems')}
                className="px-7 py-3 rounded-2xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs tracking-wider uppercase transition-all shadow-card flex items-center justify-center gap-2"
              >
                <span>Discover Hidden Spots</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/hidden-gems#submit')}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-cream-50 font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit a Secluded Gem</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

