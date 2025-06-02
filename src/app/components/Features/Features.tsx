import React from 'react';

const Features = () => {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/apartamentos-piscina.jpg" 
          alt="Apartamentos com Piscina" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Feature 1 - Essência Algarvia */}
            <div className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm" 
                 style={{
                   backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                   borderRadius: '9.89px',
                   border: '0.99px solid rgba(255,255,255,0.2)',
                   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                 }}>
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title">
                Essência Algarvia
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                Inspirado nas raízes históricas e culturais do Algarve e ecologicamente consciente, este projeto arquitetônico único funcional e cativante, refletindo a alma única da região.
              </p>
            </div>

            {/* Feature 2 - Vivência Inesquecível */}
            <div className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm" 
                 style={{
                   backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                   borderRadius: '9.89px',
                   border: '0.99px solid rgba(255,255,255,0.2)',
                   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                 }}>
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title">
                Vivência Inesquecível
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                Desenhado para criar uma vivência e momentos de partilha com a família e amigos, daqueles que ficam gravados na memória e perduram no tempo.
              </p>
            </div>

            {/* Feature 3 - Envolvência com a Natureza */}
            <div className="text-center text-white space-y-4 p-8 rounded-lg backdrop-blur-sm" 
                 style={{
                    backgroundColor: 'rgb(from var(--brown) r g b / 0.4)',
                   borderRadius: '9.89px',
                   border: '0.99px solid rgba(255,255,255,0.2)',
                   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                 }}>
              <h3 className="text-2xl lg:text-3xl font-light mb-6 title">
                Envolvência com a Natureza
              </h3>
              <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 max-w-sm mx-auto">
                As áreas de preservação ecológica envolventes serão cuidadosamente mantidas para garantir a proteção de espécies nativas da fauna e flora.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;