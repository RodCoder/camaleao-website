import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

const Features = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/apartamentos-piscina.jpg" 
          alt="Apartamentos com Piscina" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Feature 1 - Essência Algarvia */}
            <motion.div 
              className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm"
              variants={itemVariants}
              style={{
                backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                borderRadius: '9.89px',
                border: '0.99px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title tracking-wide">
                {t.features.essence.title}
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                {t.features.essence.description}
              </p>
            </motion.div>

            {/* Feature 2 - Vivência Inesquecível */}
            <motion.div 
              className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm"
              variants={itemVariants}
              style={{
                backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                borderRadius: '9.89px',
                border: '0.99px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title tracking-wide">
                {t.features.experience.title}
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                {t.features.experience.description}
              </p>
            </motion.div>

            {/* Feature 3 - Envolvência com a Natureza */}
            <motion.div 
              className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm"
              variants={itemVariants}
              style={{
                 backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                borderRadius: '9.89px',
                border: '0.99px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title tracking-wide">
                {t.features.nature.title}
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                {t.features.nature.description}
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;