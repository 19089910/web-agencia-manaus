
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import SaasProducts from '@/components/SaasProducts';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-agency-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <SaasProducts />
      <Results />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
