import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { DESTINATIONS } from '../../data/destinations';
import { HIDDEN_GEMS } from '../../data/hiddenGems';
import { Destination } from '../../types/destination';
import { 
  Search, 
  MapPin, 
  Star, 
  Compass, 
  Sparkles, 
  Filter, 
  Layers 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Custom icons based on category
const createCategoryIcon = (category: string, isGem?: boolean) => {
  const bgColor = isGem ? '#BF8E36' : '#164B35';
  const iconEmoji = isGem ? '💎' :
    category === 'Heritage' ? '🏛️' :
    category === 'Hill Station' ? '⛰️' :
    category === 'Beach' ? '🏖️' :
    category === 'Nature & Wildlife' ? '🐅' :
    category === 'Adventure' ? '🛶' :
    category === 'Spiritual' ? '🪔' : '📍';

  return L.divIcon({
    className: 'custom-cat-marker',
    html: `
      <div style="
        background-color: ${bgColor};
        color: white;
        border: 2px solid white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        font-size: 14px;
        cursor: pointer;
      ">
        ${iconEmoji}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
};

interface TourismMapProps {
  onSelectDestination?: (dest: Destination) => void;
}

export const TourismMap: React.FC<TourismMapProps> = ({ onSelectDestination }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [showHiddenGems, setShowHiddenGems] = useState(true);
  const navigate = useNavigate();

  // Karnataka approximate center
  const karnatakaCenter: [number, number] = [14.5, 75.8];

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase()) ||
                          dest.district.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.categories.includes(selectedCategory as any);
    const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  const filteredGems = showHiddenGems ? HIDDEN_GEMS.filter(gem => {
    return gem.name.toLowerCase().includes(search.toLowerCase()) ||
           gem.district.toLowerCase().includes(search.toLowerCase());
  }) : [];

  return (
    <div className="bg-white rounded-3xl border border-forest-800/15 overflow-hidden shadow-card flex flex-col lg:flex-row h-[750px]">
      
      {/* Sidebar Controls */}
      <div className="w-full lg:w-96 bg-cream-50 p-5 border-b lg:border-b-0 lg:border-r border-forest-800/10 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-4">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-forest-800 text-gold-400 text-[11px] font-bold uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Explorer</span>
            </div>
            <h3 className="font-serif font-black text-xl text-forest-900">
              Karnataka Tourism Map
            </h3>
            <p className="text-xs text-charcoal-500">
              Click on pins to explore district attractions, ratings, and travel routes.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-forest-700 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city, town or district..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-white text-charcoal-900 focus:outline-none focus:border-forest-800 shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-600 mb-1.5 flex items-center gap-1">
              <Filter className="w-3 h-3 text-forest-700" />
              <span>Category Filter</span>
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-charcoal-200 bg-white text-xs font-semibold text-charcoal-800 focus:outline-none focus:border-forest-800 shadow-sm"
            >
              <option value="All">All Categories ({DESTINATIONS.length})</option>
              <option value="Heritage">Heritage & UNESCO Sites</option>
              <option value="Hill Station">Hill Stations & Ghats</option>
              <option value="Beach">Coastal Beaches</option>
              <option value="Nature & Wildlife">Nature & Wildlife</option>
              <option value="Adventure">Adventure & Treks</option>
              <option value="Spiritual">Spiritual Tourism</option>
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-600 mb-1.5 flex items-center gap-1">
              <Layers className="w-3 h-3 text-forest-700" />
              <span>Geographic Region</span>
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-charcoal-200 bg-white text-xs font-semibold text-charcoal-800 focus:outline-none focus:border-forest-800 shadow-sm"
            >
              <option value="All">All Karnataka Regions</option>
              <option value="South Karnataka">South Karnataka (Old Mysore)</option>
              <option value="Malnad & Western Ghats">Malnad & Western Ghats</option>
              <option value="Coastal Karnataka">Coastal Karnataka (Karavali)</option>
              <option value="North Karnataka">North Karnataka (Deccan)</option>
            </select>
          </div>

          {/* Toggle Hidden Gems */}
          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-charcoal-700 bg-white p-2.5 rounded-xl border border-charcoal-200 shadow-sm">
              <input
                type="checkbox"
                checked={showHiddenGems}
                onChange={(e) => setShowHiddenGems(e.target.checked)}
                className="w-4 h-4 rounded text-gold-500 focus:ring-gold-400"
              />
              <span>Show Offbeat Hidden Gems (💎)</span>
            </label>
          </div>

          {/* Quick Stats Pill */}
          <div className="text-[11px] text-charcoal-500 bg-white/70 p-2.5 rounded-xl border border-forest-800/10">
            Displaying <strong>{filteredDestinations.length}</strong> destinations {showHiddenGems && `and ${filteredGems.length} hidden gems`} matching your filters.
          </div>

        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-forest-800/10">
          <button
            onClick={() => navigate('/planner')}
            className="w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs flex items-center justify-center gap-2 shadow-soft transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Generate Itinerary for These Stops</span>
          </button>
        </div>

      </div>

      {/* Main Map Container */}
      <div className="flex-1 relative z-10">
        <MapContainer
          center={karnatakaCenter}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Standard Destinations Markers */}
          {filteredDestinations.map((dest) => (
            <Marker
              key={dest.id}
              position={[dest.coordinates.lat, dest.coordinates.lng]}
              icon={createCategoryIcon(dest.categories[0])}
            >
              <Popup className="custom-destination-popup">
                <div className="w-60 p-1">
                  <div className="h-24 w-full rounded-xl overflow-hidden mb-2 relative">
                    <img src={dest.images[0]} alt={dest.name} className="w-full h-full object-cover" />
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-forest-800 text-white">
                      {dest.district}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-forest-900">{dest.name}</h4>
                  <p className="text-[11px] text-charcoal-600 line-clamp-2 my-1 leading-snug">
                    {dest.tagline}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-bold text-forest-800 pt-1 border-t border-charcoal-100">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-gold-500 fill-current" />
                      <span>{dest.rating.toFixed(1)}</span>
                    </div>
                    <span>~₹{dest.estimatedBudgetPerDay}/day</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mt-2">
                    <button
                      onClick={() => onSelectDestination && onSelectDestination(dest)}
                      className="py-1 px-2 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-900 text-[10px] font-bold border border-forest-200 text-center"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => navigate(`/planner?destination=${encodeURIComponent(dest.name)}`)}
                      className="py-1 px-2 rounded-lg bg-forest-800 hover:bg-forest-700 text-white text-[10px] font-bold text-center"
                    >
                      Plan Trip
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Hidden Gems Markers */}
          {filteredGems.map((gem) => (
            <Marker
              key={gem.id}
              position={[gem.coordinates.lat, gem.coordinates.lng]}
              icon={createCategoryIcon(gem.category, true)}
            >
              <Popup>
                <div className="w-56 p-1">
                  <span className="text-[10px] font-bold uppercase text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    💎 Hidden Gem
                  </span>
                  <h4 className="font-serif font-bold text-sm text-forest-900 mt-1">{gem.name}</h4>
                  <p className="text-[11px] text-charcoal-600 line-clamp-2 my-1">{gem.tagline}</p>
                  <div className="text-[10px] text-charcoal-500 font-semibold mb-2">
                    Nearest: {gem.nearestTown}
                  </div>
                  <button
                    onClick={() => navigate('/hidden-gems')}
                    className="w-full py-1 rounded-lg bg-gold-400 hover:bg-gold-300 text-forest-950 text-[10px] font-bold"
                  >
                    View in Hidden Gems Guide
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>

    </div>
  );
};

