import React, { useState, useEffect } from 'react';

const Discover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - replace with your actual images
  const images = [
    '/descobrir-1.jpg',
    '/descobrir-2.jpg',
    '/descobrir-3.jpg',
    '/descobrir-4.jpg',
    '/descobrir-5.jpg'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-wide title">
            DESCOBRIR
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 font-light title">
            Viver em harmonia
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          
          {/* Image Container */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
            
            {/* Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Descobrir ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
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

export default Discover;