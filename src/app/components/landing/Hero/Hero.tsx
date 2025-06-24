import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Capa.jpg"
          alt="Camaleão Terrace View"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(86, 53, 46, 1) 0%, rgba(86, 53, 46, 0.5) 40%, transparent 60%)'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-[680px] hero-text mt-36 lg:mt-24 p-6 md:rounded-none">
            {/* Main Headline */}
            <motion.h1 
              className="md:mt-[40px] mt-0 text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 title tracking-wide max-w-[680px]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3
              }}
            >
              {t.hero.title}
            </motion.h1>

            {/* Description Text */}
            <motion.p 
              className="text-white text-m md:text-l font-light leading-relaxed mb-6 max-w-[680px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.8
              }}
            >
              {t.hero.description}
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;