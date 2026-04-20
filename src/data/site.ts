// ════════════════════════════════════════════════════════════════════════════
// The Alpine Homestay — Site Content Data Layer
// Single source of truth for all text, links, and structured content.
// ════════════════════════════════════════════════════════════════════════════

export const SITE = {
  name: 'The Alpine Homestay, Jakhol',
  shortName: 'The Alpine Homestay',
  tagline: 'Jakhol · Uttarkashi · Uttarakhand',
  description:
    'The Alpine Homestay Jakhol — Best Adventure Tourism Village 2024. Wooden retreat inside Govind Wildlife Sanctuary, Uttarkashi. 60 rooms, all meals included, trek base camp.',
  url: 'https://www.thealpinehomestay.in',
  ogImage: 'https://www.thealpinehomestay.in/og-image.jpg',
  phone: '',
  email: '',
  address: {
    street: '750m from Someshwar Mahadev Temple',
    locality: 'Jakhol',
    region: 'Uttarakhand',
    postalCode: '249128',
    country: 'IN',
  },
  geo: { lat: 31.016, lng: 78.098 },
  formspreeId: 'YOUR_FORMSPREE_ID', // replace with real ID
  gaId: 'G-XXXXXXXXXX', // replace with real GA4 ID
} as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Jakhol', href: '#jakhol' },
  { label: 'Region', href: '#mori' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Treks', href: '#treks' },
  { label: 'Explore', href: '#local' },
  { label: 'Reach', href: '#location' },
  { label: 'Host', href: '#host' },
] as const

export const AWARD_ITEMS = [
  { icon: '🏆', text: 'Best Adventure Tourism Village 2024 — Govt. of India' },
  { icon: '🌿', text: 'Inside Govind Wildlife Sanctuary, Uttarkashi' },
  { icon: '🏔', text: 'Trek Base Camp — Devkyara Bugal & Bardsar' },
  { icon: '🍽', text: 'All Meals Included · Cyprus Wood Architecture' },
  { icon: '📍', text: '22 km from Naitwar · 66 km from Purola' },
] as const

export const ABOUT_STATS = [
  { value: '60', label: 'Total Rooms' },
  { value: '66 km', label: 'From Purola' },
  { value: '750 m', label: 'Someshwar Temple' },
  { value: '2024', label: 'Award Year' },
] as const

export const ABOUT_CHIPS = [
  'Trekkers & Backpackers',
  'Group Stays',
  'Eco Tourism',
  'Cultural Immersion',
  'Family Friendly',
  'Apple Orchards',
] as const

export const WHY_CARDS = [
  {
    icon: '🏆',
    title: 'Award-Winning Village',
    body: "Jakhol is officially India's Best Adventure Tourism Village 2024 — a government recognition reflecting genuine cultural and ecological value, not a manufactured tourist product.",
  },
  {
    icon: '🌿',
    title: 'Inside a Wildlife Sanctuary',
    body: 'You sleep within Govind Wildlife Sanctuary — home to leopards, Himalayan black bears, snow leopards, musk deer, and 150+ bird species. Wildlife is not an excursion, it is your backyard.',
  },
  {
    icon: '🪵',
    title: 'Authentic Cyprus Wood Architecture',
    body: 'Built using centuries-old Garhwali Cyprus Wood construction — the same heritage technique as the Someshwar Mahadev Temple. Every beam tells a story passed down through generations.',
  },
  {
    icon: '🍽',
    title: 'All Meals, All Authentic',
    body: 'A local chef prepares three freshly cooked Garhwali and Kumaoni meals daily. At ₹1,600 per person, all meals are fully included. Nothing here is packaged or generic.',
  },
  {
    icon: '🏔',
    title: 'Gateway to Legendary Treks',
    body: 'Devkyara Bugal, Bardsar, Har Ki Dun, Kedarkantha, Bali Pass — all begin near your door. Rajnath arranges guided treks with local youth ensuring safe, authentic mountain experiences.',
  },
  {
    icon: '🤝',
    title: 'Direct Community Impact',
    body: 'Every rupee goes directly to the Rawat family and the Jakhol community — no middlemen, no hotel chains. Your stay restores village economies and preserves living Garhwali culture.',
  },
] as const

