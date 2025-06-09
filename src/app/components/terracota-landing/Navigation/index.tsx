import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 bg-transparent`}>
      <div className="max-w-[1166px] mx-auto px-4 sm:px-6 lg:px-8 topNav backdrop-blur-sm">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left Navigation - Desktop Only */}
          <div className="hidden md:flex items-baseline space-x-6">
            <a
              href="#descobrir"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Descobrir
            </a>
            <a
              href="#unidades"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Unidades
            </a>
            <a
              href="#comodidades"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Comodidades
            </a>
          </div>

          {/* Centered Logo - Desktop Only */}
          <div className="hidden md:block flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <button onClick={scrollToTop} className="cursor-pointer">
              <img 
                src="/CAMALEÃO_GRANDE.svg" 
                alt="Camaleão" 
                className={`h-[34px] transition-opacity duration-300 hover:opacity-80`}
              />
            </button>
          </div>

          {/* Right Navigation - Desktop Only */}
          <div className="hidden md:flex items-baseline space-x-6">
            <a
              href="#localizacao"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Localização
            </a>
            <a
              href="#evolucao"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Evolução
            </a>
            <a
              href="#contacto"
              className="px-3 py-2 text-sm font-medium transition-colors duration-300 text-white hover-light-brown"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Logo - Left Side */}
            <div className="flex-shrink-0">
              <img 
                src="/CAMALEÃO_GRANDE.svg" 
                alt="Camaleão" 
                className="h-6 transition-opacity duration-300"
              />
            </div>
            
            {/* Mobile hamburger menu button - Right Side */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 text-white hover:bg-white/10"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="mx-4 px-4 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md">
          <a
            href="#descobrir"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Descobrir
          </a>
          <a
            href="#unidades"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Unidades
          </a>
          <a
            href="#comodidades"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Comodidades
          </a>
          <a
            href="#localizacao"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Localização
          </a>
          <a
            href="#evolucao"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Evolução
          </a>
          <a
            href="#contacto"
            onClick={closeMobileMenu}
            className="block px-3 py-2 text-base font-medium transition-colors duration-300 text-white hover-light-brown"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Custom CSS for hover effect */}
      <style jsx>{`
        .hover-light-brown:hover {
          color: var(--light-brown);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;