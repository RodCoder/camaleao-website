import React from 'react';

const Location = () => {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--light-brown)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/castro-marim-location.jpg"
                alt="Castro Marim Location"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-4 text-white space-y-8">
            
            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 title tracking-wide">
                Localização
              </h2>
              
              {/* Description */}
              <p className="text-base lg:text-lg font-light leading-relaxed mb-8 opacity-90">
                Castro Marim fica apenas a 6 minutos a pé de uma das praias 
                mais exclusivas da região. Esta área possui um potencial 
                excepcional para um resort de praia bem definido, graças à 
                sua localização privilegiada. Ao combinar de forma única a 
                história, a natureza e o charme costeiro, Castro Marim oferece 
                uma oportunidade muito singular para desenvolvimentos 
                residenciais e turísticos.
              </p>
            </div>

            {/* Area Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Área total
                </h3>
                <div className="text-xl lg:text-2xl font-bold text-yellow-400 mb-6">
                  26 000 m²
                </div>
              </div>

              {/* Distance List */}
              <div className="space-y-3 text-sm lg:text-base">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">450m da praia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">3 km das autoestradas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">58km do Aeroporto Internacional de Faro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">153km do Aeroporto de Sevilha</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">450m dos restaurantes mais próximos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-light">2km do supermercado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Chameleon */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative">
              <img
                src="/chameleon-location.jpg"
                alt="Chameleon"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;