export const JAKHOL_FACTS = [
  {
    icon: '🌿',
    title: 'Govind Wildlife Sanctuary',
    desc: 'Entirely within a protected national park — home to snow leopard, Himalayan black bear, musk deer, and 150+ bird species including the Himalayan monal.',
  },
  {
    icon: '🛕',
    title: 'Someshwar Mahadev Temple (750m)',
    desc: 'Ancient Shiva temple with rare Cyprus Wood architecture and intricate stone carvings — 750 metres from the homestay entrance.',
  },
  {
    icon: '🛕',
    title: 'Duryodhana Temple — Mahabharata Heritage',
    desc: "One of India's only temples dedicated to Duryodhana. Locals claim descent from the Kauravas and Pandavas. The Tons River (Tamas) flows from their tears of defeat.",
  },
  {
    icon: '🏔',
    title: 'Trek Base Camp',
    desc: 'Starting point of Devkyara Bugal Trek and Bardsar Trek — two of the most spectacular high-altitude experiences in all of Garhwal Himalaya.',
  },
  {
    icon: '🍎',
    title: 'Apple Orchards',
    desc: 'The homestay is nestled in active apple orchards managed by the Rawat family with 5+ years expertise — bloom season in spring is breathtaking.',
  },
] as const

export const REGION_TABS = [
  {
    id: 'naitwar',
    label: 'Naitwar',
    facts: [
      {
        icon: '📍',
        title: 'Gateway to Govind National Park',
        body: 'Naitwar is the entry gate to Govind Pashu Vihar National Park — 22 km from Jakhol. The last significant settlement before entering the protected sanctuary, and the checkpoint for all trekkers.',
      },
      {
        icon: '🛕',
        title: 'Temple of Karna — Mahabharata Heritage',
        body: 'Naitwar houses an ancient temple dedicated to Karna, the great warrior from the Mahabharata. Alongside tall pine forests and the Lunagad Creek, this temple makes Naitwar deeply atmospheric.',
      },
      {
        icon: '🚗',
        title: 'Key Transit Point',
        body: 'Located in Mori tehsil, Uttarkashi district, 15 km from Mori headquarters. Sits at the intersection of routes toward Sankri, Jakhol, and deeper into the sanctuary.',
      },
    ],
    pills: ['22 km from Jakhol', 'Govind Park Entry', 'Karna Temple', 'Mori Block, Uttarkashi'],
  },
  {
    id: 'mori',
    label: 'Mori',
    facts: [
      {
        icon: '🌊',
        title: 'Gateway to the Tons Valley — 3,700 ft',
        body: "Mori is a village on the banks of the Tons River, regarded as the Gateway to the Tons Valley. It is a midpoint between Purola, Uttarkashi, and Hanol, and a base for river sports and mountain exploration.",
      },
      {
        icon: '🌊',
        title: 'White Water Rafting on Tons River',
        body: 'The Tons River through Mori is one of Uttarakhand\'s premier rafting destinations — originates from Bandarpunch Peak, the largest tributary of the Yamuna. Rafting season runs October to April.',
      },
      {
        icon: '🌿',
        title: 'Singtoor Range — Lunagad Creek',
        body: 'Surrounded by deodar, pine, chestnut, and jamun forests. The Lunagad Creek — a 30-minute walk from Mori — leads to a blue pool and waterfall surrounded by Asia\'s tallest pine forests.',
      },
    ],
    pills: ['30 km from Purola', 'River Rafting', 'Lunagad Creek', '3,700 ft altitude', 'Mahabharata Culture'],
  },
  {
    id: 'tons',
    label: 'Tons Valley',
    facts: [
      {
        icon: '💧',
        title: 'The Sacred River Tons (Tamas)',
        body: 'The Tons River originates from the Bandarpunch glacier — the largest tributary of the Yamuna. Local tradition holds it was born from tears of those who mourned the Kaurava defeat.',
      },
      {
        icon: '🛣',
        title: 'The Journey of a Lifetime',
        body: 'The route from Dehradun through Purola, along the Mori valley, through pine forests to Jakhol is one of the most scenic mountain drives in Uttarakhand.',
      },
      {
        icon: '🏘',
        title: 'Descendants of the Mahabharata',
        body: 'Valley inhabitants claim descent from both Kauravas and Pandavas. Unlike the rest of India, Kauravas are revered heroes here — temples to Duryodhana and Karna dot the valley.',
      },
    ],
    pills: [],
  },
  {
    id: 'govind',
    label: 'Govind Park',
    facts: [
      {
        icon: '🐆',
        title: 'Wildlife — Snow Leopards to Himalayan Birds',
        body: 'Govind Pashu Vihar hosts snow leopard, leopard, Himalayan black bear, musk deer, and Himalayan tahr. Over 150 bird species recorded including the Himalayan monal.',
      },
      {
        icon: '🏔',
        title: 'Alpine Meadows & Glacial Terrain',
        body: "Spans subtropical forests to alpine meadows (bugyals) and glaciers. Home to Devkyara, Chaainsheel, and Pushtar bugyals, all accessible from Jakhol.",
      },
      {
        icon: '🌿',
        title: 'Flora — Medicinal Herbs & Rare Trees',
        body: 'Rich in medicinal herbs, alpine flowers, deodar cedar, Himalayan oak, rhododendron, and juniper. Apple orchards at lower elevations transition into dense conifer forests.',
      },
    ],
    pills: ['Snow Leopard Habitat', '150+ Bird Species', 'Himalayan Monal', 'Alpine Bugyals', 'Glacial Streams'],
  },
] as const

