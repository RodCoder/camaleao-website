"use client"
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