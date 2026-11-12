export interface UNESCOSite {
  id: string;
  name: string;
  yearInscribed: number;
  location: string;
  image: string;
  significance: string;
  architecturalStyle: string;
  highlights: string[];
}

export interface ArtForm {
  id: string;
  name: string;
  kannadaName: string;
  type: 'Dance Drama' | 'Folk Dance' | 'Music' | 'Puppetry';
  region: string;
  image: string;
  description: string;
  features: string[];
}

export interface Festival {
  id: string;
  name: string;
  kannadaName: string;
  season: string;
  location: string;
  image: string;
  description: string;
  culturalImportance: string;
}

export interface FolkloreStory {
  id: string;
  title: string;
  hero: string;
  period: string;
  location: string;
  narrative: string;
  moral: string;
}

export const UNESCO_SITES: UNESCOSite[] = [
  {
    id: 'hampi-unesco',
    name: 'Group of Monuments at Hampi',
    yearInscribed: 1986,
    location: 'Vijayanagara District, Tungabhadra Basin',
    image: 'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1000&q=80',
    significance: 'Seat of the 14th-century Vijayanagara Empire, described by medieval Portuguese and Persian travellers as one of the richest and grandest metropolises in the world.',
    architecturalStyle: 'Vijayanagara Style (Dravidian architecture synthesized with Indo-Islamic royal pavilions)',
    highlights: [
      'Vijaya Vittala Temple with 56 musical stone pillars that resonate with distinct notes when tapped',
      'Monolithic Stone Chariot carved with such precision it mimics functional wooden temple chariots',
      'Virupaksha Temple operational continuously since the 7th century CE on the riverbanks',
      'Sophisticated hydraulic stone aqueduct network supplying water to royal baths and royal enclosures'
    ]
  },
  {
    id: 'hoysala-unesco',
    name: 'Sacred Ensembles of the Hoysalas',
    yearInscribed: 2023,
    location: 'Belur, Halebidu & Somanathapura (Hassan & Mysuru)',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80',
    significance: 'Inscribed in 2023 as humanity’s world heritage, the Hoysala temples represent an unprecedented artistic genius in high-relief chloritic schist (soapstone) sculpture.',
    architecturalStyle: 'Karnata Dravida / Hoysala Stellate (Star-shaped) Architecture',
    highlights: [
      'Chennakeshava Temple at Belur with 42 lifelike Madanika dancers captured in poses of celestial grace',
      'Hoysaleswara Temple at Halebidu with 240+ continuous running friezes depicting the Ramayana and Mahabharata',
      'Keshava Temple at Somanathapura on a grand trikuta (three-sanctum) star-shaped elevated plinth',
      'Artists signed their names on their masterpieces — legendary sculptors like Jakanachari and Ruvari Mallitamma'
    ]
  },
  {
    id: 'pattadakal-unesco',
    name: 'Group of Monuments at Pattadakal',
    yearInscribed: 1987,
    location: 'Bagalkote District, Malaprabha River Valley',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80',
    significance: 'The ceremonial coronation site of the Badami Chalukyan rulers (6th to 8th century CE), celebrating the harmonious fusion of Northern Nagara and Southern Dravida architectural traditions.',
    architecturalStyle: 'Early Chalukyan synthesis (Vesara / Hybrid style)',
    highlights: [
      'Virupaksha Temple built in 740 CE by Queen Lokamahadevi to commemorate victory over Pallavas of Kanchi',
      'Sangameshwara Temple, the oldest preserved shrine at the site built by King Vijayaditya',
      'Side-by-side juxtaposition of curved Nagara curvilinear towers and tiered Dravidian pyramidal gopurams',
      'Intricate narrative stone friezes narrating the Panchatantra fables and Hindu epics'
    ]
  },
  {
    id: 'western-ghats-unesco',
    name: 'Western Ghats Natural World Heritage',
    yearInscribed: 2012,
    location: 'Sahyadri Mountain Range, Karnataka',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    significance: 'Older than the Himalayas, the Western Ghats of Karnataka are recognized as one of the world’s eight "hottest hotspots" of biological diversity, moderating the monsoon climate of peninsular India.',
    architecturalStyle: 'Natural Heritage Ecosystem',
    highlights: [
      'Home to over 5,000 species of flowering plants, 139 mammal species, and 508 bird species',
      'Key habitats: Kudremukh, Agumbe, Brahmagiri, Pushpagiri, and Talakaveri reserves',
      'Origin of South India’s lifeline rivers: Cauvery, Tunga, Bhadra, Sharavathi, and Kali',
      'Globally endangered endemics: Lion-tailed macaque, Nilgiri tahr, King Cobra, and Malabar grey hornbill'
    ]
  }
];

