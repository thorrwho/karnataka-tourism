export interface FoodSpecialty {
  id: string;
  name: string;
  kannadaName: string;
  region: string;
  category: 'Breakfast' | 'Main Course' | 'Sweet / Dessert' | 'Beverage' | 'Snack';
  image: string;
  description: string;
  flavorProfile: string;
  keyIngredients: string[];
  legendaryOutlets: string[];
  culturalContext: string;
}

export interface FoodTrail {
  id: string;
  title: string;
  region: string;
  duration: string;
  stops: {
    spot: string;
    location: string;
    mustTry: string;
    description: string;
  }[];
}

export const FOOD_SPECIALTIES: FoodSpecialty[] = [
  {
    id: 'mysore-masala-dosa',
    name: 'Mysore Masala Dosa',
    kannadaName: 'ಮೈಸೂರು ಮಸಾಲ ದೋಸೆ',
    region: 'South Karnataka (Mysuru & Bengaluru)',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1626014303757-646732386e88?auto=format&fit=crop&w=1000&q=80',
    description: 'Crisp and golden on the outside with a cloud-soft inner spongy layer, smeared generously with aromatic fiery red garlic-chili chutney and filled with spiced potato palya, topped with a dollop of fresh churned white butter (benne).',
    flavorProfile: 'Crispy, buttery, spicy-tangy garlic aroma',
    keyIngredients: ['Fermented rice and urad dal batter', 'Red chili-garlic-byadgi paste', 'Spiced potato mash', 'Pure ghee / white butter'],
    legendaryOutlets: ['Hotel Original Vinayaka Mylari (Mysuru)', 'CTR / Shri Sagar (Malleshwaram, Bengaluru)', 'Vidyarthi Bhavan (Gandhi Bazaar, Bengaluru)', 'Gayatri Tiffin Room (Mysuru)'],
    culturalContext: 'First developed in royal Mysuru kitchens as an upgrade to the plain crepe, transforming breakfast across southern India.'
  },
  {
    id: 'mysore-pak',
    name: 'Mysore Pak',
    kannadaName: 'ಮೈಸೂರು ಪಾಕ್',
    region: 'South Karnataka (Mysuru)',
    category: 'Sweet / Dessert',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80',
    description: 'The royal dessert of Karnataka, created in 1935 by palace royal chef Kakasura Madappa for King Krishnaraja Wadiyar IV. Made with gram flour, copious amounts of clarified desi ghee, and pure sugar syrup that melts luxuriously on the tongue.',
    flavorProfile: 'Rich, melt-in-mouth sweetness with deep roasted nutty ghee aroma',
    keyIngredients: ['Besan (Gram flour)', 'Pure desi ghee', 'Sugar syrup (Pak)', 'Cardamom powder'],
    legendaryOutlets: ['Guru Sweets Mart (Mysuru, run by descendants of inventor Kakasura Madappa)', 'Mahalakshmi Sweets (Mysuru)', 'Anand Sweets (Bengaluru)'],
    culturalContext: 'Offered as auspicious royal sweet during Dasara festivities and exported globally as an emblem of Karnataka’s confectionery art.'
  },
  {
    id: 'dharwad-peda',
    name: 'Dharwad Peda (GI Tagged)',
    kannadaName: 'ಧಾರವಾಡ ಪೇಡ',
    region: 'North Karnataka (Dharwad)',
    category: 'Sweet / Dessert',
    image: 'https://images.unsplash.com/photo-1600100397858-a5d614800e84?auto=format&fit=crop&w=1000&q=80',
    description: 'A dark caramel-colored peda with a Geographic Indication (GI) tag, crafted through hours of slow caramelization of Dharwadi buffalo milk khoya, rolled in fine powdered sugar crystals for a crunchy outer skin and decadent fudgy center.',
    flavorProfile: 'Deep caramelized milk fudge, aromatic and slightly crunchy exterior',
    keyIngredients: ['Indigenous Dharwad buffalo milk mawa', 'Sugar', 'Cardamom', 'Ghee'],
    legendaryOutlets: ['Line Bazaar Babu Singh Thakur Peda (Dharwad, original inventor 1875)', 'Mishra Peda (Hubballi-Dharwad)'],
    culturalContext: 'Created in the late 19th century by Ram Ratan Singh Thakur who migrated during a plague, creating an iconic sweet that has defined Dharwad for over 150 years.'
  },
  {
    id: 'bisi-bele-bath',
    name: 'Bisi Bele Bath',
    kannadaName: 'ಬಿಸಿ ಬೇಳೆ ಬಾತ್',
    region: 'South Karnataka (Old Mysore)',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    description: 'Literally translating to "Hot Lentil Rice", this wholesome one-pot meal combines rice, toor dal, seasonal vegetables, tamarind, and a complex roasted spice blend (marathi moggu, kapok buds, cinnamon, coconut), garnished with ghee-roasted cashews and crunchy potato chips (boondi).',
    flavorProfile: 'Warm, spicy, tangy, and deeply aromatic',
    keyIngredients: ['Sona Masuri rice', 'Toor dal', 'Bisi Bele Bath powder (roasted spices + coconut)', 'Tamarind', 'Ghee', 'Cashews'],
    legendaryOutlets: ['Mavalli Tiffin Room (MTR, Lalbagh Road, Bengaluru)', 'Veena Stores (Malleshwaram)', 'Maiyas (Jayanagar)'],
    culturalContext: 'Originated in the palace kitchens of Mysore royalty, traditionally served steaming hot with cooling raita and crunchy salted crisps.'
  },
  {
    id: 'mangalorean-ghee-roast',
    name: 'Mangalorean Ghee Roast & Neer Dosa',
    kannadaName: 'ತುಪ್ಪದ ರೋಸ್ಟ್ ಮತ್ತು ನೀರ್ ದೋಸೆ',
    region: 'Coastal Karnataka (Karavali)',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    description: 'Fiery, succulent pieces cooked in pure aromatic ghee with ground Byadgi red chilies, peppercorns, coriander seeds, and tamarind. Paired with "Neer Dosa" (paper-thin, gossamer lace crêpes made purely of watery rice batter without fermentation).',
    flavorProfile: 'Intensely fiery, rich ghee mouthfeel, tangy undertone, perfectly tempered by delicate cool neer dosa',
    keyIngredients: ['Byadgi dried red chilies', 'Pure clarified butter (Ghee)', 'Tamarind pulp', 'Unfermented ground rice batter for Neer Dosa'],
    legendaryOutlets: ['Shetty Lunch Home (Kundapura, inventor of Chicken Ghee Roast in 1958)', 'Giri Manja’s (Car Street, Mangaluru)', 'Machali (Mangaluru)', 'Kodial Seafood Kitchen (Udupi)'],
    culturalContext: 'A crowning glory of Bunt and Coastal cuisine celebrated across India and the globe.'
  },
  {
    id: 'coorg-akki-rotti-kadambuttu',
    name: 'Coorg Akki Rotti & Kadambuttu',
    kannadaName: 'ಅಕ್ಕಿ ರೊಟ್ಟಿ ಮತ್ತು ಕದಂಬುಟ್ಟು',
    region: 'Malnad & Western Ghats (Kodagu)',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1000&q=80',
    description: 'Flatbreads made from cooked rice dough and rice flour kneaded with cumin and onions, toasted to perfection on a clay griddle. Accompanied by Kadambuttu (steamed rice dumplings) and authentic Kachampuli (dark wild Garcinia gummi-gutta vinegar) stewed curries.',
    flavorProfile: 'Smoky, earthy, subtle cumin spice with distinctive sour-tart vinegar notes',
    keyIngredients: ['Broken rice / rice flour', 'Kachampuli (wild sour vinegar)', 'Roasted spices', 'Fresh ground coconut'],
    legendaryOutlets: ['Coorg Cuisine (Madikeri)', 'Tiger Tiger (Madikeri)', 'Raintree Restaurant (Madikeri)', 'Local plantation homestays'],
    culturalContext: 'Reflects the self-sustaining agricultural roots of the Kodava warrior community living in the misty high rainfall valleys of Brahmagiri.'
  },
  {
    id: 'north-karnataka-jolada-rotti',
    name: 'Jolada Rotti Oota with Ennegai',
    kannadaName: 'ಜೋಳದ ರೊಟ್ಟಿ ಊಟ ಮತ್ತು ಎಣ್ಣೆಗಾಯಿ',
    region: 'North Karnataka (Deccan)',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80',
    description: 'Unleavened flatbreads made of pure sorghum (jowar) flour, patted thin by hand and blistered on a wide earthen pan. Served with Badanikai Ennegai (baby eggplants slow-cooked in thick peanut and sesame gravy), Shenga Chutney powder, and fresh churned buffalo butter.',
    flavorProfile: 'Earthy, rustic, robust spicy nutty gravy, comforting wholesome grains',
    keyIngredients: ['Jowar (sorghum) flour', 'Baby purple brinjals', 'Roasted peanuts (Shenga)', 'White sesame seeds', 'Jaggery & tamarind'],
    legendaryOutlets: ['Basaveshwar Khanavali (Hubballi & Bagalkote)', 'Kamath Khanavali (Vijayapura)', 'Rotti Mane (Dharwad)'],
    culturalContext: 'The nutritional staple of Deccan farmers for millennia; naturally gluten-free and crafted to withstand the dry, sunny heat of northern Karnataka.'
  }
];

