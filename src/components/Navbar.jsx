import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
          ? 'bg-[#092f73] shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-45">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/newlogo1.png"
                alt="Maroc Agency Logo"
                className="w-10 h-10 md:w-15 md:h-15 object-contain"
              />

            </Link>

            <div className="hidden md:flex space-x-45">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                      ? 'text-white bg-white/20'
                      : 'text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-5 bg-current transform transition duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-current transform transition duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden py-4 space-y-2 border-t ${scrolled || isOpen ? 'border-white/20' : 'border-white/10'
            }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.path)
                    ? 'text-white bg-white/20'
                    : 'text-white hover:bg-white/10'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
