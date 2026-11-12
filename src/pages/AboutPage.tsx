import React, { useState } from 'react';
import { 
  Info, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  Users, 
  Trees, 
  Compass, 
  MessageSquare, 
  Flag 
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { storageService } from '../services/storageService';
import { useToast } from '../context/ToastContext';

export const AboutPage: React.FC = () => {
  const { showToast } = useToast();
  const [activeFormTab, setActiveFormTab] = useState<'feedback' | 'report'>('feedback');

  // Feedback Form State
  const [destName, setDestName] = useState('Hampi');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(5);
  const [travelType, setTravelType] = useState('Solo');
  const [comment, setComment] = useState('');

  // Report Form State
  const [reportDest, setReportDest] = useState('Mysore Palace (Amba Vilas)');
  const [reportCategory, setReportCategory] = useState<'timing' | 'pricing' | 'location' | 'closure' | 'other'>('timing');
  const [reportDesc, setReportDesc] = useState('');
  const [reportedBy, setReportedBy] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      showToast('Please share your thoughts in the review comment.', 'error');
      return;
    }
    const dest = DESTINATIONS.find(d => d.name.includes(destName)) || DESTINATIONS[0];
    storageService.addReview({
      destinationId: dest.id,
      destinationName: dest.name,
      userName: userName.trim() || 'Verified Explorer',
      rating,
      comment: comment.trim(),
      travelType
    });
    showToast('Dhanyavadagalu! Your travel review has been recorded. 🌟', 'success');
    setComment('');
    setUserName('');
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDesc.trim()) {
      showToast('Please explain the inaccurate detail.', 'error');
      return;
    }
    storageService.submitReport({
      destinationName: reportDest,
      category: reportCategory,
      description: reportDesc.trim(),
      reportedBy: reportedBy.trim() || 'Responsible Visitor'
    });
    showToast('Report received! Our content verification team will review this.', 'info');
    setReportDesc('');
    setReportedBy('');
  };

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            <span>Student-Led Tourism Promotion Initiative</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Empowering Karnataka Tourism Through Modern AI
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Karnataka Tourism AI is a non-commercial digital initiative conceived and built by passionate engineering and design students to promote the breathtaking diversity of Karnataka, India to travellers across the globe.
          </p>
        </div>

        {/* Mission Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-forest-800/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-forest-900">
              Digital Tourism Awareness
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Moving beyond static informational portals. We provide intelligent, interactive itinerary synthesis that adapts dynamically to traveler budgets and group dynamics in real time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-800/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-400 text-forest-950 flex items-center justify-center">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-forest-900">
              Sustainable & Eco Travel
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Directing tourism flow to lesser-known hidden gems to mitigate overtourism, preserving Western Ghats biodiversity, and enforcing the global Leave No Trace ethos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-800/15 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-forest-900">
              Supporting Local Artisans
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Highlighting family-run plantation homestays, traditional Channapatna toy crafters, Melukote handloom weavers, and hereditary Khanavali eateries.
            </p>
          </div>
        </div>

        {/* Responsible Travel Charter */}
        <div className="bg-forest-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-elevated space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-gold-400 shrink-0" />
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-white">
              The Karnataka Responsible Travel Charter
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-cream-200">
            <div className="space-y-3">
              <h4 className="font-bold text-gold-400 uppercase tracking-wider text-xs">
                In Sacred Shrines & Monuments
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                  <span>Wear modest attire covering shoulders and knees when visiting living temple sanctums.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                  <span>Never carve graffiti or touch fragile 1,000-year-old soapstone carvings in ASI heritage complexes.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gold-400 uppercase tracking-wider text-xs">
                In Wildlife Reserves & Ghats
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                  <span>Strict zero-plastic policy: carry your wrappers and bottles back to municipal bins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                  <span>Respect night travel restrictions through Bandipur and Nagarhole Tiger Reserves (9 PM - 6 AM).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Feedback & Verification Hub */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-800/15 shadow-card space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest-800/10 pb-6">
            <div>
              <h3 className="font-serif font-black text-2xl text-forest-900">
                Community Feedback & Data Quality Hub
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Help us keep tourism information verified, accurate, and helpful for future travellers.
              </p>
            </div>

            {/* Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveFormTab('feedback')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeFormTab === 'feedback'
                    ? 'bg-forest-800 text-cream-50'
                    : 'bg-cream-100 text-charcoal-700'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Rate & Review Destination</span>
              </button>

              <button
                onClick={() => setActiveFormTab('report')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeFormTab === 'report'
                    ? 'bg-red-800 text-white'
                    : 'bg-cream-100 text-charcoal-700'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Report Inaccurate Info</span>
              </button>
            </div>
          </div>

          {/* Form 1: Feedback */}
          {activeFormTab === 'feedback' ? (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Destination Visited</label>
                  <select
                    value={destName}
                    onChange={(e) => setDestName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  >
                    {DESTINATIONS.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Maya Shenoy"
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5 Exceptional)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3/5 Average)</option>
                    <option value={2}>⭐⭐ (2/5 Below Expectations)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Travel Group</label>
                  <select
                    value={travelType}
                    onChange={(e) => setTravelType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  >
                    <option value="Solo">Solo Traveler</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family with Children</option>
                    <option value="Friends">Group of Friends</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Share your experience & tips *</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder="What was the highlight? What should other travellers be mindful of?"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs flex items-center gap-2 shadow-soft"
              >
                <Send className="w-3.5 h-3.5 text-gold-400" />
                <span>Submit Feedback & Rating</span>
              </button>
            </form>
          ) : (
            /* Form 2: Report Inaccurate Info */
            <form onSubmit={handleReportSubmit} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Destination Name</label>
                  <input
                    type="text"
                    value={reportDest}
                    onChange={(e) => setReportDest(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                    placeholder="e.g. Jog Falls, Gol Gumbaz"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Category of Discrepancy</label>
                  <select
                    value={reportCategory}
                    onChange={(e) => setReportCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  >
                    <option value="timing">Opening / Darshan Timings Changed</option>
                    <option value="pricing">Ticket Pricing / Safari Fare Difference</option>
                    <option value="location">Road Access / Route Condition</option>
                    <option value="closure">Temporary Site Closure / Renovation</option>
                    <option value="other">Other Tourism Detail</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Describe the updated or accurate information *</label>
                <textarea
                  value={reportDesc}
                  onChange={(e) => setReportDesc(e.target.value)}
                  rows={3}
                  placeholder="Provide correct operating hours, ticket fees, or road advisory..."
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Name or Email (Optional)</label>
                <input
                  type="text"
                  value={reportedBy}
                  onChange={(e) => setReportedBy(e.target.value)}
                  placeholder="e.g. visitor@gmail.com"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 shadow-soft"
              >
                <Flag className="w-3.5 h-3.5 text-red-200" />
                <span>Submit Verification Report</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