export const SEASONS = [
  { icon: '🌸', title: 'Spring (Mar–May)', body: 'Best season. Blooms, clear skies, ideal for trekking. Char Dham Yatra begins. Apple orchards in full blossom around the homestay.' },
  { icon: '☀️', title: 'Summer (Jun–Aug)', body: 'Cool at altitude, lush green forests. Best for high-altitude treks. Intermittent monsoon showers add drama to the valley.' },
  { icon: '🍂', title: 'Autumn (Sep–Nov)', body: 'Crystal clear skies, golden forests, apple harvest. Excellent trekking visibility and photography conditions.' },
  { icon: '❄️', title: 'Winter (Dec–Feb)', body: 'Snow-dusted peaks, bonfire evenings, pristine silence. Perfect for Kedarkantha winter trek. Magical for those who embrace the cold.' },
] as const

export const ROOMS = [
  {
    id: 'forest',
    name: 'Forest View Room',
    floor: 'First Floor',
    capacity: '3–4 Guests',
    image: '/accomadation/forest1.webp',
    imageAlt: 'Forest View Room interior with wooden decor',
    desc: 'Pine trees on all sides, wooden walls, warm quilts. The forest breathes into your mornings — bird calls replace alarms, and the scent of deodar fills the room.',
    features: ['🌲 Pine Forest View', '🏔 Mountain Glimpse', '🪵 Wooden Framework'],
    amenities: ['🚿 Shared Washroom', '☕ Morning Tea', '🔥 Warm Bedding', '🌐 WiFi'],
  },
  {
    id: 'mountain',
    name: 'Mountain Panorama Room',
    floor: 'Upper Floor',
    capacity: '3–4 Guests',
    image: '/accomadation/forest.webp',
    imageAlt: 'Mountain Panorama Room with wooden interior and window view',
    desc: 'Elevated with sweeping Himalayan panoramas. Watch mist rise over distant peaks from your window as the valley slowly wakes below you every morning.',
    features: ['🏔 Panoramic View', '🌤 High Altitude', '🪵 Wooden Ceiling'],
    amenities: ['🚿 Shared Washroom', '☕ Morning Tea', '🔥 Warm Bedding', '🌐 WiFi'],
  },
  {
    id: 'orchard',
    name: 'Orchard Garden Room',
    floor: 'Ground Floor',
    capacity: '3–4 Guests',
    image: '/accomadation/forest2.webp',
    imageAlt: 'Orchard Garden Room with wooden interior and bedding setup',
    desc: 'Step directly into the apple orchard from your door. Spring brings blossoms, autumn brings harvest. The quietest corner — ideal for families and slow travellers.',
    features: ['🍎 Orchard Access', '🌸 Spring Blooms', '🌿 Garden Setting'],
    amenities: ['🚿 Shared Washroom', '☕ Morning Tea', '🔥 Warm Bedding', '🌐 WiFi'],
  },
] as const

