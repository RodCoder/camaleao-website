import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

const LivingSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
    }, 12000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const isImageLeft = currentSlideData.imagePosition === "left";

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      x: isImageLeft ? 60 : -60 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: isImageLeft ? -60 : 60,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    initial: { 
      opacity: 0, 
      x: isImageLeft ? -60 : 60,
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: isImageLeft ? 60 : -60,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const overlayImageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const dotsVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.6
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        backgroundColor: currentSlideData.backgroundColor
      }}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`text-${currentSlide}`}
              className={`lg:col-span-6 text-white space-y-8 ${
                isImageLeft ? 'order-2 lg:order-2 text-right' : 'order-2 lg:order-1'
              }`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              
              {/* Title */}
              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold title tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentSlideData.title}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className={`text-base lg:text-lg font-light leading-relaxed opacity-90 ${
                  isImageLeft ? 'max-w-md ml-auto' : 'max-w-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Icons */}
              <motion.div 
                className={`flex space-x-6 text-white/80 ${
                  isImageLeft ? 'justify-end' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentSlideData.icons.map((icon, index) => (
                  <motion.div 
                    key={index} 
                    className="hover:text-white transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.4 + (index * 0.1), 
                      duration: 0.4, 
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`images-${currentSlide}`}
              className={`lg:col-span-6 relative ${
                isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
              }`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              
              {/* Images Container */}
              <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
                
                {/* Main Background Image */}
                <motion.div 
                  className={`w-full h-full rounded-2xl overflow-hidden shadow-lg ${
                    isImageLeft ? 'mr-auto' : 'ml-auto'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <img
                    src={currentSlideData.mainImage}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Overlay Image - positioned in the center gap between columns */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`overlay-${currentSlide}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-128 lg:w-96 lg:h-108 rounded-xl overflow-hidden shadow-2xl z-10 hidden lg:block"
              variants={overlayImageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img
                src={currentSlideData.overlayImage}
                alt={`${currentSlideData.title} detail`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dot Navigation */}
        <motion.div 
          className="flex justify-center space-x-3 mt-12"
          variants={dotsVariants}
          initial="initial"
          animate="animate"
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default LivingSlide;