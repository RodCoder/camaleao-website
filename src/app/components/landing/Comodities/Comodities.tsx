import React from 'react';
import { motion } from "motion/react";

const Comodities: React.FC = () => {
  const amenities = [
    {
      id: 1,
      title: "Praia",
      description: "À distância mínima de uma caminhada de uma das praias mais exclusivas da região. Um lugar de liberdade onde pode desfrutar e contemplar a paisagem e sentir o cheiro do mar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a4 4 0 004 4h6a4 4 0 004-4V7a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Restaurantes",
      description: "Experiências autênticas e sabores inesquecíveis. Descubra restaurantes locais com pratos regionais e tradicionais que celebram a autêntica gastronomia algarvia.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Estacionamento",
      description: "Estacionamento privativo pensado para oferecer comodidade aos moradores.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Miradouro",
      description: "Locais de pausa tranquilizante, pensados para contemplar a vista abangedora sobre as áreas verdes e o ambiente envolvente.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Circuito Pedonal",
      description: "Trilhos através na natureza, ideais para caminhadas matinais, exercício ou simplesmente para caminhar entre a fauna e fauna locais.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Ciclovias",
      description: "Ciclovias seguras e modernas para quem valoriza mobilidade sustentável. Uma alternativa saudável para deslocar lagares e explorar outras áreas locais.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="18.5" cy="17.5" r="3.5" />
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Habitat Camealeão",
      description: "Zonas verdes ecológicas dedicadas a preservar a espécie emblemática Camaleão. Estas áreas de conservação regional e do ecossistema envolvente no empreendimento.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Parque de Lazer",
      description: "Espaço concebido para crianças se divertirem. Equipado com infraestruturas e brinquedos adequados, oferecendo lazer e velocípedes, oferecendo lazer ao ar livre, com segurança e diversão.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 013-3m-3 14.828V21a3 3 0 01-3-3" />
        </svg>
      )
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

  const descriptionVariants = {
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
    <section id='comodidades' className="py-10 lg:py-20" style={{ backgroundColor: 'var(--background)' }}>
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
            Comodidades
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl font-light" 
            style={{ color: 'var(--brown)' }}
            variants={subtitleVariants}
          >
            Abrace o ritmo da vida
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
              style={{'background': 'rgba(86, 53, 46, 0.05)'}}
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center" style={{ color: 'var(--brown)' }}>
                  {amenity.icon}
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

        {/* Bottom Description */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-base lg:text-lg font-light leading-relaxed" 
             style={{ color: 'var(--brown)' }}>
            Um empreendimento sustentável e cuidadosamente planeado que proporciona exclusividade e tranquilidade. 
            Ideais para viver ou desfrutar de férias, estas propriedades únicas aliam exclusividade e conforto, ao encanto local.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Comodities;