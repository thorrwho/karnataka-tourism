import React from 'react';
import { Landmark, Compass, Trees, Waves, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Compass,
      value: '31',
      label: 'Vibrant Districts',
      desc: 'From Bidar to Chamarajanagar'
    },
    {
      icon: Landmark,
      value: '3',
      label: 'UNESCO World Heritage Sites',
      desc: 'Hampi, Pattadakal & Hoysala Ensembles'
    },
    {
      icon: Waves,
      value: '320 km',
      label: 'Pristine Coastline',
      desc: 'Golden Karavali shorelines'
    },
    {
      icon: Trees,
      value: '25+',
      label: 'Wildlife Sanctuaries',
      desc: 'Home to 500+ Bengal Tigers'
    },
    {
      icon: ShieldCheck,
      value: '500+',
      label: 'Protected Monuments',
      desc: 'ASI documented heritage architecture'
    }
  ];

  return (
    <section className="bg-cream-50 py-12 border-b border-forest-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-forest-800/10 shadow-soft text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-forest-800" />
                </div>
                <div className="font-serif font-black text-2xl sm:text-3xl text-forest-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-charcoal-800 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-charcoal-500 mt-0.5 leading-snug">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

