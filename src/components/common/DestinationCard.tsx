import React from 'react';
import { Destination } from '../../types/destination';
import { Star, MapPin, Calendar, IndianRupee, Heart, Compass, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface DestinationCardProps {
  destination: Destination;
  onViewDetails: (dest: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onViewDetails }) => {
  const { toggleFavorite, isFavorite } = useAuth();
  const navigate = useNavigate();
  const favored = isFavorite(destination.id);

  const handlePlanWithThis = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/planner?destination=${encodeURIComponent(destination.name)}`);
  };

  return (
    <div 
      onClick={() => onViewDetails(destination)}
      className="group bg-white rounded-2xl overflow-hidden border border-forest-800/10 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-900">
        <img
          src={destination.images[0]}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-forest-900/90 text-cream-100 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-sm">
            <MapPin className="w-3 h-3 text-gold-400" />
            {destination.district}
          </span>
          {destination.isUNESCO && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-charcoal-950 shadow-sm uppercase tracking-wider">
              UNESCO
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(destination.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
            favored 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-red-500'
          }`}
          aria-label={favored ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${favored ? 'fill-current' : ''}`} />
        </button>

        {/* Title over image bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-cream-50 z-10">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold-300 transition-colors truncate">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-xs bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10 shrink-0">
              <Star className="w-3.5 h-3.5 text-gold-400 fill-current" />
              <span className="font-semibold text-white">{destination.rating.toFixed(1)}</span>
            </div>
          </div>
          {destination.kannadaName && (
            <span className="text-xs text-cream-200/80 font-medium block">
              {destination.kannadaName}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-3">
          {destination.tagline}
        </p>

        {/* Key Attractions tags */}
        <div className="mb-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
            Key Attractions:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {destination.attractions.slice(0, 2).map((attr, idx) => (
              <span 
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-forest-50 text-forest-800 font-medium border border-forest-100"
              >
                {attr.name.split('(')[0].trim()}
              </span>
            ))}
            {destination.attractions.length > 2 && (
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-cream-200 text-charcoal-600 font-medium">
                +{destination.attractions.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Meta row: Best time & Budget */}
        <div className="pt-3 border-t border-forest-800/10 flex items-center justify-between text-xs text-charcoal-600 mb-3">
          <div className="flex items-center gap-1 text-charcoal-500">
            <Calendar className="w-3.5 h-3.5 text-forest-700" />
            <span className="truncate max-w-[140px]">{destination.estimatedVisitDuration}</span>
          </div>
          <div className="flex items-center gap-0.5 font-semibold text-forest-800">
            <IndianRupee className="w-3.5 h-3.5" />
            <span>~₹{destination.estimatedBudgetPerDay.toLocaleString('en-IN')}/day</span>
          </div>
        </div>

        {/* Card actions */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onViewDetails(destination)}
            className="w-full py-2 px-3 rounded-xl border border-forest-800/20 text-forest-900 hover:bg-forest-50 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
          <button
            onClick={handlePlanWithThis}
            className="w-full py-2 px-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Plan Trip</span>
          </button>
        </div>
      </div>
    </div>
  );
};

