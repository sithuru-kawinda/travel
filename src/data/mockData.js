export const destinations = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    location: 'Central Province',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    description: 'Ancient rock fortress with royal ruins, frescoes, and breathtaking summit views.',
    rating: 4.9,
    tours: 2345
  },
  {
    id: 2,
    name: 'Temple of the Tooth',
    location: 'Kandy',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80',
    description: 'A sacred Buddhist site in the heart of Kandy with deep spiritual significance.',
    rating: 4.8,
    tours: 1890
  },
  {
    id: 3,
    name: 'Galle Fort',
    location: 'Southern Province',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80',
    description: 'Historic coastal fort blending colonial charm, sea views, and boutique streets.',
    rating: 4.7,
    tours: 1567
  },
  {
    id: 4,
    name: 'Ella',
    location: 'Uva Province',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'A scenic hill-country escape with tea estates, hikes, and misty mountains.',
    rating: 4.9,
    tours: 2100
  },
  {
    id: 5,
    name: 'Yala National Park',
    location: 'Southern Province',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    description: 'A thrilling safari destination known for leopards, elephants, and wild beauty.',
    rating: 4.8,
    tours: 1432
  },
  {
    id: 6,
    name: 'Mirissa Beach',
    location: 'Southern Province',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    description: 'Golden sands, ocean sunsets, and unforgettable whale watching adventures.',
    rating: 4.6,
    tours: 1876
  }
];

