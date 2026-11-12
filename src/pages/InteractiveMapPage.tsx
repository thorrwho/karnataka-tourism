import React, { useState } from 'react';
import { TourismMap } from '../components/map/TourismMap';
import { Destination } from '../types/destination';
import { DestinationModal } from '../components/common/DestinationModal';
import { MapPin, Compass, Sparkles, Info } from 'lucide-react';

export const InteractiveMapPage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Geospatial Guide</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Interactive Tourism Map of Karnataka
          </h1>

          <p className="text-sm text-charcoal-600 max-w-2xl leading-relaxed">
            Navigate through all 31 districts of Karnataka. Use the sidebar to filter destinations by tourism category (Heritage, Beaches, Wildlife, Hill Stations) or toggle offbeat hidden gems.
          </p>
        </div>

        {/* Map Container */}
        <TourismMap onSelectDestination={(dest) => setSelectedDestination(dest)} />

        {/* Legend Banner */}
        <div className="bg-white rounded-3xl p-5 border border-forest-800/15 shadow-soft flex flex-wrap items-center justify-around gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-forest-800 shrink-0" />
            <span className="font-semibold text-charcoal-800">Primary Curated Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-600 shrink-0" />
            <span className="font-semibold text-charcoal-800">Offbeat Hidden Gems (💎)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🏛️</span>
            <span className="text-charcoal-600">Heritage / UNESCO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🏖️</span>
            <span className="text-charcoal-600">Coastal Beaches</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">⛰️</span>
            <span className="text-charcoal-600">Hill Stations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🐅</span>
            <span className="text-charcoal-600">Wildlife Sanctuaries</span>
          </div>
        </div>

      </div>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
};

