import React from 'react';

const Units = () => {
  // Property data - 5 cards as requested
  const properties = [
    {
      id: 1,
      type: "Apartamento",
      price: "825 000 €",
      subtitle: "LOFT A | TIPOLOGIA: T2",
      image: "/apartamento1.png",
      specs: {
        inicioObras: "2026",
        areaBruta: "164 m²",
        areaTotal: "249 m²",
        valorMovel: "825 000 €"
      }
    },
    {
      id: 2,
      type: "Apartamento",
      price: "1 350 000 €",
      subtitle: "LOFT B | TIPOLOGIA: T3",
      image: "/apartamento2.png",
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
      subtitle: "LOFT C | TIPOLOGIA: ESTÚDIO",
      image: "/apartamento3.jpg",
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
      specs: {
        inicioObras: "2026",
        areaBruta: "105 m²",
        areaTotal: "203 m²",
        valorMovel: "790 000 €"
      }
    },
    {
      id: 5,
      type: "Moradia",
      price: "590 000 €",
      subtitle: "Tipologia T2",
      image: "/moradia2.jpg",
      specs: {
        inicioObras: "2026",
        areaBruta: "164 m²",
        areaTotal: "247 m²",
        valorMovel: "590 000 €"
      }
    },
    {
      id: 6,
      type: "Moradia",
      price: "1 050 000 €",
      subtitle: "Vista campo | Tipologia T2",
      image: "/moradia3.jpg",
      specs: {
        inicioObras: "2026",
        areaBruta: "125 m²",
        areaTotal: "280 m²",
        valorMovel: "1 050 000 €"
      }
    },
    {
      id: 7,
      type: "Moradia",
      price: "1 150 000 €",
      subtitle: "Vista mar | Tipologia T2",
      image: "/moradia4.png",
      specs: {
        inicioObras: "2026",
        areaBruta: "180 m²",
        areaTotal: "320 m²",
        valorMovel: "1 150 000 €"
      }
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedProperties = [...properties, ...properties];

  return (
    <section id='unidades' className="py-20 lg:py-32" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">

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
                        className="w-[250px] mt-4 py-3 backdrop-blur-sm text-white font-medium rounded-full transition-all duration-200 mx-auto"
                        style={{ "border": "1px solid var(--light-brown)", "backgroundColor": "rgba(86, 53, 46, 0.1)" }}
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

      {/* View All Button */}
      <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8">
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