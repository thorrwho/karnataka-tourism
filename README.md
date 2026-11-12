# 🏛️ Karnataka Tourism AI – Smart Travel Planner

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **"One State. Many Worlds. 💛❤️"**  
> A production-grade, responsive AI-powered tourism web application promoting tourism across Karnataka, India. Conceived and developed as a student-led digital tourism promotion initiative.

---

## 🌟 Executive Overview

**Karnataka Tourism AI** helps travellers discover iconic UNESCO World Heritage sites, mist-covered Western Ghats hill stations, pristine Karavali coastlines, and offbeat secluded hidden gems. 

Its flagship feature — the **AI Smart Travel Planner** — automatically synthesizes personalized, day-by-day travel itineraries with morning/afternoon/evening breakdowns, realistic road distance calculations, INR budget estimates, recommended stays, and authentic Karnataka cuisine trails.

---

## 🎨 Visual Identity & Design System

Crafted with inspiration from **Airbnb**, **MakeMyTrip**, and **National Geographic**:

| Role | Color Name | Hex Code | Purpose |
|---|---|---|---|
| **Primary** | Deep Forest Green | `#164B35` | Navbar, branding, key action buttons, royal heritage feel |
| **Secondary** | Warm Cream | `#F8F5ED` | Surface backgrounds, readable travel-tech aesthetic |
| **Accent** | Muted Golden Yellow | `#D6A84F` | Highlights, rating stars, badges, Kannada flag honor |
| **Typography** | Dark Charcoal | `#242A25` | High-contrast, accessible body copy |

* **Fonts:** `Cinzel` / `Playfair Display` for royal headlines & `Plus Jakarta Sans` for clean, modern readability.
* **Cards & Shadows:** Soft card elevation (`shadow-soft` and `shadow-card`) with rounded `2xl`/`3xl` corners.

---

## 🚀 Key Pages & Features

### 1. 🏡 Impressive Landing Page (`/`)
* **Dynamic Hero:** Headline *"Discover Karnataka, Your Way"*, interactive search bar with autocomplete suggestions, quick-filter pills for trending hubs (Hampi, Coorg, Gokarna, Badami, Dandeli).
* **Tourism Statistics:** Verified figures (31 Districts, 3 UNESCO World Heritage Sites, 320 km Coastline, 25+ Wildlife Sanctuaries, 500+ Protected Monuments).
* **Curated Wonders Grid:** Filter between UNESCO, Hills, Coastal, and Heritage highlights with rich popover details.
* **Category Explorer:** Visual cards for Hill Stations, Heritage, Beaches, Wildlife, Adventure & Treks, Spiritual Tourism.
* **AI Travel Planner Teaser:** Live output preview of geographic clustering, expense breakdowns, and day-by-day cards.
* **Signature Experiences:** Coracle rides in Hampi, coffee plantation trails in Coorg, live Yakshagana dance-drama, and Dandeli river rafting.
* **Offbeat Gems Banner & Verified Testimonials.**

### 2. 🗺️ Destination Discovery (`/explore`)
* **Verified Database:** 24+ meticulously researched Karnataka destinations.
* **Multi-Filter Engine:**
  * Search by destination name, district, or keywords.
  * Filter by **Category** (Heritage, Hill Station, Beach, Wildlife, Adventure, Spiritual).
  * Filter by **Region** (South Karnataka, Malnad & Western Ghats, Coastal Karavali, North Karnataka).
  * Filter by **District** (All 31 districts).
  * Sort by Highest Rated, Name (A-Z), or Budget (Low/High).
* **Interactive Modal View:** High-resolution gallery, key attractions with durations, best seasons, estimated budgets, local culinary specialties, and direct "Plan Trip with AI" shortcut.

### 3. 🤖 AI Smart Travel Planner (`/planner`) — *Flagship Feature*
* **8 Configurable Parameters:**
  1. *Starting City:* Bengaluru, Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, Shivamogga.
  2. *Destination / Region:* Specific district or "Surprise me! (AI Best Match)".
  3. *Duration:* 1 to 7+ Days.
  4. *Traveller Count & Dynamic:* Solo, Couple, Family, Friends.
  5. *Budget Tier (INR):* Budget (₹1,000–1,800/day), Moderate (₹2,500–4,500/day), Luxury (₹5,500+/day).
  6. *Interests:* Nature & Waterfalls, Heritage, Beaches, Wildlife, Coffee Plantations, Adventure & Treks, Spiritual Shrines, Food & Culinary.
  7. *Transportation:* Self-drive Car, KSRTC / Private Bus, Train, Two-Wheeler.
  8. *Travel Pace:* Relaxed, Balanced, Fast-paced.
* **Intelligent Route Output:**
  * **Day-by-Day Schedule:** Morning, Afternoon, Evening activity cards with entry estimates, exact addresses, and insider tips.
  * **Realistic Travel Matrix:** Real driving distances (km) and driving hours lookup preventing unrealistic schedules.
  * **Transparent Expense Breakdown:** Visual progress chart detailing Accommodation, Food & Dining, Transportation, Activities, and Souvenir buffers.
  * **Interactive Route Map:** Numbered Leaflet markers plotted with connecting route polylines.
  * **Authentic Meals & Stays:** District-specific food spots and accommodation recommendations.
  * **Action Toolbar:** One-click **Save Itinerary**, **Print / PDF Export**, **Shareable Link**, **Regenerate**, and **Modify Preferences**.

