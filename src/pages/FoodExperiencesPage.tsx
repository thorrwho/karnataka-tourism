import React, { useState } from 'react';
import { FOOD_SPECIALTIES, FOOD_TRAILS } from '../data/foodExperiences';
import { 
  UtensilsCrossed, 
  MapPin, 
  Clock, 
  Sparkles, 
  Award, 
  Heart, 
  Flame, 
  Store 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FoodExperiencesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();

  const categories = ['All', 'Breakfast', 'Main Course', 'Sweet / Dessert'];

  const filteredFoods = FOOD_SPECIALTIES.filter(f => 
    activeCategory === 'All' || f.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Karnataka Gastronomy</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Flavours & Culinary Trails of Karnataka
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            From the fiery Kundapura Ghee Roasts of the coast to the rustic Jolada Rotti thalis of the Deccan, and royal Mysore Pak crafted with pure desi ghee — taste why Karnataka is India’s culinary capital.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-forest-800 text-cream-50 shadow-soft'
                  : 'bg-white text-charcoal-700 border border-forest-800/15 hover:bg-forest-50'
              }`}
            >
              {cat === 'All' ? 'All Authentic Dishes' : cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl overflow-hidden border border-forest-800/15 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-forest-800 text-gold-300 backdrop-blur-md">
                  {dish.category}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-xl text-white">
                    {dish.name}
                  </h3>
                  <span className="text-xs text-gold-300 font-medium block">
                    {dish.kannadaName}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-forest-800 bg-forest-50 px-2.5 py-1 rounded-lg border border-forest-100">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Origin: {dish.region}</span>
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="text-xs text-charcoal-600 bg-cream-50 p-2.5 rounded-xl border border-forest-800/10">
                    <span className="font-bold text-charcoal-800">Flavor Profile:</span> {dish.flavorProfile}
                  </div>
                </div>

                {/* Legendary Outlets */}
                <div className="pt-3 border-t border-forest-800/10 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1">
                    <Store className="w-3.5 h-3.5 text-gold-600" />
                    <span>Legendary Spots to Taste:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-charcoal-700">
                    {dish.legendaryOutlets.map((outlet, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-1.5">
                        <span className="text-gold-500 font-bold shrink-0">•</span>
                        <span>{outlet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Curated Food Trails Section */}
        <div className="pt-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Curated Itineraries
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-forest-900">
              Famous Culinary Walking Trails
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOOD_TRAILS.map((trail) => (
              <div key={trail.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-800/15 shadow-soft space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-forest-800/10 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                      {trail.region}
                    </span>
                    <h3 className="font-serif font-black text-xl text-forest-900 mt-1">
                      {trail.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-charcoal-500 font-semibold self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-forest-700" />
                    <span>{trail.duration}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {trail.stops.map((stop, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-2xl bg-cream-50/80 border border-forest-800/10 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-forest-900">
                        <span>Stop {sIdx + 1}: {stop.spot}</span>
                        <span className="text-[11px] text-charcoal-500 font-medium">{stop.location}</span>
                      </div>
                      <div className="text-xs text-gold-700 font-semibold">
                        Must Order: {stop.mustTry}
                      </div>
                      <p className="text-[11px] text-charcoal-600">{stop.description}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/planner?interests=Food+%26+Culinary`)}
                  className="w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs transition-colors shadow-soft"
                >
                  Plan a Food-Themed Trip with AI →
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

