import React, { useRef } from 'react';
import { motion } from "motion/react";

interface Property {
  id: number;
  type: string;
  price: string;
  subtitle: string;
  image: string;
  link?: string;
  badge?: string;
  specs: {
    inicioObras: string;
    areaBruta: string;
    areaTotal: string;
    valorMovel: string;
  };
}

const Units: React.FC = () => {
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, scrollRef: React.RefObject<HTMLDivElement | null>): void => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = (): void => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      slider.style.cursor = 'grab';
    };

    slider.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Separate handlers for each container
  const handleDesktopMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    handleMouseDown(e, desktopScrollRef);
  };

  const handleMobileMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    handleMouseDown(e, mobileScrollRef);
  };
  // Property data - 6 cards as requested
  const properties: Property[] = [
    {
      id: 1,
      type: "Apartamento",
      price: "840 000 €",
      subtitle: "TIPOLOGIA: T2",
      image: "/apartamento1.png",
      link: "https://properties.terracota.capital/property/apartment-b1/21388247",
      specs: {
        inicioObras: "2026",
        areaBruta: "164 m²",
        areaTotal: "249 m²",
        valorMovel: "840 000 €"
      }
    },
    {
      id: 2,
      type: "Apartamento",
      price: "1 350 000 €",
      subtitle: "TIPOLOGIA: T3",
      image: "/apartamento2.png",
      link: "https://properties.terracota.capital/property/apartment-c/21388245",
      specs: {
        inicioObras: "2026",
        areaBruta: "203 m²",
        areaTotal: "350 m²",
        valorMovel: "1 350 000 €"
      }
    },
    {
      id: 3,
      type: "Apartamento",
      price: "440 000 €",
      subtitle: "TIPOLOGIA: ESTÚDIO",
      image: "/apartamento3.jpg",
      link: "https://properties.terracota.capital/property/apartment-e/21388243",
      specs: {
        inicioObras: "2026",
        areaBruta: "45 m²",
        areaTotal: "65 m²",
        valorMovel: "440 000 €"
      }
    },
    {
      id: 4,
      type: "Moradia",
      price: "790 000 €",
      subtitle: "Tipologia T2",
      badge: "Early bird price",
      image: "/moradia1.png",
      link: "https://properties.terracota.capital/property/2-bedroom-villa-with-pool/22948689",
      specs: {
        inicioObras: "2026",
        areaBruta: "105 m²",
        areaTotal: "227 m²",
        valorMovel: "790 000 €"
      }
    },
    {
      id: 5,
      type: "Moradia",
      price: "990 000 €",
      subtitle: "Tipologia T2",
      image: "/moradia2.jpg",
      link: "https://properties.terracota.capital/property/2-bedroom-villa-with-pool-integrated-social-space/23022753",
      specs: {
        inicioObras: "2026",
        areaBruta: "164 m²",
        areaTotal: "308 m²",
        valorMovel: "990 000 €"
      }
    },
    {
      id: 6,
      type: "Moradia",
      price: "1 160 000 €",
      subtitle: "Vista campo | Tipologia T2",
      image: "/moradia3.jpg",
      link: "https://properties.terracota.capital/property/2-bedroom-villa-with-pool-sea-view/22948826",
      specs: {
        inicioObras: "2026",
        areaBruta: "166 m²",
        areaTotal: "282 m²",
        valorMovel: "1 160 000 €"
      }
    }
    // {
    //   id: 7,
    //   type: "Moradia",
    //   price: "1 150 000 €",
    //   subtitle: "Vista mar | Tipologia T2",
    //   image: "/moradia4.png",
    //   specs: {
    //     inicioObras: "2026",
    //     areaBruta: "180 m²",
    //     areaTotal: "320 m²",
    //     valorMovel: "1 150 000 €"
    //   }
    // }
  ];

  // Duplicate the array for seamless infinite scroll (desktop only)
  const duplicatedProperties = [...properties, ...properties];

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

  const carouselVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.5
      }
    }
  };

  return (
    <section id='unidades' className="py-20 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 title" style={{ color: 'var(--brown)' }}>
            Unidades Residenciais
          </h2>
        </motion.div>
      </div>

      {/* Scrollable Cards for both Desktop and Mobile */}
      <motion.div 
        className="relative w-full"
        variants={carouselVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Desktop version - scrollable with larger cards */}
        <div 
          ref={desktopScrollRef}
          className="hidden lg:block overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab"
          onMouseDown={handleDesktopMouseDown}
          style={{ userSelect: 'none' }}
        >
          <div className="flex space-x-8 px-4 pb-4" style={{ width: 'max-content' }}>
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-[480px] rounded-2xl overflow-hidden shadow-lg relative"
              >
                {/* Background Image */}
                <div className="relative h-[620px]">
                  <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(86, 53, 46, 1) 0%, rgba(86, 53, 46, 0.5) 40%, transparent 60%)'
                    }}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">

                    {/* Top Section - Type and Price */}
                    <div className="flex justify-between items-start">
                      {/* Left side - Title and Subtitle */}
                      <div>
                        <h3 className="text-4xl font-bold mb-1 title tracking-wide">{property.type}</h3>
                        <p className="text-l opacity-90 font-bold">{property.subtitle}</p>
                        {property.badge && (
                          <span className="inline-block text-white text-xs px-3 py-2 rounded mt-2 font-bold" style={{"background": "var(--brown)"}}>
                            {property.badge}
                          </span>
                        )}
                      </div>

                      {/* Right side - Price */}
                      <div className="text-right">
                        <div className="text-4xl font-bold title tracking-wide">{property.price}</div>
                      </div>
                    </div>

                    {/* Bottom Section - Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>INÍCIO DAS OBRAS:</span>
                        <span className="font-medium">{property.specs.inicioObras}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>ÁREA BRUTA PRIVATIVA:</span>
                        <span className="font-medium">{property.specs.areaBruta}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>ÁREA TOTAL:</span>
                        <span className="font-medium">{property.specs.areaTotal}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>VALOR DO IMÓVEL:</span>
                        <span className="font-medium">{property.specs.valorMovel}</span>
                      </div>
                      <div className='w-full flex items-center '>
                        {/* More Info Button */}
                        <button
                          className="w-[250px] mt-4 py-3 backdrop-blur-sm text-white font-medium rounded-full transition-all duration-200 mx-auto hover:bg-white/20 cursor-pointer"
                          style={{ "border": "1px solid var(--light-brown)", "backgroundColor": "rgba(86, 53, 46, 0.1)" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (property.link) {
                              window.open(property.link, '_blank');
                            }
                          }}
                        >
                          Mais informações
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile version - touch scrollable with smaller cards */}
        <div 
          ref={mobileScrollRef}
          className="lg:hidden overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab"
          onMouseDown={handleMobileMouseDown}
          style={{ userSelect: 'none' }}
        >
          <div className="flex space-x-6 px-4 pb-4" style={{ width: 'max-content' }}>
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden shadow-lg relative"
              >
                {/* Background Image */}
                <div className="relative h-[480px]">
                  <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(86, 53, 46, 1) 0%, rgba(86, 53, 46, 0.5) 40%, transparent 60%)'
                    }}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">

                    {/* Top Section - Type and Price */}
                    <div className="flex justify-between items-start">
                      {/* Left side - Title and Subtitle */}
                      <div>
                        <h3 className="text-2xl font-bold mb-1 title tracking-wide">{property.type}</h3>
                        <p className="text-sm opacity-90 font-bold">{property.subtitle}</p>
                        {property.badge && (
                          <span className="inline-block text-white text-xs px-2 py-1 rounded mt-2 font-bold" style={{"background": "var(--brown)"}}>
                            {property.badge}
                          </span>
                        )}
                      </div>

                      {/* Right side - Price */}
                      <div className="text-right">
                        <div className="text-xl font-bold title tracking-wide">{property.price}</div>
                      </div>
                    </div>

                    {/* Bottom Section - Details */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span>INÍCIO DAS OBRAS:</span>
                        <span className="font-medium">{property.specs.inicioObras}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>ÁREA BRUTA PRIVATIVA:</span>
                        <span className="font-medium">{property.specs.areaBruta}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>ÁREA TOTAL:</span>
                        <span className="font-medium">{property.specs.areaTotal}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>VALOR DO IMÓVEL:</span>
                        <span className="font-medium">{property.specs.valorMovel}</span>
                      </div>
                      <div className='w-full flex items-center '>
                        {/* More Info Button */}
                        <button
                          className="w-full mt-3 py-2 backdrop-blur-sm text-white text-sm font-medium rounded-full transition-all duration-200 mx-auto hover:bg-white/20 cursor-pointer"
                          style={{ "border": "1px solid var(--light-brown)", "backgroundColor": "rgba(86, 53, 46, 0.1)" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (property.link) {
                              window.open(property.link, '_blank');
                            }
                          }}
                        >
                          Mais informações
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* View All Button */}
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button 
            className="px-8 py-3 text-white font-medium rounded-full transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'var(--brown)' }}
            onClick={() => window.open('https://properties.terracota.capital/development/camaleao/21388242', '_blank')}
          >
            Ver todas as unidades
          </button>
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar and drag styling */}
      <style jsx>{`
        /* Hide scrollbar for both desktop and mobile */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Smooth scrolling behavior */
        .scrollbar-hide {
          scroll-behavior: smooth;
        }

        /* Prevent text selection during drag */
        .scrollbar-hide * {
          pointer-events: auto;
        }
      `}</style>
    </section>
  );
};

export default Units;