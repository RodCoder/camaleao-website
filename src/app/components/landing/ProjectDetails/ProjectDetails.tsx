import React from 'react';

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
  // Timeline Component for Infrastructure, Apartments, and Houses
  const TimelineSection: React.FC<TimelineSectionProps> = ({ title, phases }) => {
    const getGridCols = (phaseCount: number) => {
      if (phaseCount === 3) return 'grid-cols-1 lg:grid-cols-3';
      return 'grid-cols-1 lg:grid-cols-4';
    };
  
    return (
      <div className="mb-20">
        <h3 className="text-2xl lg:text-3xl font-bold mb-12 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
          {title}
        </h3>
  
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Items */}
          <div className={`grid ${getGridCols(phases.length)} gap-8 relative z-10`}>
            {phases.map((phase, index) => (
              <div key={index} className="relative flex flex-col items-center">
                
                {/* Timeline Label and Dot */}
                <div className="flex flex-col items-center mb-6">
                  <div className="text-sm font-medium text-gray-500 mb-3">{phase.label}</div>
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold z-20 relative ${
                      phase.active ? 'bg-green-600' : 'bg-gray-400'
                    }`}>
                      {phase.year}
                    </div>
                    {phase.active && (
                      <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-green-600 rounded-full z-10"></div>
                    )}
                  </div>
                </div>
  
                {/* Phase Card */}
                <div className={`w-full rounded-xl overflow-hidden shadow-lg bg-white ${
                  phase.active ? 'ring-2 ring-green-600' : ''
                }`}>
                  <div className="relative h-40">
                    <img
                      src={phase.image}
                      alt={phase.label}
                      className="w-full h-full object-cover"
                    />
                    {phase.badge && (
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 rounded text-xs font-medium">
                        {phase.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {phase.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Timeline Line - positioned after grid to calculate positions */}
          <div 
            className="absolute h-2 bg-gray-300 z-0"
            style={{
              top: '52px', // Adjust based on label + margin + half circle height
              left: 'calc((100% / var(--phase-count)) / 2)', // Center of first column
              right: 'calc((100% / var(--phase-count)) / 2)', // Center of last column
              '--phase-count': phases.length
            } as React.CSSProperties}
          ></div>
        </div>
      </div>
    );
  };

  // Sales Phase Data
  const salesPhaseData: SalesPhaseData = {
    apartments: [
      { type: "Fase 1 - Early bird", status: "Concluído", progress: 100, color: "bg-green-600" },
      { type: "Fase 2", status: "57%", progress: 57, color: "bg-green-600" }
    ],
    houses: [
      { type: "Fase 1 - Early bird", status: "Iniciado", progress: 30, color: "bg-green-600" },
      { type: "Fase 2", status: "Por anunciar", progress: 0, color: "bg-gray-300" }
    ]
  };

  // Development Phase Data
  const developmentPhaseData: DevelopmentPhaseData = {
    apartments: [
      { type: "Projetos", status: "Concluído", progress: 100 },
      { type: "Construção", status: "Por anunciar", progress: 0 }
    ],
    houses: [
      { type: "Projetos", status: "Em curso", progress: 30 },
      { type: "Construção", status: "Por anunciar", progress: 0 },
    ],
    infrastructure: [
      { type: "Fase 1", status: "Concluído", progress: 100 },
      { type: "Fase 2", status: "Por anunciar", progress: 0 }
    ]
  };

  // Timeline Data for Infrastructure
  const infrastructurePhases: Phase[] = [
    {
      label: "Projetos",
      year: "2025",
      active: false,
      image: "/infrastructure-plans.jpg",
      description: "Planeamento técnico detalhado, garantindo soluções eficientes para cada tipo de investimento."
    },
    {
      label: "Início da construção",
      year: "2026",
      active: true,
      image: "/construction-start.jpg",
      description: "Execução das obras com rigor, qualidade e sustentabilidade como pilares fundamentais que norteiam a funcionalidade das estruturas."
    },
    {
      label: "Receção",
      year: "2026",
      active: false,
      badge: "Receção",
      image: "/project-handover.jpg",
      description: "Entrega do empreendimento concluído, após verificação técnica e validação de todos os requisitos do projeto."
    }
  ];

  // Timeline Data for Apartments
  const apartmentPhases: Phase[] = [
    {
      label: "Projetos",
      year: "2025",
      active: false,
      image: "/apartment-plans.jpg",
      description: "Planeamento e desenvolvimento dos detalhes arquitetónicos e técnicos que darão vida aos apartamentos."
    },
    {
      label: "Início da construção",
      year: "2026",
      active: true,
      image: "/apartment-construction.jpg",
      description: "Arranque das obras com acompanhamento técnico especializado para garantir qualidade e cumprimento dos prazos."
    },
    {
      label: "Fim da construção",
      year: "2027",
      active: false,
      image: "/apartment-completion.jpg",
      description: "Conclusão das obras com entrega das chaves e total disponibilidade para usufruir necessidades finais."
    },
    {
      label: "Escrituras",
      year: "2027",
      active: false,
      image: "/apartment-deeds.jpg",
      description: "Entrega da infraestrutura concluída, após verificação técnica e validação de todos os requisitos do projeto."
    }
  ];

  // Timeline Data for Houses
  const housePhases: Phase[] = [
    {
      label: "Projetos",
      year: "2025",
      active: false,
      badge: "Projetos",
      image: "/house-plans.jpg",
      description: "Planeamento e desenvolvimento dos detalhes arquitetónicos e técnicos que darão vida às moradias."
    },
    {
      label: "Início da construção",
      year: "2026",
      active: true,
      image: "/house-construction.jpg",
      description: "Início da edificação com equipas experientes e materiais de elevada qualidade."
    },
    {
      label: "Fim da construção",
      year: "2028",
      active: false,
      image: "/house-completion.jpg",
      description: "Obra finalizada, com entrega pronta a habitar e apta ao usufruto para os últimos detalhes."
    },
    {
      label: "Escrituras",
      year: "2029",
      active: false,
      image: "/house-deeds.jpg",
      description: "Entrega da infraestrutura concluída, após verificação técnica e validação de todos os requisitos do projeto."
    }
  ];

  const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className={`h-3 rounded-full transition-all duration-500`}
        style={{ width: `${progress}%`, background: 'var(--dark-green)' }}
      ></div>
    </div>
  );

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
            Evolução do Camaleão
          </h2>
          <p className="text-lg lg:text-xl font-light" style={{ color: 'var(--dark-green)' }}>
            Última atualização: abril 2025
          </p>
        </div>

        {/* Sales and Development Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* Sales Phase */}
          <div>
            <h3 className="text-2xl font-bold mb-8 title tracking-wide mx-auto text-center" style={{ color: 'var(--dark-green)' }}>
              Fase de vendas
            </h3>

            <div className="mb-8 flex">
              {/* Apartments Sales */}
              <div className='w-1/2 pr-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  Apartamentos
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
                  Moradias
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
          </div>

          {/* Development Phase */}
          <div>
            <h3 className="text-2xl font-bold mb-8 title tracking-wide text-center" style={{ color: 'var(--dark-green)' }}>
              Fase de desenvolvimento
            </h3>

            {/* Apartments Development */}
            <div className="mb-8 flex">
              <div className='w-1/2 pr-4'>
                <h4 className="text-lg font-semibold mb-4 title tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  Apartamentos
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
                  Moradias
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
                Infraestrutura
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
          </div>
        </div>

        {/* Timeline Sections */}
        <TimelineSection title="Infraestrutura" phases={infrastructurePhases} />
        <TimelineSection title="Apartamentos" phases={apartmentPhases} />
        <TimelineSection title="Moradias" phases={housePhases} />

      </div>
    </section>
  );
};

export default ProjectDetails;