import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaCalendar, 
  FaUsers, 
  FaStar, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaBus, 
  FaHotel,
  FaCheck,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaArrowLeft
} from 'react-icons/fa';

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);

  const packagesData = {
    "1": {
      id: 1,
      name: 'Cultural Triangle Explorer',
      duration: '5 Days / 4 Nights',
      mainImage: 'https://d3a2q5al71qg9.cloudfront.net/2014/08/Heritance-Kandalama.jpg',
      gallery: [
        'https://www.bestoflanka.com/images/recommended-stays-sri-lanka/stay-on-the-beach-sri-lanka/01.jpg',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Visit Kandy, Sigiriya, Anuradhapura and more',
      fullDescription: 'Embark on a journey through Sri Lanka\'s cultural heartland. Visit the sacred Temple of the Tooth in Kandy, climb the ancient Sigiriya rock fortress, explore the ruins of Anuradhapura, and experience the vibrant local culture. This package includes expert guides, comfortable accommodations, and all transportation.',
      price: 599,
      rating: 4.8,
      reviews: 124,
      maxPeople: 15,
      locations: ['Kandy', 'Sigiriya', 'Anuradhapura'],
      includes: ['Hotel', 'Meals', 'Transport', 'Guide'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Visa Fees'],
      itinerary: [
        { day: 1, title: 'Arrival in Kandy', description: 'Arrive at Bandaranaike International Airport. Meet your guide and transfer to Kandy. Evening cultural show and dinner.' },
        { day: 2, title: 'Kandy City Tour', description: 'Visit Temple of the Tooth, Royal Botanical Gardens, and traditional batik factory.' },
        { day: 3, title: 'Sigiriya Rock', description: 'Early morning climb of Sigiriya Rock Fortress. Visit Dambulla Cave Temple.' },
        { day: 4, title: 'Anuradhapura', description: 'Explore ancient capital Anuradhapura with its dagobas and ruins.' },
        { day: 5, title: 'Departure', description: 'Breakfast and transfer to airport for departure.' },
      ],
      category: 'medium'
    },
    "2": {
      id: 2,
      name: 'Beach Paradise',
      duration: '7 Days / 6 Nights',
      mainImage: 'https://images.mrandmrssmith.com/images/1482x988/5889878-ahu-bay-ahungalla-sri-lanka.jpeg',
      gallery: [
        'https://images.mrandmrssmith.com/images/1482x988/5889878-ahu-bay-ahungalla-sri-lanka.jpeg',
        'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Relax at Bentota, Mirissa and Galle beaches',
      fullDescription: 'Experience the best of Sri Lanka\'s coastline. Relax on pristine beaches in Bentota, go whale watching in Mirissa, explore the historic Galle Fort, and enjoy water sports. This package offers the perfect blend of relaxation and adventure along the southern coast.',
      price: 799,
      rating: 4.9,
      reviews: 156,
      maxPeople: 12,
      locations: ['Bentota', 'Mirissa', 'Galle'],
      includes: ['Hotel', 'Meals', 'Transport', 'Water Sports'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Alcoholic Beverages'],
      itinerary: [
        { day: 1, title: 'Arrival in Bentota', description: 'Transfer to Bentota beach resort. Evening at leisure.' },
        { day: 2, title: 'Bentota Beach', description: 'Water sports including jet skiing, banana boat, and snorkeling.' },
        { day: 3, title: 'Galle Fort', description: 'Day trip to Galle Fort. Explore Dutch colonial architecture.' },
        { day: 4, title: 'Mirissa', description: 'Transfer to Mirissa. Evening beach relaxation.' },
        { day: 5, title: 'Whale Watching', description: 'Early morning whale watching tour. Visit Coconut Tree Hill.' },
        { day: 6, title: 'Beach Day', description: 'Free day to enjoy Mirissa beach and local cafes.' },
        { day: 7, title: 'Departure', description: 'Transfer to airport for departure.' },
      ],
      category: 'long'
    },
    "3": {
      id: 3,
      name: 'Hill Country Escape',
      duration: '4 Days / 3 Nights',
      mainImage: 'https://www.authenticindiatours.com/app/uploads/2025/09/Sri-Lanka-Kandy-Aarunya-Nature-Resort-Spa-cabin-930-875x585-c-default.jpg',
      gallery: [
        'https://www.authenticindiatours.com/app/uploads/2025/09/Sri-Lanka-Kandy-Aarunya-Nature-Resort-Spa-cabin-930-875x585-c-default.jpg',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Explore Ella, Nuwara Eliya and tea plantations',
      fullDescription: 'Journey through Sri Lanka\'s breathtaking hill country. Visit tea plantations in Nuwara Eliya, hike through scenic Ella, ride the famous train through misty mountains, and experience the cool climate and stunning views of the central highlands.',
      price: 449,
      rating: 4.7,
      reviews: 98,
      maxPeople: 10,
      locations: ['Ella', 'Nuwara Eliya', 'Bandarawela'],
      includes: ['Hotel', 'Meals', 'Transport', 'Tea Factory Tour'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Train Tickets'],
      itinerary: [
        { day: 1, title: 'Arrival in Nuwara Eliya', description: 'Transfer to Nuwara Eliya. Visit a tea factory and plantation.' },
        { day: 2, title: 'Nuwara Eliya to Ella', description: 'Scenic train ride to Ella. Visit Nine Arches Bridge.' },
        { day: 3, title: 'Ella Rock Hike', description: 'Early morning hike to Ella Rock. Visit Little Adam\'s Peak.' },
        { day: 4, title: 'Departure', description: 'Transfer to airport or next destination.' },
      ],
      category: 'short'
    },
    "4": {
      id: 4,
      name: 'Wildlife Safari',
      duration: '3 Days / 2 Nights',
      mainImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/61/17/27/caption.jpg?w=500&h=400&s=1',
      gallery: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/61/17/27/caption.jpg?w=500&h=400&s=1',
        'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Yala and Udawalawe National Parks',
      fullDescription: 'Experience Sri Lanka\'s incredible wildlife. Go on safari in Yala National Park to spot leopards, elephants, and crocodiles. Visit Udawalawe National Park for guaranteed elephant sightings. Perfect for nature enthusiasts and photographers.',
      price: 399,
      rating: 4.6,
      reviews: 87,
      maxPeople: 8,
      locations: ['Yala', 'Udawalawe'],
      includes: ['Hotel', 'Meals', 'Jeep Safari', 'Guide'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Binoculars'],
      itinerary: [
        { day: 1, title: 'Arrival in Tissamaharama', description: 'Transfer to hotel near Yala. Evening village tour.' },
        { day: 2, title: 'Yala Safari', description: 'Full day safari in Yala National Park. Picnic lunch.' },
        { day: 3, title: 'Udawalawe Safari', description: 'Morning safari in Udawalawe. Afternoon departure.' },
      ],
      category: 'short'
    },
    "5": {
      id: 5,
      name: 'Sri Lanka Grand Tour',
      duration: '10 Days / 9 Nights',
      mainImage: 'https://www.ceylonexpeditions.com/medias/package_places/big/87/amaya-lake-hotel-dambulla-pre-shoot-photography-tour-packages-in-sri-lanka-ceylon-expeditions-travels.jpg',
      gallery: [
        'https://www.ceylonexpeditions.com/medias/package_places/big/87/amaya-lake-hotel-dambulla-pre-shoot-photography-tour-packages-in-sri-lanka-ceylon-expeditions-travels.jpg',
        'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Complete island tour covering all highlights',
      fullDescription: 'The ultimate Sri Lanka experience covering the entire island. From cultural sites to beaches, wildlife to hill country, this comprehensive tour includes all major attractions with expert guides and premium accommodations.',
      price: 1299,
      rating: 5.0,
      reviews: 203,
      maxPeople: 20,
      locations: ['Colombo', 'Kandy', 'Ella', 'Galle', 'Sigiriya'],
      includes: ['Hotel', 'All Meals', 'Transport', 'Guide', 'Entrance Fees'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Visa Fees'],
      itinerary: [
        { day: 1, title: 'Arrival in Colombo', description: 'Airport pickup and transfer to Colombo hotel.' },
        { day: 2, title: 'Colombo to Sigiriya', description: 'Visit Pinnawala Elephant Orphanage. Climb Sigiriya Rock.' },
        { day: 3, title: 'Sigiriya to Kandy', description: 'Visit Dambulla Cave Temple. Transfer to Kandy.' },
        { day: 4, title: 'Kandy', description: 'Temple of the Tooth, Botanical Gardens, cultural show.' },
        { day: 5, title: 'Kandy to Nuwara Eliya', description: 'Tea plantations and scenic drive to hill country.' },
        { day: 6, title: 'Nuwara Eliya to Ella', description: 'Train ride to Ella. Visit Nine Arches Bridge.' },
        { day: 7, title: 'Ella to Yala', description: 'Morning hike. Transfer to Yala for safari.' },
        { day: 8, title: 'Yala to Galle', description: 'Morning safari. Transfer to Galle Fort.' },
        { day: 9, title: 'Galle to Bentota', description: 'Explore Galle Fort. Beach time in Bentota.' },
        { day: 10, title: 'Departure', description: 'Transfer to airport for departure.' },
      ],
      category: 'long'
    },
    "6": {
      id: 6,
      name: 'Wellness Retreat',
      duration: '6 Days / 5 Nights',
      mainImage: 'https://images.squarespace-cdn.com/content/v1/64ad361f8f8e936df259b19e/a153e3cd-beab-48eb-9ff0-48cc6afc4da9/IMG_7712.jpeg',
      gallery: [
        'https://images.squarespace-cdn.com/content/v1/64ad361f8f8e936df259b19e/a153e3cd-beab-48eb-9ff0-48cc6afc4da9/IMG_7712.jpeg',
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Ayurveda and yoga retreat in peaceful surroundings',
      fullDescription: 'Rejuvenate your mind, body, and soul with our wellness retreat. Experience traditional Ayurvedic treatments, daily yoga sessions, meditation, and healthy organic meals in a peaceful beachfront setting.',
      price: 899,
      rating: 4.8,
      reviews: 76,
      maxPeople: 10,
      locations: ['Bentota', 'Galle'],
      includes: ['Ayurveda Resort', 'Ayurvedic Meals', 'Yoga Classes', 'Treatments'],
      excludes: ['Flight', 'Travel Insurance', 'Personal Expenses', 'Spa Extras'],
      itinerary: [
        { day: 1, title: 'Arrival', description: 'Check-in to wellness resort. Initial Ayurvedic consultation.' },
        { day: 2, title: 'Wellness Day', description: 'Morning yoga, Ayurvedic treatments, meditation session.' },
        { day: 3, title: 'Wellness Day', description: 'Yoga, treatments, cooking class for healthy meals.' },
        { day: 4, title: 'Excursion to Galle', description: 'Morning yoga. Afternoon visit to Galle Fort.' },
        { day: 5, title: 'Wellness Day', description: 'Full day of treatments, yoga, and beach meditation.' },
        { day: 6, title: 'Departure', description: 'Morning yoga. Check-out and transfer.' },
      ],
      category: 'medium'
    },
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setPackageDetails(packagesData[id]);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageDetails) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Package Not Found</h2>
          <Link to="/packages" className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all">
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={packageDetails.mainImage} 
            alt={packageDetails.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 max-w-7xl flex items-end pb-16">
          <div className="text-white">
            <Link 
              to="/packages" 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4 hover:bg-white/30 transition-all"
            >
              <FaArrowLeft /> Back to Packages
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              {packageDetails.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 text-lg"
            >
              <span className="flex items-center gap-1">
                <FaClock /> {packageDetails.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaUsers /> Max {packageDetails.maxPeople} people
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {packageDetails.rating} ({packageDetails.reviews} reviews)
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {packageDetails.fullDescription}
                </p>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Itinerary</h2>
                <div className="space-y-4">
                  {packageDetails.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-900/10 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-900 dark:text-blue-400">Day {item.day}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {packageDetails.gallery.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-all cursor-pointer"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sticky top-24"
              >
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-900 dark:text-white">${packageDetails.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/person</span>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Travelers
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 mb-4">
                  Book Now - ${packageDetails.price * travelers}
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-6">
                  No payment required now
                </p>

                {/* What's Included */}
                <div className="mb-6">
                  <h3 className="font-bold text-blue-900 dark:text-white mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {packageDetails.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FaCheck className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Excluded */}
                <div className="mb-6">
                  <h3 className="font-bold text-blue-900 dark:text-white mb-3">What's Excluded</h3>
                  <ul className="space-y-2">
                    {packageDetails.excludes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FaTimes className="text-red-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-bold text-blue-900 dark:text-white mb-3">Need Help?</h3>
                  <div className="space-y-2">
                    <a href="tel:+94112345678" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-900">
                      <FaPhone className="text-blue-900" /> +94 11 234 5678
                    </a>
                    <a href="mailto:info@srilankatours.com" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-900">
                      <FaEnvelope className="text-blue-900" /> info@srilankatours.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;