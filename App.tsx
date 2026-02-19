import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ParticleBackground from './components/ParticleBackground';
import LogoMarquee from './components/LogoMarquee';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <LogoMarquee />
          <BentoGrid />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;