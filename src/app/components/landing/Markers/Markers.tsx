import React from 'react';
import { motion } from "motion/react";

const Markers = () => {
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
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full" fill="#56352E" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">A 750m da praia</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full" fill="#56352E" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">A 3.8 km da autoestrada</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full" fill="#56352E" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">A 58 km do Aeroporto Internacional de Faro</span>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full" fill="#56352E" viewBox="0 0 24 24">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">A 450 m dos restaurantes mais próximos</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Markers;