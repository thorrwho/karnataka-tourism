import React, { useState } from 'react';
import { Destination } from '../../types/destination';
import { 
  X, 
  MapPin, 
  Star, 
  Heart, 
  Sparkles, 
  Calendar, 
  IndianRupee, 
  Compass, 
  Utensils, 
  AlertCircle, 
  Plane, 
  Train 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const { toggleFavorite, isFavorite } = useAuth();
  const navigate = useNavigate();

  if (!destination) return null;

  const isFav = isFavorite(destination.id);

  const handlePlanTrip = () => {
    onClose();
    navigate(`/planner?destination=${encodeURIComponent(destination.name)}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-elevated border border-forest-800/20 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal-900/60 hover:bg-charcoal-900 text-white backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image Section */}
          <div className="relative h-72 sm:h-96 w-full bg-forest-900">
            <img
              src={destination.images[activeImageIdx] || destination.images[0]}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-800 text-cream-50 backdrop-blur-md border border-white/20">
                {destination.region}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cream-100/90 text-charcoal-900 backdrop-blur-md">
                {destination.district} District
              </span>
              {destination.isUNESCO && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-charcoal-950 uppercase tracking-wider">
                  UNESCO World Heritage Site
                </span>
              )}
            </div>

            {/* Title & Headline on bottom */}
            <div className="absolute bottom-4 left-4 right-4 text-cream-50">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="font-serif font-black text-2xl sm:text-3xl text-white">
                    {destination.name}
                  </h2>
                  {destination.kannadaName && (
                    <span className="text-sm font-medium text-gold-300">
                      {destination.kannadaName}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm text-cream-200 mt-1 max-w-xl">
                    {destination.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-forest-800/80 backdrop-blur-md border border-forest-600">
                    <Star className="w-4 h-4 text-gold-400 fill-current" />
                    <span className="font-bold text-sm text-white">{destination.rating.toFixed(1)}</span>
                    <span className="text-xs text-cream-300">({destination.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Thumbnails if multiple */}
          {destination.images.length > 1 && (
            <div className="flex gap-2 p-3 bg-cream-50 border-b border-forest-800/10 overflow-x-auto">
              {destination.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIdx === idx ? 'border-forest-800 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Modal Content Details */}
          <div className="p-5 sm:p-8 space-y-6">
            
            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-forest-700" /> Duration
                </div>
                <div className="text-sm font-bold text-forest-900">{destination.estimatedVisitDuration}</div>
              </div>

              <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1 flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5 text-forest-700" /> Avg Budget
                </div>
                <div className="text-sm font-bold text-forest-900">~₹{destination.estimatedBudgetPerDay.toLocaleString('en-IN')}/day</div>
              </div>

              <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10 col-span-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-forest-700" /> Best Season
                </div>
                <div className="text-xs sm:text-sm font-semibold text-charcoal-800">{destination.bestTimeToVisit}</div>
              </div>
            </div>

            {/* Overview Description */}
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-900 mb-2">Destination Overview</h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Attractions List */}
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-900 mb-3">Popular Attractions & Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.attractions.map((attr, idx) => (
                  <div key={idx} className="bg-cream-50/80 p-3.5 rounded-2xl border border-forest-800/10 hover:border-forest-800/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-charcoal-900">{attr.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-forest-800/10 text-forest-800 font-semibold">
                        {attr.category}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-1.5">{attr.description}</p>
                    {attr.durationHours && (
                      <span className="text-[11px] text-charcoal-500 font-medium">
                        Suggested time: {attr.durationHours} hours
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Local Food Specialties */}
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-900 mb-2 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-gold-500" />
                <span>Authentic Food to Savor</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination.localFood.map((food, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-gold-400/10 text-forest-900 text-xs font-semibold border border-gold-400/30">
                    🍜 {food}
                  </span>
                ))}
              </div>
            </div>

            {/* Travel Tips & Etiquette */}
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-forest-700" />
                <span>Travel Tips & Local Insights</span>
              </h3>
              <ul className="space-y-1.5">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="text-xs text-charcoal-700 flex items-start gap-2">
                    <span className="text-gold-500 font-bold shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connectivity Info */}
            <div className="bg-forest-50 p-4 rounded-2xl border border-forest-200 text-xs text-charcoal-700 space-y-1.5">
              <div className="font-bold text-forest-900 mb-1">How to Reach:</div>
              {destination.nearestAirport && (
                <div className="flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                  <span><strong>Airport:</strong> {destination.nearestAirport}</span>
                </div>
              )}
              {destination.nearestRailway && (
                <div className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                  <span><strong>Railway:</strong> {destination.nearestRailway}</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-cream-50 border-t border-forest-800/10 flex items-center justify-between gap-3">
          <button
            onClick={() => toggleFavorite(destination.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
              isFav 
                ? 'bg-red-50 text-red-600 border-red-200' 
                : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-cream-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-current text-red-500' : ''}`} />
            <span>{isFav ? 'Saved in Favorites' : 'Add to Favorites'}</span>
          </button>

          <button
            onClick={handlePlanTrip}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 text-xs font-bold transition-all shadow-soft hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Plan Itinerary with AI</span>
          </button>
        </div>

      </div>
    </div>
  );
};

