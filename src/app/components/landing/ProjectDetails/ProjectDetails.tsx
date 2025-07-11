import React from 'react';
import { motion } from "motion/react";
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { useTranslations } from '../../LanguageContext/translations';

// Type definitions
interface Phase {
  label: string;
  year: string;
  active: boolean;
  image: string;
  description: string;
  badge?: string;
}

interface SalesPhaseItem {
  type: string;
  status: string;
  progress: number;
  color: string;
}

interface DevelopmentPhaseItem {
  type: string;
  status: string;
  progress: number;
}

interface SalesPhaseData {
  apartments: SalesPhaseItem[];
  houses: SalesPhaseItem[];
}

interface DevelopmentPhaseData {
  apartments: DevelopmentPhaseItem[];
  houses: DevelopmentPhaseItem[];
  infrastructure: DevelopmentPhaseItem[];
}

interface TimelineSectionProps {
  title: string;
  phases: Phase[];
}

interface ProgressBarProps {
  progress: number;
  color?: string;
}

const ProjectDetails: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

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

  const salesDevContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
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

  const timelineSectionVariants = {
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

  const timelineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const timelineItemVariants = {
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

  // Timeline Component for Infrastructure, Apartments, and Houses
  const TimelineSection: React.FC<TimelineSectionProps> = ({ title, phases }) => {
    return (
      <motion.div 
        className="mb-20"
        variants={timelineSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 
          className="text-2xl lg:text-3xl font-bold mb-12 title tracking-wide" 
          style={{ color: 'var(--dark-green)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Items */}
          <motion.div 
            className={`grid ${phases.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-8 relative z-10`}
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {phases.map((phase, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col items-center"
                variants={timelineItemVariants}
              >

                {/* Timeline Label and Dot */}
                <div className="flex flex-col items-center mb-6">
                  <div className="text-m font-medium mb-3 title" style={{
                    color:
                      phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)'
                  }}>{phase.label}</div>
                  <div className="relative">
                    <div style={{background: phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)'}} className={`${phase.active ? 'w-12 h-12' : 'w-6 h-6 mt-2'} rounded-full flex items-center justify-center text-white text-sm font-bold z-20 relative`}>
                      {phase.active ? phase.year : ''}
                    </div>
                  </div>
                </div>

                {/* Phase Card */}
                <div style={{background: phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)', maxWidth: '368.5px'}}  className={`w-full rounded-xl overflow-hidden shadow-lg`}>
                  <div className="relative h-40">
                    <img
                      src={phase.image}
                      alt={phase.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 text-white px-2 py-1 rounded text-m title tracking-wide" style={{background: 'var(--dark-green)'}}>
                      {phase.active ? '' : phase.year}
                    </div>
                  </div>
                  <div className="p-8">
                    <p className={`text-sm ${phase.active ? 'text-white' : 'text-gray-700'} leading-relaxed`}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Line - positioned after grid to calculate positions */}
          <div
            className="absolute h-1 z-0"
            style={{
              top: '54px', // Adjust based on label + margin + half circle height
              left: 'calc((100% / var(--phase-count)) / 2)', // Center of first column
              right: 'calc((100% / var(--phase-count)) / 2)', // Center of last column
              '--phase-count': phases.length,
              background: 'var(--dark-green)'
            } as React.CSSProperties}
          ></div>
        </div>

        {/* Mobile Timeline - Horizontal Scrollable */}
        <div className="lg:hidden overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex space-x-6 px-4 pb-4" style={{ width: 'max-content' }}>
            {phases.map((phase, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] flex flex-col items-center"
              >
                {/* Timeline Label and Dot */}
                <div className="flex flex-col items-center mb-6">
                  <div className="text-sm font-medium mb-3 title text-center" style={{
                    color: phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)'
                  }}>{phase.label}</div>
                  <div className="relative">
                    <div style={{background: phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)'}} className={`${phase.active ? 'w-10 h-10' : 'w-5 h-5 mt-1'} rounded-full flex items-center justify-center text-white text-xs font-bold z-20 relative`}>
                      {phase.active ? phase.year : ''}
                    </div>
                  </div>
                </div>

                {/* Phase Card */}
                <div style={{background: phase.active ? 'var(--dark-green)' : 'oklch(87.2% 0.01 258.338)'}} className="w-full rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-32">
                    <img
                      src={phase.image}
                      alt={phase.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 text-white px-2 py-1 rounded text-xs title tracking-wide" style={{background: 'var(--dark-green)'}}>
                      {phase.active ? '' : phase.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-xs ${phase.active ? 'text-white' : 'text-gray-700'} leading-relaxed`}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // Sales Phase Data
  const salesPhaseData: SalesPhaseData = {
    apartments: [
      { type: "Fase 1 - Early bird", status: t.evolution.status.completed, progress: 100, color: "bg-green-600" },
      { type: "Fase 2", status: t.evolution.status.inProgress, progress: 25, color: "bg-green-600" }
    ],
    houses: [
      { type: "Fase 1 - Early bird", status: t.evolution.status.started, progress: 30, color: "bg-green-600" },
      { type: "Fase 2", status: t.evolution.status.toAnnounce, progress: 0, color: "bg-gray-300" }
    ]
  };

  // Development Phase Data
  const developmentPhaseData: DevelopmentPhaseData = {
    apartments: [
      { type: t.evolution.projects, status: t.evolution.status.completed, progress: 100 },
      { type: t.evolution.construction, status: t.evolution.status.toAnnounce, progress: 0 }
    ],
    houses: [
      { type: t.evolution.projects, status: t.evolution.status.inProgress, progress: 30 },
      { type: t.evolution.construction, status: t.evolution.status.toAnnounce, progress: 0 },
    ],
    infrastructure: [
      { type: "Fase 1", status: t.evolution.status.completed, progress: 100 },
      { type: "Fase 2", status: t.evolution.status.toAnnounce, progress: 0 }
    ]
  };

  // Timeline Data for Infrastructure
  const infrastructurePhases: Phase[] = [
    {
      label: t.evolution.projects,
      year: "2024",
      active: false,
      image: "/infra-01.jpg",
      description: language === 'PT' ? "Planeamento técnico detalhado, garantindo soluções eficientes para cada tipo de investimento." : "Detailed technical planning, ensuring efficient solutions for each type of investment."
    },
    {
      label: language === 'PT' ? "Início da construção" : "Construction start",
      year: "2025",
      active: true,
      image: "/infra-02.jpg",
      description: language === 'PT' ? "Execução das obras com rigor, qualidade e sustentabilidade como pilares fundamentais que norteiam a funcionalidade das estruturas." : "Execution of works with rigor, quality and sustainability as fundamental pillars that guide the functionality of structures."
    },
    {
      label: language === 'PT' ? "Receção" : "Reception",
      year: "2026",
      active: false,
      badge: language === 'PT' ? "Receção" : "Reception",
      image: "/infra-03.jpg",
      description: language === 'PT' ? "Entrega das infraestruturas concluídas, após verificação técnica e validação de todos os requisitos do projeto." : "Delivery of completed infrastructure, after technical verification and validation of all project requirements."
    }
  ];

  // Timeline Data for Apartments
  const apartmentPhases: Phase[] = [
    {
      label: t.evolution.projects,
      year: "2024",
      active: false,
      image: "/apart-01.jpg",
      description: language === 'PT' ? "Planeamento e desenvolvimento dos detalhes arquitetónicos e técnicos que darão vida aos apartamentos." : "Planning and development of architectural and technical details that will bring apartments to life."
    },
    {
      label: language === 'PT' ? "Início da construção" : "Construction start",
      year: "2025",
      active: true,
      image: "/apart-02.jpg",
      description: language === 'PT' ? "Arranque das obras com acompanhamento técnico especializado para garantir qualidade e cumprimento dos prazos." : "Start of works with specialized technical monitoring to ensure quality and compliance with deadlines."
    },
    {
      label: t.evolution.completion,
      year: "2027",
      active: false,
      image: "/apart-03.png",
      description: language === 'PT' ? "Conclusão das obras com entrega das chaves e total disponibilidade para usufruir necessidades finais." : "Completed and ready for immediate move-in, with only minor final touches remaining."
    },
    {
      label: t.evolution.deeds,
      year: "2027",
      active: false,
      image: "/apart-04.jpg",
      description: language === 'PT' ? "Entrega da infraestrutura concluída, após verificação técnica e validação de todos os requisitos do projeto." : "Delivery of completed infrastructure, after technical verification and validation of all project requirements."
    }
  ];

  // Timeline Data for Houses
  const housePhases: Phase[] = [
    {
      label: t.evolution.projects,
      year: "2025",
      active: true,
      badge: t.evolution.projects,
      image: "/morad-01.png",
      description: language === 'PT' ? "Planeamento e desenvolvimento dos detalhes arquitetónicos e técnicos que darão vida às moradias." : "Planning and development of architectural and technical details that will bring houses to life."
    },
    {
      label: language === 'PT' ? "Início da construção" : "Construction start",
      year: "2026",
      active: false,
      image: "/morad-02.jpg",
      description: language === 'PT' ? "Início da edificação com equipas experientes e materiais de elevada qualidade." : "Start of construction with experienced teams and high quality materials."
    },
    {
      label: t.evolution.completion,
      year: "2028",
      active: false,
      image: "/apartamentos-piscina.jpg",
      description: language === 'PT' ? "Obra finalizada e pronta a habitar, com entrega imediata e apenas pequenos detalhes por ultimar." : "Work completed and ready to live in, with immediate delivery and only small details to finish."
    },
    {
      label: t.evolution.deeds,
      year: "2029",
      active: false,
      image: "/morad-04.jpg",
      description: language === 'PT' ? "Entrega da infraestrutura concluída, após verificação técnica e validação de todos os requisitos do projeto." : "Delivery of completed infrastructure, after technical verification and validation of all project requirements."
    }
  ];

  const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <motion.div
        className={`h-3 rounded-full`}
        style={{ background: 'var(--dark-green)' }}
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  );

  return (
    <section id='evolucao' className="py-20 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 title tracking-wide" 
            style={{ color: 'var(--dark-green)' }}
            variants={headerVariants}
          >
            {t.evolution.title}
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl font-light" 
            style={{ color: 'var(--dark-green)' }}
            variants={subtitleVariants}
          >
            {t.evolution.lastUpdate}
          </motion.p>
        </motion.div>

        {/* Sales and Development Phases */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={salesDevContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Sales Phase */}
          <motion.div variants={cardVariants}>
            <h3 className="text-2xl font-bold mb-8 title tracking-wide mx-auto text-center" style={{ color: 'var(--dark-green)' }}>
              {t.evolution.salesPhase}
            </h3>

            <div className="mb-8 flex">
              {/* Apartments Sales */}
              <div className='w-1/2 pr-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  {t.evolution.apartments}
                </h4>
                <div className="space-y-4">
                  {salesPhaseData.apartments.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{phase.type}</span>
                          <span className="font-medium">{phase.status}</span>
                        </div>
                        <ProgressBar progress={phase.progress} color={phase.color} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Houses Sales */}
              <div className='w-1/2 px-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  {t.evolution.houses}
                </h4>
                <div className="space-y-4">
                  {salesPhaseData.houses.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{phase.type}</span>
                          <span className="font-medium">{phase.status}</span>
                        </div>
                        <ProgressBar progress={phase.progress} color={phase.color} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Phase */}
          <motion.div variants={cardVariants}>
            <h3 className="text-2xl font-bold mb-8 title tracking-wide text-center" style={{ color: 'var(--dark-green)' }}>
              {t.evolution.developmentPhase}
            </h3>

            {/* Apartments Development */}
            <div className="mb-8 flex">
              <div className='w-1/2 pr-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  {t.evolution.apartments}
                </h4>
                <div className="space-y-4">
                  {developmentPhaseData.apartments.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{phase.type}</span>
                          <span className="font-medium">{phase.status}</span>
                        </div>
                        <ProgressBar progress={phase.progress} color={phase.progress > 0 ? "bg-green-600" : "bg-gray-300"} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Houses Development */}
              <div className='w-1/2 px-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  {t.evolution.houses}
                </h4>
                <div className="space-y-4">
                  {developmentPhaseData.houses.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{phase.type}</span>
                          <span className="font-medium">{phase.status}</span>
                        </div>
                        <ProgressBar progress={phase.progress} color={phase.progress > 0 ? "bg-green-600" : "bg-gray-300"} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure Development */}
            <div className='w-1/2 pr-4'>
              <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                {t.evolution.infrastructure}
              </h4>
              <div className="space-y-4">
                {developmentPhaseData.infrastructure.map((phase, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-2">
                        <span>{phase.type}</span>
                        <span className="font-medium">{phase.status}</span>
                      </div>
                      <ProgressBar progress={phase.progress} color={phase.progress > 0 ? "bg-green-600" : "bg-gray-300"} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Sections */}
        <TimelineSection title={t.evolution.infrastructure} phases={infrastructurePhases} />
        <TimelineSection title={t.evolution.apartments} phases={apartmentPhases} />
        <TimelineSection title={t.evolution.houses} phases={housePhases} />

      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectDetails;