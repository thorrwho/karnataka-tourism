import React, { useState } from 'react';
import { UNESCO_SITES, ART_FORMS, FESTIVALS, FOLKLORE_STORIES } from '../data/heritage';
import { 
  Landmark, 
  Sparkles, 
  Award, 
  Calendar, 
  BookOpen, 
  Music, 
  CheckCircle2, 
  ChevronRight, 
  Compass 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeritageCulturePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'unesco' | 'art' | 'festivals' | 'folklore'>('unesco');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>Living Civilizational Legacy</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Heritage & Culture of Karnataka
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Karnataka is the crucible of glorious dynasties: the Chalukyas, Hoysalas, Rashtrakutas, and the Vijayanagara Empire. Immerse yourself in UNESCO marvels, thunderous folk dances, royal Dasara processions, and immortal folklore.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-forest-800/15 pb-4">
          <button
            onClick={() => setActiveTab('unesco')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'unesco'
                ? 'bg-forest-800 text-cream-50 shadow-soft'
                : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-charcoal-200'
            }`}
          >
            <Award className="w-4 h-4 text-gold-400" />
            <span>UNESCO World Heritage ({UNESCO_SITES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('art')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'art'
                ? 'bg-forest-800 text-cream-50 shadow-soft'
                : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-charcoal-200'
            }`}
          >
            <Music className="w-4 h-4 text-gold-400" />
            <span>Traditional Art Forms ({ART_FORMS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('festivals')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'festivals'
                ? 'bg-forest-800 text-cream-50 shadow-soft'
                : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-charcoal-200'
            }`}
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Iconic Festivals ({FESTIVALS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('folklore')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'folklore'
                ? 'bg-forest-800 text-cream-50 shadow-soft'
                : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-charcoal-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span>Legends & Folklore ({FOLKLORE_STORIES.length})</span>
          </button>
        </div>

        {/* Tab 1: UNESCO Sites */}
        {activeTab === 'unesco' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {UNESCO_SITES.map((site) => (
                <div
                  key={site.id}
                  className="bg-white rounded-3xl overflow-hidden border border-forest-800/15 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-forest-900">
                    <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-charcoal-950 uppercase tracking-wider">
                        UNESCO • Inscribed {site.yearInscribed}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif font-bold text-2xl text-white">
                        {site.name}
                      </h3>
                      <div className="text-xs text-cream-200 flex items-center gap-1 mt-0.5">
                        <Compass className="w-3.5 h-3.5 text-gold-400" />
                        <span>{site.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">Architectural Style</span>
                        <div className="text-xs font-semibold text-forest-900">{site.architecturalStyle}</div>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                        {site.significance}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                          Architectural Highlights:
                        </div>
                        <ul className="space-y-1.5">
                          {site.highlights.map((hl, idx) => (
                            <li key={idx} className="text-xs text-charcoal-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-forest-800/10">
                      <button
                        onClick={() => navigate(`/explore?category=Heritage`)}
                        className="w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Explore Heritage Tours for This Site</span>
                        <ChevronRight className="w-4 h-4 text-gold-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Art Forms */}
        {activeTab === 'art' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ART_FORMS.map((art) => (
                <div key={art.id} className="bg-white rounded-3xl overflow-hidden border border-forest-800/15 shadow-soft flex flex-col justify-between">
                  <div className="relative h-60 overflow-hidden bg-forest-900">
                    <img src={art.image} alt={art.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-forest-800 text-gold-300">
                      {art.type}
                    </span>

                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-serif font-bold text-2xl text-white">
                        {art.name} ({art.kannadaName})
                      </h3>
                      <span className="text-xs text-cream-200">Region: {art.region}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1">
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                      {art.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                        Signature Characteristics:
                      </div>
                      <ul className="space-y-1.5">
                        {art.features.map((feat, idx) => (
                          <li key={idx} className="text-xs text-charcoal-700 flex items-start gap-2">
                            <span className="text-gold-500 font-bold shrink-0">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Festivals */}
        {activeTab === 'festivals' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FESTIVALS.map((fest) => (
                <div key={fest.id} className="bg-white rounded-3xl overflow-hidden border border-forest-800/15 shadow-soft flex flex-col justify-between">
                  <div className="relative h-60 overflow-hidden bg-forest-900">
                    <img src={fest.image} alt={fest.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gold-400 text-forest-950">
                      {fest.season}
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-serif font-bold text-2xl text-white">
                        {fest.name}
                      </h3>
                      <span className="text-xs text-gold-300 font-medium">{fest.location}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1">
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                      {fest.description}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-forest-50 border border-forest-200 text-xs text-forest-900 space-y-1">
                      <div className="font-bold">Cultural & Historic Importance:</div>
                      <p className="text-charcoal-700 leading-relaxed">{fest.culturalImportance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Folklore & Legends */}
        {activeTab === 'folklore' && (
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            {FOLKLORE_STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-800/15 shadow-soft space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-forest-800/10 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                      {story.location} • {story.period}
                    </span>
                    <h3 className="font-serif font-black text-2xl text-forest-900 mt-1">
                      {story.title}
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-forest-800 bg-forest-50 px-3 py-1.5 rounded-xl border border-forest-200 self-start sm:self-auto">
                    Hero: {story.hero}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {story.narrative}
                </p>

                <div className="p-3.5 rounded-2xl bg-cream-50 border border-forest-800/10 text-xs text-charcoal-800 font-semibold flex items-center gap-2">
                  <span className="text-gold-600 text-base">✦</span>
                  <span><strong>Timeless Takeaway:</strong> {story.moral}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
