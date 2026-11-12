import React, { useState, useEffect } from 'react';
import { HIDDEN_GEMS, HiddenGem } from '../data/hiddenGems';
import { storageService } from '../services/storageService';
import { HiddenGemSubmission } from '../types/user';
import { 
  Gem, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  Send, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const HiddenGemsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [communityGems, setCommunityGems] = useState<HiddenGemSubmission[]>([]);
  const { showToast } = useToast();

  // Form State
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [nearestTown, setNearestTown] = useState('');
  const [description, setDescription] = useState('');
  const [highlights, setHighlights] = useState('');
  const [bestTimeToVisit, setBestTimeToVisit] = useState('');
  const [responsibleTips, setResponsibleTips] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');

  useEffect(() => {
    setCommunityGems(storageService.getGemSubmissions());
  }, []);

  const categories = ['All', 'Nature', 'Waterfall', 'Scenic Village', 'Heritage', 'Culture'];

  const filteredGems = HIDDEN_GEMS.filter(gem => 
    selectedCategory === 'All' || gem.category === selectedCategory
  );

  const handleSubmitGem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !district.trim() || !description.trim()) {
      showToast('Please fill in at least the name, district, and description.', 'error');
      return;
    }

    const newGem = storageService.submitHiddenGem({
      name: name.trim(),
      district: district.trim(),
      nearestTown: nearestTown.trim() || 'Nearby village',
      description: description.trim(),
      highlights: highlights.trim() || 'Tranquil natural surroundings',
      bestTimeToVisit: bestTimeToVisit.trim() || 'October to March',
      responsibleTips: responsibleTips.trim() || 'Leave no trace, respect rural environment.',
      submittedBy: submittedBy.trim() || 'Anonymous Explorer'
    });

    setCommunityGems(storageService.getGemSubmissions());
    showToast(`Dhanyavadagalu! Your suggestion "${name}" has been submitted to the community directory. 💎`, 'success');

    // Reset Form
    setName('');
    setDistrict('');
    setNearestTown('');
    setDescription('');
    setHighlights('');
    setBestTimeToVisit('');
    setResponsibleTips('');
    setSubmittedBy('');
  };

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-forest-900 border border-gold-400/40 text-xs font-bold uppercase tracking-wider">
            <Gem className="w-3.5 h-3.5 text-gold-600" />
            <span>Off the Beaten Path</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Hidden Gems of Karnataka
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Solitary limestone monoliths, tranquil emerald river islands, and secluded waterfalls where nature reigns in quiet majesty. Experience Karnataka away from the crowds with responsible eco-travel practices.
          </p>
        </div>

        {/* Responsible Tourism Charter Alert */}
        <div className="bg-forest-900 text-cream-50 p-6 rounded-3xl border border-forest-800 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-lg text-white">
                The Responsible Explorer’s Pledge
              </h4>
              <p className="text-xs text-cream-200 leading-relaxed max-w-2xl">
                Lesser-known ecosystems are fragile. Always practice <strong>Leave No Trace</strong>: carry all plastic waste back, refrain from playing amplified music in forests, do not use soaps in freshwater waterfalls, and patronize local village homestays and street vendors.
              </p>
            </div>
          </div>
          <a
            href="#submit"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gold-400 text-forest-950 font-bold text-xs hover:bg-gold-300 transition-colors shadow-soft"
          >
            Submit a Secret Spot ↓
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-forest-800 text-cream-50 shadow-soft'
                  : 'bg-white text-charcoal-700 border border-forest-800/15 hover:bg-forest-50'
              }`}
            >
              {cat === 'All' ? 'All Hidden Gems' : cat}
            </button>
          ))}
        </div>

        {/* Gems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGems.map((gem) => (
            <div
              key={gem.id}
              className="bg-white rounded-3xl overflow-hidden border border-forest-800/15 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-forest-950">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-forest-900/90 text-gold-300 backdrop-blur-md border border-white/20">
                    {gem.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-charcoal-900 backdrop-blur-md">
                    {gem.district}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-2xl text-white">
                    {gem.name}
                  </h3>
                  {gem.kannadaName && (
                    <span className="text-xs text-gold-300 font-medium block">
                      {gem.kannadaName}
                    </span>
                  )}
                  <p className="text-xs text-cream-200 mt-0.5 line-clamp-1">
                    {gem.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {gem.description}
                </p>

                {/* Suggested Activities */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                    Suggested Activities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {gem.suggestedActivities.map((act, aIdx) => (
                      <span key={aIdx} className="text-[11px] px-2.5 py-1 rounded-lg bg-cream-50 text-forest-900 font-semibold border border-forest-800/10">
                        ✦ {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Logistics */}
                <div className="p-3.5 rounded-2xl bg-cream-50 border border-forest-800/10 text-xs text-charcoal-600 space-y-1">
                  <div><strong>How to reach:</strong> {gem.howToReach}</div>
                  <div><strong>Best Season:</strong> {gem.bestTimeToVisit}</div>
                </div>

                {/* Responsible Tips */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-amber-800">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Responsible Tourism Notice:</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-[11px]">
                    {gem.responsibleTourismTips.map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Submitted Hidden Gems Section */}
        {communityGems.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              <h2 className="font-serif font-black text-2xl text-forest-900">
                Community-Submitted Hidden Gems ({communityGems.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityGems.map((cg) => (
                <div key={cg.id} className="bg-white p-5 rounded-3xl border border-forest-800/15 shadow-soft space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-400/20 text-forest-900">
                      Community Gem
                    </span>
                    <span className="text-[11px] text-charcoal-400 font-medium">{cg.submittedAt}</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-forest-950">{cg.name}</h4>
                  <div className="text-xs text-charcoal-500 font-medium">District: {cg.district} • Near: {cg.nearestTown}</div>
                  <p className="text-xs text-charcoal-700 leading-relaxed line-clamp-3">{cg.description}</p>
                  <div className="pt-2 border-t border-charcoal-100 text-[11px] text-forest-800 font-semibold">
                    Submitted by: {cg.submittedBy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Hidden Gem Form */}
        <div id="submit" className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-800/15 shadow-card max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-400 mx-auto flex items-center justify-center">
              <Gem className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-black text-2xl text-forest-900">
              Recommend a Hidden Gem in Karnataka
            </h3>
            <p className="text-xs text-charcoal-500 max-w-lg mx-auto">
              Know a secluded cascade, scenic village, or quiet temple grove? Share it with the Karnataka Tourism community.
            </p>
          </div>

          <form onSubmit={handleSubmitGem} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Destination Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arbi Falls, Barkana Falls"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">District *</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="e.g. Udupi, Shivamogga, Uttara Kannada"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Nearest Town / Railhead</label>
                <input
                  type="text"
                  value={nearestTown}
                  onChange={(e) => setNearestTown(e.target.value)}
                  placeholder="e.g. Manipal (4 km) or Sirsi (15 km)"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Best Season to Visit</label>
                <input
                  type="text"
                  value={bestTimeToVisit}
                  onChange={(e) => setBestTimeToVisit(e.target.value)}
                  placeholder="e.g. August to November (Post-monsoon)"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 mb-1">Why is it special? (Description) *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Describe the tranquil ambiance, nature trails, or historical significance..."
                className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Responsible Tourism Tip</label>
                <input
                  type="text"
                  value={responsibleTips}
                  onChange={(e) => setResponsibleTips(e.target.value)}
                  placeholder="e.g. Carry your plastic trash back, no night trekking"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Name / Handle</label>
                <input
                  type="text"
                  value={submittedBy}
                  onChange={(e) => setSubmittedBy(e.target.value)}
                  placeholder="e.g. Ananya Rao"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800 bg-cream-50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs tracking-wider uppercase transition-all shadow-soft flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-gold-400" />
              <span>Submit Destination to Directory</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

