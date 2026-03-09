import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendar, 
  FaUsers, 
  FaStar 
} from 'react-icons/fa';
import Card from '../components/Card';

const Packages = () => {
  const [selectedDuration, setSelectedDuration] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Cultural Triangle Explorer',
      duration: '5 Days / 4 Nights',
      image: 'https://www.bestoflanka.com/images/recommended-stays-sri-lanka/stay-on-the-beach-sri-lanka/01.jpg',
      description: 'Visit Kandy, Sigiriya, Anuradhapura and more',
      price: 599,
      rating: 4.8,
      reviews: 124,
      maxPeople: 15,
      locations: ['Kandy', 'Sigiriya', 'Anuradhapura'],
      includes: ['Hotel', 'Meals', 'Transport', 'Guide'],
      category: 'medium'
    },
    {
      id: 2,
      name: 'Beach Paradise',
      duration: '7 Days / 6 Nights',
      image: 'https://images.mrandmrssmith.com/images/1482x988/5889878-ahu-bay-ahungalla-sri-lanka.jpeg',
      description: 'Relax at Bentota, Mirissa and Galle beaches',
      price: 799,
      rating: 4.9,
      reviews: 156,
      maxPeople: 12,
      locations: ['Bentota', 'Mirissa', 'Galle'],
      includes: ['Hotel', 'Meals', 'Transport', 'Water Sports'],
      category: 'long'
    },
    {
      id: 3,
      name: 'Hill Country Escape',
      duration: '4 Days / 3 Nights',
      image: 'https://www.authenticindiatours.com/app/uploads/2025/09/Sri-Lanka-Kandy-Aarunya-Nature-Resort-Spa-cabin-930-875x585-c-default.jpg',
      description: 'Explore Ella, Nuwara Eliya and tea plantations',
      price: 449,
      rating: 4.7,
      reviews: 98,
      maxPeople: 10,
      locations: ['Ella', 'Nuwara Eliya', 'Bandarawela'],
      includes: ['Hotel', 'Meals', 'Transport', 'Tea Factory Tour'],
      category: 'short'
    },
    {
      id: 4,
      name: 'Wildlife Safari',
      duration: '3 Days / 2 Nights',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/61/17/27/caption.jpg?w=500&h=400&s=1',
      description: 'Yala and Udawalawe National Parks',
      price: 399,
      rating: 4.6,
      reviews: 87,
      maxPeople: 8,
      locations: ['Yala', 'Udawalawe'],
      includes: ['Hotel', 'Meals', 'Jeep Safari', 'Guide'],
      category: 'short'
    },
    {
      id: 5,
      name: 'Sri Lanka Grand Tour',
      duration: '10 Days / 9 Nights',
      image: 'https://www.ceylonexpeditions.com/medias/package_places/big/87/amaya-lake-hotel-dambulla-pre-shoot-photography-tour-packages-in-sri-lanka-ceylon-expeditions-travels.jpg',
      description: 'Complete island tour covering all highlights',
      price: 1299,
      rating: 5.0,
      reviews: 203,
      maxPeople: 20,
      locations: ['Colombo', 'Kandy', 'Ella', 'Galle', 'Sigiriya'],
      includes: ['Hotel', 'All Meals', 'Transport', 'Guide', 'Entrance Fees'],
      category: 'long'
    },
    {
      id: 6,
      name: 'Wellness Retreat',
      duration: '6 Days / 5 Nights',
      image: 'https://images.squarespace-cdn.com/content/v1/64ad361f8f8e936df259b19e/a153e3cd-beab-48eb-9ff0-48cc6afc4da9/IMG_7712.jpeg',
      description: 'Ayurveda and yoga retreat in peaceful surroundings',
      price: 899,
      rating: 4.8,
      reviews: 76,
      maxPeople: 10,
      locations: ['Bentota', 'Galle'],
      includes: ['Ayurveda Resort', 'Ayurvedic Meals', 'Yoga Classes', 'Treatments'],
      category: 'medium'
    },
  ];

  const durations = [
    { id: 'all', name: 'All Packages' },
    { id: 'short', name: 'Short (2-4 Days)' },
    { id: 'medium', name: 'Medium (5-7 Days)' },
    { id: 'long', name: 'Long (8+ Days)' },
  ];

  const filteredPackages = selectedDuration === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedDuration);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://mylankajourney.com/images/gallery/bentotoa.jpg" 
            alt="Packages Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
        </div>
        
        <div className="relative container mx-auto px-4 max-w-7xl text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Travel Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Choose your perfect Sri Lanka experience
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {durations.map(dur => (
              <button
                key={dur.id}
                onClick={() => setSelectedDuration(dur.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedDuration === dur.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
                }`}
              >
                {dur.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPackages.map((pkg, index) => (
                <Card 
                  key={pkg.id}
                  item={pkg}
                  type="package"
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No packages found for selected duration.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-extrabold text-center text-blue-900 dark:text-white mb-12">
            Why Book With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer the best prices with no hidden fees
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">Expert Local Guides</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Knowledgeable guides for the best experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're here to help anytime you need
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;