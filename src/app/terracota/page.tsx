"use client"
import Navigation from '../components/landing/Navigation/Navigation';
import Hero from '../components/landing/Hero/Hero';
import Markers from '../components/landing/Markers/Markers';
import Features from '../components/landing/Features/Features';
import Discover from '../components/landing/Discover/Discover';
import Units from '../components/landing/Units/Units';
import Comodities from '../components/landing/Comodities/Comodities';
import Location from '../components/landing/Location/Location';
import LivingSlide from '../components/landing/Living/Living';
import ProjectDetails from '../components/landing/ProjectDetails/ProjectDetails';
import ContactForm from '../components/landing/ContactForm/ContactForm';
import Footer from '../components/landing/Footer/Footer';
import { useState } from 'react';
import Loader from '../components/Loader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Camaleão - A dois passos do mar",
  description: "Abrace a beleza da vida costeira com um empreendimento sustentável e bem planeado que proporciona luxo e paz de espírito. Perfeitas para viver, passar férias ou até mesmo para alugar turístico, estas propriedades exclusivas oferecem flexibilidade e conveniência em Castro Marim.",
  keywords: "Camaleão, Castro Marim, empreendimento imobiliário, apartamentos, moradias, vista mar, Algarve, propriedades exclusivas, investimento imobiliário, resort, praia, sustentável, Portugal, turismo, férias, luxo",
  openGraph: {
    images: 'https://www.praiadocamaleao.pt/morad-01.png',
  },
};

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <div className="text-gray-800">
      <div>
        {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
        {/* Rest of your components */}
      </div>
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Markers */}
      <Markers />

      {/* Features Grid */}
      <Features />

      {/* Discover Section */}
      <Discover />

      {/* Residential Units */}
      <Units />

      {/* Comodities */}
      <Comodities />

      {/* Location */}
      <Location />

      {/* Living */}
      <LivingSlide />

      {/* Project Evolution */}
      <ProjectDetails />

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;