export const AMENITIES = [
  { icon: '🌐', name: 'Internet', desc: 'Reliable WiFi throughout the property for staying connected' },
  { icon: '🚗', name: 'Parking', desc: 'Secure on-site parking. 300m from road via orchard footpath.' },
  { icon: '🍽', name: 'All 3 Meals', desc: 'Freshly cooked breakfast, lunch & dinner by a local chef daily' },
  { icon: '🔥', name: 'Bonfire', desc: 'Evening bonfires under the Himalayan sky — heart of every stay' },
  { icon: '♨️', name: 'Hot Water', desc: 'Running hot water throughout the day on all floors' },
  { icon: '❄️', name: 'Air Conditioning', desc: 'Climate comfort available for the warmer summer months' },
  { icon: '🚐', name: 'Pick & Drop', desc: 'Paid pickup/drop to Purola and nearby areas — book in advance' },
  { icon: '🌿', name: 'Open Seating', desc: 'Outdoor seating areas overlooking forest and mountains' },
] as const

export const GALLERY_IMAGES = [
  { src: '/visual-story-v2/img1.webp', alt: 'Visual story image 1', full: '/visual-story-v2/img1.webp', span: 'row-span-2' },
  { src: '/visual-story-v2/img2.webp', alt: 'Visual story image 2', full: '/visual-story-v2/img2.webp', span: '' },
  { src: '/visual-story-v2/img3.webp', alt: 'Visual story image 3', full: '/visual-story-v2/img3.webp', span: '' },
  { src: '/visual-story-v2/img4.webp', alt: 'Visual story image 4', full: '/visual-story-v2/img4.webp', span: '' },
  { src: '/visual-story-v2/img5.webp', alt: 'Visual story image 5', full: '/visual-story-v2/img5.webp', span: '' },
  { src: '/visual-story-v2/img6.webp', alt: 'Visual story image 6', full: '/visual-story-v2/img6.webp', span: '' },
  { src: '/visual-story-v2/img7.webp', alt: 'Visual story image 7', full: '/visual-story-v2/img7.webp', span: '' },
  { src: '/visual-story-v2/img8.webp', alt: 'Visual story image 8', full: '/visual-story-v2/img8.webp', span: '' },
  { src: '/visual-story-v2/img9.webp', alt: 'Visual story image 9', full: '/visual-story-v2/img9.webp', span: '' },
  { src: '/visual-story-v2/img10.webp', alt: 'Visual story image 10', full: '/visual-story-v2/img10.webp', span: '' },
  { src: '/visual-story-v2/img11.webp', alt: 'Visual story image 11', full: '/visual-story-v2/img11.webp', span: '' },
  { src: '/visual-story-v2/img12.webp', alt: 'Visual story image 12', full: '/visual-story-v2/img12.webp', span: '' },
  { src: '/visual-story-v2/img13.webp', alt: 'Visual story image 13', full: '/visual-story-v2/img13.webp', span: '' },
  { src: '/visual-story-v2/img14.webp', alt: 'Visual story image 14', full: '/visual-story-v2/img14.webp', span: '' },
  { src: '/visual-story-v2/img15.webp', alt: 'Visual story image 15', full: '/visual-story-v2/img15.webp', span: '' },
  { src: '/visual-story-v2/img16.webp', alt: 'Visual story image 16', full: '/visual-story-v2/img16.webp', span: '' },
  { src: '/visual-story-v2/img17.webp', alt: 'Visual story image 17', full: '/visual-story-v2/img17.webp', span: '' },
  { src: '/visual-story-v2/img18.webp', alt: 'Visual story image 18', full: '/visual-story-v2/img18.webp', span: '' },
] as const

export const ACTIVITIES = [
  { icon: '🦅', name: 'Bird Watching', detail: 'Himalayan monal, koklass pheasant & 150+ sanctuary species' },
  { icon: '🥾', name: 'Hiking & Forest Walks', detail: 'Guided and self-led walks through dense pine and oak forest' },
  { icon: '🧘', name: 'Yoga & Meditation', detail: 'Open-air mountain sessions — mornings at altitude are transformative' },
  { icon: '🏘', name: 'Village Cultural Walk', detail: "Jakhol's Cyprus Wood homes, Mahabharata temples & local crafts" },
  { icon: '⚡', name: 'Adventure Sports', detail: 'River crossing, rappelling & rock climbing with local guides' },
  { icon: '🏔', name: 'High-Altitude Trekking', detail: 'Devkyara Bugal, Har Ki Dun, Kedarkantha — all from your door' },
  { icon: '🍎', name: 'Apple Orchard Walks', detail: 'Seasonal orchard visits — spring blossoms or autumn harvest' },
  { icon: '📚', name: 'Reading & Deep Rest', detail: 'Open seating, pine-scented air, mountain wind soundtrack' },
] as const

