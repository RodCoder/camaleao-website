import React from 'react';
import { motion } from "motion/react";
import { useLanguage, Language } from './LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-1">
      {/* PT Button */}
      <motion.button
        onClick={() => handleLanguageChange('PT')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-md ${
          language === 'PT'
            ? 'text-white'
            : 'text-white/60 hover:text-white/80'
        }`}
        style={{
          backgroundColor: language === 'PT' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        PT
      </motion.button>

      {/* Divider */}
      <div className="w-px h-4 bg-white/30"></div>

      {/* EN Button */}
      <motion.button
        onClick={() => handleLanguageChange('EN')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-md ${
          language === 'EN'
            ? 'text-white'
            : 'text-white/60 hover:text-white/80'
        }`}
        style={{
          backgroundColor: language === 'EN' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSelector;