import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTripadvisor,
  FaPaperPlane,
  FaClock
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socials = [
    { icon: FaFacebook, color: 'bg-blue-600', name: 'Facebook' },
    { icon: FaInstagram, color: 'bg-pink-600', name: 'Instagram' },
    { icon: FaTwitter, color: 'bg-sky-500', name: 'Twitter' },
    { icon: FaYoutube, color: 'bg-red-600', name: 'YouTube' },
    { icon: FaTripadvisor, color: 'bg-green-600', name: 'TripAdvisor' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Matching Destinations page */}
      <section className="relative py-20 bg-blue-900 dark:bg-blue-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          <img 
            src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_f755da48b9.jpg" 
            alt="Contact"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-7xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Plan your dream trip with our travel experts. We are here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Tell us about your travel plans and we will create the perfect Sri Lankan experience for you.
                </p>

                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 font-medium"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all"
                    required
                  />

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your tour plans..."
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-900 dark:focus:border-blue-500 transition-all resize-none"
                    required
                  />

                  <button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                  >
                    Send Message
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-900/10 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                        <FaMapMarkerAlt className="text-blue-900 dark:text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 dark:text-white mb-1">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">123 Galle Road, Colombo 03, Sri Lanka</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-900/10 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                        <FaPhone className="text-blue-900 dark:text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 dark:text-white mb-1">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+94 11 234 5678</p>
                        <p className="text-gray-600 dark:text-gray-300">+94 77 123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-900/10 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                        <FaEnvelope className="text-blue-900 dark:text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 dark:text-white mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">info@srilankatours.com</p>
                        <p className="text-gray-600 dark:text-gray-300">bookings@srilankatours.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-900/10 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                        <FaClock className="text-blue-900 dark:text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 dark:text-white mb-1">Working Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-blue-900 dark:text-white mb-4">Follow Us</h3>
                    <div className="flex flex-wrap gap-3">
                      {socials.map((social, index) => (
                        <a
                          key={index}
                          href="tel:+94703474125"
                          className={`w-12 h-12 rounded-xl ${social.color} text-white hover:scale-110 transition-all flex items-center justify-center`}
                          title={social.name}
                        >
                          <social.icon className="text-lg" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.5858590111!2d79.848205!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d8c6c0f0f%3A0x2c1c9b8b8b8b8b8b!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Google Maps"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our tours and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How do I book a tour?",
                a: "You can book directly through our website, call us, or visit our office. We'll help you choose the perfect package."
              },
              {
                q: "What's your cancellation policy?",
                a: "Free cancellation up to 7 days before the tour. Cancellations within 7 days may incur a 25% fee."
              },
              {
                q: "Do you offer custom tours?",
                a: "Yes! We specialize in creating personalized itineraries based on your preferences and budget."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit/debit cards, bank transfers, and cash payments at our office."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;