export const DISHES = ['Aloo ke Gutke', 'Rajma', 'Dal', 'Baadi', 'Kafuli', 'Kandali ki Sabji', 'Lingda ki Sabzi', 'Laal Chawal', 'Madua ki Roti', 'Bhangjeeri Chutney'] as const

export const TREKS = [
  { name: 'Har Ki Dun Trek', diff: 'mod', base: 'Sankri' },
  { name: 'Kedarkantha Trek', diff: 'mod', base: 'Sankri' },
  { name: 'Dev Kyara Bugyal', diff: 'hard', base: 'Jakhol' },
  { name: 'Bardsar Trek', diff: 'hard', base: 'Jakhol' },
  { name: 'Chaainsheel Bugyal', diff: 'mod', base: 'Jakhol' },
  { name: 'Ruinsara Lake Trek', diff: 'hard', base: 'Taluka' },
  { name: 'Pushtar Bugyal Trek', diff: 'hard', base: 'Jakhol' },
  { name: 'Vijay Top', diff: 'mod', base: 'Jakhol' },
  { name: 'Bali Pass Trek', diff: 'exp', base: 'Sankri' },
  { name: 'Borasu Pass Trek', diff: 'exp', base: 'Gangad' },
  { name: 'DhumdharKandi Pass', diff: 'exp', base: 'Osla' },
] as const

export const TREK_HIGHLIGHTS = [
  {
    icon: '🏔',
    title: "Dev Kyara Bugyal — Jakhol's Crown Jewel",
    body: 'Starting directly from Jakhol, this trek climbs to one of Uttarakhand\'s most pristine high-altitude meadows. Rarely crowded, genuinely wild — accessible with the homestay as your base camp.',
  },
  {
    icon: '🏡',
    title: 'Har Ki Dun — Valley of Gods',
    body: "One of India's most celebrated treks — passing ancient Mahabharata-connected villages, dense forests, and alpine meadows before culminating in a glacial amphitheatre beneath Swargarohini peak.",
  },
  {
    icon: '❄️',
    title: "Kedarkantha — India's Top Winter Trek",
    body: 'Summit panoramas of Swargarohini, Bandarpunch, Black Peak, and Kala Nag. Through snow-covered pine forests — among the most visually stunning winter walks in the Himalayas.',
  },
] as const

export const LOCAL_ATTRACTIONS = [
  { icon: '🛕', name: 'Someshwar Mahadev Temple', dist: '750 metres', desc: 'Ancient Shiva temple with rare Cyprus Wood architecture — cultural heart of Jakhol, closest landmark to the homestay.' },
  { icon: '🛕', name: 'Bholenath Temple, Jakhol', dist: 'In village', desc: "One of India's only temples to Duryodhana — reflecting the valley's deep Kaurava heritage and Mahabharata connection." },
  { icon: '🏔', name: 'Leka Top', dist: '16 km', desc: 'Panoramic Himalayan viewpoint — favourite of photographers and sunrise chasers visiting the region.' },
  { icon: '🏡', name: 'Sankri Village', dist: '17 km', desc: 'Base camp for Kedarkantha and Har Ki Dun treks — preserved Himalayan village and essential trek gateway.' },
  { icon: '🏘', name: 'Kalap Village', dist: '18 km', desc: "One of India's most remote pristine traditional villages — accessible mainly on foot, untouched Garhwali culture." },
  { icon: '💧', name: 'Waterfall Kotgaon', dist: '19 km', desc: 'Multi-tiered waterfall in dense forest — perfect half-day excursion between treks.' },
  { icon: '🏞', name: 'Judatal Lake', dist: '19 km', desc: 'High-altitude alpine lake surrounded by meadows — almost entirely undiscovered, mirror-flat and hauntingly beautiful.' },
  { icon: '🛕', name: 'Pokhu Devta Temple', dist: '24 km', desc: 'Revered local temple against forested hillsides — significant in the religious calendar of Uttarkashi.' },
  { icon: '🛕', name: 'Daanveer Karna Temple', dist: '24 km', desc: "Temple honouring Karna from the Mahabharata — the valley's unique tradition of revering mythological warriors." },
  { icon: '🍎', name: 'Greenbite Apple Orchard', dist: '36 km', desc: 'Premier apple orchards — visit during harvest season for an authentic Uttarakhand farm experience.' },
  { icon: '🛕', name: 'Mahasu Devta Temple, Hanol', dist: '49 km', desc: 'Ancient revered temple in Hanol — one of the most significant religious sites in the entire Tons Valley.' },
  { icon: '🕌', name: 'Lakhamandal', dist: '99 km', desc: "Extraordinary archaeological site with hundreds of ancient Shivalingas — believed connected to the Pandavas' forest exile." },
] as const

