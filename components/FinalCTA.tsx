import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-32 relative flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 tracking-tight">
          Ready to stop <br />
          <span className="text-gradient">burning money?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
          Book your free audit today. We'll show you exactly where you're losing revenue and how to fix it with AI.
        </p>
        
        <button className="btn-animated px-10 py-5 rounded-full font-bold text-xl text-white inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
          Claim Your Free AI Audit
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="mt-6 text-sm text-gray-500">
          No credit card required. 100% free analysis.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;