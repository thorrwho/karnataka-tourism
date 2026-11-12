import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, IndianRupee, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PlannerTeaser: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-forest-900 text-cream-50 relative overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-800/60 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 border border-gold-400/30 text-gold-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Proprietary AI Travel Architecture</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              A Personalized Journey <br />
              <span className="text-gold-400 italic">Built In Seconds.</span>
            </h2>

            <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
              No more spending days juggling spreadsheets or reading disjointed blogs. Tell our smart engine your budget, starting city, group type, and passions — and receive a realistic, day-wise route with travel times, authentic food spots, and downloadable map trails.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Geographic clustering avoids unrealistic driving marathons</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Precise INR expense breakdowns for stays, meals & transport</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Authentic Karnataka regional food recommendations by district</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Instant PDF export and shareable links for family & friends</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/planner')}
                className="px-8 py-3.5 rounded-2xl bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-sm tracking-wide shadow-card hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Smart Trip Planner</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-cream-100 text-sm font-semibold border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Learn How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Preview Card Column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md bg-white text-charcoal-900 rounded-3xl p-6 shadow-elevated border border-gold-400/30">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-200">
                    Live Sample Output
                  </span>
                  <h4 className="font-serif font-bold text-lg text-forest-950 mt-1">
                    4-Day Royal Heritage & Coffee Trail
                  </h4>
                  <p className="text-xs text-charcoal-500">Bengaluru → Mysuru → Coorg</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Day Snippet */}
              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-cream-50 border border-forest-800/10">
                  <div className="w-7 h-7 rounded-lg bg-forest-800 text-gold-400 text-xs font-bold flex items-center justify-center shrink-0">
                    D1
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-forest-950 block">Morning: Mysore Palace & Royal Gallery</span>
                    <span className="text-charcoal-600 text-[11px]">Explore 14th-century royal Durbar hall & Amba Vilas architecture</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-cream-50 border border-forest-800/10">
                  <div className="w-7 h-7 rounded-lg bg-gold-400 text-forest-950 text-xs font-bold flex items-center justify-center shrink-0">
                    🍜
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-forest-950 block">Lunch Spot: Original Mylari Dosa</span>
                    <span className="text-charcoal-600 text-[11px]">Iconic cloud-soft butter dosas with fresh coconut chutney</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-cream-50 border border-forest-800/10">
                  <div className="w-7 h-7 rounded-lg bg-forest-800 text-gold-400 text-xs font-bold flex items-center justify-center shrink-0">
                    D2
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-forest-950 block">Afternoon: Coorg Coffee Plantation Trail</span>
                    <span className="text-charcoal-600 text-[11px]">Bean-to-cup tour through fragrant Arabica and Robusta estates</span>
                  </div>
                </div>
              </div>

              {/* Expense Pill */}
              <div className="p-3 rounded-2xl bg-forest-50 border border-forest-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-forest-900">
                  <IndianRupee className="w-4 h-4 text-forest-800" />
                  <span>Est. Budget: ₹18,400 for 2 Travellers</span>
                </div>
                <span className="text-[11px] font-semibold text-forest-700 bg-white px-2 py-0.5 rounded-md border border-forest-200">
                  Moderate Tier
                </span>
              </div>

              {/* Action */}
              <button
                onClick={() => navigate('/planner')}
                className="w-full mt-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 text-xs font-bold transition-all text-center block"
              >
                Customize This Itinerary →
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

