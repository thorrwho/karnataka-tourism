export type TravelGroupType = 'Solo' | 'Couple' | 'Family' | 'Friends';
export type TransportType = 'Car' | 'Bus' | 'Train' | 'Two-wheeler';
export type BudgetLevel = 'Budget' | 'Moderate' | 'Luxury';
export type TravelPace = 'Relaxed' | 'Balanced' | 'Fast-paced';

export interface PlannerInput {
  startingCity: string;
  preferredRegion: string; // or 'Surprise me'
  durationDays: number;
  startDate?: string;
  travellerCount: number;
  travelGroup: TravelGroupType;
  budgetPerPerson: number; // in INR
  budgetLevel: BudgetLevel;
  interests: string[];
  transport: TransportType;
  pace: TravelPace;
}

export interface ActivitySlot {
  timeSlot: 'Morning' | 'Afternoon' | 'Evening';
  time: string;
  title: string;
  location: string;
  description: string;
  category: string;
  estimatedCost: number; // in INR
  coordinates?: {
    lat: number;
    lng: number;
  };
  tips?: string;
}

export interface DayPlan {
  dayNumber: number;
  date?: string;
  theme: string;
  overnightLocation: string;
  morning: ActivitySlot;
  afternoon: ActivitySlot;
  evening: ActivitySlot;
  travelDistanceKm: number;
  travelTimeHours: number;
  recommendedStays: {
    name: string;
    type: string;
    estimatedCostRange: string;
    highlight: string;
  }[];
  foodRecommendations: {
    meal: string;
    dish: string;
    spotSuggestion: string;
  }[];
  dayEstimatedCost: number;
}

export interface ExpenseBreakdown {
  accommodation: number;
  foodAndDining: number;
  transportation: number;
  sightseeingAndActivities: number;
  miscellaneous: number;
  totalEstimated: number;
  perPersonEstimated: number;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  tagline: string;
  createdAt: string;
  input: PlannerInput;
  days: DayPlan[];
  expenseBreakdown: ExpenseBreakdown;
  routeLocations: {
    day: number;
    name: string;
    lat: number;
    lng: number;
    order: number;
  }[];
  generalTips: string[];
  packingChecklist: string[];
  disclaimer: string;
  isAIPowered?: boolean;
  aiModel?: string;
}

