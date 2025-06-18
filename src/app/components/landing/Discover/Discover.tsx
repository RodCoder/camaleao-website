import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

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

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4
      }
    }
  };

  // const descriptionVariants = {
  //   hidden: { opacity: 0, y: 40 },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.25, 0.1, 0.25, 1],
  //       delay: 0.6
  //     }
  //   }
  // };

  // Image transition variants - crossfade without empty moment
  const imageVariants = {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const sideImageVariants = {
    enter: (opacity: number) => ({
      opacity: opacity,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id='descobrir' className="py-20 lg:py-32" style={{ backgroundColor: 'var(--brown)' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center" 
          style={{"marginBottom": "-40px","zIndex": "100", "position": "relative"}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-wide title"
            variants={headerVariants}
          >
            DESCOBRIR
          </motion.h2>
          <motion.p 
            className="text-2xl lg:text-3xl text-white/90 font-light tracking-wide title"
            variants={subtitleVariants}
          >
            Viver em harmonia
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative w-full"
          variants={carouselVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Image Container - Full Width with Overlapping Images */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            
            {/* Images with overlapping layout */}
            <div className="relative flex items-center justify-center h-full">
              
              {/* Image -2 (far left) - 10% width, z-index 1 */}
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-10"
                style={{ width: '10%', height: '60%' }}
                key={`far-left-${currentSlide}`}
                variants={sideImageVariants}
                custom={0.2}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <img
                  src={images[(currentSlide - 2 + images.length) % images.length]}
                  alt="Previous slide -2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image -1 (left) - 20% width, z-index 2 */}
              <motion.div 
                className="absolute left-[8%] top-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-20"
                style={{ width: '20%', height: '80%' }}
                key={`left-${currentSlide}`}
                variants={sideImageVariants}
                custom={0.5}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <img
                  src={images[(currentSlide - 1 + images.length) % images.length]}
                  alt="Previous slide -1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Center image (current) - larger on mobile */}
              <AnimatePresence mode="popLayout">
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-30 w-[85%] lg:w-[70%] h-full"
                  key={currentSlide}
                  variants={imageVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  <img
                    src={images[currentSlide]}
                    alt={`Descobrir ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image +1 (right) - 20% width, z-index 2 */}
              <motion.div 
                className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-20"
                style={{ width: '20%', height: '80%' }}
                key={`right-${currentSlide}`}
                variants={sideImageVariants}
                custom={0.5}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <img
                  src={images[(currentSlide + 1) % images.length]}
                  alt="Next slide +1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image +2 (far right) - 10% width, z-index 1 */}
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-10"
                style={{ width: '10%', height: '60%' }}
                key={`far-right-${currentSlide}`}
                variants={sideImageVariants}
                custom={0.2}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <img
                  src={images[(currentSlide + 2) % images.length]}
                  alt="Next slide +2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Description Text */}
        {/* <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-white/90 text-lg lg:text-xl font-light leading-relaxed">
            Um empreendimento sustentável e cuidadosamente planeado que proporciona exclusividade e tranquilidade. 
            Ideais para viver ou desfrutar de férias, estas propriedades únicas aliam exclusividade e conforto, ao encanto local.
          </p>
        </motion.div> */}

      </div>
    </section>
  );
};

export default DescobrirSection;