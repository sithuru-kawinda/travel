import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlane, FaHotel, FaStar, FaCar, FaCity, FaHeadset, 
  FaMapMarkerAlt, FaClock, FaShieldAlt, FaHeart, 
  FaArrowRight, FaQuoteLeft, FaChevronRight, FaPlay
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    { icon: <FaPlane />, title: 'First Class Flights', desc: 'Premium air travel experience with top airlines', color: 'from-blue-500 to-blue-600' },
    { icon: <FaHotel />, title: 'Handpicked Hotels', desc: 'Luxury accommodations in prime locations', color: 'from-purple-500 to-purple-600' },
    { icon: <FaStar />, title: '5 Star Accommodations', desc: 'Top-rated stays with exceptional service', color: 'from-yellow-500 to-yellow-600' },
    { icon: <FaCar />, title: 'Latest Model Vehicles', desc: 'Comfortable transportation for your journey', color: 'from-green-500 to-green-600' },
    { icon: <FaCity />, title: '150 Premium City Tours', desc: 'Curated experiences in every destination', color: 'from-red-500 to-red-600' },
    { icon: <FaHeadset />, title: '24/7 Service', desc: 'Round-the-clock support for peace of mind', color: 'from-indigo-500 to-indigo-600' },
  ];

  const destinations = [
    { name: 'Kandy', image: 'https://imagedelivery.net/W3Iz4WACAy2J0qT0cCT3xA/didi/articles/pg7gd1tdoiapvfw3zwk01dbc/public', price: '$599', duration: '5 Days', rating: 4.8 },
    { name: 'Galle', image: 'https://gotripzi.com/_astro/galle-lk-hero.BFwPo6DW.webp', price: '$699', duration: '6 Days', rating: 4.9 },
    { name: 'Ella', image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Ella_Main_Mob_800x1000.jpg', price: '$499', duration: '4 Days', rating: 4.7 },
    { name: 'Sigiriya', image: 'https://www.honeymoonguidesrilanka.com/wp-content/uploads/2024/10/Sigiriya-1200x630-1.jpg', price: '$799', duration: '7 Days', rating: 4.9 },
  ];

  const testimonials = [
    { name: 'John Smith', location: 'USA', text: 'Amazing experience! The team made our vacation unforgettable.', rating: 5 },
    { name: 'Emma Watson', location: 'UK', text: 'Perfectly organized tour. Sri Lanka is beautiful!', rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Modern Design with Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <img 
            src="https://www.andbeyond.com/wp-content/uploads/sites/5/sri-lanka-2.jpg" 
            alt="Sri Lanka Beach"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-purple-900/50"></div>
        </div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-white text-sm font-medium">Trusted by 5000+ travelers worldwide</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
            >
              <span className="block">Discover the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Magic of Sri Lanka
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
            >
              Experience breathtaking landscapes, rich culture, and unforgettable adventures 
              with our premium travel packages.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/packages" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                Explore Packages
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition-all flex items-center gap-2">
                <FaPlay className="text-sm" />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { value: '20+', label: 'Destinations' },
                { value: '5000+', label: 'Happy Travelers' },
                { value: '4.9', label: 'Rating' },
                { value: '100%', label: 'Sustainable' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h6 className="text-orange-500 font-bold text-lg mb-2">WHY CHOOSE US</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
              Premium Travel Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              We provide the best service with attention to every detail
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`text-4xl text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaArrowRight className="text-orange-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* About Section - Modern Layout */}
<section className="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
      
      {/* Left Content - මුලින්ම display වෙන්නේ mobile එකේ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 order-2 lg:order-1"
      >
        <h6 className="text-orange-500 font-bold text-base sm:text-lg mb-2">
          ABOUT US
        </h6>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 sm:mb-6">
          Welcome to <span className="text-orange-500">Sri Lanka Tours</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
          We are passionate about creating unforgettable travel experiences in Sri Lanka. 
          With years of expertise and local knowledge, we ensure every journey is special.
        </p>
        
        {/* Features List - Responsive grid එකක් හදලා */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {[
            'Expert local guides with deep knowledge',
            'Customized itineraries for your preferences',
            'Best price guarantee & transparent pricing',
            '24/7 customer support during your trip'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaShieldAlt className="text-white text-[10px] sm:text-xs" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Button - Full width on mobile, auto on larger screens */}
        <div className="flex justify-center sm:justify-start">
          <Link 
            to="/destinations" 
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
          >
            Discover More
            <FaChevronRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
          </Link>
        </div>
      </motion.div>

      {/* Right Content - Image with Stats - Mobile එකේ උඩින් display වෙන්න */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-1/2 order-1 lg:order-2 w-full"
      >
        <div className="relative max-w-md mx-auto lg:max-w-none">
          {/* Image Container - Aspect ratio එක fix කරලා */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/3] w-full">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq5AXFkecKJEhX5JTkq93X-3V5MNXwwauCfi5AUt4ZORBKXWofbbQ8_SpPvA2OBqE7t4O_Ek-wShCLgFmhQ_3NN5PsvuTmRfncik38uR8_fsm7nTd85FVeyIvvqq3PmTOXTXZY9=w675-h390-n-k-no" 
                alt="Sri Lanka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating Card - Position adjust for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <FaHeart className="text-orange-500 text-base sm:text-xl" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white">15+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Popular Destinations - Modern Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h6 className="text-orange-500 font-bold text-lg mb-2">TOP DESTINATIONS</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
              Popular Places in Sri Lanka
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the most beautiful destinations with our exclusive packages
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-orange-400" />
                      <h3 className="text-2xl font-bold">{dest.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-orange-400" />
                        {dest.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        {dest.rating}
                      </span>
                    </div>
                    
                    <p className="text-orange-400 font-bold text-xl">Starting {dest.price}</p>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-blue-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link 
              to="/destinations"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              View All Destinations
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h6 className="text-orange-500 font-bold text-lg mb-2">TESTIMONIALS</h6>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
              What Our Travelers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative"
              >
                <FaQuoteLeft className="text-orange-200 dark:text-orange-900/30 text-6xl absolute top-4 right-4" />
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.andbeyond.com/wp-content/uploads/sites/5/sri-lanka-2.jpg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Book your dream vacation today and create memories that last a lifetime
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Now
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;