import React from 'react';
import { motion } from "motion/react";

const Location: React.FC = () => {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4
      }
    }
  };

  const areaInfoVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.6
      }
    }
  };

  const chameleonVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8
      }
    }
  };

  return (
    <section id='localizacao' className="py-20 lg:py-32 relative" style={{ backgroundColor: 'var(--light-brown)' }}>
      {/* Pattern Overlay */}
      <div
          className="absolute inset-0 "
          style={{
            backgroundImage: 'url(/pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        ></div>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Image */}
          <motion.div 
            className="lg:col-span-6 z-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/location-01.png"
                alt="Castro Marim Location"
                className="w-full h-full lg:h-[800px] object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="lg:col-span-6 text-white space-y-8">

            {/* Title */}
            <motion.div 
              className="text-right mb-12"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 title tracking-wide">
                Localização
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={descriptionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-base lg:text-lg font-light leading-relaxed mb-12 opacity-90">
                Castro Marim fica apenas a 6 minutos a pé de uma das praias
                mais exclusivas da região. Esta área possui um potencial
                excepcional para um resort de praia bem definido, graças à
                sua localização privilegiada. Ao combinar de forma única a
                história, a natureza e o charme costeiro, Castro Marim oferece
                uma oportunidade muito singular para desenvolvimentos
                residenciais e turísticos.
              </p>
            </motion.div>

            {/* Area Information */}
            <motion.div 
              className="space-y-6 text-left"
              variants={areaInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 title tracking-wide">
                  Área total
                </h3>
              </div>

              {/* Distance List */}
              <div className="space-y-3 text-sm lg:text-base">
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">26 000 m²</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">450m da praia</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">3 km das autoestradas</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">58km do Aeroporto Internacional de Faro</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">153km do Aeroporto de Sevilha</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">450m dos restaurantes mais próximos</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="font-light">2km do supermercado</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Absolute Chameleon - Inverted */}
      <motion.div 
        className="absolute right-0 bottom-auto transform -translate-y-1/2 hidden lg:block"
        variants={chameleonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/chameleon-real.png"
          alt="Chameleon"
          className="w-full h-full object-cover transform scale-x-[-1]"
          style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))' }}
        />
      </motion.div>
    </section>
  );
};

export default Location;