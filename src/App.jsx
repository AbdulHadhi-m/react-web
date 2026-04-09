import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