export const TESTIMONIALS = [
  {
    initials: 'AK',
    name: 'Arjun Khanna',
    location: 'Delhi · Travel Writer & Trekker',
    text: 'The most peaceful stay I have ever had. Waking up to wind through pine trees, hot chai on the wooden balcony, mist rolling up from the valley. Rajnath and his family made us feel like we were coming home. This one has soul.',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    location: 'Mumbai · Group Trek Organiser',
    text: 'We came for the Devkyara Bugal Trek and stayed two extra days just to savour the food and silence. The Kafuli and Laal Chawal were unlike anything I had before. Rajnath arranged everything from guides to meals.',
  },
  {
    initials: 'RV',
    name: 'Rohan Verma',
    location: 'Bengaluru · Solo Backpacker',
    text: 'Jakhol is one of those places that changes you quietly. The Alpine Homestay is authentic, warm, and well-run. The Duryodhana Temple, the apple orchards, the evening bonfire, the stars. I returned three months later with my parents.',
  },
] as const

export const REACH_ITEMS = [
  { icon: '✈️', label: 'Nearest Airport', val: 'Jolly Grant Airport, Dehradun', sub: '223 km · Daily flights from Delhi, Mumbai, Bengaluru' },
  { icon: '🚂', label: 'Nearest Railway', val: 'Dehradun Railway Station — 199 km', sub: 'Haridwar Railway Station — 249 km (alternate)' },
  { icon: '🚌', label: 'By Road', val: 'Dehradun → Purola → Mori → Naitwar → Jakhol', sub: 'Uttarakhand Roadways bus to Purola, then shared jeep or cab to Jakhol' },
  { icon: '📍', label: 'Address', val: '750m from Someshwar Temple, Jakhol', sub: 'Mori Block, Uttarkashi — PIN 249128 · 22 km from Naitwar · 66 km from Purola' },
] as const

export const DISTANCE_STATS = [
  { n: '223 km', l: 'Jolly Grant Airport' },
  { n: '199 km', l: 'Dehradun Railway' },
  { n: '66 km', l: 'From Purola' },
  { n: '22 km', l: 'From Naitwar Entry' },
] as const

export const FOOTER_LINKS = {
  navigate: [
    { label: 'About the Homestay', href: '#about' },
    { label: 'Jakhol Village', href: '#jakhol' },
    { label: 'Mori & Naitwar', href: '#mori' },
    { label: 'Uttarkashi', href: '#uttarkashi' },
    { label: 'Rooms & Tariff', href: '#rooms' },
    { label: 'Facilities', href: '#amenities' },
  ],
  experiences: [
    { label: 'Activities', href: '#activities' },
    { label: 'Local Food', href: '#food' },
    { label: 'Himalayan Treks', href: '#treks' },
    { label: 'Local Attractions', href: '#local' },
    { label: 'Guest Stories', href: '#testimonials' },
    { label: 'Know Your Host', href: '#host' },
  ],
  reach: [
    { label: 'How to Reach', href: '#location' },
    { label: 'Book a Stay', href: '#booking' },
    { label: '750m from Someshwar Temple', href: '#' },
    { label: 'Jakhol, Mori Block', href: '#' },
    { label: 'Uttarkashi — PIN 249128', href: '#' },
    { label: 'Uttarakhand, India', href: '#' },
  ],
} as const

export const TARIFF_INCLUDES = [
  'Breakfast, Lunch & Dinner — all included',
  'Children 0–6 years: Complimentary (no extra bed)',
  'Children 7–12 years: 50% rate (with extra bed)',
  'Free WiFi & parking throughout your stay',
  'Bonfire evenings & open mountain seating',
  'Local cultural experiences & trek arrangements',
] as const

export const CHILD_POLICY = [
  '🧒 Ages 0–6 yrs — Complimentary (no extra bed)',
  '🧒 Ages 7–12 yrs — 50% of adult tariff (extra bed)',
  '👤 Ages 13+ — Full adult tariff applies',
] as const
