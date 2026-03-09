import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sri Lanka Tours</h3>
            <p className="text-gray-300 mb-4">
              Discover the beauty of Sri Lanka with our expert guides and premium travel packages.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" className="bg-blue-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <FaFacebook />
              </a>
              <a href="https://www.facebook.com/" className="bg-blue-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/" className="bg-blue-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" className="bg-blue-800 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-all">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-orange-400 transition-all">Destinations</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-orange-400 transition-all">Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-all">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/" className="text-gray-300 hover:text-orange-400 transition-all">FAQs</a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="text-gray-300 hover:text-orange-400 transition-all">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="text-gray-300 hover:text-orange-400 transition-all">Terms & Conditions</a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="text-gray-300 hover:text-orange-400 transition-all">Cancellation Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <span className="text-gray-300">No. 123, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-orange-400" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <span className="text-gray-300">info@srilankatours.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Sri Lanka Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;