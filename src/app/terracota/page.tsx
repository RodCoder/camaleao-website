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

const Home = () => {

  return (
    <div className="text-gray-800">
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