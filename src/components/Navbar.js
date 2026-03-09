import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Backdrop - Mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-blue-950/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? 'bg-white/95 dark:bg-blue-950/95 backdrop-blur-md shadow-lg py-2 sm:py-3'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="container mx-auto w-full max-w-7xl px-3 sm:px-5 md:px-6 lg:px-8">
          
          {/* Main flex container with responsive gaps */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex min-w-0 items-center gap-2 sm:gap-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative shrink-0">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/511/437/non_2x/travel-tourism-logo-isolated-on-white-background-vector.jpg"
                  alt="Sri Lanka Tours Logo"
                  className="h-10 w-10 rounded-xl object-cover shadow-lg transition-all group-hover:scale-105 group-hover:shadow-xl sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl"
                />
                <div className="absolute inset-0 rounded-xl bg-blue-900/0 transition-all duration-300 group-hover:bg-blue-900/10 lg:rounded-2xl" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold tracking-wide text-blue-900 transition-all group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-200 sm:text-base md:text-lg xl:text-xl">
                  Sri Lanka Tours
                </p>
                <p className="truncate text-[11px] font-medium text-blue-700/80 transition-all group-hover:text-blue-900 dark:text-blue-200 dark:group-hover:text-white sm:text-xs md:text-sm">
                  Explore paradise beautifully
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative whitespace-nowrap rounded-xl px-3 xl:px-4 py-2 text-sm xl:text-base font-bold transition-all duration-300 ${
                      active
                        ? 'bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-white'
                        : 'text-blue-800/90 hover:bg-blue-50 hover:text-blue-900 dark:text-white/90 dark:hover:bg-blue-800/50 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 rounded-full bg-blue-900 dark:bg-white" />
                    )}
                  </Link>
                );
              })}

              <button className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white transition-all hover:scale-110 hover:bg-blue-700 hover:shadow-lg dark:bg-white dark:text-blue-900 dark:hover:bg-blue-100">
                <FaUser className="text-sm" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-white dark:text-blue-900 dark:hover:bg-blue-100 sm:h-11 sm:w-11"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="text-sm sm:text-base" />
                ) : (
                  <FaBars className="text-sm sm:text-base" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-xl dark:border-blue-800 dark:bg-blue-950">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`mx-1 my-1 block rounded-xl px-4 py-3 text-sm font-bold transition-all sm:px-5 sm:py-4 sm:text-base ${
                      active
                        ? 'bg-blue-900 text-white shadow-lg dark:bg-white dark:text-blue-900'
                        : 'text-blue-900 hover:bg-blue-100 hover:shadow-md dark:text-white dark:hover:bg-blue-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <button className="mx-1 mt-3 flex w-[calc(100%-8px)] items-center justify-center gap-3 rounded-xl bg-blue-900 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl dark:bg-white dark:text-blue-900 dark:hover:bg-blue-100 sm:py-4 sm:text-base">
                <FaUser className="text-sm sm:text-base" />
                <span>Sign In / Register</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;