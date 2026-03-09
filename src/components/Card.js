import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaStar, 
  FaClock, 
  FaUsers, 
  FaUtensils, 
  FaBus, 
  FaHotel
} from 'react-icons/fa';

const Card = ({ 
  item, 
  type, // 'destination' or 'package'
  index 
}) => {
  
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 }
  };

  // Destination Card Design
  if (type === 'destination') {
    return (
      <motion.div
        {...cardAnimation}
        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
      >
        {/* Destination Image */}
        <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-orange-500 text-white font-bold py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">
            {item.price}
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-center gap-1 mb-1 sm:mb-2">
            <FaMapMarkerAlt className="text-orange-500 text-xs sm:text-sm flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
              {item.location}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-white mb-1 sm:mb-2 truncate">
            {item.name}
          </h3>
          
          <p className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
            {item.description}
          </p>
          <p className="block sm:hidden text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1 text-xs sm:text-sm" />
                <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                  {item.rating}
                </span>
              </div>
              
              <div className="hidden sm:flex items-center">
                <FaClock className="text-gray-400 mr-1 text-xs sm:text-sm" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {item.tours} tours
                </span>
              </div>
              <div className="flex sm:hidden items-center">
                <FaClock className="text-gray-400 mr-1 text-xs" />
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  {item.tours}
                </span>
              </div>
            </div>
            
            <Link 
              to={`/destinations/${item.id}`}
              className="bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
            >
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Package Card Design
  if (type === 'package') {
    return (
      <motion.div
        {...cardAnimation}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
      >
        <div className="flex flex-col md:flex-row">
          {/* Package Image */}
          <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
              ${item.price}/person
            </div>
          </div>
          
          <div className="md:w-3/5 p-6">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-2">
              {item.name}
            </h3>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center">
                <FaClock className="text-orange-500 mr-1" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{item.duration}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-orange-500 mr-1" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Max {item.maxPeople}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-3">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-bold text-gray-900 dark:text-white">{item.rating}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">({item.reviews} reviews)</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {item.locations.map((loc, i) => (
                  <span key={i} className="flex items-center text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    <FaMapMarkerAlt className="text-orange-500 mr-1 text-xs" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {item.includes.map((inc, i) => (
                  <span key={i} className="flex items-center text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                    {inc === 'Hotel' && <FaHotel className="mr-1 text-xs" />}
                    {inc === 'Meals' && <FaUtensils className="mr-1 text-xs" />}
                    {inc === 'Transport' && <FaBus className="mr-1 text-xs" />}
                    {inc}
                  </span>
                ))}
              </div>
            </div>
            
            <Link 
              to={`/package/${item.id}`}
              className="w-full bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 inline-block text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default Card;