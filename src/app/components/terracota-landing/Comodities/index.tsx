import React from 'react';
import { motion } from "motion/react";

const Comodities: React.FC = () => {

  const amenities = [
    {
      id: 1,
      title: "Praia",
      description: "À distância mínima de uma caminhada de uma das praias mais exclusivas da região. Um lugar de liberdade onde pode desfrutar e contemplar a paisagem e sentir o cheiro do mar.",
      icon: "/Icon praia.svg"
    },
    {
      id: 2,
      title: "Restaurantes",
      description: "Experiências autênticas e sabores inesquecíveis. Descubra restaurantes locais com pratos regionais e tradicionais que celebram a autêntica gastronomia algarvia.",
      icon: "/Icon restaurante.svg"
    },
    {
      id: 3,
      title: "Estacionamento",
      description: "Estacionamento privativo pensado para oferecer comodidade aos moradores.",
      icon: "/Icon park.svg"
    },
    {
      id: 4,
      title: "Miradouro",
      description: "Locais de pausa tranquilizante, pensados para contemplar a vista abangedora sobre as áreas verdes e o ambiente envolvente.",
      icon: "/Icon miradoro.svg"
    },
    {
      id: 5,
      title: "Circuito Pedonal",
      description: "Trilhos através na natureza, ideais para caminhadas matinais, exercício ou simplesmente para caminhar entre a fauna e fauna locais.",
      icon: "/Icon percurso.svg"
    },
    {
      id: 6,
      title: "Ciclovias",
      description: "Ciclovias seguras e modernas para quem valoriza mobilidade sustentável. Uma alternativa saudável para deslocar lagares e explorar outras áreas locais.",
      icon: "/Icon ciclovia.svg"
    },
    {
      id: 7,
      title: "Habitat Camealeão",
      description: "Zonas verdes ecológicas dedicadas a preservar a espécie emblemática Camaleão. Estas áreas de conservação regional e do ecossistema envolvente no empreendimento.",
      icon: "/Icon camaleao.svg"
    },
    {
      id: 8,
      title: "Parque de Lazer",
      description: "Espaço concebido para crianças se divertirem. Equipado com infraestruturas e brinquedos adequados, oferecendo lazer e velocípedes, oferecendo lazer ao ar livre, com segurança e diversão.",
      icon: "/Icon Velocipedes.svg"
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