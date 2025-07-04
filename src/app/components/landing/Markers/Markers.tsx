import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

const Markers = () => {
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
    <section className=" py-12" style={{ minHeight: '150px' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full">
          {/* Feature Icons Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-gray-800 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(1676%) hue-rotate(347deg) brightness(95%) contrast(86%)' }}>
              <img 
                  src="/Motorway.svg" 
                  alt="Motorway icon" 
                  className="w-full h-full"
                />
              </div>
              <span className="text-m font-medium">{t.markers.beach}</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(1676%) hue-rotate(347deg) brightness(95%) contrast(86%)' }}>
                <img 
                  src="/Restaurant.svg" 
                  alt="Restaurant icon" 
                  className="w-full h-full"
                />
              </div>
              <span className="text-m font-medium">{t.markers.restaurants}</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(1676%) hue-rotate(347deg) brightness(95%) contrast(86%)' }}>
                <img 
                  src="/Border.svg" 
                  alt="Airport icon" 
                  className="w-full h-full"
                />
              </div>
              <span className="text-m font-medium">{t.markers.airport}</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(1676%) hue-rotate(347deg) brightness(95%) contrast(86%)' }}>
               
                 <img 
                  src="/Beach.svg" 
                  alt="Beach icon" 
                  className="w-full h-full"
                />
              </div>
              <span className="text-m font-medium">{t.markers.highway}</span>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Markers;