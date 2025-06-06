import React, { useState, useEffect } from 'react';

const LivingSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Castro Marim",
      description: "Castro Marim fica apenas a 6 minutos a pé de uma das praias mais exclusivas da região. Esta área possui um potencial excecional para um resort de praia bem definido, graças à sua localização privilegiada.",
      mainImage: "/algarve-01.png",
      overlayImage: "/flamingos.jpg",
      backgroundColor: "var(--brown)",
      imagePosition: "left", 
      icons: [
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" />
        </svg>,
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z" />
        </svg>,
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ]
    },
    {
      id: 2,
      title: "Sabor a mar",
      description: "Castro Marim fica apenas a 6 minutos a pé de uma das praias mais exclusivas da região. Esta área possui um potencial excecional para um resort de praia bem definido, graças à sua localização privilegiada.",
      mainImage: "/Restaurante.png",
      overlayImage: "/Restaurante2.png",
      backgroundColor: "var(--dark-green)",
      imagePosition: "right", 
      icons: [
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>,
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>,
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>,
        <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ]
    },
    {
      id: 3,
      title: "A calma da natureza",
      description: "Castro Marim fica apenas a 6 minutos a pé de uma das praias mais exclusivas da região. Esta área possui um potencial excecional para um resort de praia bem definido, graças à sua localização privilegiada.",
      mainImage: "/calma-01.jpg",
      overlayImage: "/calma-02.jpg",
      backgroundColor: "var(--dark-green)",
      imagePosition: "left", 
      icons: [
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="18.5" cy="17.5" r="3.5" />
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </svg>,
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>,
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
        <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const isImageLeft = currentSlideData.imagePosition === "left";

  return (
    <section 
      className="relative min-h-screen flex items-center transition-all duration-1000 ease-in-out"
      style={{ backgroundColor: currentSlideData.backgroundColor }}
    >
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Text Content */}
          <div className={`lg:col-span-6 text-white space-y-8 transition-all duration-1000 ease-in-out ${
            isImageLeft ? 'order-2 lg:order-2 text-right' : 'order-2 lg:order-1'
          }`}>
            
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold title tracking-wide">
              {currentSlideData.title}
            </h2>
            
            {/* Description */}
            <p className={`text-base lg:text-lg font-light leading-relaxed opacity-90 ${
              isImageLeft ? 'max-w-md ml-auto' : 'max-w-md'
            }`}>
              {currentSlideData.description}
            </p>

            {/* Icons */}
            <div className={`flex space-x-6 text-white/80 ${
              isImageLeft ? 'justify-end' : ''
            }`}>
              {currentSlideData.icons.map((icon, index) => (
                <div key={index} className="hover:text-white transition-colors duration-200">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className={`lg:col-span-6 relative transition-all duration-1000 ease-in-out ${
            isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
          }`}>
            
            {/* Images Container */}
            <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
              
              {/* Main Background Image - 3/4 width, aligned to side */}
              <div className={`w-full h-full rounded-2xl overflow-hidden shadow-lg ${
                isImageLeft ? 'mr-auto' : 'ml-auto'
              }`}>
                <img
                  src={currentSlideData.mainImage}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Overlay Image - positioned in the center gap between columns */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-128 lg:w-96 lg:h-108 rounded-xl overflow-hidden shadow-2xl z-10 hidden lg:block">
            <img
              src={currentSlideData.overlayImage}
              alt={`${currentSlideData.title} detail`}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LivingSlide;