import React from 'react';

const Units = () => {
  // Property data - 5 cards as requested
  const properties = [
    {
      id: 1,
      type: "Moradia",
      price: "1 205 185 €",
      subtitle: "Vista mar | Tipologia: T2",
      image: "/moradia-1.jpg",
      specs: {
        inicioObras: "2026",
        rentabilidade: "8-10%",
        areaBruta: "105 m²",
        areaTotal: "203 m²",
        valorMovel: "1 269 015 €"
      }
    },
    {
      id: 2,
      type: "Moradia",
      price: "849 981 €",
      subtitle: "Tipologia T2",
      badge: "Early bird price",
      image: "/moradia-2.jpg",
      specs: {
        inicioObras: "2026",
        rentabilidade: "8-10%",
        areaBruta: "164 m²",
        areaTotal: "247 m²",
        valorMovel: "949 981 €"
      }
    },
    {
      id: 3,
      type: "Apartamento",
      price: "825 000 €",
      subtitle: "LOFT A | TIPOLOGIA: T2",
      image: "/apartamento-1.jpg",
      specs: {
        inicioObras: "2026",
        rentabilidade: "DE 7% A 10%",
        areaBruta: "164 m²",
        areaTotal: "249 m²",
        valorMovel: "925 000 €"
      }
    },
    {
      id: 4,
      type: "Moradia",
      price: "1 105 000 €",
      subtitle: "Vista jardim | Tipologia: T3",
      image: "/moradia-3.jpg",
      specs: {
        inicioObras: "2026",
        rentabilidade: "8-12%",
        areaBruta: "125 m²",
        areaTotal: "280 m²",
        valorMovel: "1 205 000 €"
      }
    },
    {
      id: 5,
      type: "Apartamento",
      price: "695 000 €",
      subtitle: "LOFT B | TIPOLOGIA: T1",
      image: "/apartamento-2.jpg",
      specs: {
        inicioObras: "2026",
        rentabilidade: "DE 6% A 9%",
        areaBruta: "85 m²",
        areaTotal: "145 m²",
        valorMovel: "745 000 €"
      }
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedProperties = [...properties, ...properties];

  return (
    <section className="py-20 lg:py-32" style={{backgroundColor: 'var(--background)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 title" style={{ color: 'var(--brown)' }}>
            Unidades Residenciais
          </h2>
        </div>
      </div>

      {/* Full Width Scrolling Cards Container */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll space-x-8 px-4">
          {duplicatedProperties.map((property, index) => (
            <div
              key={`${property.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-full object-cover"
                />
                
                {/* Price and Type Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{property.type}</h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{property.price}</div>
                    <p className="text-sm opacity-90">{property.subtitle}</p>
                    {property.badge && (
                      <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
                        {property.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">INÍCIO DAS OBRAS:</span>
                    <span className="font-medium" style={{ color: 'var(--brown)' }}>{property.specs.inicioObras}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">RENTABILIDADE ANUAL:</span>
                    <span className="font-medium" style={{ color: 'var(--brown)' }}>{property.specs.rentabilidade}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ÁREA BRUTA PRIVATIVA:</span>
                    <span className="font-medium" style={{ color: 'var(--brown)' }}>{property.specs.areaBruta}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ÁREA TOTAL:</span>
                    <span className="font-medium" style={{ color: 'var(--brown)' }}>{property.specs.areaTotal}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-600">VALOR DO IMÓVEL:</span>
                    <span className="font-bold text-lg" style={{ color: 'var(--brown)' }}>{property.specs.valorMovel}</span>
                  </div>
                </div>

                {/* More Info Button */}
                <button className="w-full mt-6 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:opacity-90"
                        style={{ backgroundColor: 'var(--brown)' }}>
                  Mais informações
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12">
          <button className="px-8 py-3 text-white font-medium rounded-full transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: 'var(--brown)' }}>
            Ver todas as unidades
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: calc(320px * 10 + 32px * 9); /* 10 cards + 9 gaps */
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Units;