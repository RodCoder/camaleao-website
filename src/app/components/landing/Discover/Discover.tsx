import React, { useState, useEffect } from 'react';

const DescobrirSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - replace with your actual images
  const images = [
    '/apartamentos-piscina.jpg',
    '/Apartamentos (2).png',
    '/Apartamentos.jpg',
    '/Apartamentos.png',
    '/Moradias.png'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--brown)' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 title tracking-wide">
            DESCOBRIR
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 title font-light">
            Viver em harmonia
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full mb-12">
          
          {/* Image Container - Full Width with Overlapping Images */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            
            {/* Images with overlapping layout */}
            <div className="relative flex items-center justify-center h-full">
              
              {/* Image -2 (far left) - 10% width, z-index 1 */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden opacity-20 transition-all duration-500 z-10"
                style={{ width: '10%', height: '60%' }}
              >
                <img
                  src={images[(currentSlide - 2 + images.length) % images.length]}
                  alt="Previous slide -2"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image -1 (left) - 20% width, z-index 2 */}
              <div 
                className="absolute left-[8%] top-1/2 -translate-y-1/2 rounded-xl overflow-hidden opacity-50 transition-all duration-500 z-20"
                style={{ width: '20%', height: '80%' }}
              >
                <img
                  src={images[(currentSlide - 1 + images.length) % images.length]}
                  alt="Previous slide -1"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Center image (current) - 70% width, z-index 3 */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden transition-all duration-500 z-30"
                style={{ width: '70%', height: '100%' }}
              >
                <img
                  src={images[currentSlide]}
                  alt={`Descobrir ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image +1 (right) - 20% width, z-index 2 */}
              <div 
                className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded-xl overflow-hidden opacity-50 transition-all duration-500 z-20"
                style={{ width: '20%', height: '80%' }}
              >
                <img
                  src={images[(currentSlide + 1) % images.length]}
                  alt="Next slide +1"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image +2 (far right) - 10% width, z-index 1 */}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden opacity-20 transition-all duration-500 z-10"
                style={{ width: '10%', height: '60%' }}
              >
                <img
                  src={images[(currentSlide + 2) % images.length]}
                  alt="Next slide +2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group z-40"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group z-40"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-white/90 text-lg lg:text-xl font-light leading-relaxed">
            Um empreendimento sustentável e cuidadosamente planeado que proporciona exclusividade e tranquilidade. 
            Ideais para viver ou desfrutar de férias, estas propriedades únicas aliam exclusividade e conforto, ao encanto local.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DescobrirSection;