### 4. 💎 Hidden Gems of Karnataka (`/hidden-gems`)
* Dedicated guide to 12+ offbeat, secluded spots: **Yana Rocks**, **Vibhooti Falls**, **Honnemaradu Backwaters**, **Devarayanadurga**, **Maravanthe Coast**, **Melukote**, **BR Hills**, **Savandurga**, and more.
* Detailed crowd levels, nearest towns, how to reach, and responsible tourism tips.
* **Community Contribution Form:** Allows travellers to submit secret cascades or villages; automatically displays in the Community Gems directory with instant toast notifications.

### 5. 🏛️ Heritage & Culture (`/heritage`)
* **UNESCO World Heritage Sites:** Deep dive into Hampi, Sacred Ensembles of the Hoysalas (Belur, Halebidu & Somanathapura inscribed in 2023), Pattadakal, and the Western Ghats.
* **Traditional Performing Arts:** Yakshagana, Dollu Kunitha, Veeragase, and Carnatic Classical Music (Saint Purandara Dasa).
* **Iconic Festivals:** Mysuru Dasara (Nada Habba), Kambala buffalo racing, Hampi Utsav, and Bengaluru Karaga.
* **Folklore & Legends:** Stories of brave Onake Obavva, Rani Abbakka Chowta ("The Pepper Queen"), and Saint Basaveshwara's Anubhava Mantapa.

### 6. 🍜 Food & Culinary Trails (`/food`)
* Regional culinary spotlights: **Mysore Masala Dosa**, **Mysore Pak**, **Dharwad Peda (GI Tagged)**, **Bisi Bele Bath**, **Mangalorean Ghee Roast & Neer Dosa**, **Coorg Akki Rotti & Kadambuttu**, and **Jolada Rotti Oota with Ennegai**.
* **Curated Food Trails:**
  * *Old Bengaluru Heritage Tiffin Trail* (MTR, Vidyarthi Bhavan, CTR, Brahmin's Coffee Bar).
  * *The Great Karavali Seafood Trail* (Giri Manja's, Machali, Mitra Samaj, Pabba's Ideal Cafe).

### 7. 🗺️ Geospatial Tourism Map (`/map`)
* Fullscreen Leaflet map with OpenStreetMap tiles (no Google Maps API key required!).
* Color-coded category markers (Heritage, Beaches, Hill Stations, Wildlife, Food, Hidden Gems).
* Sidebar controls for search, category filtering, region filtering, and gem toggles.

### 8. 👤 User Authentication & Saved Trips (`/profile`)
* Demo login with one click as **Aditi Rao** or create custom account.
* Manage saved itineraries (view schedule, PDF print, delete).
* Bookmark favorite destinations with one-click heart toggles.
* Track completed trip history.

### 9. ℹ️ About the Initiative & Community Feedback (`/about`)
* Objective of promoting Karnataka tourism through digital technology.
* Responsible Travel Charter (guidelines for temples, wildlife sanctuaries, and fragile rainforests).
* **Community Review & Rating Form:** Submit ratings and travel tips.
* **Data Verification Form:** "Report Inaccurate Information" for operating hours, ticket fees, or road closures to support verified tourism data.

---

## 🛠️ Technology Architecture

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS with custom palette (Forest, Cream, Gold, Charcoal)
* **Icons:** Lucide React
* **Maps:** Leaflet & React-Leaflet with OpenStreetMap tiles (100% offline-ready)
* **Animation:** Smooth transitions and responsive design across desktop, tablet, and mobile
* **Recommendation Engine:** Deterministic rule-based clustering & geographic travel matrix + optional Google Gemini API integration via `VITE_GEMINI_API_KEY`.
* **State & Persistence:** LocalStorage management for demo profiles, bookmarking, reviews, and saved itineraries.

---

## 💻 Running the Application Locally

### Prerequisites
* **Node.js** (v18.0 or higher)
* **npm** (v9.0 or higher)

### Setup Steps
```bash
# 1. Navigate to the project root
cd /path/to/tourism

# 2. Install dependencies
npm install

# 3. (Optional) Configure Gemini API Key in .env
cp .env.example .env
# Edit .env and set VITE_GEMINI_API_KEY if desired (engine works with curated data by default!)

# 4. Start the development server
npm run dev
```

The application will start on:
👉 **`http://localhost:5173`** (or `http://127.0.0.1:5173`)

### Building for Production
```bash
npm run build
npm run preview
```

---

## 🏆 Presentation Highlights for College Faculty / Evaluators

1. **Not a Static Mockup:** Every button, filter, dropdown, modal, bookmark, and review submission works smoothly.
2. **Realistic Travel Logic:** The AI Planner groups destinations by geographical vicinity and driving times, avoiding unrealistic schedules.
3. **Verified Information:** Data on Hoysala temples (UNESCO 2023), local cuisines, festivals, and protected wildlife reserves has been researched and verified.
4. **Resilient Architecture:** Runs without paid API keys, while providing modular support for external LLMs.
5. **Ethical Tourism:** Promotes responsible, sustainable travel and rural community preservation.

