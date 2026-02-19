import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-primary/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-medium text-accent tracking-wide uppercase">Accepting New Clients for Q4</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight">
              STOP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-glow to-purple-400">
                BURNING MONEY
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Inefficient workflows are costing you $50k+ annually. We build custom AI systems that automate the busywork so you can scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})} className="btn-animated px-8 py-4 rounded-full font-bold text-white flex items-center justify-center gap-2 group transition-transform hover:scale-105">
                Claim Your Free AI Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth'})} className="glass-card px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-colors">
                See How It Works
              </button>
            </div>

            {/* Social Proof Strip */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl font-heading font-bold text-white mb-1">$2.4M</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Client Savings</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white mb-1">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Businesses Scaled</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white mb-1">10x</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Faster Execution</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            
            {/* Main Visual - Abstract Money/Tech */}
            <div className="relative z-10 w-full h-full rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/40">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />
               <img 
                 src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" 
                 alt="Digital Efficiency" 
                 className="w-full h-full object-cover opacity-80 mix-blend-screen"
               />
               
               {/* Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-10 left-[-20px] glass-card p-4 rounded-xl flex items-center gap-3 border border-accent/20 bg-[#0a0a0f]/80"
               >
                 <div className="p-2 bg-accent/20 rounded-lg text-accent">
                   <TrendingUp size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Revenue Saved</div>
                   <div className="text-sm font-bold text-white">+$12,450 / mo</div>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-10 right-[-20px] glass-card p-4 rounded-xl flex items-center gap-3 border border-primary/20 bg-[#0a0a0f]/80"
               >
                 <div className="p-2 bg-primary/20 rounded-lg text-primary">
                   <Clock size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Time Saved</div>
                   <div className="text-sm font-bold text-white">45 hrs / week</div>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;