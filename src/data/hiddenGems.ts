export interface HiddenGem {
  id: string;
  name: string;
  kannadaName?: string;
  category: 'Waterfall' | 'Scenic Village' | 'Nature' | 'Heritage' | 'Culture';
  district: string;
  nearestTown: string;
  coordinates: { lat: number; lng: number };
  image: string;
  tagline: string;
  description: string;
  suggestedActivities: string[];
  bestTimeToVisit: string;
  howToReach: string;
  responsibleTourismTips: string[];
  crowdLevel: 'Low' | 'Very Low' | 'Moderate';
}

export const HIDDEN_GEMS: HiddenGem[] = [
  {
    id: 'yana-rocks',
    name: 'Yana Rocks',
    kannadaName: 'ಯಾಣ',
    category: 'Nature',
    district: 'Uttara Kannada',
    nearestTown: 'Sirsi / Kumta (28 km)',
    coordinates: { lat: 14.5913, lng: 74.5614 },
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Gigantic Karst Monoliths in Sahyadri Rainforest',
    description: 'Towering like natural Gothic cathedrals in the dense moist evergreen forests of the Western Ghats, Yana features two massive crystalline limestone monoliths: Bhairaveshwara Shikhara (120 meters tall) and Mohini Shikhara (90 meters tall). A naturally formed cave passage houses a self-manifested Shiva Linga bathed in dripping spring waters.',
    suggestedActivities: ['Forest canopy hike', 'Spiritual exploration of the cave sanctum', 'Birdwatching for Malabar grey hornbills', 'Landscape photography'],
    bestTimeToVisit: 'October to March (pleasant forest canopy; avoid heavy monsoon downpours)',
    howToReach: 'Drive 28 km from Kumta or 40 km from Sirsi; a scenic 1.5 km stone trail leads through the forest canopy to the rock base.',
    responsibleTourismTips: [
      'The area is an ecologically sensitive bat and beehive habitat — refrain from shouting or creating loud echoes inside the caves.',
      'Single-use plastics are banned; carry reusable water containers and bring all waste back to the main entrance.'
    ],
    crowdLevel: 'Very Low'
  },
  {
    id: 'vibhooti-falls',
    name: 'Vibhooti Falls',
    kannadaName: 'ವಿಭೂತಿ ಜಲಪಾತ',
    category: 'Waterfall',
    district: 'Uttara Kannada',
    nearestTown: 'Ankola / Kumta (42 km)',
    coordinates: { lat: 14.5422, lng: 74.6293 },
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Emerald Pool Hidden in Deep Western Ghats',
    description: 'Vibhooti (meaning sacred ash) gets its name from the limestone rock formations near Yana through which the crystal-clear jungle stream flows. Cascading down multi-tiered rock shelves into a tranquil emerald-green natural pool, it remains pristine and uncrowded compared to commercial waterfalls.',
    suggestedActivities: ['Swimming in shallow forest pools', 'Trekking through bamboo groves', 'Nature photography', 'Forest soundscape meditation'],
    bestTimeToVisit: 'September to February (crystal clear waters and moderate flow)',
    howToReach: 'Located near Mabagi village off the Kumta-Sirsi road; a serene 1 km nature path through areca nut plantations and forest leads to the fall.',
    responsibleTourismTips: [
      'Do not use chemical shampoos, soaps, or sunscreen directly in the freshwater stream as it supports endemic fish and tadpoles.',
      'Swim only in designated shallow sections; underwater currents can vary near the main cascade pool.'
    ],
    crowdLevel: 'Low'
  },
  {
    id: 'honnemaradu',
    name: 'Honnemaradu Backwaters',
    kannadaName: 'ಹೊನ್ನೇಮರಡು',
    category: 'Nature',
    district: 'Shivamogga',
    nearestTown: 'Sagara (25 km) / Talguppa (12 km)',
    coordinates: { lat: 14.1956, lng: 74.8711 },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Golden Sand Island in Sharavathi Reservoir',
    description: 'Honnemaradu ("Place of the Golden Sand") is a serene eco-haven nestled on the edge of the sprawling Linganamakki reservoir on the Sharavathi River. The area is famous for zero-motor water sports, silent coracle paddles, camping under star-studded skies on uninhabited islands, and birdwatching.',
    suggestedActivities: ['Canoeing and open water kayaking', 'Island coracle paddling', 'Stargazing without light pollution', 'Birdwatching for kingfishers and cormorants'],
    bestTimeToVisit: 'October to April (calm reservoir waters and clear night skies)',
    howToReach: 'Take a train or bus to Talguppa or Sagara; a scenic forest dirt track leads to Honnemaradu village.',
    responsibleTourismTips: [
      'Strict eco-code observed: no motorized boats, campfires strictly controlled, and no amplified music.',
      'Always wear personal flotation life jackets even if you are a proficient swimmer in reservoir waters.'
    ],
    crowdLevel: 'Very Low'
  },
  {
    id: 'devarayanadurga',
    name: 'Devarayanadurga & Namada Chilume',
    kannadaName: 'ದೇವರಾಯನದುರ್ಗ',
    category: 'Heritage',
    district: 'Tumakuru',
    nearestTown: 'Tumakuru (18 km) / Bengaluru (70 km)',
    coordinates: { lat: 13.3736, lng: 77.2117 },
    image: 'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Sacred Hill Forest & Natural Spring Sanctuary',
    description: 'A rocky hill fortress nestled within a dry deciduous reserve forest at 3,940 feet, Devarayanadurga features two historic Hoysala and Chola shrines: Bhoga Narasimha at the hill base and Yoga Narasimha perched on the summit. Nearby Namada Chilume is a sacred natural spring that seeps continuously from a cleft in solid granite rock.',
    suggestedActivities: ['Early morning hill stairs climb', 'Forest trail walking', 'Panoramic sunrise viewing', 'Exploring medieval fortified watchtowers'],
    bestTimeToVisit: 'September to February (cool mornings with sweeping cloud vistas)',
    howToReach: 'Convenient 1.5-hour drive from Bengaluru via NH 48 (Tumakuru Road) and Dobbspet.',
    responsibleTourismTips: [
      'Monkeys inhabit the upper hill trail; keep food items concealed inside backpacks and do not feed wild primates.',
      'Honor religious sanctum guidelines by taking off footwear when entering temple premises.'
    ],
    crowdLevel: 'Low'
  },
  {
    id: 'maravanthe-beach',
    name: 'Maravanthe Virgin Coast',
    kannadaName: 'ಮರವಂತೆ',
    category: 'Scenic Village',
    district: 'Udupi',
    nearestTown: 'Kundapura (12 km) / Byndoor (18 km)',
    coordinates: { lat: 13.7058, lng: 74.6468 },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Where the River and the Sea Flow Parallel',
    description: 'One of the most scenic highway stretches in all of Asia, Maravanthe is a slender sandspit where National Highway 66 runs with the turquoise Arabian Sea roaring on one side and the calm, emerald Souparnika River flowing gently on the other, backed by the misty Kodachadri hills in the horizon.',
    suggestedActivities: ['Coastal highway driving and photography', 'Souparnika river boat ride to fishing islets', 'Sunset gazing over the Arabian Sea', 'Sampling local Kundapura ghee roast and seafood'],
    bestTimeToVisit: 'September to March (calm sea conditions and clear visibility)',
    howToReach: 'Located directly on NH 66; 55 km north of Udupi and 100 km from Mangaluru airport.',
    responsibleTourismTips: [
      'Park your vehicle only in designated seaside laybys to avoid impeding highway safety.',
      'Respect local fishing community boats and drying nets along the river bank.'
    ],
    crowdLevel: 'Low'
  },
  {
    id: 'melukote',
    name: 'Melukote Heritage Town',
    kannadaName: 'ಮೇಲುಕೋಟೆ',
    category: 'Culture',
    district: 'Mandya',
    nearestTown: 'Pandavapura (28 km) / Mysuru (50 km)',
    coordinates: { lat: 12.6627, lng: 76.6575 },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Ancient Temple Town of Saint Ramanujacharya',
    description: 'A timeless hilltop heritage town perched on the Yadugiri hills, Melukote is steeped in 1,000 years of Vaishnavite tradition where philosopher Saint Ramanujacharya lived for 12 years. Famed for its towering Yoga Narasimha Temple overlooking vast plains, the ornate stone Kalyani (stepped tank), and authentic temple Puliyogare (tamarind rice).',
    suggestedActivities: ['Ascending the stone steps to Yoga Narasimha Temple', 'Exploring the pillared stepped Kalyani and Raya Gopura', 'Visiting traditional handloom weaver homes', 'Tasting authentic Melukote Puliyogare and Sweet Pongal'],
    bestTimeToVisit: 'October to March (especially during the annual Vairamudi Brahmotsava)',
    howToReach: '50 km north of Mysuru via Pandavapura; easily accessible by road.',
    responsibleTourismTips: [
      'Support hereditary handloom weavers by purchasing GI-tagged Melukote dhotis and sarees directly from artisan workshops.',
      'Maintain serene decorum inside the thousand-year-old temple complex.'
    ],
    crowdLevel: 'Moderate'
  },
  {
    id: 'br-hills',
    name: 'Biligiriranga Hills (BR Hills)',
    kannadaName: 'ಬಿಳಿಗಿರಿರಂಗನ ಬೆಟ್ಟ',
    category: 'Nature',
    district: 'Chamarajanagar',
    nearestTown: 'Chamarajanagar (40 km) / Yelandur (24 km)',
    coordinates: { lat: 11.9961, lng: 77.1389 },
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Where the Eastern and Western Ghats Embrace',
    description: 'A rare ecological bridge where the Western and Eastern Ghats converge, BR Hills is a wildlife sanctuary rising to 5,091 feet. It features unique biodiversity, wild elephants, sloth bears, tigers, and the indigenous Soliga tribe who have coexisted sustainably with the forest for generations.',
    suggestedActivities: ['Forest department wildlife jeep safari', 'Visiting the 500-year-old Biligiri Ranganatha Swamy cliff temple', 'Learning indigenous Soliga honey gathering traditions', 'Nature walks around the giant Dodda Sampige tree'],
    bestTimeToVisit: 'October to May (crisp hill breeze; great animal sightings near watering holes)',
    howToReach: '85 km from Mysuru and 175 km from Bengaluru via Kanakapura or Chamarajanagar.',
    responsibleTourismTips: [
      'Honor tribal privacy; purchase wild forest honey, gooseberry (amla), and non-timber forest produce from Soliga cooperative societies.',
      'Night vehicle driving inside the core tiger reserve is prohibited.'
    ],
    crowdLevel: 'Low'
  },
  {
    id: 'savandurga',
    name: 'Savandurga Monolith',
    kannadaName: 'ಸಾವನದುರ್ಗ',
    category: 'Nature',
    district: 'Ramanagara',
    nearestTown: 'Magadi (12 km) / Bengaluru (60 km)',
    coordinates: { lat: 12.9189, lng: 77.2934 },
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Asia’s Largest Monolithic Granite Rock',
    description: 'Savandurga consists of two prominent hills: Karigudda (the black hill) and Biligudda (the white hill), rising 1,226 meters above sea level. Formed of solid monolithic granite, it is Asia’s largest monolith and features ruins of the medieval hill fort built by Kempegowda and defended by Tipu Sultan.',
    suggestedActivities: ['Challenging bare-rock trek up Biligudda', 'Exploring medieval fort ramparts on the summit', 'Birdwatching for the endangered yellow-throated bulbul', 'Visiting the historic Sri Savandi Veerabhadraswamy Temple at base'],
    bestTimeToVisit: 'September to February (start climb at 6:00 AM to avoid midday sun on the granite surface)',
    howToReach: '60 km west of Bengaluru via Magadi Road; about 1.5 hours by car or bike.',
    responsibleTourismTips: [
      'Never attempt climbing during or immediately after rain as the bare granite slope becomes extremely slippery.',
      'Carry at least 2 liters of water and wear shoes with exceptional rubber friction.'
    ],
    crowdLevel: 'Low'
  }
];