export const packages = [
  {
    id: 1,
    name: 'Cultural Triangle Explorer',
    duration: '5 Days / 4 Nights',
    price: 499,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    description: 'Explore Sri Lanka’s ancient kingdoms, temples, and UNESCO heritage wonders.',
    rating: 4.8,
    reviews: 124,
    groupSize: 'Up to 10 people',
    highlights: [
      'Guided Sigiriya Rock Fortress climb',
      'Visit Anuradhapura and Polonnaruwa',
      'Explore Dambulla Cave Temple',
      'Traditional cultural show in Kandy',
      'Temple of the Tooth visit'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Colombo', description: 'Airport pickup, hotel check-in, and welcome dinner.' },
      { day: 2, title: 'Anuradhapura Discovery', description: 'Visit ancient ruins, sacred temples, and historic sites.' },
      { day: 3, title: 'Polonnaruwa & Sigiriya', description: 'Explore royal ruins and climb the iconic Sigiriya Rock.' },
      { day: 4, title: 'Dambulla to Kandy', description: 'Visit cave temple, transfer to Kandy, and enjoy a cultural show.' },
      { day: 5, title: 'Departure', description: 'Temple visit and comfortable transfer to the airport.' }
    ]
  },
  {
    id: 2,
    name: 'Hill Country Escape',
    duration: '4 Days / 3 Nights',
    price: 399,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'Travel through tea country with scenic train rides, cool weather, and mountain views.',
    rating: 4.9,
    reviews: 98,
    groupSize: 'Up to 8 people',
    highlights: [
      'Scenic train ride through the hills',
      'Tea factory and tasting experience',
      'Hike to stunning viewpoints',
      'Visit Nine Arches Bridge',
      'Waterfalls and countryside views'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kandy', description: 'Check-in, city tour, and evening cultural performance.' },
      { day: 2, title: 'Kandy to Nuwara Eliya', description: 'Beautiful train journey with tea plantation visit.' },
      { day: 3, title: 'Nuwara Eliya to Ella', description: 'Explore the hill country and enjoy scenic hikes.' },
      { day: 4, title: 'Departure', description: 'Visit iconic landmarks before airport transfer.' }
    ]
  },
  {
    id: 3,
    name: 'Beach Paradise',
    duration: '6 Days / 5 Nights',
    price: 599,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    description: 'Relax in tropical beach towns with whale watching, snorkeling, and ocean sunsets.',
    rating: 4.7,
    reviews: 156,
    groupSize: 'Up to 12 people',
    highlights: [
      'Whale watching experience',
      'Snorkeling in crystal-clear waters',
      'Beachfront dining moments',
      'Water sports activities',
      'Romantic sunset cruise'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bentota', description: 'Beachside check-in and relaxing evening.' },
      { day: 2, title: 'Bentota Adventures', description: 'Enjoy water sports and sun-soaked relaxation.' },
      { day: 3, title: 'Transfer to Unawatuna', description: 'Travel south and experience a charming coastal town.' },
      { day: 4, title: 'Unawatuna Leisure', description: 'Snorkeling, beach fun, and local dining.' },
      { day: 5, title: 'Mirissa Escape', description: 'Sunset cruise and laid-back tropical vibes.' },
      { day: 6, title: 'Departure', description: 'Morning whale watching and airport transfer.' }
    ]
  },
  {
    id: 4,
    name: 'Wildlife Safari Adventure',
    duration: '3 Days / 2 Nights',
    price: 349,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    description: 'Experience thrilling safaris through Sri Lanka’s most famous wildlife parks.',
    rating: 4.8,
    reviews: 87,
    groupSize: 'Up to 6 people',
    highlights: [
      'Jeep safari in Yala',
      'Elephant sightings in Udawalawe',
      'Bird watching with expert guides',
      'Wildlife photography opportunities',
      'Nature camp experience'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Udawalawe', description: 'Afternoon safari and evening rest in nature.' },
      { day: 2, title: 'Transfer to Yala', description: 'Morning wildlife drive and scenic road transfer.' },
      { day: 3, title: 'Yala Safari', description: 'Final safari adventure and departure.' }
    ]
  },
  {
    id: 5,
    name: 'Complete Sri Lanka Tour',
    duration: '10 Days / 9 Nights',
    price: 999,
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=900&q=80',
    description: 'The ultimate all-in-one tour covering culture, hills, wildlife, and beaches.',
    rating: 5.0,
    reviews: 234,
    groupSize: 'Up to 15 people',
    highlights: [
      'Top cultural landmarks',
      'Tea country train journey',
      'Wildlife safari experience',
      'Golden beach relaxation',
      'Authentic Sri Lankan cuisine'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Colombo', description: 'City welcome and hotel stay.' },
      { day: 2, title: 'Ancient Wonders', description: 'Explore the cultural heart of Sri Lanka.' },
      { day: 3, title: 'Sigiriya Experience', description: 'Visit iconic rock fortress and surrounding sites.' },
      { day: 4, title: 'Kandy Journey', description: 'Temple visits and cultural performance.' },
      { day: 5, title: 'Kandy Highlights', description: 'Relaxed city tour and local exploration.' },
      { day: 6, title: 'Tea Country', description: 'Travel through cool hills and tea gardens.' },
      { day: 7, title: 'Ella Escape', description: 'Scenic beauty and nature trails.' },
      { day: 8, title: 'Safari Adventure', description: 'Transfer to wildlife region and safari.' },
      { day: 9, title: 'Beach Retreat', description: 'Travel south for ocean relaxation.' },
      { day: 10, title: 'Departure', description: 'Farewell breakfast and airport drop-off.' }
    ]
  },
  {
    id: 6,
    name: 'Adventure Sports Package',
    duration: '4 Days / 3 Nights',
    price: 449,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    description: 'An action-packed journey with rafting, hiking, and surfing thrills.',
    rating: 4.6,
    reviews: 76,
    groupSize: 'Up to 8 people',
    highlights: [
      'White water rafting',
      'Mountain hiking experience',
      'Surfing lessons',
      'Waterfall adventures',
      'Outdoor camping fun'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kitulgala', description: 'Rafting and jungle trek to begin your adventure.' },
      { day: 2, title: 'Knuckles Expedition', description: 'Hiking, nature exploration, and camping.' },
      { day: 3, title: 'Arugam Bay Transfer', description: 'Travel to the east coast for surf vibes.' },
      { day: 4, title: 'Surf & Departure', description: 'Enjoy the waves and conclude the journey.' }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    location: 'United Kingdom',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'Everything was beautifully organized. The guide, the hotels, and the views were absolutely unforgettable.',
    rating: 5,
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Australia',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'A perfect balance of culture, adventure, and relaxation. Sri Lanka felt magical from start to finish.',
    rating: 5,
    date: 'February 2024'
  },
  {
    id: 3,
    name: 'Mike Chen',
    location: 'Singapore',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: 'The safari and hill country experience were amazing. One of the best trips I have ever taken.',
    rating: 5,
    date: 'January 2024'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    location: 'Canada',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    comment: 'Elegant service, lovely destinations, and memories that will stay with me forever.',
    rating: 5,
    date: 'December 2023'
  }
];