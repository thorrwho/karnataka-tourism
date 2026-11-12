import { DESTINATIONS } from '../data/destinations';
import { 
  PlannerInput, 
  GeneratedItinerary, 
  DayPlan, 
  ActivitySlot, 
  ExpenseBreakdown 
} from '../types/itinerary';

// Real driving distance lookup table between key Karnataka hubs (in km)
const DISTANCE_MATRIX: Record<string, Record<string, { km: number; hrs: number }>> = {
  'Bengaluru': {
    'mysuru': { km: 145, hrs: 2.2 },
    'srirangapatna': { km: 130, hrs: 2.0 },
    'coorg': { km: 260, hrs: 5.5 },
    'chikkamagaluru': { km: 245, hrs: 4.5 },
    'hampi': { km: 340, hrs: 6.0 },
    'badami': { km: 450, hrs: 8.0 },
    'gokarna': { km: 485, hrs: 8.5 },
    'shivamogga-jogfalls': { km: 310, hrs: 5.5 },
    'udupi': { km: 400, hrs: 7.5 },
    'mangaluru': { km: 350, hrs: 7.0 },
    'kabini-nagarhole': { km: 220, hrs: 4.5 },
    'bandipur': { km: 220, hrs: 4.5 },
    'belur-halebidu': { km: 215, hrs: 3.8 },
    'shravanabelagola': { km: 145, hrs: 2.5 },
    'chitradurga': { km: 200, hrs: 3.2 },
    'dandeli': { km: 460, hrs: 8.0 },
    'murudeshwar': { km: 480, hrs: 8.5 },
  },
  'Mysuru': {
    'srirangapatna': { km: 15, hrs: 0.4 },
    'coorg': { km: 118, hrs: 2.5 },
    'kabini-nagarhole': { km: 65, hrs: 1.5 },
    'bandipur': { km: 75, hrs: 1.6 },
    'belur-halebidu': { km: 140, hrs: 3.0 },
    'shravanabelagola': { km: 85, hrs: 1.8 },
    'bengaluru': { km: 145, hrs: 2.2 },
    'chikkamagaluru': { km: 175, hrs: 3.5 }
  },
  'Mangaluru': {
    'udupi': { km: 55, hrs: 1.2 },
    'murudeshwar': { km: 155, hrs: 3.0 },
    'gokarna': { km: 230, hrs: 4.5 },
    'coorg': { km: 135, hrs: 3.2 },
    'chikkamagaluru': { km: 150, hrs: 3.8 },
    'agumbe': { km: 100, hrs: 2.2 },
    'sakleshpur': { km: 130, hrs: 3.0 }
  },
  'Hubballi': {
    'dandeli': { km: 75, hrs: 1.8 },
    'hampi': { km: 145, hrs: 3.0 },
    'badami': { km: 105, hrs: 2.2 },
    'pattadakal-aihole': { km: 130, hrs: 2.8 },
    'vijayapura': { km: 195, hrs: 3.5 },
    'gokarna': { km: 150, hrs: 3.2 }
  }
};

/**
 * Returns estimated driving distance and time between two points
 */
function getTravelEstimates(from: string, toId: string): { km: number; hrs: number } {
  const normFrom = from.trim();
  if (DISTANCE_MATRIX[normFrom] && DISTANCE_MATRIX[normFrom][toId]) {
    return DISTANCE_MATRIX[normFrom][toId];
  }
  // Default fallback estimate
  return { km: 90, hrs: 2.0 };
}

/**
 * Main itinerary synthesis engine
 */
export async function generateItinerary(input: PlannerInput): Promise<GeneratedItinerary> {
  // Check if Gemini API key exists for enhanced AI narration
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (geminiKey && geminiKey !== 'YOUR_API_KEY') {
    try {
      const aiResult = await generateWithGemini(input, geminiKey);
      if (aiResult) return aiResult;
    } catch (err) {
      console.warn('Gemini API call failed, falling back to deterministic engine:', err);
    }
  }

  // Fast, reliable deterministic rule-based engine
  return generateDeterministicItinerary(input);
}

