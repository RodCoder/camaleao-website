import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <footer className="py-8 lg:py-12" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Content */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Left: Terracota Logo */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="w-[210px]">
              <img
                src="/terracota.svg"
                alt="Terracota Logo"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Center: Chameleon Logo and Links */}
          <motion.div 
            className="flex flex-col items-center space-y-4"
            variants={itemVariants}
          >
            {/* Chameleon Logo */}
            <div className="w-16 h-16 lg:w-20 lg:h-20">
              <img
                src="/icon-camaleao.svg"
                alt="Camaleão Logo"
                className="w-full h-full"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(25%) sepia(15%) saturate(2000%) hue-rotate(345deg) brightness(90%) contrast(85%)'
                }}
              />
            </div>
            
            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a 
                href={t.footer.linkLegal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--brown)' }}
              >
                {t.footer.linkLegal.text}
              </a>
              <a 
                href={t.footer.linkCookies.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--brown)' }}
              >
                {t.footer.linkCookies.text}
              </a>
            </div>
          </motion.div>

          {/* Right: Copyright */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <p className="text-sm font-light" style={{ color: 'var(--brown)' }}>
              {t.footer.copyright}
            </p>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;