export const ART_FORMS: ArtForm[] = [
  {
    id: 'yakshagana',
    name: 'Yakshagana',
    kannadaName: 'ಯಕ್ಷಗಾನ',
    type: 'Dance Drama',
    region: 'Coastal Karnataka & Malnad (Karavali)',
    image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1000&q=80',
    description: 'An electrifying traditional theatre form combining dance, dialogue, high-energy percussion (Chande and Maddale), and resplendent costumes with towering wooden headdresses (Kireeta) and elaborate facial makeup that takes up to four hours to apply.',
    features: [
      'Two major styles: Tenkutittu (Southern style with agile spins) and Badagutittu (Northern style with majestic stances)',
      'Himmela (background musicians led by the Bhagavata narrator) and Mummela (foreground actors/dancers)',
      'Impromptu scholarly dialogue in Kannada or Tulu exploring ethical dilemmas from epics',
      'All-night performances traditionally staged under torchlights in paddy fields after harvest'
    ]
  },
  {
    id: 'dollu-kunitha',
    name: 'Dollu Kunitha',
    kannadaName: 'ಡೊಳ್ಳು ಕುಣಿತ',
    type: 'Folk Dance',
    region: 'Central & South Karnataka (Kuruba community)',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    description: 'A powerful, high-octane drum-dance performed by the Kuruba community dedicated to Lord Beereshwara (Shiva). Performers strap large, resonant drums (Dollu) around their necks and beat rhythmically while executing daring acrobatic formations and synchronized leaping steps.',
    features: [
      'Synchronized beats ranging from slow steady rhythms to frenetic, thunderous crescendos',
      'Dancers form dynamic circles, interlocking arches, and pyramid formations',
      'Accompanied by Tala (cymbals), flute, and trumpet-like horns (Kahale)',
      'Symbolizes martial vigor, spiritual devotion, and community solidarity'
    ]
  },
  {
    id: 'veeragase',
    name: 'Veeragase',
    kannadaName: 'ವೀರಗಾಸೆ',
    type: 'Folk Dance',
    region: 'Across Karnataka (Lingayat / Shaiva tradition)',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e421d4c2?auto=format&fit=crop&w=1000&q=80',
    description: 'A vigorous ceremonial martial dance narrating the myth of Veerabhadra, created from Lord Shiva’s matted locks to avenge the dishonour of Goddess Sati at Daksha’s sacrifice.',
    features: [
      'Dancers wear bright red turbans, wooden ornaments, Rudraksha beads, and brandish curved swords',
      'High-energy leaps and stomps timed to the beats of the Karagada drum',
      'Recitation of powerful Kannada prose and oral Vachanas between dance sequences'
    ]
  },
  {
    id: 'carnatic-purandara',
    name: 'Carnatic Classical Music',
    kannadaName: 'ಕರ್ನಾಟಕ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತ',
    type: 'Music',
    region: 'Karnataka (Purandara Dasa Heritage)',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    description: 'Karnataka is the spiritual home of South Indian classical music. Saint Purandara Dasa of Hampi is universally venerated as the "Pitamaha" (Grandfather) of Carnatic music, who systematized the teaching curriculum still followed worldwide today.',
    features: [
      'Formulated the basic graded exercises: Sarali Varisai, Janta Varisai, and Alankaras',
      'Composed thousands of devotional Kritis and Devaranamas emphasizing simple devotion (Bhakti)',
      'Rich instrumental heritage including Veena, Flute, Mridangam, and Ghatam'
    ]
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'mysuru-dasara',
    name: 'Mysuru Dasara (Nada Habba)',
    kannadaName: 'ಮೈಸೂರು ದಸರಾ (ನಾಡಹಬ್ಬ)',
    season: 'September / October (Ashwin month)',
    location: 'Mysuru City & Chamundi Hills',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80',
    description: 'The state festival of Karnataka with a 400-year royal lineage beginning with the Vijayanagara kings and continued by the Wadiyars of Mysore. The 10-day celebration honors Goddess Chamundeshwari’s victory over demon Mahishasura.',
    culturalImportance: 'Capped by the world-famous Jamboo Savari procession, where the lead elephant carries the 750-kg solid gold idol (Chinnada Ambari) amidst police bands, cultural tableaux, and thousands of traditional dancers.'
  },
  {
    id: 'kambala',
    name: 'Kambala – The Slush Track Buffalo Race',
    kannadaName: 'ಕಂಬಳ',
    season: 'November to March',
    location: 'Dakshina Kannada & Udupi (Karavali)',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    description: 'An ancient coastal rural sport where a pair of muscle-toned water buffaloes are driven at breakneck speed by a sprinter across a muddy, slush-filled paddy channel (Kare).',
    culturalImportance: 'Historically organized by farming landlords to invoke blessings of coastal guardian spirits (Bhootas) for bountiful harvest and healthy livestock. Now timed with electronic laser sensors capturing record speeds.'
  },
  {
    id: 'hampi-utsav',
    name: 'Hampi Utsav (Vijaya Utsav)',
    kannadaName: 'ಹಂಪಿ ಉತ್ಸವ',
    season: 'November / January',
    location: 'Hampi Archaeological Ruins',
    image: 'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1000&q=80',
    description: 'A 3-day mega cultural carnival that revives the imperial glory of the Vijayanagara Empire. The ancient stone temples and monolithic rock pillars are illuminated in vibrant lights with live classical concerts and skydiving.',
    culturalImportance: 'Draws international artists, musicians, and heritage lovers celebrating Karnataka’s historic contribution to music, dance, and literature against the backdrop of UNESCO monuments.'
  },
  {
    id: 'bengaluru-karaga',
    name: 'Bengaluru Karaga Shaktyotsava',
    kannadaName: 'ಬೆಂಗಳೂರು ಕರಗ',
    season: 'March / April (Chaitra Purnima)',
    location: 'Old Bengaluru (Thigala Community)',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
    description: 'Bengaluru’s oldest festival celebrating Draupadi as an incarnation of the mother goddess. The Karaga bearer balances an earthen floral pot on his head through a midnight procession without letting it fall.',
    culturalImportance: 'Symbol of communal harmony: the Karaga procession makes a customary halt at the historic 18th-century Hazrat Tawakkal Mastan Dargah in the heart of old Bangalore.'
  }
];

