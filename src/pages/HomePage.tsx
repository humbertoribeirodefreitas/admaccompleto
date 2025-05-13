import React from 'react';
import Hero from '../components/hero/Hero';
import YoutubeSection from '../components/youtube/YoutubeSection';
import ServiceSchedule from '../components/schedule/ServiceSchedule';
import MinistryCards from '../components/cards/MinistryCards';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <YoutubeSection />
      <ServiceSchedule />
      <MinistryCards />
    </div>
  );
};

export default HomePage;