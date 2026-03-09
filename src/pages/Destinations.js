import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import Card from '../components/Card'; 

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Kandy',
      location: 'Central Province',
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/87/3f/77.jpg',
      description: 'Sacred city with the Temple of the Tooth',
      rating: 4.8,
      tours: 45,
      price: '$100',
      category: 'cultural'
    },
    {
      id: 2,
      name: 'Galle',
      location: 'Southern Province',
      image: 'https://gotripzi.com/_astro/galle-lk-hero.BFwPo6DW.webp',
      description: 'Historic Dutch fort and beautiful beaches',
      rating: 4.7,
      tours: 38,
      price: '$100',
      category: 'beach'
    },
    {
      id: 3,
      name: 'Ella',
      location: 'Uva Province',
      image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-497592261_high.jpg',
      description: 'Scenic mountains and tea plantations',
      rating: 4.9,
      tours: 52,
      price: '$100',
      category: 'nature'
    },
    {
      id: 4,
      name: 'Sigiriya',
      location: 'Central Province',
      image: 'https://www.biofin.org/sites/default/files/content/news_media/Screenshot%202564-08-02%20at%2010.14.55.png',
      description: 'Ancient rock fortress and UNESCO site',
      rating: 4.8,
      tours: 41,
      price: '$300',
      category: 'cultural'
    },
    {
      id: 5,
      name: 'Bentota',
      location: 'Southern Province',
      image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_Bentota_Lake_800x520.jpg',
      description: 'Beautiful beaches and water sports',
      rating: 4.6,
      tours: 33,
      price: '$400',
      category: 'beach'
    },
    {
      id: 6,
      name: 'Nuwara Eliya',
      location: 'Central Province',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/27/22/4e/chilling-climate-nuwara.jpg',
      description: 'Little England with tea estates',
      rating: 4.7,
      tours: 36,
      price: '$500',
      category: 'nature'
    },
    {
      id: 7,
      name: 'Anuradhapura',
      location: 'North Central Province',
      image: 'https://thumbs.dreamstime.com/b/jaya-sri-maha-bodhi-sacred-fig-tree-mahamewna-gardens-anuradhapura-sacred-place-buddhists-sri-lanka-jaya-sri-174783595.jpg',
      description: 'Ancient capital and sacred city',
      rating: 4.5,
      tours: 29,
      price: '$600',
      category: 'cultural'
    },
    {
      id: 8,
      name: 'Mirissa',
      location: 'Southern Province',
      image: 'https://www.theglobetrottergp.com/wp-content/uploads/2019/05/oDZ1LpuSxCdJQd5UhbjSA_thumb_60bb.jpg',
      description: 'Whale watching and beautiful beaches',
      rating: 4.8,
      tours: 47,
      price: '$600',
      category: 'beach'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'beach', name: 'Beach' },
    { id: 'nature', name: 'Nature' },
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-blue-900 dark:bg-blue-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          <img 
            src="https://images.luxuryescapes.com/fl_progressive,q_auto:best,dpr_2.0/j175j564g43nc35mgnps" 
            alt="Destinations"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4">
            Our Destinations
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Discover the most beautiful places in Sri Lanka
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 sm:py-10 md:py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-72 lg:w-96">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
              />
              <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
            </div>
            
            {/* Category Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 px-2 md:px-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid - Using Shared Card Component */}
      <section className="py-12 sm:py-14 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredDestinations.map((dest, index) => (
              <Card 
                key={dest.id}
                item={dest}
                type="destination"
                index={index}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                No destinations found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Destinations;