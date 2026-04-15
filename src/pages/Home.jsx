import React from 'react';
import HeroSection     from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection    from '../components/home/StatsSection';
import ContactSection  from '../components/home/ContactSection';
import OurWorkInAction from '../components/home/OurWorkInAction';

export default function Home() {
  return (
    <div style={{ background: 'var(--navy)' }}>
      <HeroSection />
      <ServicesSection />
      <OurWorkInAction/>
      <StatsSection />
      <ContactSection />
    </div>
  );
}
