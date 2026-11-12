import { UserProfile, ReviewItem, HiddenGemSubmission, InaccurateInfoReport } from '../types/user';
import { GeneratedItinerary } from '../types/itinerary';

const USER_KEY = 'karnataka_tourism_user';
const REVIEWS_KEY = 'karnataka_tourism_reviews';
const GEMS_SUBMISSIONS_KEY = 'karnataka_tourism_gems_submissions';
const REPORTS_KEY = 'karnataka_tourism_reports';

// Default initial demo user
const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  name: 'Aditi Rao',
  email: 'aditi.travels@karnataka-tourism.org',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  joinedDate: 'Joined Oct 2024',
  savedItineraries: [],
  favoriteDestinationIds: ['hampi', 'coorg', 'mysuru', 'gokarna'],
  tripHistory: [
    { destinationId: 'mysuru', visitDate: 'September 2024', notes: 'Spectacular lighting at Mysore Palace.' },
    { destinationId: 'chikkamagaluru', visitDate: 'August 2024', notes: 'Misty sunrise hike up Mullayanagiri.' }
  ]
};

// Initial pre-seeded reviews
const SEED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    destinationId: 'hampi',
    destinationName: 'Hampi',
    userName: 'Karthik Shenoy',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Exploring Vijaya Vittala temple at sunrise was surreal! The musical pillars actually resonate. Definitely hire a bicycle to ride across the ruins.',
    travelType: 'Solo',
    date: '3 days ago',
    helpfulCount: 42
  },
  {
    id: 'rev-2',
    destinationId: 'coorg',
    destinationName: 'Coorg (Kodagu)',
    userName: 'Priya & Vikram',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The coffee estate homestay was the highlight of our vacation. Fresh filter kaapi every morning with hot akki rotti and waking up to bird calls in the Brahmagiri valley.',
    travelType: 'Couple',
    date: '1 week ago',
    helpfulCount: 29
  },
  {
    id: 'rev-3',
    destinationId: 'belur-halebidu',
    destinationName: 'Belur & Halebidu',
    userName: 'Dr. Ramesh Kulkarni',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The UNESCO inscription is so well deserved. The Madanika bracket figures in Belur defy belief — soapstone carved so delicately you can see beads and individual fingernails.',
    travelType: 'Family',
    date: '2 weeks ago',
    helpfulCount: 35
  },
  {
    id: 'rev-4',
    destinationId: 'gokarna',
    destinationName: 'Gokarna',
    userName: 'Maya Fernandez',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    comment: 'The cliff trek between Kudle and Om beach was breathtaking. Make sure to visit Mirjan Fort on your way back; it looks straight out of an adventure movie.',
    travelType: 'Friends',
    date: '3 weeks ago',
    helpfulCount: 18
  }
];

export const storageService = {
  // User Profile
  getUser(): UserProfile {
    try {
      const data = localStorage.getItem(USER_KEY);
      if (!data) {
        localStorage.setItem(USER_KEY, JSON.stringify(DEFAULT_USER));
        return DEFAULT_USER;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_USER;
    }
  },

  saveUser(user: UserProfile): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  // Favourites
  toggleFavorite(destinationId: string): boolean {
    const user = this.getUser();
    const index = user.favoriteDestinationIds.indexOf(destinationId);
    let isFav = false;
    if (index > -1) {
      user.favoriteDestinationIds.splice(index, 1);
      isFav = false;
    } else {
      user.favoriteDestinationIds.push(destinationId);
      isFav = true;
    }
    this.saveUser(user);
    return isFav;
  },

  isFavorite(destinationId: string): boolean {
    const user = this.getUser();
    return user.favoriteDestinationIds.includes(destinationId);
  },

  // Saved Itineraries
  saveItinerary(itinerary: GeneratedItinerary): void {
    const user = this.getUser();
    const existingIndex = user.savedItineraries.findIndex(i => i.id === itinerary.id);
    if (existingIndex >= 0) {
      user.savedItineraries[existingIndex] = itinerary;
    } else {
      user.savedItineraries.unshift(itinerary);
    }
    this.saveUser(user);
  },

  deleteItinerary(id: string): void {
    const user = this.getUser();
    user.savedItineraries = user.savedItineraries.filter(i => i.id !== id);
    this.saveUser(user);
  },

  // Reviews
  getReviews(): ReviewItem[] {
    try {
      const data = localStorage.getItem(REVIEWS_KEY);
      if (!data) {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(SEED_REVIEWS));
        return SEED_REVIEWS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_REVIEWS;
    }
  },

  addReview(review: Omit<ReviewItem, 'id' | 'date' | 'helpfulCount'>): ReviewItem {
    const reviews = this.getReviews();
    const newRev: ReviewItem = {
      ...review,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      helpfulCount: 0
    };
    reviews.unshift(newRev);
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
    return newRev;
  },

  upvoteReview(id: string): void {
    const reviews = this.getReviews();
    const r = reviews.find(item => item.id === id);
    if (r) {
      r.helpfulCount += 1;
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
    }
  },

  // Hidden Gem Community Submissions
  getGemSubmissions(): HiddenGemSubmission[] {
    try {
      const data = localStorage.getItem(GEMS_SUBMISSIONS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  submitHiddenGem(gem: Omit<HiddenGemSubmission, 'id' | 'submittedAt' | 'status'>): HiddenGemSubmission {
    const gems = this.getGemSubmissions();
    const newGem: HiddenGemSubmission = {
      ...gem,
      id: `gem-sub-${Date.now()}`,
      submittedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'approved' // auto approved for demo
    };
    gems.unshift(newGem);
    localStorage.setItem(GEMS_SUBMISSIONS_KEY, JSON.stringify(gems));
    return newGem;
  },

  // Reports
  submitReport(report: Omit<InaccurateInfoReport, 'id' | 'reportedAt'>): void {
    const reports = this.getReports();
    reports.unshift({
      ...report,
      id: `rep-${Date.now()}`,
      reportedAt: new Date().toISOString()
    });
    localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
  },

  getReports(): InaccurateInfoReport[] {
    try {
      const data = localStorage.getItem(REPORTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
};

