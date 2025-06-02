"use client"
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Markers from '../components/Markers/Markers';
import Features from '../components/Features/Features';
import Discover from '../components/Discover/Discover';
import Units from '../components/Units/Units';
import Comodities from '../components/Comodities/Comodities';
import Location from '../components/Location/Location';
import LivingSlide from '../components/Living/Living';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const timelineData = [
    { phase: 'Lançamento', date: 'Março 2023', progress: 100 },
    { phase: 'Início de Desenvolvimento', date: 'Julho 2023', progress: 75 },
    { phase: 'Infraestrutura', date: 'Dezembro 2023', progress: 50 },
    { phase: 'Conclusão', date: 'Junho 2025', progress: 0 }
  ];

  const galleryImages = [
    { id: 1, src: '/gallery1.jpg', alt: 'Vista da praia' },
    { id: 2, src: '/gallery2.jpg', alt: 'Interior moderno' },
    { id: 3, src: '/gallery3.jpg', alt: 'Área da piscina' },
    { id: 4, src: '/gallery4.jpg', alt: 'Terraço com vista para o mar' }
  ];

  return (
    <div className="font-sans text-gray-800">
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
      <Units/>

      {/* Comodities */}
      <Comodities />

      {/* Location */}
      <Location />

      {/* Living */}
      <LivingSlide />
      
      {/* Project Evolution */}
      <ProjectDetails/>

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;