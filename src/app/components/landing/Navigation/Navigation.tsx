import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 topNav">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left Navigation */}
          <div className="hidden md:flex items-baseline space-x-6">
            <a
              href="#home"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Descobrir
            </a>
            <a
              href="#discover"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Unidades
            </a>
            <a
              href="#residential"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Comodidades
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="/CAMALEÃO_GRANDE.svg" 
              alt="Camaleão" 
              className={`h-[34px] transition-opacity duration-300`}
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-baseline space-x-6">
            <a
              href="#amenities"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Localização
            </a>
            <a
              href="#location"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Evolução
            </a>
            <a
              href="#evolution"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-amber-500 text-white hover:text-amber-300`}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Logo - shown on left on mobile */}
          <div className="md:hidden flex-shrink-0">
            <img 
              src="/CAMALEÃO_GRANDE.svg" 
              alt="Camaleão" 
              className={`h-6 transition-opacity duration-300 ${
                isScrolled ? 'opacity-80' : 'opacity-100'
              }`}
            />
          </div>
          
          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-gray-100' 
                  : 'text-white hover:text-amber-300 hover:bg-white/10'
              }`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-black/20 backdrop-blur-md'
        }`}>
          <a
            href="#home"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            INÍCIO
          </a>
          <a
            href="#discover"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            DESCOBRIR
          </a>
          <a
            href="#residential"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            UNIDADES RESIDENCIAIS
          </a>
          <a
            href="#amenities"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            COMODIDADES
          </a>
          <a
            href="#location"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            LOCALIZAÇÃO
          </a>
          <a
            href="#evolution"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            EVOLUÇÃO
          </a>
          <a
            href="#contact"
            className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-amber-600' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            CONTACTOS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;