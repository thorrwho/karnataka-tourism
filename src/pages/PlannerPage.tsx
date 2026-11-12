import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PlannerForm } from '../components/planner/PlannerForm';
import { ItineraryView } from '../components/planner/ItineraryView';
import { PlannerInput, GeneratedItinerary } from '../types/itinerary';
import { generateItinerary } from '../services/aiPlanner';
import { Sparkles, Compass, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const PlannerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialDest = searchParams.get('destination') || '';
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [lastInput, setLastInput] = useState<PlannerInput | null>(null);

  // If user navigated with a specific destination, automatically generate an initial sample plan
  useEffect(() => {
    if (initialDest && !itinerary) {
      const defaultInput: PlannerInput = {
        startingCity: 'Bengaluru',
        preferredRegion: initialDest,
        durationDays: 3,
        travellerCount: 2,
        travelGroup: 'Couple',
        budgetPerPerson: 2800,
        budgetLevel: 'Moderate',
        interests: ['History & Heritage', 'Nature & Waterfalls', 'Food & Culinary'],
        transport: 'Car',
        pace: 'Balanced'
      };
      setLastInput(defaultInput);
      handleGenerate(defaultInput);
    }
  }, [initialDest]);

  const handleGenerate = async (input: PlannerInput) => {
    setIsLoading(true);
    setLastInput(input);
    try {
      // Artificial slight delay for realistic AI synthesis feel
      await new Promise(r => setTimeout(r, 600));
      const result = await generateItinerary(input);
      setItinerary(result);
      showToast(`Personalized ${input.durationDays}-Day itinerary generated successfully! ✨`, 'success');
      // Scroll to view
      window.scrollTo({ top: 380, behavior: 'smooth' });
    } catch (err) {
      showToast('Error generating itinerary. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (!lastInput) return;
    setIsRegenerating(true);
    try {
      await new Promise(r => setTimeout(r, 500));
      const result = await generateItinerary(lastInput);
      setItinerary(result);
      showToast('Itinerary refreshed with updated route suggestions!', 'info');
    } catch (err) {
      showToast('Error regenerating itinerary.', 'error');
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800 text-gold-400 text-xs font-bold shadow-soft">
            <Sparkles className="w-4 h-4 animate-pulse text-gold-400" />
            <span>AI Smart Travel Planner • Karnataka Tourism Initiative</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Design Your Dream Karnataka Circuit
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Tell us your travel budget, group dynamic, and preferred starting city. Our smart engine analyzes road distances, opening hours, authentic local cuisines, and scenic stays to craft your day-by-day itinerary.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-charcoal-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-forest-700" />
              <span>Offline & Online Capable</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-forest-700" />
              <span>Zero Fake Schedules</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-forest-700" />
              <span>Free PDF Download</span>
            </span>
          </div>
        </div>

        {/* Form Section */}
        {(!itinerary || !lastInput) ? (
          <PlannerForm
            initialDestination={initialDest}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
        ) : (
          <div className="space-y-8">
            <ItineraryView
              itinerary={itinerary}
              onModify={() => setItinerary(null)}
              onRegenerate={handleRegenerate}
              isRegenerating={isRegenerating}
            />
          </div>
        )}

      </div>
    </div>
  );
};