export const FOLKLORE_STORIES: FolkloreStory[] = [
  {
    id: 'onake-obavva',
    title: 'The Valour of Onake Obavva',
    hero: 'Obavva of Chitradurga',
    period: '18th Century CE (1779)',
    location: 'Chitradurga Fort',
    narrative: 'When Hyder Ali’s forces besieged Chitradurga Fort, soldiers noticed an unguarded narrow water opening (Kindi). Obavva, the wife of a fortress guard, noticed the enemy creeping in while fetching water. Armed only with a heavy pestle (Onake), she hid beside the crevice and struck down each enemy soldier quietly as they emerged one by one, saving the fort from surprise capture.',
    moral: 'Courage is not determined by weapons or status, but by decisive love for one’s homeland.'
  },
  {
    id: 'rani-abbakka',
    title: 'Rani Abbakka – The Unconquered Pepper Queen',
    hero: 'Rani Abbakka Chowta I',
    period: '16th Century CE',
    location: 'Ullal (Mangaluru)',
    narrative: 'Rani Abbakka Chowta was the queen of Ullal who fought Portuguese colonial armadas for over four decades. When the Portuguese demanded tributes on coastal spice trade, she formed an inter-faith coalition of Mogaveera fishermen, Beary traders, and local warriors to inflict heavy naval defeats upon Portuguese naval galleons, earning the title "Abhaya Rani" (The Fearless Queen).',
    moral: 'Unity across communities can overcome even the most powerful colonial forces.'
  },
  {
    id: 'basaveshwara-vachanas',
    title: 'Saint Basaveshwara and the Anubhava Mantapa',
    hero: 'Jagadguru Basaveshwara',
    period: '12th Century CE (1105–1167)',
    location: 'Kalyana (Basavakalyan, Bidar)',
    narrative: 'Basaveshwara was a revolutionary philosopher, statesman, and poet who established the "Anubhava Mantapa" — considered India’s first socio-spiritual parliament where men and women from every caste, including cobblers, weavers, and kings, gathered to debate philosophy, human rights, and composed egalitarian Vachanas in simple spoken Kannada.',
    moral: 'Work is Worship ("Kayakave Kailasa") and equality is the supreme spiritual path.'
  }
];
