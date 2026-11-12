import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ananya Deshmukh',
      location: 'Pune, Maharashtra',
      role: 'Family Trip (4 Persons)',
      destination: 'Hampi & Badami Circuit',
      rating: 5,
      review: 'The AI itinerary was startlingly accurate! It warned us about the afternoon heat in Hampi and scheduled the Vijaya Vittala temple right at 8 AM. Our children were mesmerized by the stone chariot.'
    },
    {
      name: 'Marcus & Elena Weber',
      location: 'Munich, Germany',
      role: 'International Couple Explorers',
      destination: 'Western Ghats & Coorg Homestay',
      rating: 5,
      review: 'We have travelled in 30+ countries. The authentic hospitality at the Kodagu coffee estate recommended by Karnataka Tourism AI was pure magic. The fresh Arabica coffee and bamboo shoot curry were unforgettable.'
    },
    {
      name: 'Raghavan Sreenivasan',
      location: 'Chennai, Tamil Nadu',
      role: 'Solo Heritage Enthusiast',
      destination: 'Belur, Halebidu & Shravanabelagola',
      rating: 5,
      review: 'The Hoysala soapstone carvings in Belur are humanity’s crowning achievement. Having the estimated travel times and road distances between Hassan and Belur made my solo driving trip completely stress-free.'
    }
  ];

  return (
    <section className="py-20 bg-cream-100 border-t border-forest-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-800/10 px-3 py-1 rounded-full border border-forest-800/20">
            Traveller Stories
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-forest-900 tracking-tight">
            Loved By Explorers Worldwide
          </h2>
          <p className="text-sm text-charcoal-600">
            Real impressions from travellers who planned their journey with Karnataka Tourism AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-forest-800/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-forest-800/20" />
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 italic leading-relaxed">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-forest-800/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800 text-gold-400 font-bold text-xs flex items-center justify-center ring-2 ring-gold-400 shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-forest-900">{t.name}</h4>
                  <div className="text-[11px] text-charcoal-500">{t.location}</div>
                  <div className="text-[10px] font-semibold text-forest-700 flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-gold-500" />
                    <span>{t.destination}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

