import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
             <span className="font-heading font-bold text-white text-lg">AI</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            StopBurningMoney
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Results', 'Pricing'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {item}
            </button>
          ))}
        </nav>

        <button 
          className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
            isScrolled 
              ? 'bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30' 
              : 'glass-card hover:bg-white/10'
          }`}
          onClick={() => scrollToSection('cta')}
        >
          Free Audit
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;