import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { Destination } from '../../types/destination';
import { DestinationCard } from '../common/DestinationCard';
import { DestinationModal } from '../common/DestinationModal';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const FeaturedDestinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'UNESCO' | 'Hills' | 'Coastal' | 'Heritage'>('All');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const navigate = useNavigate();

  const filtered = DESTINATIONS.filter(dest => {
    if (activeFilter === 'UNESCO') return dest.isUNESCO;
    if (activeFilter === 'Hills') return dest.categories.includes('Hill Station');
    if (activeFilter === 'Coastal') return dest.region === 'Coastal Karnataka' || dest.categories.includes('Beach');
    if (activeFilter === 'Heritage') return dest.categories.includes('Heritage');
    return true;
  }).slice(0, 6);

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-800/10 px-3 py-1 rounded-full border border-forest-800/20">
              Curated Wonders
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-forest-900 tracking-tight">
              Featured Karnataka Destinations
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              Handpicked iconic locations researched and verified with authentic cultural stories, timing guidelines, and local culinary highlights.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'UNESCO', 'Hills', 'Coastal', 'Heritage'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-forest-800 text-cream-50 shadow-soft'
                    : 'bg-white text-charcoal-600 border border-forest-800/15 hover:bg-forest-50'
                }`}
              >
                {filter === 'All' ? 'All Top Picks' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onViewDetails={(d) => setSelectedDestination(d)}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/explore')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-forest-800/20 text-forest-900 font-bold text-sm shadow-soft hover:bg-forest-800 hover:text-white transition-all group"
          >
            <Compass className="w-4 h-4 text-gold-500 group-hover:text-gold-400" />
            <span>Discover All 24+ Curated Karnataka Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal View */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </section>
  );
};

