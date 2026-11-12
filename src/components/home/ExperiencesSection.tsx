import React from 'react';
import { Compass, Sparkles, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ExperiencesSection: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'Coracle Ride across Tungabhadra Boulders',
      location: 'Hampi, Vijayanagara',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
      duration: '1.5 Hours',
      tag: 'Heritage & River',
      description: 'Drift past ancient 15th-century stone temple ruins on a traditional circular woven reed coracle.'
    },
    {
      title: 'Bean-to-Cup Coffee Estate Exploration',
      location: 'Chikkamagaluru & Coorg',
      image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=600&q=80',
      duration: 'Half Day',
      tag: 'Plantation Walk',
      description: 'Walk through century-old shade-grown Arabica plants, taste roasted single-origin coffees, and meet passionate planters.'
    },
    {
      title: 'Yakshagana Live Dance-Drama Night',
      location: 'Udupi & Mangaluru Coast',
      image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=600&q=80',
      duration: 'Evening / All-night',
      tag: 'Living Culture',
      description: 'Witness the thundering beats of Chande drums and hypnotic performers in towering gold headdresses.'
    },
    {
      title: 'White Water Rafting through Kali River Rapids',
      location: 'Dandeli, Uttara Kannada',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      duration: '3 Hours',
      tag: 'Adventure Sports',
      description: 'Tackle Grade-III rapids like Smuggler’s Den amidst dense deciduous Western Ghats forest.'
    }
  ];

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-400/20 px-3 py-1 rounded-full border border-gold-400/40">
              Unforgettable Memories
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-forest-900 tracking-tight">
              Signature Karnataka Experiences
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              Immerse yourself beyond sightseeing with hands-on cultural, nature, and adrenaline activities unique to this state.
            </p>
          </div>

          <button
            onClick={() => navigate('/food')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs hover:bg-forest-700 transition-colors shadow-soft"
          >
            Explore Cultural & Food Trails →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-forest-800/10 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-900">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest-800/90 text-gold-300 backdrop-blur-md">
                  {exp.tag}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-cream-200">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-serif font-bold text-base text-forest-900 group-hover:text-forest-700 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-forest-800/10 flex items-center justify-between text-xs text-charcoal-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-forest-700" />
                    {exp.duration}
                  </span>
                  <button
                    onClick={() => navigate(`/planner?interests=Adventure,Culture`)}
                    className="text-xs font-bold text-forest-800 hover:text-gold-600 transition-colors"
                  >
                    Add to Plan +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