export const FOOD_TRAILS: FoodTrail[] = [
  {
    id: 'trail-bangalore-heritage',
    title: 'Old Bengaluru Heritage Tiffin Trail',
    region: 'Bengaluru (Basavanagudi & Malleshwaram)',
    duration: 'Half Day (Morning 7:00 AM – 12:30 PM)',
    stops: [
      { spot: 'Mavalli Tiffin Room (MTR)', location: 'Lalbagh Road', mustTry: 'Rava Idli with ghee & Bisi Bele Bath', description: 'Centennial institution serving since 1924.' },
      { spot: 'Vidyarthi Bhavan', location: 'Gandhi Bazaar, Basavanagudi', mustTry: 'Thick Crispy Masala Dosa', description: 'Famous for waitstaff balancing 20 plates stacked along one arm.' },
      { spot: 'Brahmin’s Coffee Bar', location: 'Shankarapuram', mustTry: 'Steamed Idli with coconut chutney & filter kaapi', description: 'Famous for serving no sambar, only fresh unlimited spicy coconut chutney.' },
      { spot: 'Central Tiffin Room (CTR)', location: 'Malleshwaram 7th Cross', mustTry: 'Benne Masala Dosa', description: 'Golden crispy dosa cooked with pure white country butter.' }
    ]
  },
  {
    id: 'trail-coastal-seafood',
    title: 'The Great Karavali Coastal Seafood Trail',
    region: 'Mangaluru & Udupi',
    duration: 'Full Day',
    stops: [
      { spot: 'Giri Manja’s', location: 'Car Street, Mangaluru', mustTry: 'Anjal (Kingfish) Tawa Fry & Crab Ghee Roast', description: 'Intimate tiled-roof heritage eatery serving fresh daily sea catch.' },
      { spot: 'Machali', location: 'Sharada Vidyalaya Road, Mangaluru', mustTry: 'Fish Thali with Prawn Sukka', description: 'Perennially bustling seafood temple.' },
      { spot: 'Mitra Samaj', location: 'Car Street, Udupi (near Temple)', mustTry: 'Goli Baje & Mangalore Buns', description: '75-year-old vegetarian institution right by the Krishna Mutt.' },
      { spot: 'Pabba’s Ideal Cafe', location: 'Lalbagh, Mangaluru', mustTry: 'The Royal Gudbud & Dilkush Ice Cream', description: 'Legendary ice cream destination crowned best in Karnataka.' }
    ]
  }
];

