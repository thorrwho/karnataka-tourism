import { GeneratedItinerary } from './itinerary';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedDate: string;
  savedItineraries: GeneratedItinerary[];
  favoriteDestinationIds: string[];
  tripHistory: {
    destinationId: string;
    visitDate: string;
    notes?: string;
  }[];
}

export interface ReviewItem {
  id: string;
  destinationId: string;
  destinationName: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  travelType: string;
  date: string;
  helpfulCount: number;
}

export interface HiddenGemSubmission {
  id: string;
  name: string;
  district: string;
  nearestTown: string;
  description: string;
  highlights: string;
  bestTimeToVisit: string;
  responsibleTips: string;
  submittedBy: string;
  submittedAt: string;
  status: 'approved' | 'pending';
}

export interface InaccurateInfoReport {
  id: string;
  destinationName: string;
  category: 'timing' | 'pricing' | 'location' | 'closure' | 'other';
  description: string;
  reportedBy: string;
  reportedAt: string;
}

