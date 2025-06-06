import React from 'react';
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Capa.jpg"
          alt="Camaleão Terrace View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-2xl hero-text  md:bg-transparent bg-black/20 md:p-0 p-6 md:rounded-none rounded-lg">
            {/* Main Headline */}
            <motion.h1 
              className="mt-[100px] md:mt-[100px] mt-0 text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 title tracking-wide"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3
              }}
            >
              A dois passos do mar
            </motion.h1>

            {/* Description Text */}
            <motion.p 
              className="text-white text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.8
              }}
            >
              Abrace a beleza da vida costeira com um empreendimento
              sustentável e bem planeado que proporciona luxo e paz de
              espírito. Perfeitas para viver, passar férias ou até mesmo para
              alugar turístico, estas propriedades exclusivas oferecem
              flexibilidade e conveniência.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;