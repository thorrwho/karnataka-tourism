import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Landmark, Palmtree, Trees, Flame, Compass } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'Hill Station',
      title: 'Misty Hill Stations',
      kannada: 'ಗಿರಿಧಾಮಗಳು',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      description: 'Coffee estates, cloud-kissed peaks and lush valleys in Western Ghats.',
      examples: 'Coorg, Chikkamagaluru, Sakleshpur'
    },
    {
      id: 'Heritage',
      title: 'Imperial Heritage',
      kannada: 'ಪಾರಂಪರಿಕ ತಾಣಗಳು',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=600&q=80',
      description: 'UNESCO World Heritage ruins, Chalukya rock caves and Hoysala temples.',
      examples: 'Hampi, Badami, Belur & Halebidu'
    },
    {
      id: 'Beach',
      title: 'Pristine Karavali Coast',
      kannada: 'ಕಡಲತೀರಗಳು',
      icon: Palmtree,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
      description: 'Golden sandy beaches, cliff treks and peaceful ocean sunsets.',
      examples: 'Gokarna, Udupi, Murudeshwar'
    },
    {
      id: 'Nature & Wildlife',
      title: 'Wild Reserves & Waterfalls',
      kannada: 'ವನ್ಯಜೀವಿ ಮತ್ತು ಜಲಪಾತಗಳು',
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=600&q=80',
      description: 'Tiger sanctuaries, wild elephant herds and thunderous monsoon falls.',
      examples: 'Kabini, Bandipur, Jog Falls'
    },
    {
      id: 'Adventure',
      title: 'Adrenaline & Treks',
      kannada: 'ಸಾಹಸ ಮತ್ತು ಚಾರಣ',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      description: 'White water river rafting, monolithic rock climbing and summit trails.',
      examples: 'Dandeli, Mullayanagiri, Savandurga'
    },
    {
      id: 'Spiritual',
      title: 'Spiritual & Sacred',
      kannada: 'ಧಾರ್ಮಿಕ ಕ್ಷೇತ್ರಗಳು',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=600&q=80',
      description: 'Centuries-old mathas, monolithic Bahubali statues and sacred rivers.',
      examples: 'Udupi Krishna Mutt, Shravanabelagola, Chamundi'
    }
  ];

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-400/15 px-3 py-1 rounded-full border border-gold-400/30">
            Explore By Experience
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-forest-900 tracking-tight">
            Karnataka’s Diverse Worlds
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            From the roaring rapids of the Kali River to the meditative silence of ancient stone temples, find the travel style that speaks to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/explore?category=${encodeURIComponent(cat.id)}`)}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-soft hover:shadow-card cursor-pointer border border-forest-800/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-black/20" />

                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-gold-400 group-hover:text-forest-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs text-gold-300 font-medium block mb-1">
                    {cat.kannada}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-cream-200 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="text-[11px] font-semibold text-gold-400 mt-2 flex items-center gap-1">
                    <span>Popular: {cat.examples}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

