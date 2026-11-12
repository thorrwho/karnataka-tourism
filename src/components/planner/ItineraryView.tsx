import React, { useState } from 'react';
import { GeneratedItinerary } from '../../types/itinerary';
import { DayCard } from './DayCard';
import { ExpenseBreakdown } from './ExpenseBreakdown';
import { RouteMap } from './RouteMap';
import { 
  Sparkles, 
  RotateCcw, 
  Edit3, 
  Bookmark, 
  Printer, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Info, 
  Backpack, 
  Check 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

interface ItineraryViewProps {
  itinerary: GeneratedItinerary;
  onModify: () => void;
  onRegenerate: () => void;
  isRegenerating: boolean;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  itinerary,
  onModify,
  onRegenerate,
  isRegenerating
}) => {
  const { saveItinerary } = useAuth();
  const { showToast } = useToast();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleSave = () => {
    saveItinerary(itinerary);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Itinerary share link copied to clipboard! 📋', 'success');
    } else {
      showToast('Itinerary ready to share!', 'info');
    }
  };

  const toggleChecklist = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Action Toolbar Header */}
      <div className="no-print bg-white rounded-3xl p-6 sm:p-8 border border-forest-800/15 shadow-card space-y-6">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-forest-800/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold mb-2 shadow-sm border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>{itinerary.isAIPowered ? `Live AI Generated (${itinerary.aiModel || 'Gemini 2.5 Flash'})` : 'AI Synthesized Travel Itinerary'}</span>
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-4xl text-forest-900 tracking-tight">
              {itinerary.title}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 max-w-2xl">
              {itinerary.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 mt-2 font-medium">
              <span>📅 Generated: {itinerary.createdAt}</span>
              <span>•</span>
              <span>👥 {itinerary.input.travelGroup} ({itinerary.input.travellerCount} Pax)</span>
              <span>•</span>
              <span>🚗 Travel: {itinerary.input.transport}</span>
              <span>•</span>
              <span>⚡ Pace: {itinerary.input.pace}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handleSave}
              className="px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 text-xs font-bold flex items-center gap-2 shadow-soft transition-all"
            >
              <Bookmark className="w-3.5 h-3.5 text-gold-400" />
              <span>Save Itinerary</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-white border border-forest-800/20 hover:bg-forest-50 text-forest-900 text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleShare}
              className="px-4 py-2.5 rounded-xl bg-white border border-forest-800/20 hover:bg-forest-50 text-forest-900 text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            <button
              onClick={onRegenerate}
              disabled={isRegenerating}
              className="px-4 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 text-xs font-bold flex items-center gap-2 shadow-soft transition-all disabled:opacity-50"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />
              <span>Regenerate</span>
            </button>

            <button
              onClick={onModify}
              className="px-4 py-2.5 rounded-xl border border-charcoal-200 hover:bg-charcoal-50 text-charcoal-700 text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Modify</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
            <div className="text-[10px] font-bold uppercase text-charcoal-400">Total Duration</div>
            <div className="text-base font-bold text-forest-900">{itinerary.days.length} Days</div>
          </div>
          <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
            <div className="text-[10px] font-bold uppercase text-charcoal-400">Starting City</div>
            <div className="text-base font-bold text-forest-900">{itinerary.input.startingCity}</div>
          </div>
          <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
            <div className="text-[10px] font-bold uppercase text-charcoal-400">Est. Budget / Person</div>
            <div className="text-base font-bold text-forest-900">₹{itinerary.input.budgetPerPerson * itinerary.days.length}</div>
          </div>
          <div className="bg-cream-50 p-3 rounded-2xl border border-forest-800/10">
            <div className="text-[10px] font-bold uppercase text-charcoal-400">Key Focus</div>
            <div className="text-base font-bold text-forest-900 truncate">{itinerary.input.interests[0] || 'Culture'}</div>
          </div>
        </div>

      </div>

      {/* Interactive Map Route */}
      <RouteMap locations={itinerary.routeLocations} />

      {/* Day-by-Day Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-black text-2xl text-forest-900">
            Day-by-Day Itinerary Schedule
          </h3>
          <span className="text-xs text-charcoal-500 font-medium">
            Morning • Afternoon • Evening
          </span>
        </div>

        {itinerary.days.map((day) => (
          <DayCard key={day.dayNumber} day={day} />
        ))}
      </div>

      {/* Expense Breakdown */}
      <ExpenseBreakdown
        breakdown={itinerary.expenseBreakdown}
        travellerCount={itinerary.input.travellerCount}
        durationDays={itinerary.days.length}
      />

      {/* Packing Checklist & Practical Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Packing Checklist */}
        <div className="bg-white rounded-3xl p-6 border border-forest-800/15 shadow-soft space-y-4">
          <div className="flex items-center gap-2">
            <Backpack className="w-5 h-5 text-gold-600" />
            <h4 className="font-serif font-bold text-lg text-forest-900">
              Interactive Packing Checklist
            </h4>
          </div>
          <p className="text-xs text-charcoal-500">
            Tailored for Karnataka weather and temple norms. Check off items as you pack.
          </p>
          <div className="space-y-2">
            {itinerary.packingChecklist.map((item, idx) => {
              const isDone = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className={`p-3 rounded-xl border text-xs flex items-center gap-3 cursor-pointer transition-all ${
                    isDone 
                      ? 'bg-forest-50/70 border-forest-200 text-charcoal-400 line-through' 
                      : 'bg-white border-charcoal-200 text-charcoal-800 hover:bg-cream-50'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                    isDone ? 'bg-forest-800 border-forest-800 text-white' : 'border-charcoal-300'
                  }`}>
                    {isDone && <Check className="w-3 h-3" />}
                  </div>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* General Travel Advisory */}
        <div className="bg-white rounded-3xl p-6 border border-forest-800/15 shadow-soft space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-forest-700" />
            <h4 className="font-serif font-bold text-lg text-forest-900">
              Responsible Travel & Cultural Etiquette
            </h4>
          </div>
          <p className="text-xs text-charcoal-500">
            Key guidelines for a harmonious, memorable, and safe journey across the state.
          </p>
          <ul className="space-y-2.5">
            {itinerary.generalTips.map((tip, idx) => (
              <li key={idx} className="text-xs text-charcoal-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Mandatory Regulatory & Data Disclaimer */}
      <div className="p-4 rounded-2xl bg-cream-200/80 border border-forest-800/15 text-xs text-charcoal-600 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {itinerary.disclaimer}
        </p>
      </div>

    </div>
  );
};

