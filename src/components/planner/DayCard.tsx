import React from 'react';
import { DayPlan } from '../../types/itinerary';
import { 
  Sun, 
  SunDim, 
  Moon, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Utensils, 
  Bed, 
  Car, 
  Compass, 
  Lightbulb 
} from 'lucide-react';

interface DayCardProps {
  day: DayPlan;
  isFirst?: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const slots = [
    { slot: day.morning, icon: Sun, label: 'Morning Activity', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { slot: day.afternoon, icon: SunDim, label: 'Afternoon Exploration', color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { slot: day.evening, icon: Moon, label: 'Evening & Sunset', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-forest-800/15 overflow-hidden shadow-soft mb-8">
      
      {/* Day Header Banner */}
      <div className="bg-forest-900 text-cream-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-gold-400 text-forest-950 uppercase tracking-wider">
              Day {day.dayNumber}
            </span>
            <span className="text-xs text-cream-300 font-medium">Overnight: {day.overnightLocation}</span>
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
            {day.theme}
          </h3>
        </div>

        {/* Travel distance badge */}
        <div className="flex items-center gap-3 bg-forest-800/90 px-4 py-2 rounded-2xl border border-forest-700 backdrop-blur-md self-start sm:self-auto">
          <Car className="w-4 h-4 text-gold-400 shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-white">~{day.travelDistanceKm} km</div>
            <div className="text-[11px] text-cream-300">~{day.travelTimeHours} hrs driving</div>
          </div>
        </div>
      </div>

      {/* Main Activities Section (Morning, Afternoon, Evening) */}
      <div className="p-5 sm:p-8 space-y-6">
        
        <div className="space-y-4">
          {slots.map(({ slot, icon: SlotIcon, label, color }, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-cream-50/70 border border-forest-800/10 hover:border-forest-800/25 transition-colors space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${color}`}>
                    <SlotIcon className="w-3.5 h-3.5" />
                    <span>{slot.timeSlot}</span>
                  </span>
                  <span className="text-xs font-semibold text-charcoal-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {slot.time}
                  </span>
                </div>
                <div className="text-xs font-bold text-forest-800 flex items-center gap-0.5">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>Est. Entry/Activity: ₹{slot.estimatedCost}</span>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-charcoal-900">
                  {slot.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-charcoal-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-forest-700" />
                  <span>{slot.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 mt-2 leading-relaxed">
                  {slot.description}
                </p>
              </div>

              {slot.tips && (
                <div className="pt-2 flex items-start gap-1.5 text-[11px] text-forest-800 bg-white/80 p-2 rounded-xl border border-forest-100">
                  <Lightbulb className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span><strong>Insider tip:</strong> {slot.tips}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Food & Stay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-forest-800/10">
          
          {/* Food Recommendations */}
          <div className="bg-cream-100/70 p-4 rounded-2xl border border-forest-800/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-forest-800 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-gold-600" />
              <span>Recommended Meals & Culinary Stops</span>
            </div>
            <div className="space-y-2">
              {day.foodRecommendations.map((food, fIdx) => (
                <div key={fIdx} className="text-xs bg-white p-2.5 rounded-xl border border-charcoal-100">
                  <div className="flex items-center justify-between font-bold text-charcoal-900">
                    <span>{food.meal}: {food.dish}</span>
                  </div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">
                    Suggested at: {food.spotSuggestion}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Stays */}
          <div className="bg-cream-100/70 p-4 rounded-2xl border border-forest-800/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-forest-800 flex items-center gap-2">
              <Bed className="w-4 h-4 text-gold-600" />
              <span>Stay Suggestions ({day.overnightLocation})</span>
            </div>
            <div className="space-y-2">
              {day.recommendedStays.map((stay, sIdx) => (
                <div key={sIdx} className="text-xs bg-white p-2.5 rounded-xl border border-charcoal-100">
                  <div className="flex items-center justify-between font-bold text-charcoal-900">
                    <span>{stay.name}</span>
                    <span className="text-[11px] text-forest-800 font-semibold">{stay.estimatedCostRange}</span>
                  </div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">
                    {stay.type} • {stay.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

