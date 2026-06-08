import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;