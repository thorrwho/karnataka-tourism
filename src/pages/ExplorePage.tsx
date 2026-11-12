import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';
import { Destination, CategoryType, RegionType } from '../types/destination';
import { DestinationCard } from '../components/common/DestinationCard';
import { DestinationModal } from '../components/common/DestinationModal';
import { 
  Search, 
  Filter, 
  MapPin, 
  Compass, 
  Layers, 
  SlidersHorizontal, 
  X, 
  Sparkles 
} from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Filters State
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'All');
  const [selectedRegion, setSelectedRegion] = useState<string>(searchParams.get('region') || 'All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'budget-low' | 'budget-high'>('rating');

  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) setSelectedCategory(urlCategory);
    const urlSearch = searchParams.get('search');
    if (urlSearch) setSearch(urlSearch);
  }, [searchParams]);

  // Extract unique districts
  const districts = Array.from(new Set(DESTINATIONS.map(d => d.district))).sort();

  const categories: { label: string; value: string }[] = [
    { label: 'All Categories', value: 'All' },
    { label: 'Heritage & UNESCO', value: 'Heritage' },
    { label: 'Hill Stations', value: 'Hill Station' },
    { label: 'Beaches & Coast', value: 'Beach' },
    { label: 'Nature & Wildlife', value: 'Nature & Wildlife' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Spiritual & Sacred', value: 'Spiritual' },
  ];

  const regions: { label: string; value: string }[] = [
    { label: 'All Regions', value: 'All' },
    { label: 'South Karnataka (Old Mysore)', value: 'South Karnataka' },
    { label: 'Malnad & Western Ghats', value: 'Malnad & Western Ghats' },
    { label: 'Coastal Karnataka (Karavali)', value: 'Coastal Karnataka' },
    { label: 'North Karnataka (Deccan)', value: 'North Karnataka' },
  ];

  // Filtering & Sorting logic
  const filtered = DESTINATIONS.filter(dest => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.district.toLowerCase().includes(search.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(search.toLowerCase()) ||
      dest.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || 
      dest.categories.includes(selectedCategory as CategoryType);

    const matchesRegion = 
      selectedRegion === 'All' || 
      dest.region === (selectedRegion as RegionType);

    const matchesDistrict = 
      selectedDistrict === 'All' || 
      dest.district === selectedDistrict;

    return matchesSearch && matchesCategory && matchesRegion && matchesDistrict;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'budget-low') return a.estimatedBudgetPerDay - b.estimatedBudgetPerDay;
    if (sortBy === 'budget-high') return b.estimatedBudgetPerDay - a.estimatedBudgetPerDay;
    return 0;
  });

  const clearAllFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedRegion('All');
    setSelectedDistrict('All');
    setSearchParams({});
  };

  const hasActiveFilters = search !== '' || selectedCategory !== 'All' || selectedRegion !== 'All' || selectedDistrict !== 'All';

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Comprehensive Directory</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-forest-900 tracking-tight">
            Explore Karnataka Destinations
          </h1>
          <p className="text-sm text-charcoal-600 max-w-2xl leading-relaxed">
            Discover iconic ruins, misty Western Ghats viewpoints, sacred temples, and serene coastal shorelines. Filter by district, region, and travel category.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 border border-forest-800/15 shadow-soft space-y-6">
          
          {/* Top Search & Sort Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-forest-700 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by destination name, district, or attraction..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-3 text-charcoal-400 hover:text-charcoal-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-forest-700 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-xs font-semibold text-charcoal-800 focus:outline-none focus:border-forest-800"
              >
                <option value="rating">Sort: Highest Rated</option>
                <option value="name">Sort: Name (A-Z)</option>
                <option value="budget-low">Sort: Budget (Low to High)</option>
                <option value="budget-high">Sort: Budget (High to Low)</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-2 flex items-center justify-between">
              <span>Category</span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-red-600 hover:underline font-bold"
                >
                  Reset All Filters
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-forest-800 text-cream-50 shadow-soft'
                      : 'bg-cream-50 text-charcoal-700 border border-charcoal-200 hover:bg-forest-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Region & District Sub-row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-forest-800/10">
            
            {/* Region */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-forest-700" />
                <span>Geographic Region</span>
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-charcoal-200 bg-cream-50 text-xs font-semibold text-charcoal-800 focus:outline-none focus:border-forest-800"
              >
                {regions.map((reg) => (
                  <option key={reg.value} value={reg.value}>{reg.label}</option>
                ))}
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-forest-700" />
                <span>Filter by District</span>
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-charcoal-200 bg-cream-50 text-xs font-semibold text-charcoal-800 focus:outline-none focus:border-forest-800"
              >
                <option value="All">All 31 Districts</option>
                {districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* Results Counter Banner */}
        <div className="flex items-center justify-between text-xs text-charcoal-600">
          <span>
            Showing <strong>{filtered.length}</strong> of {DESTINATIONS.length} curated destinations
          </span>
          {hasActiveFilters && (
            <span className="font-semibold text-forest-800">
              Filtered view active
            </span>
          )}
        </div>

        {/* Destinations Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onViewDetails={(d) => setSelectedDestination(d)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-forest-800/10 shadow-soft max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cream-100 text-charcoal-400 mx-auto flex items-center justify-center">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-forest-900">
              No Matching Destinations Found
            </h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              We couldn't find any destination matching "{search}" with the current filters. Try resetting the district or category filter.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
};

