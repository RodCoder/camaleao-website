"use client"
import Navigation from '../components/terracota-landing/Navigation';
import Hero from '../components/terracota-landing/Hero';
import Markers from '../components/terracota-landing/Markers';
import Features from '../components/terracota-landing/Features';
import Discover from '../components/terracota-landing/Discover';
import Units from '../components/terracota-landing/Units';
import Comodities from '../components/terracota-landing/Comodities';
import Location from '../components/terracota-landing/Location';
import LivingSlide from '../components/terracota-landing/Living';
import ProjectDetails from '../components/terracota-landing/ProjectDetails';
import ContactForm from '../components/terracota-landing/ContactForm';
import Footer from '../components/terracota-landing/Footer';
import { useState } from 'react';
import Loader from '../components/Loader';

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