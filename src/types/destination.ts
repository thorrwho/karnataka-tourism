export type RegionType = 
  | 'South Karnataka' 
  | 'Malnad & Western Ghats' 
  | 'Coastal Karnataka' 
  | 'North Karnataka';

export type CategoryType = 
  | 'Heritage' 
  | 'Hill Station' 
  | 'Beach' 
  | 'Nature & Wildlife' 
  | 'Adventure' 
  | 'Spiritual' 
  | 'Culture';

export interface Attraction {
  name: string;
  description: string;
  category: string;
  durationHours?: number;
  highlight?: string;
}

export interface Destination {
  id: string;
  name: string;
  kannadaName?: string;
  district: string;
  region: RegionType;
  tagline: string;
  description: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  attractions: Attraction[];
  categories: CategoryType[];
  bestTimeToVisit: string;
  estimatedVisitDuration: string;
  estimatedBudgetPerDay: number; // in INR
  localFood: string[];
  travelTips: string[];
  rating: number;
  reviewsCount: number;
  isUNESCO?: boolean;
  isHiddenGem?: boolean;
  nearestAirport?: string;
  nearestRailway?: string;
}

export interface FilterState {
  search: string;
  district: string;
  region: string;
  category: string;
  sortBy: 'rating' | 'name' | 'budget-low' | 'budget-high';
}

