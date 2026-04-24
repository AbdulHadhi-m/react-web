import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Menu from '../components/sections/Menu';
import Works from '../components/sections/Works';
import Manifesto from '../components/sections/Manifesto';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-cream text-navy">
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Works />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
