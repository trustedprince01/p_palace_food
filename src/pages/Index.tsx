
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PopularItemsSection from '../components/PopularItemsSection';
import AppDownloadSection from '../components/AppDownloadSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PopularItemsSection />
      <AppDownloadSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