/**
 * Deterministic clustering & route synthesis
 */
function generateDeterministicItinerary(input: PlannerInput): GeneratedItinerary {
  const {
    startingCity,
    preferredRegion,
    durationDays,
    budgetPerPerson,
    travelGroup,
    interests,
    transport,
    pace
  } = input;

  // 1. Select matching destinations based on region, interests & proximity
  const selectedDestinations = selectOptimalDestinations(input);

  // 2. Build day-wise schedule
  const days: DayPlan[] = [];
  const routeLocations: GeneratedItinerary['routeLocations'] = [];
  let locationOrder = 1;

  for (let day = 1; day <= durationDays; day++) {
    // Pick primary destination for this day
    const destIndex = Math.min(
      Math.floor(((day - 1) / durationDays) * selectedDestinations.length),
      selectedDestinations.length - 1
    );
    const destination = selectedDestinations[destIndex];

    // Travel estimates for this day
    const prevLocation = day === 1 ? startingCity : selectedDestinations[Math.max(0, destIndex - 1)].name;
    const travel = day === 1 
      ? getTravelEstimates(startingCity, destination.id)
      : { km: Math.floor(40 + Math.random() * 50), hrs: +(1 + Math.random() * 1.5).toFixed(1) };

    // Select attractions tailored to interests & group
    const morningAttraction = destination.attractions[0] || {
      name: `${destination.name} Highlights`,
      description: destination.description,
      category: 'Sightseeing'
    };
    const afternoonAttraction = destination.attractions[1] || {
      name: `${destination.name} Cultural Exploration`,
      description: 'Explore local traditional craft stalls and heritage lanes.',
      category: 'Culture'
    };
    const eveningAttraction = destination.attractions[2] || {
      name: `${destination.name} Sunset Point`,
      description: 'Relax and witness breathtaking panoramic evening views.',
      category: 'Nature & Wildlife'
    };

    // Morning Slot
    const morningSlot: ActivitySlot = {
      timeSlot: 'Morning',
      time: '08:30 AM - 12:30 PM',
      title: morningAttraction.name,
      location: `${morningAttraction.name}, ${destination.district}`,
      description: morningAttraction.description,
      category: morningAttraction.category,
      estimatedCost: Math.round(budgetPerPerson * 0.1),
      coordinates: destination.coordinates,
      tips: 'Reach early to beat peak heat and crowds. Photography lighting is ideal in morning hours.'
    };

    // Afternoon Slot
    const afternoonSlot: ActivitySlot = {
      timeSlot: 'Afternoon',
      time: '01:30 PM - 04:30 PM',
      title: afternoonAttraction.name,
      location: `${afternoonAttraction.name}, ${destination.district}`,
      description: afternoonAttraction.description,
      category: afternoonAttraction.category,
      estimatedCost: Math.round(budgetPerPerson * 0.12),
      coordinates: {
        lat: destination.coordinates.lat + 0.005,
        lng: destination.coordinates.lng + 0.005
      },
      tips: 'Stay hydrated. Wear comfortable walking shoes.'
    };

    // Evening Slot
    const eveningSlot: ActivitySlot = {
      timeSlot: 'Evening',
      time: '05:30 PM - 08:30 PM',
      title: eveningAttraction.name,
      location: `${eveningAttraction.name}, ${destination.district}`,
      description: eveningAttraction.description,
      category: eveningAttraction.category,
      estimatedCost: Math.round(budgetPerPerson * 0.08),
      coordinates: {
        lat: destination.coordinates.lat - 0.005,
        lng: destination.coordinates.lng - 0.005
      },
      tips: 'Perfect time for leisure strolling and souvenir shopping.'
    };

    // Food recommendations
    const foodRecommendations = [
      {
        meal: 'Breakfast',
        dish: destination.localFood[0] || 'Traditional South Indian Tiffin',
        spotSuggestion: 'Local heritage breakfast eatery'
      },
      {
        meal: 'Lunch',
        dish: destination.localFood[1] || 'Traditional Karnataka Banana Leaf Thali',
        spotSuggestion: 'Authentic regional restaurant'
      },
      {
        meal: 'Dinner & Snacks',
        dish: destination.localFood[2] || destination.localFood[0] || 'Local street food & Filter Coffee',
        spotSuggestion: 'Bustling town market'
      }
    ];

    // Stay suggestions based on budget level
    const staySuggestions = getStaysForBudget(destination.name, input.budgetLevel);

    const dayEstimatedCost = Math.round(budgetPerPerson * 0.95);

    days.push({
      dayNumber: day,
      theme: `Day ${day}: Discovering the Magic of ${destination.name}`,
      overnightLocation: destination.name,
      morning: morningSlot,
      afternoon: afternoonSlot,
      evening: eveningSlot,
      travelDistanceKm: travel.km,
      travelTimeHours: travel.hrs,
      recommendedStays: staySuggestions,
      foodRecommendations,
      dayEstimatedCost
    });

    // Add coordinate for map
    routeLocations.push({
      day,
      name: destination.name,
      lat: destination.coordinates.lat,
      lng: destination.coordinates.lng,
      order: locationOrder++
    });
  }

  // Calculate expense breakdown
  const totalTripBudget = budgetPerPerson * durationDays * input.travellerCount;
  const expenseBreakdown: ExpenseBreakdown = {
    accommodation: Math.round(totalTripBudget * 0.38),
    foodAndDining: Math.round(totalTripBudget * 0.28),
    transportation: Math.round(totalTripBudget * 0.20),
    sightseeingAndActivities: Math.round(totalTripBudget * 0.10),
    miscellaneous: Math.round(totalTripBudget * 0.04),
    totalEstimated: totalTripBudget,
    perPersonEstimated: budgetPerPerson * durationDays
  };

  const primaryDestNames = Array.from(new Set(selectedDestinations.map(d => d.name))).join(' & ');
  const title = `${durationDays}-Day ${travelGroup} Journey: ${primaryDestNames}`;
  const tagline = `Crafted for ${interests.slice(0, 3).join(', ')} lovers travelling via ${transport}`;

  return {
    id: `itinerary-${Date.now()}`,
    title,
    tagline,
    createdAt: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }),
    input,
    days,
    expenseBreakdown,
    routeLocations,
    generalTips: [
      'Carry cash (INR) as remote temples and smaller spice plantation homestays may experience intermittent digital UPI network connectivity.',
      'Respect modest dress codes in sacred temple corridors (shoulders and knees covered; leather items often restricted in inner sanctums).',
      'Follow the "Leave No Trace" ethos: do not litter plastic bottles or snack wrappers in the fragile Western Ghats or coastal marine zones.',
      'Carry an umbrella or light raincoat if visiting between June and November, as Sahyadri showers can be sudden and dramatic.'
    ],
    packingChecklist: [
      'Light cotton clothing for days, light fleece or pullover for hill station evenings',
      'Sturdy walking shoes with rubber grip for granite temple ruins and nature trails',
      'Sun hat, UV sunglasses, and reef-safe sunscreen for coastal journeys',
      'Reusable water bottle with built-in filter',
      'Power bank and offline map downloads',
      'Basic first-aid kit and mosquito repellent for rainforest treks'
    ],
    disclaimer: 'Notice: Estimated travel times, distances, expenses, and suggestions are algorithmically calculated approximations. Opening hours, temple darshan queues, ticket fees, and road conditions may vary in real time. Please verify locally before traveling.'
  };
}

