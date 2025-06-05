import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Capa.jpg"
          alt="Camaleão Terrace View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-2xl hero-text">
            {/* Main Headline */}
            <h1 className="mt-[100px] text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 title tracking-wide">
              A dois passos do mar
            </h1>

            {/* Description Text */}
            <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Abrace a beleza da vida costeira com um empreendimento
              sustentável e bem planeado que proporciona luxo e paz de
              espírito. Perfeitas para viver, passar férias ou até mesmo para
              alugar turístico, estas propriedades exclusivas oferecem
              flexibilidade e conveniência.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;