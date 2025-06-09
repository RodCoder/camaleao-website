import React from 'react';
import { motion } from "motion/react";

// interface SocialLink {
//   name: string;
//   href: string;
//   icon: React.ReactNode;
// }

const Footer: React.FC = () => {

  // const socialLinks: SocialLink[] = [
  //   {
  //     name: "Instagram",
  //     href: "https://instagram.com/camaleao",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12.017 0C8.396 0 7.932.013 7.199.072 5.78.18 4.848.515 4.019.95a7.757 7.757 0 00-2.806 1.827A7.757 7.757 0 00.95 5.584c-.435.83-.771 1.761-.879 3.181C.013 9.51 0 9.974 0 13.595s.013 4.085.072 4.818c.108 1.42.444 2.351.879 3.181a7.757 7.757 0 001.263 2.807 7.757 7.757 0 002.807 1.263c.829.435 1.76.771 3.18.879.733.059 1.197.072 4.818.072s4.085-.013 4.818-.072c1.42-.108 2.351-.444 3.181-.879a7.757 7.757 0 002.807-1.263 7.757 7.757 0 001.263-2.807c.435-.83.771-1.761.879-3.181.059-.733.072-1.197.072-4.818s-.013-4.085-.072-4.818c-.108-1.42-.444-2.351-.879-3.181a7.757 7.757 0 00-1.263-2.807A7.757 7.757 0 0018.416.95c-.83-.435-1.761-.771-3.181-.879C14.502.013 14.038 0 10.417 0h1.6zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12.017 15.99a3.828 3.828 0 100-7.656 3.828 3.828 0 000 7.656zm7.5-12.847a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: "LinkedIn",
  //     href: "https://linkedin.com/company/camaleao",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: "Facebook",
  //     href: "https://facebook.com/camaleao",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //       </svg>
  //     )
  //   }
  // ];

  // Animation variants
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

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  };

  return (
    <footer className="py-8 lg:py-12" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Content */}
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Chameleon Logo */}
          <motion.div 
            className="flex justify-center"
            variants={logoVariants}
          >
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
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center"
            variants={textVariants}
          >
            <p className="text-sm font-light" style={{ color: 'var(--brown)' }}>
              © 2025 Camaleão. All Rights Reserved.
            </p>
          </motion.div>

          {/* Social Media Links - Hidden for now */}
          {/* <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--brown)' }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div> */}

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;