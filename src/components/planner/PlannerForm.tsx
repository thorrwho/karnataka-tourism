import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  IndianRupee, 
  Compass, 
  Car, 
  Gauge, 
  Check, 
  RotateCcw 
} from 'lucide-react';
import { PlannerInput, TravelGroupType, TransportType, BudgetLevel, TravelPace } from '../../types/itinerary';

interface PlannerFormProps {
  initialDestination?: string;
  onSubmit: (input: PlannerInput) => void;
  isLoading: boolean;
}

export const PlannerForm: React.FC<PlannerFormProps> = ({ 
  initialDestination = '', 
  onSubmit, 
  isLoading 
}) => {
  const [startingCity, setStartingCity] = useState('Bengaluru');
  const [preferredRegion, setPreferredRegion] = useState(initialDestination || 'Surprise me');
  const [durationDays, setDurationDays] = useState(3);
  const [travellerCount, setTravellerCount] = useState(2);
  const [travelGroup, setTravelGroup] = useState<TravelGroupType>('Couple');
  const [budgetLevel, setBudgetLevel] = useState<BudgetLevel>('Moderate');
  const [budgetPerPerson, setBudgetPerPerson] = useState(2800);
  const [transport, setTransport] = useState<TransportType>('Car');
  const [pace, setPace] = useState<TravelPace>('Balanced');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'History & Heritage',
    'Nature & Waterfalls',
    'Food & Culinary'
  ]);

  const interestOptions = [
    { label: 'Nature & Waterfalls', icon: '🌲' },
    { label: 'History & Heritage', icon: '🏛️' },
    { label: 'Beaches & Coastal', icon: '🏖️' },
    { label: 'Wildlife & Safaris', icon: '🐅' },
    { label: 'Coffee & Plantations', icon: '☕' },
    { label: 'Adventure & Treks', icon: '🧗' },
    { label: 'Spiritual & Sacred', icon: '🪔' },
    { label: 'Food & Culinary', icon: '🍜' },
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleBudgetLevelChange = (lvl: BudgetLevel) => {
    setBudgetLevel(lvl);
    if (lvl === 'Budget') setBudgetPerPerson(1400);
    else if (lvl === 'Moderate') setBudgetPerPerson(2800);
    else if (lvl === 'Luxury') setBudgetPerPerson(6500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedInterests.length === 0) {
      selectedInterests.push('History & Heritage');
    }
    onSubmit({
      startingCity,
      preferredRegion,
      durationDays,
      travellerCount,
      travelGroup,
      budgetPerPerson,
      budgetLevel,
      interests: selectedInterests,
      transport,
      pace
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-800/15 shadow-card space-y-8">
      
      {/* Header */}
      <div className="border-b border-forest-800/10 pb-6 flex items-center justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-400/20 px-3 py-1 rounded-full border border-gold-400/30">
              Intelligent Engine
            </span>
            {!!import.meta.env.VITE_GEMINI_API_KEY && import.meta.env.VITE_GEMINI_API_KEY !== 'YOUR_API_KEY' && (
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Google Gemini AI Connected</span>
              </span>
            )}
          </div>
          <h3 className="font-serif font-black text-2xl text-forest-900 mt-2">
            Configure Your Karnataka Journey
          </h3>
          <p className="text-xs text-charcoal-500">
            Customize 8 personalized parameters. We synthesize routes using realistic distances and verified cultural data.
          </p>
        </div>
        <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 items-center justify-center shadow-soft">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Starting City */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-forest-700" />
            <span>1. Starting City in Karnataka</span>
          </label>
          <select
            value={startingCity}
            onChange={(e) => setStartingCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-cream-50 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-forest-800"
          >
            <option value="Bengaluru">Bengaluru (Garden City / Kempegowda Airport)</option>
            <option value="Mysuru">Mysuru (Heritage Royal Capital)</option>
            <option value="Mangaluru">Mangaluru (Coastal Gateway / Airport)</option>
            <option value="Hubballi">Hubballi-Dharwad (North Karnataka Junction)</option>
            <option value="Belagavi">Belagavi (Northern Foothills)</option>
            <option value="Shivamogga">Shivamogga (Gateway to Malnad)</option>
          </select>
        </div>

        {/* 2. Preferred Destination or Region */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-forest-700" />
            <span>2. Destination or Region</span>
          </label>
          <select
            value={preferredRegion}
            onChange={(e) => setPreferredRegion(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-cream-50 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-forest-800"
          >
            <option value="Surprise me">✨ Surprise me! (AI Best Match for my interests)</option>
            <option value="South Karnataka">South Karnataka (Mysuru, Srirangapatna, Belur)</option>
            <option value="Malnad & Western Ghats">Malnad & Western Ghats (Coorg, Chikkamagaluru, Sakleshpur)</option>
            <option value="Coastal Karnataka">Coastal Karnataka (Gokarna, Udupi, Murudeshwar)</option>
            <option value="North Karnataka">North Karnataka (Hampi, Badami, Pattadakal, Vijayapura)</option>
            <option value="Hampi">Hampi (UNESCO Imperial Ruins)</option>
            <option value="Coorg (Kodagu)">Coorg (Coffee & Waterfalls)</option>
            <option value="Gokarna">Gokarna (Beaches & Shrines)</option>
            <option value="Badami">Badami (Chalukya Rock Caves)</option>
            <option value="Dandeli">Dandeli (River Rafting & Wildlife)</option>
          </select>
        </div>

        {/* 3. Trip Duration */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-forest-700" />
            <span>3. Trip Duration ({durationDays} Days)</span>
          </label>
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5, 7].map((days) => (
              <button
                key={days}
                type="button"
                onClick={() => setDurationDays(days)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  durationDays === days
                    ? 'bg-forest-800 text-cream-50 border-forest-800 shadow-sm'
                    : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-cream-100'
                }`}
              >
                {days} {days === 1 ? 'Day' : 'Days'}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Travellers & Group Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-forest-700" />
            <span>4. Travellers & Travel Group</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['Solo', 'Couple', 'Family', 'Friends'] as TravelGroupType[]).map((grp) => (
              <button
                key={grp}
                type="button"
                onClick={() => {
                  setTravelGroup(grp);
                  if (grp === 'Solo') setTravellerCount(1);
                  else if (grp === 'Couple') setTravellerCount(2);
                  else if (grp === 'Family') setTravellerCount(4);
                  else if (grp === 'Friends') setTravellerCount(4);
                }}
                className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  travelGroup === grp
                    ? 'bg-forest-800 text-cream-50 border-forest-800 shadow-sm'
                    : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-cream-100'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Budget Tier (INR) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <IndianRupee className="w-4 h-4 text-forest-700" />
            <span>5. Budget Level (Per Person / Day)</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['Budget', 'Moderate', 'Luxury'] as BudgetLevel[]).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => handleBudgetLevelChange(lvl)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  budgetLevel === lvl
                    ? 'bg-forest-50 border-forest-800 ring-2 ring-forest-800/20'
                    : 'bg-white border-charcoal-200 hover:bg-cream-100'
                }`}
              >
                <div className="font-bold text-xs text-forest-900">{lvl}</div>
                <div className="text-[11px] text-charcoal-500">
                  {lvl === 'Budget' ? '₹1,000–1,800' : lvl === 'Moderate' ? '₹2,500–4,500' : '₹5,500+'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 6. Mode of Travel */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
            <Car className="w-4 h-4 text-forest-700" />
            <span>6. Primary Mode of Travel</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['Car', 'Bus', 'Train', 'Two-wheeler'] as TransportType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTransport(t)}
                className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  transport === t
                    ? 'bg-forest-800 text-cream-50 border-forest-800 shadow-sm'
                    : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-cream-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 7. Travel Interests (Multi-select) */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center justify-between">
          <span>7. Travel Interests & Passions (Select all that apply)</span>
          <span className="text-[11px] font-semibold text-forest-700">{selectedInterests.length} selected</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {interestOptions.map((opt) => {
            const isSelected = selectedInterests.includes(opt.label);
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => handleInterestToggle(opt.label)}
                className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2.5 transition-all text-left ${
                  isSelected
                    ? 'bg-forest-800 text-cream-50 border-forest-800 shadow-soft'
                    : 'bg-white text-charcoal-800 border-charcoal-200 hover:border-forest-600'
                }`}
              >
                <span className="text-base">{opt.icon}</span>
                <span className="flex-1 truncate">{opt.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 8. Travel Pace */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cream-50 border border-forest-800/10">
        <div className="flex items-center gap-2 text-xs font-bold text-forest-900">
          <Gauge className="w-4 h-4 text-forest-700" />
          <span>8. Travel Pace:</span>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          {(['Relaxed', 'Balanced', 'Fast-paced'] as TravelPace[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPace(p)}
              className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                pace === p
                  ? 'bg-forest-800 text-cream-50 border-forest-800'
                  : 'bg-white text-charcoal-600 border-charcoal-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-2xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-sm tracking-wide shadow-card hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-wait"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
              <span>Synthesizing Your Custom Itinerary...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span>Generate My Smart Karnataka Itinerary</span>
            </>
          )}
        </button>
      </div>

    </form>
  );
};

