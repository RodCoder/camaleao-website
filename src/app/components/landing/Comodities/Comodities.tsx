import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

const Comodities: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const amenities = [
    {
      id: 1,
      title: t.amenities.beach.title,
      description: t.amenities.beach.description,
      icon: "/Icon praia.svg"
    },
    {
      id: 2,
      title: t.amenities.restaurants.title,
      description: t.amenities.restaurants.description,
      icon: "/Icon restaurante.svg"
    },
    {
      id: 3,
      title: t.amenities.parking.title,
      description: t.amenities.parking.description,
      icon: "/Icon park.svg"
    },
    {
      id: 4,
      title: t.amenities.viewpoint.title,
      description: t.amenities.viewpoint.description,
      icon: "/Icon_miradoro.svg"
    },
    {
      id: 5,
      title: t.amenities.trails.title,
      description: t.amenities.trails.description,
      icon: "/Icon percurso.svg"
    },
    {
      id: 6,
      title: t.amenities.cycling.title,
      description: t.amenities.cycling.description,
      icon: "/Icon ciclovia.svg"
    },
    {
      id: 7,
      title: t.amenities.habitat.title,
      description: t.amenities.habitat.description,
      icon: "/Icon camaleao.svg"
    },
    {
      id: 8,
      title: t.amenities.park.title,
      description: t.amenities.park.description,
      icon: "/velocipedes.svg"
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id='comodidades' className="py-20 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 title"
            style={{ color: 'var(--brown)' }}
            variants={headerVariants}
          >
            {t.amenities.title}
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl font-light"
            style={{ color: 'var(--brown)' }}
            variants={subtitleVariants}
          >
            {t.amenities.subtitle}
          </motion.p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              className="text-center space-y-4 p-4"
              style={{ 'background': 'rgba(86, 53, 46, 0.05)' }}
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={amenity.icon}
                    alt={`${amenity.title} icon`}
                    className="w-12 h-12"
                    style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(1676%) hue-rotate(347deg) brightness(95%) contrast(86%)' }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-l lg:text-2xl font-semibold mb-4" style={{ color: 'var(--brown)' }}>
                {amenity.title}
              </h3>

              {/* Description - Hidden on mobile */}
              <p className="hidden lg:block text-sm lg:text-m font-light leading-relaxed max-w-xs mx-auto"
                style={{ color: 'var(--brown)' }}>
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Comodities;