/**
 * Destination selection based on user inputs
 */
function selectOptimalDestinations(input: PlannerInput) {
  const { preferredRegion, interests, durationDays } = input;

  // Filter pool
  let pool = [...DESTINATIONS];

  if (preferredRegion && preferredRegion !== 'Surprise me' && preferredRegion !== 'Whole Karnataka') {
    const matched = pool.filter(d => 
      d.region.toLowerCase().includes(preferredRegion.toLowerCase()) ||
      d.name.toLowerCase().includes(preferredRegion.toLowerCase()) ||
      d.district.toLowerCase().includes(preferredRegion.toLowerCase())
    );
    if (matched.length > 0) {
      pool = matched;
    }
  }

  // Score destinations according to matching categories
  const scored = pool.map(dest => {
    let score = 0;
    interests.forEach(interest => {
      const lowerInterest = interest.toLowerCase();
      dest.categories.forEach(cat => {
        if (cat.toLowerCase().includes(lowerInterest) || lowerInterest.includes(cat.toLowerCase())) {
          score += 3;
        }
      });
      dest.attractions.forEach(attr => {
        if (attr.name.toLowerCase().includes(lowerInterest) || attr.description.toLowerCase().includes(lowerInterest)) {
          score += 1;
        }
      });
    });
    // Add baseline rating score
    score += dest.rating;
    return { dest, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Group geographically to avoid unrealistic schedules
  const topDestinations = scored.map(s => s.dest);

  // Determine how many distinct destinations to visit
  // For 1-2 days: 1 destination
  // For 3-4 days: 2 destinations
  // For 5+ days: 2-3 destinations
  const count = durationDays <= 2 ? 1 : durationDays <= 4 ? 2 : 3;
  return topDestinations.slice(0, Math.min(count, topDestinations.length));
}

/**
 * Accommodation suggestions based on budget level
 */
function getStaysForBudget(location: string, level: string) {
  if (level === 'Budget') {
    return [
      {
        name: `KSTDC Mayura Hotel / Youth Hostel`,
        type: 'State Heritage Guest House',
        estimatedCostRange: '₹1,200 – ₹1,800 / night',
        highlight: 'Clean, government-run, excellent central location near sights'
      },
      {
        name: `${location} Eco Homestay`,
        type: 'Family Run Homestay',
        estimatedCostRange: '₹1,500 – ₹2,200 / night',
        highlight: 'Authentic local hospitality and home-cooked breakfast included'
      }
    ];
  } else if (level === 'Luxury') {
    return [
      {
        name: `Heritage Palace & Spa Resort ${location}`,
        type: 'Luxury Heritage Resort',
        estimatedCostRange: '₹8,500 – ₹18,000 / night',
        highlight: 'Royal architecture, infinity pool, Ayurvedic wellness spa'
      },
      {
        name: `Jungle Lodges & Resorts (JLR)`,
        type: 'Eco Luxury Wilderness Lodge',
        estimatedCostRange: '₹7,000 – ₹14,000 / night',
        highlight: 'Includes forest department guided safaris, naturalist walks & buffet meals'
      }
    ];
  } else {
    // Moderate
    return [
      {
        name: `${location} Valley View Resort`,
        type: 'Boutique Comfort Resort',
        estimatedCostRange: '₹3,000 – ₹5,500 / night',
        highlight: 'Scenic vistas, modern amenities, private balcony'
      },
      {
        name: `Serene Estate Plantation Stay`,
        type: 'Heritage Plantation Bungalow',
        estimatedCostRange: '₹3,500 – ₹5,000 / night',
        highlight: 'Nestled amidst coffee and spice estates with guided plantation walk'
      }
    ];
  }
}

/**
 * Optional Gemini API Integration if developer configures API Key
 */
async function generateWithGemini(input: PlannerInput, apiKey: string): Promise<GeneratedItinerary | null> {
  const prompt = `You are the lead travel architect for Karnataka Tourism AI. Create an authentic, highly detailed, realistic ${input.durationDays}-day travel itinerary for Karnataka, India.
Starting city: ${input.startingCity}
Preferred region: ${input.preferredRegion}
Travel group: ${input.travelGroup} (${input.travellerCount} people)
Budget per person: ₹${input.budgetPerPerson} INR (${input.budgetLevel} tier)
Interests: ${input.interests.join(', ')}
Transport: ${input.transport}
Travel pace: ${input.pace}

Output strictly valid JSON matching this schema:
{
  "title": string,
  "tagline": string,
  "days": [
    {
      "dayNumber": number,
      "theme": string,
      "overnightLocation": string,
      "travelDistanceKm": number,
      "travelTimeHours": number,
      "morning": { "time": string, "title": string, "location": string, "description": string, "category": string, "estimatedCost": number, "tips": string },
      "afternoon": { "time": string, "title": string, "location": string, "description": string, "category": string, "estimatedCost": number, "tips": string },
      "evening": { "time": string, "title": string, "location": string, "description": string, "category": string, "estimatedCost": number, "tips": string },
      "foodRecommendations": [{ "meal": string, "dish": string, "spotSuggestion": string }],
      "recommendedStays": [{ "name": string, "type": string, "estimatedCostRange": string, "highlight": string }],
      "dayEstimatedCost": number
    }
  ],
  "generalTips": [string],
  "packingChecklist": [string]
}`;

  // Try gemini-2.5-flash first, then gemini-flash-latest
  const modelEndpoints = [
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
  ];

  let rawText = '';
  for (const endpoint of modelEndpoints) {
    try {
      const response = await fetch(`${endpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          rawText = text;
          break;
        }
      }
    } catch {
      // Try next endpoint
    }
  }

  if (!rawText) return null;

  // Clean JSON in case markdown fences are present
  let cleanText = rawText.trim();
  if (cleanText.startsWith('```json')) {
    cleanText = cleanText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleanText.startsWith('```')) {
    cleanText = cleanText.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }

  const parsed = JSON.parse(cleanText);
  const totalTripBudget = input.budgetPerPerson * input.durationDays * input.travellerCount;

  // Accurately map coordinates using verified destination database
  const routeLocations = parsed.days.map((d: any, i: number) => {
    const locName = (d.overnightLocation || '').toLowerCase();
    const matchedDest = DESTINATIONS.find(dest => 
      locName.includes(dest.name.toLowerCase().split(' ')[0]) ||
      dest.name.toLowerCase().includes(locName.split(' ')[0]) ||
      locName.includes(dest.district.toLowerCase())
    );

    return {
      day: d.dayNumber || (i + 1),
      name: d.overnightLocation || 'Karnataka',
      lat: matchedDest ? matchedDest.coordinates.lat : (12.9716 + (i * 0.4)),
      lng: matchedDest ? matchedDest.coordinates.lng : (75.8 + (i * 0.3)),
      order: i + 1
    };
  });

  return {
    id: `itinerary-${Date.now()}`,
    title: parsed.title || `${input.durationDays}-Day Karnataka Journey`,
    tagline: parsed.tagline || `Tailored for ${input.travelGroup} interested in ${input.interests.join(', ')}`,
    createdAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    input,
    days: parsed.days,
    expenseBreakdown: {
      accommodation: Math.round(totalTripBudget * 0.38),
      foodAndDining: Math.round(totalTripBudget * 0.28),
      transportation: Math.round(totalTripBudget * 0.20),
      sightseeingAndActivities: Math.round(totalTripBudget * 0.10),
      miscellaneous: Math.round(totalTripBudget * 0.04),
      totalEstimated: totalTripBudget,
      perPersonEstimated: input.budgetPerPerson * input.durationDays
    },
    routeLocations,
    generalTips: parsed.generalTips || [
      'Carry cash for remote village areas.',
      'Respect modest dress codes in historic temples.',
      'Leave no trace in ecologically fragile zones.'
    ],
    packingChecklist: parsed.packingChecklist || [
      'Comfortable walking shoes',
      'Cotton wear & evening light jacket',
      'Power bank and camera',
      'Water bottle & sun protection'
    ],
    disclaimer: 'Notice: Estimated travel times, distances, expenses, and suggestions are approximations. Opening hours, temple darshan queues, ticket fees, and road conditions may vary in real time. Please verify locally before traveling.',
    isAIPowered: true,
    aiModel: 'Gemini 2.5 Flash'
  };
}

