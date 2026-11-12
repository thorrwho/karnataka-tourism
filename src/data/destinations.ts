import { Destination } from '../types/destination';

export const DESTINATIONS: Destination[] = [
  {
    id: 'mysuru',
    name: 'Mysuru (Mysore)',
    kannadaName: 'ಮೈಸೂರು',
    district: 'Mysuru',
    region: 'South Karnataka',
    tagline: 'The Cultural Capital & City of Palaces',
    description: 'Mysuru is the cultural epicenter of Karnataka, celebrated for its flamboyant royal heritage, fragrant sandalwood, silk sarees, and majestic palaces. Once the capital of the Kingdom of Mysore, the city retains an aristocratic charm with broad tree-lined boulevards and centuries-old culinary traditions.',
    images: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80', // Mysore Palace
      'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1200&q=80', // Chamundi Hills
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.2958, lng: 76.6394 },
    attractions: [
      { name: 'Mysore Palace (Amba Vilas)', description: 'Indo-Saracenic royal masterpiece with 97,000 bulbs illuminating on Sundays & festivals.', category: 'Heritage', durationHours: 3 },
      { name: 'Chamundi Hills & Sri Chamundeshwari Temple', description: 'Historic hilltop shrine offering panoramic city views and the giant Nandi monolith.', category: 'Spiritual', durationHours: 2 },
      { name: 'Brindavan Gardens', description: 'Terraced musical fountain gardens built across the Krishnarajasagara dam on Cauvery river.', category: 'Culture', durationHours: 2 },
      { name: 'Devaraja Market', description: 'A 130-year-old vibrant heritage bazaar overflowing with flowers, sandalwood, and spices.', category: 'Culture', durationHours: 1.5 },
      { name: 'St. Philomena’s Cathedral', description: 'Neo-Gothic church with 175-foot twin spires inspired by Germany’s Cologne Cathedral.', category: 'Heritage', durationHours: 1 }
    ],
    categories: ['Heritage', 'Culture', 'Spiritual'],
    bestTimeToVisit: 'October to March (especially during Dasara)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2200,
    localFood: ['Mysore Pak (Guru Sweets)', 'Mysore Masala Dosa', 'Mylari Dosa', 'Mysore Filter Coffee'],
    travelTips: [
      'Visit Mysore Palace on Sunday evening (7:00 PM - 7:45 PM) for the world-famous lighting spectacle.',
      'Wear modest attire when visiting Chamundi Temple; morning visits avoid long queues.',
      'Buy authentic Sandalwood and GI-tagged Mysore Silk only from authorized KSIC and government emporiums.'
    ],
    rating: 4.8,
    reviewsCount: 3420,
    isUNESCO: false,
    nearestAirport: 'Mysuru Airport (MYQ) / Kempegowda Intl (BLR, 180 km)',
    nearestRailway: 'Mysuru Junction (MYS)'
  },
  {
    id: 'hampi',
    name: 'Hampi',
    kannadaName: 'ಹಂಪಿ',
    district: 'Vijayanagara',
    region: 'North Karnataka',
    tagline: 'The Forgotten Empire of Vijayanagara',
    description: 'A UNESCO World Heritage site, Hampi is an open-air museum set amid a surreal landscape of giant granite boulders and banana plantations on the banks of the Tungabhadra River. In the 15th century, it was the world’s second-largest city and the seat of the glorious Vijayanagara Empire.',
    images: [
      'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1200&q=80', // Stone Chariot Hampi
      'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1200&q=80', // Virupaksha Temple
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 15.3350, lng: 76.4600 },
    attractions: [
      { name: 'Vijaya Vittala Temple & Stone Chariot', description: 'Iconic shrine featuring musical stone pillars and the iconic stone chariot carved from granite.', category: 'Heritage', durationHours: 2.5 },
      { name: 'Virupaksha Temple', description: 'Ancient 7th-century operational Shiva temple with a 160-foot soaring gopuram on the riverbank.', category: 'Spiritual', durationHours: 2 },
      { name: 'Lotus Mahal & Elephant Stables', description: 'Exquisite Indo-Islamic pavilions inside the Royal Zenana enclosure.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Matanga Hill Sunset', description: 'Highest vantage point in Hampi with breathtaking 360-degree views of ruins and boulder hills.', category: 'Adventure', durationHours: 2 },
      { name: 'Sanapur Lake & Coracle Rides', description: 'Serene boulder-fringed reservoir on Hippie Island with traditional round coracle boat rides.', category: 'Adventure', durationHours: 2 }
    ],
    categories: ['Heritage', 'Adventure', 'Spiritual'],
    bestTimeToVisit: 'November to February (pleasant days and cool nights)',
    estimatedVisitDuration: '3 - 4 Days',
    estimatedBudgetPerDay: 1800,
    localFood: ['South Indian Thali on banana leaf', 'Tungabhadra fish fry', 'Mango lassi', 'Filter Kaapi'],
    travelTips: [
      'Rent a bicycle or electric scooter to explore the vast 4,100-hectare archaeological park.',
      'Wear sturdy walking shoes with grip; Hampi involves significant walking over granite rocks.',
      'Carry hydration and sun protection — temperatures can rise quickly by mid-day.'
    ],
    rating: 4.9,
    reviewsCount: 4180,
    isUNESCO: true,
    nearestAirport: 'Jindal Vidyanagar Airport, Bellary (VDY, 40 km) / Hubballi (HBX, 145 km)',
    nearestRailway: 'Hosapete Junction (HPT, 13 km)'
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    kannadaName: 'ಕೊಡಗು',
    district: 'Kodagu',
    region: 'Malnad & Western Ghats',
    tagline: 'The Scotland of India & Coffee Capital',
    description: 'Perched on the misty slopes of the Western Ghats, Coorg is a verdant paradise renowned for endless emerald coffee plantations, fragrant cardamom valleys, gushing cascades, and the unique martial culture and hospitality of the Kodava people.',
    images: [
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80', // Coorg coffee / misty hills
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', // Abbey falls
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.3375, lng: 75.8069 },
    attractions: [
      { name: 'Abbey & Iruppu Waterfalls', description: 'Thunderous cascades tumbling down through dense spice and coffee estates.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Raja’s Seat, Madikeri', description: 'Historic scenic overlook where Coorg kings watched dramatic sunsets over the Sahyadri mountains.', category: 'Nature & Wildlife', durationHours: 1.5 },
      { name: 'Namdroling Monastery (Golden Temple)', description: 'Bylakuppe Tibetan settlement featuring majestic 40-foot gilded Buddha statues and chants.', category: 'Culture', durationHours: 2 },
      { name: 'Talakaveri & Brahmagiri Peak', description: 'Birthplace of sacred River Cauvery with breathtaking panoramic treks along the ridge.', category: 'Spiritual', durationHours: 3 },
      { name: 'Dubare Elephant Camp', description: 'Riverside conservation sanctuary on the Cauvery where visitors can observe elephants.', category: 'Nature & Wildlife', durationHours: 2.5 }
    ],
    categories: ['Hill Station', 'Nature & Wildlife', 'Culture'],
    bestTimeToVisit: 'October to May for pleasant weather; July-August for dramatic monsoon scenery',
    estimatedVisitDuration: '3 - 4 Days',
    estimatedBudgetPerDay: 2600,
    localFood: ['Akki Rotti with bamboo shoot curry', 'Kadambuttu (steamed rice balls)', 'Pandi Curry (authentic Kodava)', 'Fresh Estate Arabica Coffee'],
    travelTips: [
      'Stay in an authentic plantation homestay for traditional Kodava hospitality and home-cooked meals.',
      'Drive carefully on winding hairpin curves, especially during foggy monsoon months.',
      'Purchase fresh spices, homemade fruit wine, and single-estate coffee directly from estate growers.'
    ],
    rating: 4.7,
    reviewsCount: 3890,
    isUNESCO: false,
    nearestAirport: 'Kannur Intl (CNN, 90 km) / Mangaluru Intl (IXE, 140 km)',
    nearestRailway: 'Mysuru Junction (MYS, 120 km) / Hassan (HAS, 105 km)'
  },
  {
    id: 'chikkamagaluru',
    name: 'Chikkamagaluru',
    kannadaName: 'ಚಿಕ್ಕಮಗಳೂರು',
    district: 'Chikkamagaluru',
    region: 'Malnad & Western Ghats',
    tagline: 'The Cradle of Indian Coffee & Mountain Trails',
    description: 'Chikkamagaluru is where the first coffee bean was sown in India by Sufi saint Baba Budan in 1670. Today, it offers crisp mountain air, sweeping cloud-covered peaks like Mullayanagiri, hidden jungle streams, and tranquil estates.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Western Ghats Peak
      'https://images.unsplash.com/photo-1626014303757-646732386e88?auto=format&fit=crop&w=1200&q=80', // Coffee plantation
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 13.3161, lng: 75.7720 },
    attractions: [
      { name: 'Mullayanagiri Peak', description: 'Highest peak in Karnataka (1,930 m) featuring misty summit stairs and majestic sunrise vistas.', category: 'Adventure', durationHours: 3 },
      { name: 'Baba Budangiri & Dattatreya Peetha', description: 'Sacred mountain range revered by both Hindus and Muslims with scenic high-altitude trails.', category: 'Spiritual', durationHours: 2.5 },
      { name: 'Hebbe & Kallathigiri Falls', description: 'Two-stage dramatic waterfalls accessible through exciting 4x4 forest jeep trails.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Bhadra Wildlife Sanctuary', description: 'Tiger reserve with dense deciduous forests and boat safaris on the Bhadra reservoir.', category: 'Nature & Wildlife', durationHours: 3.5 },
      { name: 'Coffee Yatra Museum', description: 'Interactive museum chronicling the journey and science of coffee cultivation.', category: 'Culture', durationHours: 1.5 }
    ],
    categories: ['Hill Station', 'Adventure', 'Nature & Wildlife'],
    bestTimeToVisit: 'September to March (lush green post-monsoon and cool winter)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2100,
    localFood: ['Malnad Akki Roti', 'Kaayi Kadubu', 'Jackfruit Pappad', 'Authentic Malnad Filter Coffee'],
    travelTips: [
      'Start the Mullayanagiri ascent before 6:30 AM to catch the cloud carpet before mist thickens.',
      'Opt for a 4WD vehicle if visiting remote waterfalls and coffee estates inside the valley.',
      'Check local trekking permits online beforehand for protected reserve peaks.'
    ],
    rating: 4.8,
    reviewsCount: 3120,
    isUNESCO: false,
    nearestAirport: 'Mangaluru Intl (IXE, 150 km) / Kempegowda Intl BLR (250 km)',
    nearestRailway: 'Kadur Junction (DRU, 40 km) / Chikkamagaluru (CMGR)'
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    kannadaName: 'ಗೋಕರ್ಣ',
    district: 'Uttara Kannada',
    region: 'Coastal Karnataka',
    tagline: 'Sacred Shrines & Untamed Golden Beaches',
    description: 'Nestled between the Arabian Sea and the rugged Western Ghats, Gokarna offers a dual identity: a sacred Shaivite pilgrimage center with the revered Atmalinga, and a laid-back coastal haven famous for serene beach-trekking trails connecting secluded coves.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', // Gokarna beach
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // Om beach
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 14.5479, lng: 74.3188 },
    attractions: [
      { name: 'Om Beach & Half Moon Beach', description: 'Naturally shaped like the auspicious OM symbol; starting point for dramatic cliff hikes.', category: 'Beach', durationHours: 3 },
      { name: 'Mahabaleshwar Temple & Kotiteertha', description: 'Ancient 4th-century temple housing the Atmalinga sanctified by Sage Ravana.', category: 'Spiritual', durationHours: 2 },
      { name: 'Kudle Beach Sunset Point', description: 'Vibrant crescent beach lined with beachfront cafes and sunset yoga spots.', category: 'Beach', durationHours: 2 },
      { name: 'Paradise Beach (Full Moon Beach)', description: 'Secluded golden sandy cove accessible only via boat or cliff trek through coastal forest.', category: 'Adventure', durationHours: 2.5 },
      { name: 'Mirjan Fort', description: '16th-century laterite stone citadel built by Queen Chennabhairadevi (The Pepper Queen).', category: 'Heritage', durationHours: 1.5 }
    ],
    categories: ['Beach', 'Spiritual', 'Adventure'],
    bestTimeToVisit: 'October to March (pleasant breeze, clear blue waters)',
    estimatedVisitDuration: '2 - 4 Days',
    estimatedBudgetPerDay: 1600,
    localFood: ['Fresh seafood thali', 'Prawn ghee roast', 'Nutella crepes in beach shacks', 'Solkadhi'],
    travelTips: [
      'The 5-Beach Trek (Kudle to Paradise) is best done in the early morning; carry adequate water.',
      'Strict dress codes apply inside the Mahabaleshwar Temple (traditional dhoti for men).',
      'Avoid swimming during monsoon months due to high undercurrents.'
    ],
    rating: 4.6,
    reviewsCount: 2950,
    isUNESCO: false,
    nearestAirport: 'Dabolim / Mopa Goa (GOI/GOX, 140 km) / Hubballi (150 km)',
    nearestRailway: 'Gokarna Road (GOK, 9 km) / Ankola (AKL, 25 km)'
  },
  {
    id: 'badami',
    name: 'Badami',
    kannadaName: 'ಬಾದಾಮಿ',
    district: 'Bagalkote',
    region: 'North Karnataka',
    tagline: 'Rock-Cut Architecture of the Early Chalukyas',
    description: 'Badami (formerly Vatapi) was the regal capital of the early Chalukyas who ruled much of Deccan between the 6th and 8th centuries. Nestled around the tranquil Agastya Lake between towering sandstone cliffs, Badami is renowned for its cave temples carved directly into living red cliffs.',
    images: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80', // Badami cave temple
      'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1200&q=80', // Bhutanatha temple
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 15.9187, lng: 75.6766 },
    attractions: [
      { name: 'Four Badami Cave Temples', description: 'Monolithic rock-cut shrines dedicated to Shiva (Natya Shiva with 18 arms), Vishnu, and Jain Tirthankaras.', category: 'Heritage', durationHours: 2.5 },
      { name: 'Bhutanatha Temples & Agastya Lake', description: '7th-century shrines jutting directly into emerald waters with sandstone backdrop.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Badami Sandstone Fort & Tipu’s Cannon', description: 'Perched on the northern cliff offering magnificent panoramic valley views.', category: 'Adventure', durationHours: 2 },
      { name: 'Archaeological Museum', description: 'Houses remarkable sculptures including the Lajja Gauri and Chalukyan inscriptions.', category: 'Culture', durationHours: 1 }
    ],
    categories: ['Heritage', 'Culture', 'Adventure'],
    bestTimeToVisit: 'October to February (cool winter days for rock climbing and exploring)',
    estimatedVisitDuration: '2 Days (combine with Pattadakal & Aihole)',
    estimatedBudgetPerDay: 1700,
    localFood: ['Jolada Rotti with Shenga Chutney', 'Badanikai Yennegai (stuffed brinjal)', 'Shenga Holige', 'Sajjaka'],
    travelTips: [
      'Badami is an internationally recognized rock-climbing destination with over 150 bolted sport routes.',
      'Morning light on the Bhutanatha temple across Agastya Lake creates stunning photography.',
      'Combine Badami, Pattadakal, and Aihole into a unified 2-day Chalukyan circuit.'
    ],
    rating: 4.8,
    reviewsCount: 1980,
    isUNESCO: false,
    nearestAirport: 'Hubballi Airport (HBX, 105 km) / Belagavi (IXG, 140 km)',
    nearestRailway: 'Badami Railway Station (BDM, 4 km)'
  },
  {
    id: 'belur-halebidu',
    name: 'Belur & Halebidu',
    kannadaName: 'ಬೇಲೂರು ಮತ್ತು ಹಳೇಬೀಡು',
    district: 'Hassan',
    region: 'South Karnataka',
    tagline: 'Poetry in Stone – UNESCO Hoysala Temples',
    description: 'Inscribed as a UNESCO World Heritage site in 2023 under "Sacred Ensembles of the Hoysalas", Belur and Halebidu represent the pinnacle of medieval soapstone temple sculpture. Built between the 11th and 14th centuries, the temples feature intricate carvings of celestial dancers, war elephants, and epics with unbelievable detail.',
    images: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80', // Hoysala sculpture
      'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 13.1623, lng: 75.8596 },
    attractions: [
      { name: 'Chennakeshava Temple, Belur', description: 'Commissioned by King Vishnuvardhana in 1117 CE; famous for 42 Madanika (celestial dancer) bracket figures.', category: 'Heritage', durationHours: 2.5 },
      { name: 'Hoysaleswara Temple, Halebidu', description: 'Twin Shiva temple on star-shaped platforms with 240+ relief friezes depicting battle scenes.', category: 'Heritage', durationHours: 2.5 },
      { name: 'Kedareshwara Temple & Basadi Halli', description: 'Exquisite Jain basadis featuring mirror-polished black stone pillars reflecting light.', category: 'Spiritual', durationHours: 1.5 },
      { name: 'Yagachi Water Adventure Sports', description: 'Reservoir near Belur offering kayaking, speed boating, and jet skiing.', category: 'Adventure', durationHours: 2 }
    ],
    categories: ['Heritage', 'Spiritual', 'Culture'],
    bestTimeToVisit: 'October to March',
    estimatedVisitDuration: '1 - 2 Days',
    estimatedBudgetPerDay: 1900,
    localFood: ['Hassan style Uppittu', 'Bisi Bele Bath', 'Akki Rotti', 'Filter Coffee'],
    travelTips: [
      'Hire an ASI-certified local guide at Belur to explain the intricate stories behind the soapstone sculptures.',
      'Check the star-shaped ground plans and outer walls carved with rows of thousands of elephants, no two identical!',
      'Halebidu is located just 16 km from Belur and easily covered on the same day.'
    ],
    rating: 4.9,
    reviewsCount: 2240,
    isUNESCO: true,
    nearestAirport: 'Kempegowda Intl Bengaluru (BLR, 220 km) / Mangaluru (IXE, 150 km)',
    nearestRailway: 'Hassan Junction (HAS, 38 km)'
  },
  {
    id: 'dandeli',
    name: 'Dandeli',
    kannadaName: 'ದಾಂಡೇಲಿ',
    district: 'Uttara Kannada',
    region: 'Malnad & Western Ghats',
    tagline: 'Adventure Hub & Pristine River Rapids',
    description: 'Surrounded by dense deciduous jungle along the mighty Kali River, Dandeli is Karnataka’s adventure capital. It draws adrenaline seekers for Grade II and III white water rafting, while offering sanctuary to rare black panthers, giant hornbills, and crocodiles.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // River rafting
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80', // Dense jungle
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 15.2429, lng: 74.6230 },
    attractions: [
      { name: 'White Water Rafting on Kali River', description: 'Thrilling 9.5 km river run navigating Grade II-III rapids like Smugglers Den and Big Daddy.', category: 'Adventure', durationHours: 3.5 },
      { name: 'Dandeli Wildlife Sanctuary & Syntheri Rocks', description: 'Monolithic 300-foot granite structure carved by Kaneri river in deep jungle.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Hornbill Timber Trail & Bird Watching', description: 'Spot four species of hornbills (including Great Pied Hornbill) in their natural habitat.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Supar Dam & Backwater Kayaking', description: 'Tranquil reservoir waters perfect for paddleboarding, kayaking, and evening camping.', category: 'Adventure', durationHours: 2.5 }
    ],
    categories: ['Adventure', 'Nature & Wildlife'],
    bestTimeToVisit: 'October to May (Rafting open; pleasant forest weather)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2400,
    localFood: ['Malnad bamboo shoot pickle', 'Konkan fish curry', 'Jowar rotti', 'Campfire BBQ'],
    travelTips: [
      'Rafting operates subject to dam water release timings; book through accredited forest lodge operators.',
      'Carry quick-drying clothing and strap-on footwear for water sports.',
      'Leech socks are recommended for forest trail walks post-monsoon.'
    ],
    rating: 4.7,
    reviewsCount: 2680,
    isUNESCO: false,
    nearestAirport: 'Hubballi (HBX, 75 km) / Dabolim Goa (GOI, 130 km)',
    nearestRailway: 'Alnavar Junction (LWR, 32 km) / Dharwad (DWR, 55 km)'
  },
  {
    id: 'shivamogga-jogfalls',
    name: 'Shivamogga & Jog Falls',
    kannadaName: 'ಶಿವಮೊಗ್ಗ ಮತ್ತು ಜೋಗ್ ಜಲಪಾತ',
    district: 'Shivamogga',
    region: 'Malnad & Western Ghats',
    tagline: 'Gateway to Malnad & Majestic Plunging Waterfalls',
    description: 'Known as the Gateway to Malnad, Shivamogga is a realm of lush forests, areca nut groves, and roaring rivers. Its crowning jewel is Jog Falls, where the Sharavathi River plunges 253 meters in four distinct cascades named Raja, Roarer, Rocket, and Rani.',
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', // Waterfall
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 14.2285, lng: 74.8125 },
    attractions: [
      { name: 'Jog Falls (Gerosoppa)', description: 'India’s second steepest plunge waterfall dropping 830 feet against misty gorge cliffs.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Tyavarekoppa Lion & Tiger Safari', description: 'Sprawling reserve where big cats and leopards roam in semi-natural enclosures.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Sakrebyle Elephant Camp', description: 'Renowned riverside camp where trained mahouts bathe and care for gentle tuskers on Tunga river.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Gajanur Dam & Tunga Backwaters', description: 'Scenic picnic spot with calm waters and picnic grounds.', category: 'Nature & Wildlife', durationHours: 1.5 }
    ],
    categories: ['Nature & Wildlife', 'Adventure'],
    bestTimeToVisit: 'August to December (Monsoon for maximum roaring cascade; post-monsoon for clear views)',
    estimatedVisitDuration: '2 Days',
    estimatedBudgetPerDay: 1800,
    localFood: ['Halasina Hannina Kadubu (Jackfruit cake)', 'Appe Huli (Spicy raw mango broth)', 'Thotapuri rasam', 'Avalakki'],
    travelTips: [
      'During heavy monsoon, mist can envelop Jog Falls; visit in the afternoon when breeze often clears the clouds.',
      'Reach Sakrebyle camp between 8:30 AM and 10:30 AM to watch elephants bathing in the river.',
      'Climbing down the 1,400 steps to the bottom of Jog Falls requires good physical fitness.'
    ],
    rating: 4.6,
    reviewsCount: 2890,
    isUNESCO: false,
    nearestAirport: 'Shivamogga Airport (RQY, 12 km) / Mangaluru (IXE, 190 km)',
    nearestRailway: 'Shivamogga Town (SMET, 100 km to Jog Falls) / Talguppa (TLGP, 14 km to Jog)'
  },
  {
    id: 'udupi',
    name: 'Udupi',
    kannadaName: 'ಉಡುಪಿ',
    district: 'Udupi',
    region: 'Coastal Karnataka',
    tagline: 'Temple Town, Golden Shores & Culinary Mecca',
    description: 'Udupi is legendary for two treasures that have won global renown: the 13th-century Sri Krishna Mutt established by Saint Madhvacharya, and the iconic Satvik Udupi cuisine that gave birth to South Indian dining around the world. It also boasts pristine beaches and geological wonders.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', // Beach
      'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1200&q=80', // Temple
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 13.3409, lng: 74.7421 },
    attractions: [
      { name: 'Sri Krishna Mutt & Kanakana Kindi', description: 'Sacred temple where Lord Krishna is viewed through the historic nine-holed silver window.', category: 'Spiritual', durationHours: 2 },
      { name: 'St. Mary’s Island (Coconut Island)', description: 'National Geological Monument featuring hexagonal basaltic columns formed by prehistoric volcanic activity.', category: 'Beach', durationHours: 3 },
      { name: 'Malpe Beach & Sea Walkway', description: 'Bustling beach with water sports and a 450-meter scenic walkway stretching into the ocean.', category: 'Beach', durationHours: 2 },
      { name: 'Kaup (Kapu) Beach & Historic Lighthouse', description: 'Century-old operating lighthouse on a rocky outcrop offering panoramic Arabian Sea sunsets.', category: 'Beach', durationHours: 2 },
      { name: 'Pajaka Kshetra', description: 'Ancestral birthplace of philosopher Saint Madhvacharya with sacred ponds.', category: 'Culture', durationHours: 1.5 }
    ],
    categories: ['Spiritual', 'Beach', 'Culture'],
    bestTimeToVisit: 'October to March (pleasant coastal weather)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 1900,
    localFood: ['Authentic Udupi Thali at temple Bhojanashala', 'Mangalore Buns with coconut chutney', 'Goli Baje', 'Patrode', 'Neer Dosa'],
    travelTips: [
      'Boats to St. Mary’s Island operate from Malpe Beach; service remains closed during monsoon (June-September).',
      'The temple serves free community meals (Annaprashana) daily to thousands of pilgrims — a deeply spiritual culinary tradition.',
      'Climb the Kaup Lighthouse between 4:00 PM and 6:00 PM for extraordinary sunset photos.'
    ],
    rating: 4.8,
    reviewsCount: 3310,
    isUNESCO: false,
    nearestAirport: 'Mangaluru Intl (IXE, 55 km)',
    nearestRailway: 'Udupi Railway Station (UD, 4 km)'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    kannadaName: 'ಬೆಂಗಳೂರು',
    district: 'Bengaluru Urban',
    region: 'South Karnataka',
    tagline: 'The Garden City & Innovation Capital',
    description: 'Karnataka’s dynamic capital seamlessly blends historical landmarks, sprawling botanical gardens, royal palaces, craft microbreweries, and high-tech innovation. Known for its year-round salubrious climate, Bengaluru is the starting springboard for discovering Karnataka.',
    images: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80', // Vidhana Soudha
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    attractions: [
      { name: 'Vidhana Soudha & Attara Kacheri', description: 'Monumental neo-Dravidian granite legislative assembly hall and high court.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Lalbagh Botanical Garden & Glass House', description: '240-acre garden commissioned by Hyder Ali housing over 1,800 exotic botanical species.', category: 'Nature & Wildlife', durationHours: 2.5 },
      { name: 'Cubbon Park & Bangalore Palace', description: 'Tudor-style royal palace inspired by Windsor Castle surrounded by 300 acres of green lungs.', category: 'Heritage', durationHours: 2.5 },
      { name: 'National Gallery of Modern Art (NGMA)', description: 'Heritage mansion showcasing premier Indian modern and contemporary art.', category: 'Culture', durationHours: 2 },
      { name: 'Bannerghatta Biological Park', description: 'Wilderness park with tiger, lion, and bear safaris and a sprawling butterfly park.', category: 'Nature & Wildlife', durationHours: 3.5 }
    ],
    categories: ['Culture', 'Heritage', 'Nature & Wildlife'],
    bestTimeToVisit: 'Throughout the year; pleasant winter between October and February',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2800,
    localFood: ['Crispy Benne Dosa at CTR / Vidyarthi Bhavan', 'Bisi Bele Bath', 'Rava Idli (invented at MTR)', 'Degree Filter Coffee'],
    travelTips: [
      'Use Namma Metro to conveniently skip road traffic between major city landmarks.',
      'Early morning walks in Cubbon Park or Lalbagh are great for birdwatching and local heritage trees.',
      'Reserve breakfast early at legendary outlets like MTR (Lalbagh) or CTR (Malleshwaram) to avoid long queues.'
    ],
    rating: 4.7,
    reviewsCount: 5200,
    isUNESCO: false,
    nearestAirport: 'Kempegowda International Airport (BLR, 35 km)',
    nearestRailway: 'KSR Bengaluru City (SBC) / Yesvantpur (YPR)'
  },
  {
    id: 'vijayapura',
    name: 'Vijayapura (Bijapur)',
    kannadaName: 'ವಿಜಯಪುರ',
    district: 'Vijayapura',
    region: 'North Karnataka',
    tagline: 'Architectural Splendour of the Adil Shahi Dynasty',
    description: 'Founded in the 10th century, Vijayapura flourished under the Adil Shahi Sultans who adorned it with extraordinary monuments. It houses Gol Gumbaz, possessing the second largest unsupported dome in the world, with acoustic marvels where the faintest whisper echoes 11 times.',
    images: [
      'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1200&q=80', // Gol Gumbaz
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 16.8302, lng: 75.7100 },
    attractions: [
      { name: 'Gol Gumbaz & Whispering Gallery', description: 'Mausoleum of Mohammed Adil Shah with a 44-meter diameter dome unsupported by pillars.', category: 'Heritage', durationHours: 2.5 },
      { name: 'Ibrahim Rauza (The Black Taj of South India)', description: 'Exquisitely balanced mausoleum said to have inspired the Taj Mahal in Agra.', category: 'Heritage', durationHours: 2 },
      { name: 'Malik-e-Maidan (Lord of the Battlefield)', description: 'Massive 55-tonne medieval cast bronze cannon shaped like a lion swallowing an elephant.', category: 'Heritage', durationHours: 1 },
      { name: 'Bara Kaman', description: 'Unfinished mausoleum of Ali Adil Shah II consisting of 12 dramatic stone arches open to the sky.', category: 'Heritage', durationHours: 1.5 }
    ],
    categories: ['Heritage', 'Culture'],
    bestTimeToVisit: 'October to February (mild winter weather)',
    estimatedVisitDuration: '1 - 2 Days',
    estimatedBudgetPerDay: 1600,
    localFood: ['Jolada Rotti Oota', 'Shenga Chutney', 'Khardantu', 'North Karnataka spiced tea'],
    travelTips: [
      'Visit Gol Gumbaz at 6:00 AM right when gates open to experience the Whispering Gallery without crowd noise.',
      'Sunset at Ibrahim Rauza offers majestic silhouettes and tranquil photography.',
      'Hire a knowledgeable local guide to understand the medieval acoustic engineering.'
    ],
    rating: 4.6,
    reviewsCount: 1740,
    isUNESCO: false,
    nearestAirport: 'Vijayapura Airport (VIJ, 15 km) / Hubballi (HBX, 195 km)',
    nearestRailway: 'Vijayapura Railway Station (BJP, 2 km)'
  },
  {
    id: 'pattadakal-aihole',
    name: 'Pattadakal & Aihole',
    kannadaName: 'ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಐಹೊಳೆ',
    district: 'Bagalkote',
    region: 'North Karnataka',
    tagline: 'UNESCO World Heritage – Cradle of Temple Architecture',
    description: 'Pattadakal was the ceremonial coronation center of the Chalukyan monarchs, while nearby Aihole served as their laboratory of temple architecture with over 120 stone temples built between 450 and 750 CE. It showcases a harmonious confluence of Dravidian and Nagara styles.',
    images: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80', // Pattadakal temple
      'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 15.9492, lng: 75.8164 },
    attractions: [
      { name: 'Virupaksha Temple, Pattadakal', description: 'Masterpiece built by Queen Lokamahadevi in 740 CE; richly carved with Ramayana & Mahabharata episodes.', category: 'Heritage', durationHours: 2 },
      { name: 'Durga Temple, Aihole', description: 'Famous apsidal (semi-circular) peristyle temple resembling a Buddhist chaitya.', category: 'Heritage', durationHours: 2 },
      { name: 'Mallikarjuna & Sangameshwara Temples', description: 'Celebrated examples of early Chalukya architectural experimentation.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Ravana Phadi Cave, Aihole', description: 'One of the earliest rock-cut shrines in Karnataka featuring a magnificent Nataraja carving.', category: 'Heritage', durationHours: 1 }
    ],
    categories: ['Heritage', 'Culture', 'Spiritual'],
    bestTimeToVisit: 'October to February',
    estimatedVisitDuration: '1 - 2 Days (combine with Badami)',
    estimatedBudgetPerDay: 1500,
    localFood: ['Jolada Rotti Thali', 'Badanikai Yennegai', 'Shenga Pudi', 'Fresh Buttermilk'],
    travelTips: [
      'Pattadakal is only 22 km from Badami, and Aihole is another 14 km further; visit all three in sequence.',
      'Check the ASI plaques explaining the fusion of Northern (Nagara) and Southern (Dravida) shikhara designs.'
    ],
    rating: 4.8,
    reviewsCount: 1620,
    isUNESCO: true,
    nearestAirport: 'Hubballi (HBX, 130 km)',
    nearestRailway: 'Badami (BDM, 22 km)'
  },
  {
    id: 'kabini-nagarhole',
    name: 'Kabini & Nagarhole',
    kannadaName: 'ಕಬಿನಿ ಮತ್ತು ನಾಗರಹೊಳೆ',
    district: 'Mysuru & Kodagu',
    region: 'South Karnataka',
    tagline: 'Realm of the Black Panther & Wild Elephants',
    description: 'Part of the Nilgiri Biosphere Reserve, Kabini is one of Asia’s premier wildlife sanctuaries. Its tranquil backwaters attract the largest congregation of wild Asian elephants in summer, while its dense teak and rosewood forests are world-famous for sightings of tigers, leopards, and the elusive Black Panther.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Wildlife / Elephants
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 11.9680, lng: 76.2420 },
    attractions: [
      { name: 'Kabini Boat Safari on River Cauvery', description: 'Cruise along the backwaters to witness elephant herds swimming and marsh crocodiles sunbathing.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Nagarhole Jungle Jeep Safari', description: 'Early morning 4x4 drive tracking tigers, leopards, dhole (wild dogs), and gaurs.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Birdwatching on the Backwaters', description: 'Spot over 250 avian species including ospreys, grey-headed fish eagles, and Malabar pied hornbills.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Kuruva Island Nature Walk', description: 'Nearby uninhabited evergreen river delta island on Kabini river.', category: 'Nature & Wildlife', durationHours: 2.5 }
    ],
    categories: ['Nature & Wildlife', 'Adventure'],
    bestTimeToVisit: 'October to May (March-May is prime for elephant congregations on the backwaters)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 4500,
    localFood: ['Estate buffet dining', 'South Indian thali', 'Bamboo steamed dishes', 'Filter coffee'],
    travelTips: [
      'Book Karnataka Forest Department / Jungle Lodges safari slots several weeks in advance as vehicle entries are strictly capped.',
      'Wear earthy tones (khaki, green, beige); bright colors disturb wildlife during safaris.',
      'Both boat safaris and vehicle safaris offer different perspectives — try doing one of each!'
    ],
    rating: 4.9,
    reviewsCount: 2450,
    isUNESCO: false,
    nearestAirport: 'Mysuru Airport (MYQ, 70 km) / Kempegowda BLR (210 km)',
    nearestRailway: 'Mysuru Junction (MYS, 65 km)'
  },
  {
    id: 'murudeshwar',
    name: 'Murudeshwar',
    kannadaName: 'ಮುರುಡೇಶ್ವರ',
    district: 'Uttara Kannada',
    region: 'Coastal Karnataka',
    tagline: 'Colossal Shiva & Ocean Horizons',
    description: 'Surrounded on three sides by the azure waters of the Arabian Sea on Kanduka Hill, Murudeshwar is home to the world’s second tallest Shiva statue (123 feet) and a soaring 20-storey Raja Gopuram fitted with a high-speed elevator offering 360-degree ocean views.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', // Murudeshwar Shiva / Coast
      'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 14.0942, lng: 74.4899 },
    attractions: [
      { name: 'Colossal 123-ft Shiva Statue', description: 'Glistening in the morning sun on Kanduka Hill overlooking the rolling waves of Arabian Sea.', category: 'Spiritual', durationHours: 1.5 },
      { name: '20-Storey Raja Gopuram & Elevator View', description: 'Take the lift to the 18th floor for breathtaking bird’s eye views of the coastal shoreline.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Netrani Island Scuba Diving', description: 'Heart-shaped coral island located 19 km offshore; premier scuba and snorkeling site with coral reefs and whale sharks.', category: 'Adventure', durationHours: 5 },
      { name: 'Murudeshwar Beach & Jet Skiing', description: 'Gentle curving beach with parasailing, banana rides, and sunset boardwalk.', category: 'Beach', durationHours: 2 }
    ],
    categories: ['Spiritual', 'Beach', 'Adventure'],
    bestTimeToVisit: 'October to March (clear sea conditions for diving and beach walks)',
    estimatedVisitDuration: '1 - 2 Days',
    estimatedBudgetPerDay: 1800,
    localFood: ['Mangalore style fish thali', 'Neer dosa with coconut chutney', 'Prawn fry', 'Tender coconut water'],
    travelTips: [
      'Scuba diving to Netrani Island requires prior booking with certified PADI dive operators based in Murudeshwar.',
      'The elevator inside the Raja Gopuram operates from 6:00 AM to 8:00 PM (nominal entry fee).',
      'Early mornings and sunsets offer the best light for photography of the Shiva statue.'
    ],
    rating: 4.7,
    reviewsCount: 3100,
    isUNESCO: false,
    nearestAirport: 'Mangaluru Intl (IXE, 155 km) / Goa Dabolim (GOI, 175 km)',
    nearestRailway: 'Murdeshwar Railway Station (MRDW, 2 km)'
  },
  {
    id: 'agumbe',
    name: 'Agumbe',
    kannadaName: 'ಆಗುಂಬೆ',
    district: 'Shivamogga',
    region: 'Malnad & Western Ghats',
    tagline: 'Cherrapunji of the South & Rainforest Haven',
    description: 'Agumbe is a tranquil highland village receiving the second highest annual rainfall in India. Famed as the setting for R.K. Narayan’s Malgudi Days television series, it is a biodiversity hotspot celebrated for dense tropical rainforests, endemic amphibians, and King Cobra conservation.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Rainforest Agumbe
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 13.5048, lng: 75.0931 },
    attractions: [
      { name: 'Agumbe Rainforest Research Station (ARRS)', description: 'Pioneering ecological research station founded by herpetologist Romulus Whitaker.', category: 'Nature & Wildlife', durationHours: 2 },
      { name: 'Barkana & Onake Abbi Falls', description: 'Dramatic cascades plunging through primeval rainforest valleys.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Sunset Viewpoint over Arabian Sea', description: 'Famous Ghats curve where on clear evenings the sun sets directly over the Arabian Sea horizon.', category: 'Nature & Wildlife', durationHours: 1.5 },
      { name: 'Doddamane (Malgudi Heritage House)', description: '130-year-old traditional tiled Malnad heritage home where Swami and Friends was filmed.', category: 'Culture', durationHours: 1.5 }
    ],
    categories: ['Nature & Wildlife', 'Hill Station', 'Culture'],
    bestTimeToVisit: 'November to February for trekking and mist; July-September for intense rainforest monsoon experience',
    estimatedVisitDuration: '2 Days',
    estimatedBudgetPerDay: 1600,
    localFood: ['Kashaya (herbal spiced brew)', 'Pathrode', 'Appe Payasa', 'Steamed jackfruit cakes'],
    travelTips: [
      'Stay at traditional Malnad homestays like Doddamane for warm hospitality and home-cooked meals.',
      'Wear leech socks and carry salt/turmeric when trekking forest trails during and after monsoon.',
      'Cell phone connectivity is limited, making it a wonderful digital detox retreat.'
    ],
    rating: 4.8,
    reviewsCount: 1540,
    isUNESCO: false,
    nearestAirport: 'Mangaluru Intl (IXE, 100 km)',
    nearestRailway: 'Udupi (UD, 55 km) / Shivamogga (SMET, 90 km)'
  },
  {
    id: 'sakleshpur',
    name: 'Sakleshpur',
    kannadaName: 'ಸಕಲೇಶಪುರ',
    district: 'Hassan',
    region: 'Malnad & Western Ghats',
    tagline: 'Emerald Coffee Hills & Star Fortresses',
    description: 'Tucked away in the biodiversity-rich slopes of the Sahyadri range, Sakleshpur is blessed with endless coffee, cardamom, and pepper plantations. It is famous for the unique star-shaped Manjarabad Fort built by Tipu Sultan and thrilling railway track treks.',
    images: [
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80', // Green hills
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.9442, lng: 75.7873 },
    attractions: [
      { name: 'Manjarabad Fort', description: 'Octagonal star-shaped fortress built in 1792 by Tipu Sultan with French engineers, offering 360-degree views.', category: 'Heritage', durationHours: 2 },
      { name: 'Bisle Ghat Viewpoint & Reserve Forest', description: 'Spectacular mountain panorama encompassing three mountain ranges: Kumara Parvatha, Pushpagiri, and Dodda Betta.', category: 'Nature & Wildlife', durationHours: 2.5 },
      { name: 'Jenukallu Gudda Trek', description: 'Second highest peak in Karnataka offering sweeping trails across rolling grasslands.', category: 'Adventure', durationHours: 3.5 },
      { name: 'Magajahalli (Hanbal) Waterfalls', description: 'Serene crystal-clear pool cascading amidst dense coffee estates.', category: 'Nature & Wildlife', durationHours: 1.5 }
    ],
    categories: ['Hill Station', 'Adventure', 'Heritage'],
    bestTimeToVisit: 'October to March (clear skies and lush landscape)',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2000,
    localFood: ['Malnad style Kadubu', 'Akki Rotti with Kaalu Saaru', 'Fresh estate cardamom tea', 'Jackfruit Halwa'],
    travelTips: [
      'Climbing Manjarabad Fort involves 250 steps; morning hours are best before the afternoon heat.',
      'Bisle Ghat road has scenic twists; carry motion sickness medication if prone to car sickness.'
    ],
    rating: 4.7,
    reviewsCount: 2150,
    isUNESCO: false,
    nearestAirport: 'Mangaluru Intl (IXE, 130 km) / Kempegowda BLR (220 km)',
    nearestRailway: 'Sakleshpur Railway Station (SKLR, 2 km)'
  },
  {
    id: 'mangaluru',
    name: 'Mangaluru (Mangalore)',
    kannadaName: 'ಮಂಗಳೂರು',
    district: 'Dakshina Kannada',
    region: 'Coastal Karnataka',
    tagline: 'Gateway to Coastal Flavours & Serene Shorelines',
    description: 'Located between the Arabian Sea and the Western Ghats, Mangaluru is Karnataka’s chief port city. Renowned worldwide for its extraordinary culinary heritage (Ghee Roast, Kori Rotti, Neer Dosa), centuries-old temples, red-tile heritage homes, and peaceful beaches.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', // Coast
      'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.9141, lng: 74.8560 },
    attractions: [
      { name: 'Panambur Beach & Tannirbhavi Beach', description: 'Clean golden shorelines famous for international kite festivals and sunset walks.', category: 'Beach', durationHours: 2.5 },
      { name: 'Kudroli Gokarnanatheshwara Temple', description: 'Magnificently illuminated temple founded by reformer Narayana Guru; epic Mangaluru Dasara celebrations.', category: 'Spiritual', durationHours: 2 },
      { name: 'St. Aloysius Chapel', description: '1880 Italianate chapel adorned with breathtaking ceiling frescoes by Italian Jesuit painter Antony Moscheni.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Pilikula Nisargadhama', description: 'Eco-education park with botanical garden, zoo, heritage village, and science center.', category: 'Nature & Wildlife', durationHours: 3 }
    ],
    categories: ['Beach', 'Culture', 'Spiritual'],
    bestTimeToVisit: 'October to February',
    estimatedVisitDuration: '2 - 3 Days',
    estimatedBudgetPerDay: 2300,
    localFood: ['Chicken Ghee Roast (invented at Kundapura/Mangalore)', 'Kori Rotti with Kori Gassi', 'Neer Dosa', 'Pabba’s Gudbud Ice Cream', 'Mangalore Buns'],
    travelTips: [
      'A culinary pilgrimage is incomplete without visiting Pabba’s for their world-famous "Gudbud" ice cream.',
      'Take the ferry from Sultan Battery across the Gurupura River to reach Tannirbhavi Beach.',
      'Modest dress is required for St. Aloysius Chapel and Kudroli Temple.'
    ],
    rating: 4.7,
    reviewsCount: 3500,
    isUNESCO: false,
    nearestAirport: 'Mangaluru International Airport (IXE, 12 km)',
    nearestRailway: 'Mangaluru Central (MAQ) / Mangaluru Junction (MAJN)'
  },
  {
    id: 'srirangapatna',
    name: 'Srirangapatna',
    kannadaName: 'ಶ್ರೀರಂಗಪಟ್ಟಣ',
    district: 'Mandya',
    region: 'South Karnataka',
    tagline: 'Historic River Island & Fortress of Tipu Sultan',
    description: 'An island fortress carved out by two branches of the sacred Cauvery River, Srirangapatna has witnessed epic chapters of South Indian history. It was the capital of the Mysore Kingdom under Hyder Ali and Tipu Sultan "The Tiger of Mysore", and holds ancient Vaishnavite pilgrimage shrines.',
    images: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80', // Historical monument
      'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.4237, lng: 76.6953 },
    attractions: [
      { name: 'Sri Ranganathaswamy Temple', description: 'Ancient 9th-century temple dedicated to reclining Vishnu (Adi Ranga), one of the three sacred river islands on Cauvery.', category: 'Spiritual', durationHours: 2 },
      { name: 'Dariya Daulat Bagh (Tipu’s Summer Palace)', description: 'Teakwood palace built in 1784 adorned with vibrant frescoes depicting battle scenes against the British.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Gumbaz Mausoleum', description: 'Majestic dome housing the tombs of Tipu Sultan, Hyder Ali, and Fakr-Un-Nisa in manicured cypress gardens.', category: 'Heritage', durationHours: 1.5 },
      { name: 'Ranganathittu Bird Sanctuary', description: 'Downstream river islet sanctuary hosting thousands of migratory pelicans, storks, and painted herons with boat safaris.', category: 'Nature & Wildlife', durationHours: 2.5 }
    ],
    categories: ['Heritage', 'Spiritual', 'Nature & Wildlife'],
    bestTimeToVisit: 'October to March (December-February for migratory birds at Ranganathittu)',
    estimatedVisitDuration: '1 Day (often combined with Mysuru)',
    estimatedBudgetPerDay: 1600,
    localFood: ['Maddur Vada', 'Mysore Pak', 'Tender coconut water', 'Bisi Bele Bath'],
    travelTips: [
      'Take the morning boat safari at Ranganathittu Bird Sanctuary (8:30 AM) to get close to bird nesting colonies and marsh crocodiles.',
      'Srirangapatna is located just 15 km before Mysuru on the Bengaluru-Mysuru Expressway, making it an ideal stopover.'
    ],
    rating: 4.7,
    reviewsCount: 2280,
    isUNESCO: false,
    nearestAirport: 'Mysuru Airport (MYQ, 28 km) / Kempegowda BLR (160 km)',
    nearestRailway: 'Srirangapatna Railway Station (S)'
  },
  {
    id: 'chitradurga',
    name: 'Chitradurga',
    kannadaName: 'ಚಿತ್ರದುರ್ಗ',
    district: 'Chitradurga',
    region: 'North Karnataka',
    tagline: 'The Seven-Walled Stone Citadel of Valour',
    description: 'Chitradurga Fort (Kallina Kote) is an extraordinary military fortress of the Deccan. Sprawling over a cluster of boulder-strewn hills, the fort features seven concentric fortification walls, 38 secret gateways, rainwater harvesting reservoirs, and the legendary tale of folk heroine Onake Obavva.',
    images: [
      'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1200&q=80', // Stone fort
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 14.2251, lng: 76.3980 },
    attractions: [
      { name: 'Kallina Kote (Chitradurga Stone Fort)', description: 'Sprawling seven-layered defensive fort with intricate stone mazes and oil-grinding stone wheels.', category: 'Heritage', durationHours: 3.5 },
      { name: 'Obavvana Kindi (Heroine’s Secret Cleft)', description: 'The historic narrow rock opening where brave Onake Obavva guarded the fort against Hyder Ali’s forces.', category: 'Heritage', durationHours: 1 },
      { name: 'Hidimbeshwara Temple', description: 'Ancient rock shrine inside the fort with huge carved monolithic stone bells.', category: 'Spiritual', durationHours: 1.5 },
      { name: 'Vani Vilasa Sagara (Mari Kanive Dam)', description: 'Oldest dam in Karnataka built by the Mysore royals in 1907 with architectural arches.', category: 'Nature & Wildlife', durationHours: 2 }
    ],
    categories: ['Heritage', 'Adventure', 'Culture'],
    bestTimeToVisit: 'October to February',
    estimatedVisitDuration: '1 - 2 Days',
    estimatedBudgetPerDay: 1500,
    localFood: ['Chitradurga Benne Dosa', 'Jolada Rotti Oota', 'Shenga Chutney Pudi'],
    travelTips: [
      'Exploring the full fort requires at least 3-4 hours of moderate uphill hiking; wear shoes with good rubber traction.',
      'You can watch the famous "Kothi Raju" (Monkey King) rock-climber ascend sheer fort walls without ropes.',
      'Carry water bottles as there are no food stalls inside the upper fort ramparts.'
    ],
    rating: 4.7,
    reviewsCount: 1890,
    isUNESCO: false,
    nearestAirport: 'Jindal Vidyanagar (VDY, 110 km) / Kempegowda BLR (200 km)',
    nearestRailway: 'Chitradurga (CTA, 2 km)'
  },
  {
    id: 'shravanabelagola',
    name: 'Shravanabelagola',
    kannadaName: 'ಶ್ರವಣಬೆಳಗೊಳ',
    district: 'Hassan',
    region: 'South Karnataka',
    tagline: 'The 57-ft Monolith of Peace & Non-Violence',
    description: 'Shravanabelagola is one of the most prominent Jain pilgrimage centers in the world. Dominating Vindhyagiri Hill is the 57-foot tall monolithic statue of Lord Bahubali (Gommateshwara), carved from a single granite block in 981 CE by Ganga dynasty commander Chavundaraya.',
    images: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80', // Gommateshwara statue
      'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 12.8596, lng: 76.4864 },
    attractions: [
      { name: 'Vindhyagiri Hill & 57-ft Gommateshwara Statue', description: 'Ascend 650 stone-hewn steps to stand before the world’s largest freestanding monolithic stone statue.', category: 'Spiritual', durationHours: 2.5 },
      { name: 'Chandragiri Hill & Ancient Inscriptions', description: 'Hill opposite Vindhyagiri where Emperor Chandragupta Maurya renounced his throne; contains 800+ ancient Kannada rock inscriptions.', category: 'Heritage', durationHours: 2 },
      { name: 'Kalyani White Pond', description: 'Sacred pond in the center of town surrounded by pillared stone pavilions.', category: 'Culture', durationHours: 1 }
    ],
    categories: ['Spiritual', 'Heritage', 'Culture'],
    bestTimeToVisit: 'October to March (cool mornings for the climb)',
    estimatedVisitDuration: '1 Day',
    estimatedBudgetPerDay: 1400,
    localFood: ['Satvik Jain South Indian Meals', 'Dosa', 'Badam Milk', 'Tender coconut water'],
    travelTips: [
      'Climb Vindhyagiri before 8:30 AM to avoid hot granite steps; socks are recommended as footwear is not allowed on the sacred hill.',
      'Palanquin (doli) service carried by four bearers is available for elderly visitors and those with mobility needs.',
      'The Mahamastakabhisheka festival takes place once every 12 years with millions of devotees bathing the statue in milk, saffron, and gold.'
    ],
    rating: 4.8,
    reviewsCount: 2010,
    isUNESCO: false,
    nearestAirport: 'Kempegowda Intl BLR (150 km) / Mysuru (MYQ, 85 km)',
    nearestRailway: 'Shravanabelagola Railway Station (SBGA, 2 km)'
  },
  {
    id: 'bandipur',
    name: 'Bandipur National Park',
    kannadaName: 'ಬಂಡೀಪುರ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನ',
    district: 'Chamarajanagar',
    region: 'South Karnataka',
    tagline: 'Premier Tiger Reserve of the Nilgiris',
    description: 'Spanning over 874 square kilometers at the tri-junction of Karnataka, Tamil Nadu, and Kerala, Bandipur was established as one of India’s first Project Tiger reserves in 1974. Home to leopards, sloth bears, dholes, and large herds of chital deer.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Tiger / deer
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 11.6664, lng: 76.6291 },
    attractions: [
      { name: 'Bandipur Open Canter & Gypsy Safari', description: 'Guided jungle excursions through deciduous teak woods tracking royal Bengal tigers and leopards.', category: 'Nature & Wildlife', durationHours: 3 },
      { name: 'Himavad Gopalaswamy Betta', description: 'Highest peak in Bandipur (1,450 m) with an ancient 14th-century temple frequently shrouded in swirling mist.', category: 'Spiritual', durationHours: 2.5 },
      { name: 'Mangala Dam Backwaters', description: 'Watering hole where herds of spotted deer, wild boars, and elephants assemble at dusk.', category: 'Nature & Wildlife', durationHours: 1.5 }
    ],
    categories: ['Nature & Wildlife', 'Adventure'],
    bestTimeToVisit: 'October to May (March-May best for tiger sightings near water bodies)',
    estimatedVisitDuration: '2 Days',
    estimatedBudgetPerDay: 3200,
    localFood: ['South Indian thali', 'Jungle resort buffet', 'Karnataka Ragi Mudde', 'Filter coffee'],
    travelTips: [
      'Night traffic through Bandipur National Park (NH 766) is strictly banned between 9:00 PM and 6:00 AM to protect wild animals.',
      'Book morning safaris (6:00 AM - 9:00 AM) or late afternoon safaris (3:30 PM - 6:30 PM) for maximum animal activity.'
    ],
    rating: 4.8,
    reviewsCount: 3100,
    isUNESCO: false,
    nearestAirport: 'Mysuru Airport (MYQ, 70 km) / Coimbatore (CJB, 120 km)',
    nearestRailway: 'Mysuru Junction (MYS, 80 km)'
  }
];

